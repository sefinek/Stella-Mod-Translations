// Main
exports.default = {
 And: 'and',
 From: 'from',
 In: 'in',
 Back: 'Back',
 GoBack: 'Go back',
 GoBackTo: 'Go back to {0}',
 Next: 'Next',
 DiscordServer: 'Discord server',
 DiscordServerTooltip: 'Invitation to our Discord server',
 YourBrowserDoesNotSupportVideoTag: 'Your browser does not support the video tag.',
 YourBrowserDoesNotSupportAudioTag: 'Your browser does not support the audio tag.',
 tooltips: {
  OfficialDiscordServer: 'Official Discord server',
  SupportThisProject: 'Support this project voluntarily',
  GitHubRepositories: 'GitHub repositories',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Error 400: Bad Request',
  InvalidURL: 'The return URL is invalid.',
  ReferrerURL: 'Your referrer URL',
  CorrectRefURL: 'Correct URL',
 },
 wrongOs: {
  DeviceIsNotSupported: 'Device is not supported',
  OperatingSysIsNotSupported: "We're sorry! Your operating system {0}, is not yet supported.",
  ViewSupportedSystems: 'View supported systems »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'We cannot find ZIP file on the server',
  NewUpdateIsComing:
   'New update is coming? Probaby...\nAnyways, please try again later or report this issue on our Discord server.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Step into a New World with Enhanced Graphics for Genshin Impact',
 Text1:
  'Enhanced graphics, meticulously crafted shaders, impressive FPS unlocking, and mods provide players with an even better gaming experience than ever before!',
 Text2:
  'Rediscover the world of Teyvat with new graphics that make your gameplay more realistic. A dedicated launcher streamlines the entire process, allowing players to jump into the action quickly and easily.',
 FinalText:
  "Don't wait, download it now! Take your gameplay to the next level. Immerse yourself in the enhanced world of Teyvat and create unforgettable moments. Have fun!",
 Download: 'Download',
 DownloadTooltip: 'Click here to download the x64-bit installer for Windows 10 and 11.',
 StelaModPlusTooltip:
  'Get access to the paid version of Stella Mod Plus and enjoy numerous benefits and enhanced gaming experiences!',
 Documentation: 'Documentation',
 DocumentationTooltip: 'Check the system requirements, recommended game settings, and more!',
 Gallery: 'Gallery',
 GalleryTooltip: 'See the screenshots from the game with ReShade injected.',
 Videos: 'Videos',
 VideosTooltip: 'Watch our videos showcasing the mod and the launcher.',
 Statistics: 'Statistics',
 StatisticsTooltip:
  'Check how many people are currently playing Genshin Impact using the Stella Mod. Also browse various other statistics.',
 Feedback: 'Feedback',
 FeedbackTooltip: 'Share your opinion about my work and Stella Mod.',
 Support: 'Support',
 SupportTooltip: 'Click here if you need help.',
 HomePage: 'Home page',
 HomePageTooltip: 'Home page - Official website of Sefinek',
 PlayMusic: 'Play music',
 FetchingData: 'Fetching data...',
 Version: 'Version',
 TheVersionWithoutCaps: 'the version',
 DownloadCount: 'Download count',
 LastDownload: 'Last download',
 FeedbackOnTrustpilot: 'Feedback on Trustpilot',
 captchaModal: {
  AreYouARobot: 'Are you a robot?',
  FailedToVerifyCaptcha: 'Failed to verify captcha: {0}',
  FailedToVerifyCaptchaStatusCode: 'Failed to verify captcha (status code: {0}). Reload the website and try again.',
 },
 mirrorModal: {
  SelectADownloadSource: 'Select a download source',
  ByCompany: 'By company',
  ByLocation: 'By location',
  InstallViaWinGet: 'Install via WinGet',
  LauncherVersion: 'Launcher version:',
  MirrorsAreCurrentlyUnavailable:
   'Mirrors are currently disabled or unavailable for this category. Please check back later, or contact the administrator.',
  ChecksumHasBeenSuccessfullyCopied: 'The {0} checksum has been successfully copied to the clipboard!',
  FailedToCopyChecksumTryAgain: 'Failed to copy the {0} checksum to the clipboard. Please try again.',
 },
 finalModal: {
  ThankYouForDownloading: 'Thank you for downloading',
  BecomeAStellaModSubscriber:
   'Become a Stella Mod Plus subscriber to gain access to additional benefits such as the ability to use 3DMigoto, FPS Unlocker, and ReShade simultaneously, a large collection of error-free mods, enhanced security (blocking telemetry and analytics), a package of the latest shaders, an add-on to prevent filter overlays on the user interface (UI), Ray Tracing presets, and much more!',
  JoinOurDiscordServerToReceiveNotifications:
   'Join our Discord server to receive notifications about the latest updates, features, and other announcements. Contact the creator if you have any questions or encounter any issues. We are always ready to help. Wishing you a great day or night!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview: 'Leave a review at {a}trustpilot.com{/a} after testing the software!',
  TheTotalNumberOfDownloadsNowIs: 'The total number of downloads is now',
  NoProblem: 'No problem',
 },
 tooltips: {
  ShareYourFeedbackOnTrustpilot: 'Share your feedback on Trustpilot! We would greatly appreciate it.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Gallery - Page number',
 GalleryCompareReleases: 'Gallery - Compare releases:',
 ScreenshotsAreAvailableInHighQuality: 'Screenshots are available in high quality. It may take a while to load them.',
 WebsiteIsNotSupportedOnMobileDevices: 'This website is not supported on mobile devices.',
 SomeImageCanBeOutdated: 'Some images can be outdated!',
 SeeComparesFromTheOtherVersions: 'See compares from the other versions',
 SeeTheComparisonBetween: 'See the comparison between...',
 ThePageYouAreCurrentlyOnDisplaysAComparison:
  'The page you are currently on displays a comparison of different versions of releases.',
 OldVersion: 'Old version',
 NewVersion: 'New version',
 WithMod: 'With mod',
 WithoutMod: 'Without mod',
 BonusScreenshot: 'Bonus screenshot',
 tooltips: {
  GoBackToMainGalleryPage: 'Go back to main gallery page',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Share your opinion',
 IfYouLikeThisProjectSupportMe:
  'If you like this project, consider {1}subscribing{/1} to my YouTube channel, giving {2}a star{/2} on GitHub, or {3}supporting me{/3} in another way.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  "Additionally, if you have any comments or suggestions, don't hesitate to join our Discord server and share them with us.",
 btn: {
  BelowYTVideo: 'Below my YouTube video',
  OnTheDiscordServer: 'On the Discord server',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'Click here to go to the YouTube page.',
  GiveAStarToMyReposOnGitHub: 'Give a star to my repositories on GitHub, the ones you like.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: 'Watch videos on YouTube',
 IfYouWantToRecordNewVideo:
  'If you want to record and upload a video about Stella Mod to YouTube, please contact me. The link to your video will be added to this page.',
 DeprecatedMovies: 'Deprecated movies',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  'The movies are from previous versions of Stella Mod and are already considered outdated.',
 FirstModRelease: 'First mod release',
 Gameplay: 'Gameplay',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Toggle blur',
 ToggleShadows: 'Toggle shadows',
 ToggleBorder: 'Toggle border',
 ToggleBackground: 'Toggle background',
 LiveStats: 'Live stats',
 OnlineNow: 'Online now',
 Playing: 'Playing',
 AllDownloadsNow: 'All downloads now',
 Player: 'player',
 Players: 'players',
 BelowYouFindTheStatsOfStellaMod:
  'Below you will find the statistics of Stella Mod. Timezone: Europe/Warsaw GMT+01:00 (Poland). Have a nice day!',
 PerCountry: 'Per country',
 PerHour: 'Per hour',
 PerDay: 'Per day',
 PerMonth: 'Per month',
 PerYear: 'Per year',
 All: 'All',
 Unique: 'Unique',
 FirstOpens: 'First opens',
 Peak: 'Peak',
 Connections: 'Connections',
 NumberOfGameLaunches: 'Number of game launches',
 FullDate: 'Full date',
 Version: 'Version',
 NumberOfDownloads: 'Number of downloads',
 DownloadsPerCountry: 'Downloads per country',
 DownloadsPerCountryAll: 'Downloads per country [All]',
 DownloadsPerVersionAll: 'Downloads per version [All]',
 DownloadsPerVersionUnique: 'Downloads per version [Unique]',
 DownloadsPerDayAll: 'Downloads per day [All]',
 DownloadsPerDayUnique: 'Downloads per day [Unique]',
 DownloadsPerMonthAll: 'Downloads per month [All]',
 DownloadsPerMonthUnique: 'Downloads per month [Unique]',
 DownloadsPerYearAll: 'Downloads per year [All]',
 DownloadsPerYearUnique: 'Downloads per year [Unique]',
 StellaModDownloadsHeader: '📥 Stella Mod downloads',
 StellaModDownloadsText:
  'Here are the download statistics for Stella Mod directly from our official website. Please note that some historical data may be incomplete, as we began collecting statistics a significant time after the global release of Stella Mod.<br>Always ensure that you download Stella Mod from a trusted source, such as <a href="https://sefinek.net">sefinek.net</a>.',
 TotalDownloads: '🔢 Total downloads',
 LastDownload: '⏰ Last download',
 YourTimezone: '🪐 Your timezone',
 StellaModLauncherStatsHeader: '😻 Stella Mod Launcher stats',
 StellaModLauncherStatsText:
  'In this category, we present detailed statistics on how many times the Stella Mod Launcher program has been initiated. This includes data on how often the application is launched.',
 AllStellaLauncherOpens: 'All Stella Launcher opens',
 UniqueStellaLauncherOpens: 'Unique Stella Launcher opens',
 OpensPerCountry: 'Opens per country',
 OpensPerVersion: 'Opens per version',
 OpensPerSysVersion: 'Opens per system version',
 OpensPerSysBuild: 'Opens per system build',
 WsConnectionsHeader: '🌍 WebSocket connections and operations',
 WsConnectionsText:
  'In this section, familiarize yourself with WebSocket metrics, including charts that display the frequency of messages and heartbeats on an hourly, daily, monthly, and yearly basis.',
 Broadcast: 'Broadcast',
 Heartbeats: 'Heartbeats',
 CryptographicOperationsHeader: '🔠 Cryptographic operations',
 CryptographicOperationsText:
  'This section provides a comprehensive overview of cryptographic activities in our systems, presenting statistical data on encryption and decryption processes. Visitors can explore charts displaying the frequency and success rates of cryptographic operations over various timeframes. Cryptography plays a crucial role in securing applications and communications by ensuring data confidentiality, integrity, and authenticity, thus protecting against unauthorized access and cyber threats. It is vital for safeguarding digital transactions and maintaining the privacy of sensitive information.',
 Encryption: '🧶 Encryption',
 Decryption: '🔧 Decryption',
 Misc: '🧵 Misc',
 PerOneHour: 'Per hour',
 PerOneDay: 'Per day',
 PerOneMonth: 'Per month',
 PerOneYear: 'Per year',
 ErrorRatePerDay: 'Error rate per day',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Table of Contents',
 1: {
  Introduction: '{0}. {1} Introduction',
  Requirements: '{0}. {1} Requirements',
  WhatIs: '{0}. {1} What is...',
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
 Documentation: 'Documentation',
 More: 'More »',
 Deprecated: 'Deprecated',
 InstallationWizard: 'Installation wizard',
 UnlockedReShade: 'Unlocked ReShade',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Choose your subscription tier',
 IfYouAreInterestedInTheBenefits:
  "If you're interested in the benefits, explore all the available tiers to find one that suits your preferences. Do you have any questions? Join our Discord server or open a ticket at {0} — we typically respond within 24 hours.",
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
  FromTheTier12: 'Everything from Tier 1 & 2',
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
  'Subscription is treated as voluntary support for the project, not as a purchase of a service or product. The benefits you receive are solely a token of appreciation. If you prefer, you can continue using the free version — the decision is entirely yours.',
 PaymentSystem: {
  Header: 'Payment system',
  Text:
   'Payments are securely processed by {0} — a globally trusted platform supporting all major cards and payment methods. Your financial data is encrypted and protected throughout the entire transaction, so you can subscribe with complete peace of mind.',
 },
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Rules for using our benefits and patronage',
  SubText1: 'Before subscribing to Stella Mod Plus, please take a moment to read the following guidelines.',
  HeaderText2: 'Subscription does not constitute a purchase of 3DMigoto:',
  SubText2:
   'By subscribing to Stella Mod Plus, you are not acquiring 3DMigoto as a digital product. You gain access solely to use 3DMigoto within the Stella Mod Launcher application for the duration of your active subscription.',
  HeaderText3: 'Access is personal and non-transferable:',
  SubText3:
   'Your benefit redemption token and access to Stella Mod Plus are assigned exclusively to your account and must be kept confidential. Sharing, reselling, sublicensing, or granting access to anyone outside your household is strictly prohibited and may result in immediate loss of access without the right to a refund.',
  HeaderText4: 'Refund policy:',
  SubText4:
   'Subscriptions constitute a digital service delivered immediately upon payment. Refunds are generally not available, but may be considered individually in cases of technical payment errors or system failures preventing access to benefits. In such situations, please contact us via ticket.',
  Footer:
   'We appreciate your support for the project. If you have any questions or concerns, please open a {a}ticket{/a}. Respecting the above rules is incredibly important to us.',
 },
 request: {
  WeAreProcessingYourRequest: 'We are processing your request...',
  SubscribingInProgress:
   'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction.',
  ChangingTheTierInProgress:
   'We need some time to change your tier. Give us a moment, and we promise everything will go smoothly.',
 },
};
