const fs = require('node:fs');
const path = require('node:path');

const ignoredFiles = ['ImageResources.resx', 'Language.resx'];
const isMainResxFile = filename => (/^[^.\\/]+\.resx$/i).test(filename) && !ignoredFiles.includes(filename);

const collectMainResxFiles = (directory, result = []) => {
	fs.readdirSync(directory, { withFileTypes: true }).forEach(entry => {
		const fullPath = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			collectMainResxFiles(fullPath, result);
		} else if (entry.isFile() && isMainResxFile(entry.name)) {
			result.push(fullPath);
		}
	});

	return result;
};

const filesDiffer = (sourcePath, targetPath) => {
	if (!fs.existsSync(targetPath)) return true;
	const sourceStat = fs.statSync(sourcePath);
	const targetStat = fs.statSync(targetPath);
	if (sourceStat.size !== targetStat.size) return true;
	return !fs.readFileSync(sourcePath).equals(fs.readFileSync(targetPath));
};

const moveTranslations = (targetDirectory, sourceDirectory) => {
	const resxFiles = collectMainResxFiles(sourceDirectory);

	resxFiles.forEach(sourceFile => {
		const relativePath = path.relative(sourceDirectory, sourceFile);
		const targetFile = path.join(targetDirectory, relativePath);

		try {
			if (filesDiffer(sourceFile, targetFile)) {
				fs.mkdirSync(path.dirname(targetFile), { recursive: true });
				fs.copyFileSync(sourceFile, targetFile);
				console.log(`✔ ${sourceFile} -> ${targetFile}`);
			}
		} catch (error) {
			console.error(`✖ Failed to copy ${sourceFile}: ${error.message}`);
		}
	});
};

moveTranslations('D:/Projects/stella/Stella-Mod-Translations/configuration-window', 'D:/Projects/stella/Genshin-Impact-ReShade/Stella.Configuration');
moveTranslations('D:/Projects/stella/Stella-Mod-Translations/launcher', 'D:/Projects/stella/Genshin-Impact-ReShade/Stella.Launcher');
moveTranslations('D:/Projects/stella/Stella-Mod-Translations/prepare-stella', 'D:/Projects/stella/Genshin-Impact-ReShade/Stella.Prepare');
moveTranslations('D:/Projects/stella/Stella-Mod-Translations/info-before-start', 'D:/Projects/stella/Genshin-Impact-ReShade/Stella.Welcome');
moveTranslations('D:/Projects/stella/Stella-Mod-Translations/fps-unlocker', 'D:/Projects/stella/Genshin-FPS-Unlocker/unlockfps_nc');