// Main
exports.default = {
 And: 'und',
 From: 'von',
 In: 'in',
 Back: 'Zurück',
 GoBack: 'Zurück gehen',
 GoBackTo: 'Zurück nach {0}',
 Next: 'Weiter',
 DiscordServer: 'Discord Server',
 DiscordServerTooltip: 'Einladung zu unserem Discord-Server',
 YourBrowserDoesNotSupportVideoTag: 'Dein Browser unterstützt den Video-Tag nicht.',
 YourBrowserDoesNotSupportAudioTag: 'Dein Browser unterstützt den Audio-Tag nicht.',
 tooltips: {
  OfficialDiscordServer: 'Offizieller Discord-Server',
  SupportThisProject: 'Unterstütze das Projekt freiwillig',
  GitHubRepositories: 'GitHub-Repositorys',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Fehler 400: Bad Request',
  InvalidURL: 'Die Antwort-URL ist ungültig.',
  ReferrerURL: 'Deine referrer URL',
  CorrectRefURL: 'Korrekte URL',
 },
 wrongOs: {
  DeviceIsNotSupported: 'Gerät wird nicht unterstützt.',
  OperatingSysIsNotSupported: 'Tut uns leid! Dein Betriebssystem {0}, wird noch nicht unterstützt.',
  ViewSupportedSystems: 'Unterstützte Systeme anzeigen »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'Wir können die ZIP-Datei nicht auf dem Server finden',
  NewUpdateIsComing:
   'Kommt ein neues Update? Wahrscheinlich...\nJedenfalls.. Bitte versuche es später erneut, oder melde diesen Fehler auf dem Discord Server.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Steig in eine Neue Welt mit verbesserter Grafik für Genshin Impact',
 Text1:
  'Verbesserte Grafik, sorgfältig erstellte Shader, beeindruckende FPS Freischaltung, und Mods bringen Spielern ein noch besseres Gaming Erlebnis als jemals zuvor!',
 Text2:
  'Entdecke die Welt von Teyvat mit neuer Grafik, die dein Gameplay noch realistischer macht. Ein eigener Launcher vereinfacht den gesamten Prozess und erlaubt es Spielern, schnell und einfach in die Action zu springen.',
 FinalText:
  'Zögere nicht, lad es jetzt herunter! Bring dein Gameplay auf das nächste Level. Tausche in die verbesserte Welt von Teyvat ein und erschaffe unvergessliche Momente!',
 Download: 'Herunterladen',
 DownloadTooltip: 'Hier klicken, um den x64-Bit-Installer für Windows 10 und 11 herunterzuladen.',
 StelaModPlusTooltip:
  'Erhalte Zugriff auf die kostenpflichtige Version von Stella Mod Plus und genieße zahlreiche Vorteile und verbesserte Spielerlebnisse!',
 Documentation: 'Dokumentation',
 DocumentationTooltip: 'Überprüfe die Systemanforderungen, empfohlene Spieleinstellungen und mehr!',
 Gallery: 'Galerie',
 GalleryTooltip: 'Sieh dir die Screenshots aus dem Spiel mit injiziertem ReShade an.',
 Videos: 'Videos',
 VideosTooltip: 'Schau dir unsere Videos über den Mod und das Startprogramm an.',
 Statistics: 'Statistiken',
 StatisticsTooltip:
  'Überprüfen Sie, wie viele Personen Genshin Impact mit dem Stella Mod spielen. Durchsuchen Sie auch verschiedene andere Statistiken.',
 Feedback: 'Feedback',
 FeedbackTooltip: 'Teile deine Meinung über meine Arbeit und Stella Mod mit.',
 Support: 'Support',
 SupportTooltip: 'Klicke hier, wenn du Hilfe benötigst.',
 HomePage: 'Startseite',
 HomePageTooltip: 'Startseite - Offizielle Website von Sefinek',
 PlayMusic: 'Musik abspielen',
 FetchingData: 'Daten werden heruntergeladen...',
 Version: 'Version',
 TheVersionWithoutCaps: 'die Version',
 DownloadCount: 'Download-Zähler',
 LastDownload: 'Letzter Download',
 FeedbackOnTrustpilot: 'Feedback bei Trustpilot',
 captchaModal: {
  AreYouARobot: 'Bist du ein Robot?',
  FailedToVerifyCaptcha: 'Captcha konnte nicht verifiziert werden: {0}',
  FailedToVerifyCaptchaStatusCode:
   'Captcha konnte nicht verifiziert werden (Statuscode: {0}). Laden Sie die Webseite neu und versuchen Sie es erneut.',
 },
 mirrorModal: {
  SelectADownloadSource: 'Download-Quelle auswählen',
  ByCompany: 'Nach Unternehmen',
  ByLocation: 'Nach Standort',
  InstallViaWinGet: 'via WinGet installieren',
  LauncherVersion: 'Launcher Version:',
  MirrorsAreCurrentlyUnavailable:
   'Mirrors sind derzeit deaktiviert oder nicht verfügbar für diese Kategorie. Komm bitte später zurück oder kontaktiere einen Administrator',
  ChecksumHasBeenSuccessfullyCopied: 'Die Prüfsumme {0} wurde erfolgreich in die Zwischenablage kopiert!',
  FailedToCopyChecksumTryAgain:
   'Fehler beim Kopieren der Prüfsumme {0} in die Zwischenablage. Bitte versuchen Sie es erneut.',
 },
 finalModal: {
  ThankYouForDownloading: 'Vielen Dank für den Download',
  BecomeAStellaModSubscriber:
   'Werde ein Stella Mod Plus Abonnent und erhalte Zugang zu zusätzlichen Vorteilen wie 3DMigoto, FPS Freischalter und ReShade zeitgleich, eine große Auswahl an fehlerfreien Mods, verbesserte Sicherheit (Blockieren von Telemetrie und Analyse), ein Paket der neusten Shader, ein Add-On das Filter Overlays im User-Interface (UI) blockiert, Ray Tracing Voreinstellungen, und viel mehr!',
  JoinOurDiscordServerToReceiveNotifications:
   'Trete unserem Discord Server bei, um Benachrichtigungen über die neuesten Updates, Funktionen und andere Ankündigungen zu erhalten. Kontaktiere den Schöpfer, wenn du irgendwelche Fragen oder Probleme hast. Wir sind immer bereit zu helfen. Wir wünschen dir einen tollen Tag oder Nacht!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview:
   'Hinterlasse eine Bewertung auf {a}trustpilot.com{/a} nach dem Testen der Software!',
  TheTotalNumberOfDownloadsNowIs: 'Die Gesamtzahl der Downloads ist jetzt',
  NoProblem: 'Kein Problem',
 },
 tooltips: {
  ShareYourFeedbackOnTrustpilot: 'Teile dein Feedback auf Trustpilot! Wir würden es sehr schätzen.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Galerie - Seite',
 GalleryCompareReleases: 'Galerie - Vergleiche Versionen:',
 ScreenshotsAreAvailableInHighQuality:
  'Bildschirmaufnahmen stehen in hoher Auflösung zur Verfügung. Es könnte eine Weile dauern, bis sie erscheinen.',
 WebsiteIsNotSupportedOnMobileDevices: 'Diese Website wird nicht auf mobilen Endgeräten unterstützt.',
 SomeImageCanBeOutdated: 'Einige Bilder könnten nicht mehr dem neusten Stand entsprechen!',
 SeeComparesFromTheOtherVersions: 'Schau dir Vergleiche zwischen verschiedenen Versionen an',
 SeeTheComparisonBetween: 'Sichte Vergleiche zwischen ...',
 ThePageYouAreCurrentlyOnDisplaysAComparison: 'Die Seite, auf der du dich befindest, stellt einen Vergleich dar.',
 OldVersion: 'Alte Version',
 NewVersion: 'Neue Version',
 WithMod: 'Mit mod',
 WithoutMod: 'Ohne mod',
 BonusScreenshot: 'Bonus Bildschirmaufnahme',
 tooltips: {
  GoBackToMainGalleryPage: 'Zurück zur Hauptgalerie-Seite',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Meinung hinterlassen',
 IfYouLikeThisProjectSupportMe:
  'Wenn dir dieses Projekt gefällt, erwäge {1}Abonniere{/1} meinen YouTube-Kanal, und gib {2}einen Stern{/2} auf GitHub oder {3} unterstütze mich{/3} auf andere Weise.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  'Wenn du Kommentare oder Vorschläge hast, zögere nicht, unserem Discord Server beizutreten und sie mit uns zu teilen.',
 btn: {
  BelowYTVideo: 'Unter dem YouTube Video',
  OnTheDiscordServer: 'Auf dem Discord Server',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'Kick hier, um auf die YouTube Seite zu gelangen.',
  GiveAStarToMyReposOnGitHub: 'Gib meinem Repo auf GitHub einen Stern.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: 'Schaue Videos auf YouTube',
 IfYouWantToRecordNewVideo:
  'Wenn du ein Video über Stella Mod auf YouTube aufnehmen und hochladen möchtest, kontaktiere mich bitte. Der Link zu Ihrem Video wird zu dieser Seite hinzugefügt.',
 DeprecatedMovies: 'Veraltete Filme',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  'Die Filme sind von älteren Versionen von Stella Mod und werden als veraltet angesehen.',
 FirstModRelease: 'Erster Mod release',
 Gameplay: 'Spiel',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Unschärfe umschalten',
 ToggleShadows: 'Schatten umschalten',
 ToggleBorder: 'Rahmen umschalten',
 ToggleBackground: 'Hintergrund umschalten',
 LiveStats: 'Live-Statistiken',
 OnlineNow: 'Jetzt online',
 Playing: 'Spielen',
 AllDownloadsNow: 'Alle Downloads',
 Player: 'Spieler',
 Players: 'Spieler',
 BelowYouFindTheStatsOfStellaMod:
  'Hier finden Sie die Statistiken von Stella Mod. Zeitzone: Europa/Warschau GMT+01:00 (Polen).',
 PerCountry: 'Pro Land',
 PerHour: 'Pro Stunde',
 PerDay: 'Pro Tag',
 PerMonth: 'Pro Monat',
 PerYear: 'Pro Jahr',
 All: 'Alle',
 Unique: 'Eindeutig',
 FirstOpens: 'Erste Starts',
 Peak: 'Spitze',
 Connections: 'Verbindungen',
 NumberOfGameLaunches: 'Anzahl der Spielstarts',
 FullDate: 'Vollständiges Datum',
 Version: 'Version',
 NumberOfDownloads: 'Anzahl der Downloads',
 DownloadsPerCountry: 'Downloads pro Land',
 DownloadsPerCountryAll: 'Downloads pro Land [Alle]',
 DownloadsPerVersionAll: 'Downloads pro Version [Alle]',
 DownloadsPerVersionUnique: 'Downloads pro Version [Eindeutig]',
 DownloadsPerDayAll: 'Downloads pro Tag [Alle]',
 DownloadsPerDayUnique: 'Downloads pro Tag [Eindeutig]',
 DownloadsPerMonthAll: 'Downloads pro Monat [Allee]',
 DownloadsPerMonthUnique: 'Downloads pro Monat [Eindeutig]',
 DownloadsPerYearAll: 'Downloads pro Jahr [Alle]',
 DownloadsPerYearUnique: 'Downloads pro Jahr [Eindeutig]',
 StellaModDownloadsHeader: '📥 Stella Mod Downloads',
 StellaModDownloadsText:
  'Here are the download statistics for Stella Mod directly from our official website. Please note that some historical data may be incomplete, as we began collecting statistics a significant time after the global release of Stella Mod.<br>Always ensure that you download Stella Mod from a trusted source, such as <a href="https://sefinek.net">sefinek.net</a>.',
 TotalDownloads: '🔢 Gesamte Downloads',
 LastDownload: '⏰ Letzter Download',
 YourTimezone: '🪐 Deine Zeitzone',
 StellaModLauncherStatsHeader: '😻 Stella Mod Launcher Statistiken',
 StellaModLauncherStatsText:
  'In dieser Kategorie präsentieren wir detaillierte Statistiken darüber, wie oft der Stella Mod Launcher gestartet wurde. Dazu gehören auch Daten, wie oft der Anwendung gestartet wird.',
 AllStellaLauncherOpens: 'Alle Stella Launcher starts',
 UniqueStellaLauncherOpens: 'Eindeutige Stella Launcher starts',
 OpensPerCountry: 'Starts pro Land',
 OpensPerVersion: 'Starts pro Version',
 OpensPerSysVersion: 'Starts pro Systemversion',
 OpensPerSysBuild: 'Starts pro System-Build',
 WsConnectionsHeader: '🌍 WebSocket-Verbindungen und -Operationen',
 WsConnectionsText:
  'In diesem Abschnitt lernst du  WebSocket-Metriken kennen, inklusive Diagramme, die die Häufigkeit von Nachrichten und Herzschläge(?) auf einer Stunden-, Tages-, Monats- und Jahres- Basis anzeigen.',
 Broadcast: 'Übertragen',
 Heartbeats: 'Herzschläge',
 CryptographicOperationsHeader: '🔠 kryptographische Operationen',
 CryptographicOperationsText:
  'Dieser Abschnitt bietet einen umfassenden Überblick über die kryptographischen Aktivitäten in unseren Systemen, in dem statistische Daten zu Verschlüsselungs- und Entschlüsselungsprozessen vorgestellt werden. Besucher können Diagramme mit der Häufigkeit und Erfolgsrate kryptografischer Operationen über verschiedene Zeiträume erforschen. Die Kryptographie spielt eine entscheidende Rolle bei der Sicherung von Anwendungen und Kommunikationen durch die Gewährleistung von Vertraulichkeit, Integrität und Authentizität der Daten und schützt so vor unbefugten Zugriffen und Bedrohungen. Sie ist für den Schutz digitaler Transaktionen und die Wahrung der Privatsphäre sensibler Informationen von entscheidender Bedeutung.',
 Encryption: '🧶 Verschlüsselung',
 Decryption: '🔧 Entschlüsselung',
 Misc: '🧵 Sonstige',
 PerOneHour: 'Pro Stunde',
 PerOneDay: 'Pro Tag',
 PerOneMonth: 'Pro Monat',
 PerOneYear: 'Pro Jahr',
 ErrorRatePerDay: 'Fehlerrate pro Tag',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Inhaltsangabe',
 1: {
  Introduction: '{0}. {1} Einleitung',
  Requirements: '{0}. {1} Anforderungen',
  WhatIs: '{0}. {1} Was ist...',
  FAQ: '{0}. {1} FAQ',
  Support: '{0}. {1} Support',
  Troubleshooting: '{0}. {1} Troubleshooting',
  TermsOfUse: '{0}. {1} Terms of use',
  PrivacyPolicy: '{0}. {1} Privacy policy',
  Installation: '{0}. {1} Installation',
 },
 Changelogs: 'Changelogs',
 2: {
  Versions: '{0}. {1} Versions {2}.x.x',
  DeprecatedReleases: '{0}. {1} Deprecated releases',
 },
 LicensesAndCredits: 'Licenses & Credits',
 3: {
  StellaModLicense: '{0}. {1} Stella Mod license',
  ReShadeLicense: '{0}. {1} ReShade license',
  FPSUnlockerLicense: '{0}. {1} FPS Unlocker license',
  MigotoLicense: '{0}. {1} 3DMigoto license',
  Credits: '{0}. {1} Credits',
 },
};

// GET /genshin-stella-mod/repositories
exports.github = {
 AllReposOnGithub: 'All repositories on GitHub',
 IfYouWantToBecomeContributor:
  'If you want to become contributor, just create a new {a}Pull Request{/a}. Thank you very much and happy coding!',
 Translations: 'Translations',
 Resources: 'Resources',
 Documentation: 'Dokumentation',
 More: 'More »',
 Deprecated: 'Deprecated',
 InstallationWizard: 'Installation wizard',
 UnlockedReShade: 'Unlocked ReShade',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Choose your subscription tier',
 IfYouAreInterestedInTheBenefits:
  "If you're interested in the benefits, please explore all the available tiers to see which one suits your preferences. Hopefully, you'll find one that piques your interest!",
 Recommended: 'Recommended',
 tiers: {
  1: "Basic tier for those who simply want to support the project. A good solution if you've stopped playing Genshin Impact and no longer need the in-game benefits, but still want to voluntarily support the project.",
  2: 'The recommended tier offering a full set of Stella Mod benefits — Ray Tracing, mods, shaders, privacy protection, giveaways, and much more. Includes standard support for Stella Plus and Stella Mod.',
  3: 'For players who want to use Stella Mod on two devices and take advantage of PC optimization and technical assistance. Includes better support.',
  4: 'The highest tier with activation on three devices and priority support. Ideal for those who expect the best possible experience and the fastest response times.',
 },
 UnknownBenefit: 'Unknown benefit',
 prices: {
  MonthlyPrice: 'Monthly price',
  Every3Months: 'Every 3 months',
  YearlyPrice: 'Yearly price',
 },
 Everything: {
  FromTheTier: 'Everything from Tier {0}',
  FromTheTier12: 'Everything from Tier 1 and 2',
  FromTheTier12And3: 'Everything from Tier 1, 2 & 3',
 },
 TierName: 'Tier name',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Role on the Discord server',
  VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
  NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons (SPC)',
  CompletePostArchive: 'Complete post archive',
  RayTracingForGenshin: 'Ray Tracing for Genshin',
  AbilityToUseMods: 'Ability to use mods in the game (more fun)',
  BigCollectionOfShadersMods: 'Big collection of shaders & mods without any bugs',
  GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
  HideYourUIDInTheGame: 'Hide your UID in the game',
  PresetsFromPreviousVersions: 'Presets from previous versions',
  EarlyAccessToStellaMod: 'Early access to Stella Mod',
  FasterDownloadServers: 'Faster download servers',
  BlockGameTelemetry: 'Genshin Impact telemetry blocking for greater privacy',
  VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
  NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
  OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
  AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
  StandardSupport: 'Standard support for Stella Plus & Stella Mod',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Activation possible on {u}{0} devices{/u}',
 },
 CompareAvailablePlans: 'Compare available plans',
 SPCNote: '* SPC — Sefinek Patron Center (patrons.sefinek.net)',
 benefitsShort: {
  IntDevice: '{0} device',
  IntDevices: '{0} devices',
  RoleOnTheDiscordServer: 'Role on the Discord server',
  VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
  NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons',
  CompletePostArchive: 'Complete post archive',
  RayTracingForGenshin: 'Ray Tracing for Genshin',
  BigCollectionOfShadersMods: 'Big collection of shaders & mods',
  AbilityToUseMods: 'Ability to use mods',
  GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
  HideYourUIDInTheGame: 'Hide your UID in the game',
  PresetsFromPreviousVersions: 'Presets from previous versions',
  EarlyAccessToStellaMod: 'Early access to Stella Mod',
  FasterDownloadServers: 'Faster download servers',
  BlockGameTelemetry: 'Blocks in-game telemetry & tracking',
  VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
  NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
  OptimizationOfYourComputerForBestPerformance: 'Optimization of your computer',
  AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
  StandardSupport: 'Standard support',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Activation possible on',
 },
 SubscribeNow: 'Subscribe now',
 ChangeYourTier: 'Change your tier',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Subscription is treated as voluntary support, not as a purchase of a service or product. The benefits you receive are solely as a token of appreciation.',
 PaymentSystem: {
  Header: 'Payment system',
  Text:
   'Payments are securely processed by {0} — a globally trusted platform supporting all major cards and payment methods. Your financial data is encrypted and protected throughout the entire transaction, so you can subscribe with complete peace of mind.',
 },
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Rules for using our benefits and patronage',
  SubText1:
   'We would like to express our heartfelt gratitude to all our subscribers for their support and trust. Before proceeding with the Stella Mod Plus subscription, please take a moment to familiarize yourself with a few important guidelines.',
  HeaderText2: 'Benefits are intended exclusively for subscribers:',
  SubText2:
   'Each benefit redemption token is assigned to a subscriber and should be kept confidential. Please do not share your benefits with others or distribute them online. Utilize them solely for your personal use and in accordance with our guidelines.',
  HeaderText3: 'Subscribing does not equate to purchasing the 3DMigoto software:',
  SubText3:
   'By becoming a subscriber to Stella Mod Plus, you are not acquiring 3DMigoto as a digital product for purchase. Instead, as our subscriber, you solely gain access to use 3DMigoto within the Stella Mod Launcher application.',
  HeaderText4: 'Refund policy:',
  SubText4:
   'Subscriptions constitute a digital service delivered immediately upon payment. Refunds are generally not available, but may be considered individually in cases of technical payment errors or system failures preventing access to benefits. In such situations, please contact us via ticket.',
  Footer:
   'We appreciate your presence in our community and your support for our work. If you have any questions or concerns, please {a}contact us{/a}. Your participation and understanding of these rules are incredibly important to our project.',
 },
 request: {
  WeAreProcessingYourRequest: 'We are processing your request...',
  SubscribingInProgress:
   'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction. ^w^',
  ChangingTheTierInProgress:
   'We need some time to change your tier! Give us a moment, and we promise everything will go smoothly. ^w^',
 },
};
