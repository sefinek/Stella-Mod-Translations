// Main
exports.default = {
 And: 'och',
 From: 'från',
 In: 'in',
 Back: 'Tillbacka',
 GoBack: 'Gå tillbacka',
 GoBackTo: 'Gå tillbacka till {0}',
 Next: 'Nästa',
 DiscordServer: 'Discord server',
 DiscordServerTooltip: 'Inbjudan till vår Discord-server',
 YourBrowserDoesNotSupportVideoTag: 'Din webbläsare stöder inte videotaggen.',
 YourBrowserDoesNotSupportAudioTag: 'Din webbläsare stöder inte ljudtaggen.',
 tooltips: {
  OfficialDiscordServer: 'Officiell Discord server',
  SupportThisProject: 'Stöd detta projekt frivilligt',
  GitHubRepositories: 'GitHub repositorier',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Fel 400: Ogiltig begäran',
  InvalidURL: 'Den returnerade URL:en är ogiltig.',
  ReferrerURL: 'Din referens-URL',
  CorrectRefURL: 'Korrekt URL',
 },
 wrongOs: {
  DeviceIsNotSupported: 'Enheten stöds inte',
  OperatingSysIsNotSupported: 'Vi beklagar! Ditt operativsystem {0} stöds ännu inte.',
  ViewSupportedSystems: 'Visa stödda system »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'Vi kan inte hitta ZIP-filen på servern.',
  NewUpdateIsComing:
   'En ny uppdatering är på väg? Kanske...\nHur som helst, försök igen senare eller rapportera detta problem på vår Discord-server.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Kliv in i en ny värld med förbättrad grafik för Genshin Impact',
 Text1:
  'Förbättrad grafik, noggrant skapade shaders, imponerande FPSupplåsning och moddar ger spelare en ännu bättre spelupplevelse än någonsin tidigare!',
 Text2:
  'Återupptäck världen av Teyvat med ny grafik som gör ditt spelande mer realistiskt. En dedikerad launcher förenklar hela processen och låter spelare hoppa in i äventyret snabbt och smidigt.',
 FinalText:
  'Vänta inte, ladda ner det nu! Ta ditt spelande till nästa nivå. Fördjupa dig i den förbättrade världen av Teyvat och skapa oförglömliga ögonblick. Ha så kul!',
 Download: 'Ladda ner',
 DownloadTooltip: 'Klicka här för att ladda ner x64-bitarsinstallationsprogrammet för Windows 10 och 11.',
 StelaModPlusTooltip:
  'Få tillgång till den betalda versionen av Stella Mod Plus och njut av många fördelar och en förbättrad spelupplevelse!',
 Documentation: 'Dokumentation',
 DocumentationTooltip: 'Kontrollera systemkraven, rekommenderade spelinställningar och mer!',
 Gallery: 'Galleri',
 GalleryTooltip: 'Se skärmdumpar från spelet med ReShade injicerat.',
 Videos: 'Videos',
 VideosTooltip: 'Titta på våra videor som visar modden och launchern.',
 Statistics: 'Statistik',
 StatisticsTooltip:
  'Se hur många som för närvarande spelar Genshin Impact med Stella Mod. Bläddra även igenom olika andra statistikuppgifter.',
 Feedback: 'Återkoppling',
 FeedbackTooltip: 'Dela din åsikt om mitt arbete och Stella Mod.',
 Support: 'Support',
 SupportTooltip: 'Klicka här om du behöver hjälp.',
 HomePage: 'Hemsida',
 HomePageTooltip: 'Hemsida – Den officiella webbplatsen för Sefinek',
 PlayMusic: 'Spela musik',
 FetchingData: 'Hämtar data...',
 Version: 'Version',
 TheVersionWithoutCaps: 'versionen',
 DownloadCount: '"Antal nedladdningar',
 LastDownload: 'Senaste nedladdning',
 FeedbackOnTrustpilot: 'Feedback on Trustpilot',
 captchaModal: {
  AreYouARobot: 'Är du en robot?',
  FailedToVerifyCaptcha: 'Misslyckades med att verifiera captcha: {0}',
  FailedToVerifyCaptchaStatusCode:
   'Misslyckades med att verifiera captcha (statuskod: {0}). Ladda om webbplatsen och försök igen.',
 },
 mirrorModal: {
  SelectDownloadServer: 'Välj nedladdningsserver',
  Companies: 'Företag',
  Countries: 'Länder',
  LauncherVersion: 'Launcher version:',
  MirrorsAreCurrentlyUnavailable:
   'Spegelservrar är för tillfället avstängda eller otillgängliga för denna kategori. Försök igen senare eller kontakta administratören.',
  ChecksumHasBeenSuccessfullyCopied: '{0}-kontrollsumman har kopierats till urklippet!',
  FailedToCopyChecksumTryAgain:
   'Det gick inte att kopiera kontrollsumman för {0} till urklippet. Vänligen försök igen.',
 },
 finalModal: {
  ThankYouForDownloading: 'Tack för din nedladdning!',
  BecomeAStellaModSubscriber:
   'Bli en Stella Mod Plus-prenumerant för att få tillgång till extra förmåner, såsom möjligheten att använda 3DMigoto, FPS Unlocker och ReShade samtidigt, en stor samling felfria moddar, förbättrad säkerhet (blockering av telemetri och analys), ett paket med de senaste shaders, ett tillägg som förhindrar filteröverlägg på användargränssnittet (UI), Ray Tracing-förinställningar och mycket mer!',
  JoinOurDiscordServerToReceiveNotifications:
   'Gå med i vår Discord-server för att få notiser om de senaste uppdateringarna, funktionerna och andra nyheter. Kontakta skaparen om du har några frågor eller stöter på problem. Vi är alltid redo att hjälpa till. Önskar dig en fantastisk dag eller natt!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview:
   'Lämna en recension på {a}trustpilot.com{/a} efter att du har testat programvaran!',
  TheTotalNumberOfDownloadsNowIs: 'Det totala antalet nedladdningar är nu',
  NoProblem: 'Inga problem',
 },
 tooltips: {
  PageViews: 'Sidvisningar. Statistik har samlats in sedan 19 januari 2024.',
  ShareYourFeedbackOnTrustpilot: 'Dela din feedback på Trustpilot! Vi skulle verkligen uppskatta det.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Gallery - Page number',
 GalleryCompareReleases: 'Gallery - Compare releases:',
 ScreenshotsAreAvailableInHighQuality:
  'Skärmbilder finns tillgängliga i hög kvalitet. Det kan ta en stund att ladda dem.',
 WebsiteIsNotSupportedOnMobileDevices: 'This website is not supported on mobile devices.',
 SomeImageCanBeOutdated: 'Observera att vissa bilder kan vara föråldrade!',
 SeeComparesFromTheOtherVersions: 'See compares from the other versions',
 SeeTheComparisonBetween: 'See the comparison between...',
 ThePageYouAreCurrentlyOnDisplaysAComparison:
  'The page you are currently on displays a comparison of different versions of releases.',
 OldVersion: 'Gammal version',
 NewVersion: 'Ny version',
 WithMod: 'Med mod',
 WithoutMod: 'Utan mod',
 BonusScreenshot: 'Bonus skärmdump',
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
 OnlineUsersWSHeader: '🌍 Online users - WebSocket',
 OnlineUsersWSText:
  'This section provides a comprehensive overview of user connectivity through our WebSocket server, offering real-time insights into active users. Explore dynamic statistics that reveal the current online user count, peak concurrency levels, and the geographical distribution of users.',
 Online: '🔑 Online',
 Peak1: '🍭 Peak',
 OnlinePerCountry: 'Online per country',
 OnlinePerHour: 'Online per hour',
 OnlinePerDay: 'Online per day',
 OnlinePerMonth: 'Online per month',
 OnlinePerYear: 'Online per year',
 PlayersInTheGameHeader: '🎮 Players in the game',
 PlayersInTheGameText:
  'See how many players are currently using Stella Mod in Genshin Impact. The Stella Mod Launcher runs transparently, with no background actions happening without your knowledge, ensuring a smooth experience that enhances Genshin Impact with added features, all while upholding high standards of privacy and security. Some data may be inaccurate.',
 PlayingNow: '💙 Playing now',
 Peak2: '⬆️ Peak',
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
 CreationDate: 'Creation date: {0}',
 FileSize: 'File size: {0}',
 bytes: 'bytes',
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
  "If you're interested in the benefits, please explore all the available tiers to see which one suits your preferences. Hopefully, you'll find one that piques your interest!",
 IfYouHaveAnyQuestions:
  "Do you have any questions? Don't hesitate to join our Discord server or contact us via email. You can find the contact information on the main page of this website.",
 Recommended: 'Recommended',
 tiers: {
  1: {
   name: 'Little Kitten',
   description:
    'Basic tier for those who just want to support the project. This is a good solution, for example, if you stopped playing Genshin Impact and no longer need the benefits from the game, but still want to support the project voluntarily.',
  },
  2: {
   name: 'Favorite Cat',
   description:
    'Medium tier that offers most of the basic benefits associated with the game Genshin Impact. Ideal for players who want to enjoy additional modifications and enhancements in the game.',
  },
  3: {
   name: 'Safety Kitten',
   description:
    'Advanced tier for trusted users, which offers special benefits such as systems to protect against bans, giveaways for Genshin Impact accounts, and a custom appearance for the Windows Terminal interface.',
  },
  4: {
   name: 'Keyboard Cat',
   description:
    'For players who want to maximize the capabilities of their devices and enjoy the game without any disruptions. This option offers computer optimization services (via TeamViewer or AnyDesk), technical support, and the ability to use batch files in Stella Mod Launcher.',
  },
  5: {
   name: 'Cute Kitty',
   description:
    'Provides access to all the benefits offered in lower tiers, and also allows activation on the most devices. Ideal for players who appreciate the work of Stella Mod creator and want to support further development and the project’s server infrastructure.',
  },
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
  FromAllTheTiers: 'Everything from all Tiers',
 },
 TierName: 'Tier name',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Role on the Discord server',
  VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
  NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons (SPC)',
  PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
  CompletePostArchive: 'Complete post archive',
  RayTracingForGenshin: 'Ray Tracing for Genshin',
  AbilityToUseMods: 'Ability to use mods in the game (more fun)',
  BigCollectionOfShadersMods: 'Big collection of shaders & mods without any bugs',
  GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
  HideYourUIDInTheGame: 'Hide your UID in the game',
  PresetsFromPreviousVersions: 'Presets from previous versions',
  EarlyAccessToStellaMod: 'Early access to Stella Mod',
  FasterDownloadServers: 'Faster download servers',
  CarefullyDesignedSecuritySystem: 'Carefully designed security system',
  MuchGreaterPrivacy: 'Much greater privacy',
  VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
  NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
  ImagesAndInterestingVideosOfTheDevsCats: "Photos and interesting videos of the developer's cats",
  OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
  AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
  ActivationPossibleOn: 'Activation possible on {u}{0} devices{/u}',
 },
 CompareAvailablePlans: 'Compare available plans',
 benefitsShort: {
  IntDevice: '{0} device',
  IntDevices: '{0} devices',
  RoleOnTheDiscordServer: 'Role on the Discord server',
  VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
  NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons',
  PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
  CompletePostArchive: 'Complete post archive',
  RayTracingForGenshin: 'Ray Tracing for Genshin',
  BigCollectionOfShadersMods: 'Big collection of shaders & mods',
  AbilityToUseMods: 'Ability to use mods',
  GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
  HideYourUIDInTheGame: 'Hide your UID in the game',
  PresetsFromPreviousVersions: 'Presets from previous versions',
  EarlyAccessToStellaMod: 'Early access to Stella Mod',
  FasterDownloadServers: 'Faster download servers',
  CarefullyDesignedSecuritySystem: 'Carefully designed security system',
  MuchGreaterPrivacy: 'Much greater privacy',
  VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
  NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
  ImagesAndInterestingVideosOfTheDevsCats: "Dev's cat images & interesting videos",
  OptimizationOfYourComputerForBestPerformance: 'Optimization of your computer',
  AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
  ActivationPossibleOn: 'Activation possible on',
 },
 SubscribeNow: 'Subscribe now',
 ChangeYourTier: 'Change your tier',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Subscription is treated as voluntary support, not as a purchase of a service or product. The benefits you receive are solely as a token of appreciation.',
 IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost:
  'If you wish, you can continue to use the free version at no cost. The decision is entirely up to you.',
 Crypto: 'Crypto',
 IfYouWantToMakeAPaymentUsingCrypto:
  'If you want to make a payment using cryptocurrency, please contact the developer.',
 IAcceptPaymentsOnlyOnBinance: 'I accept payments only on Binance.',
 CloseModal: 'Close modal',
 PaymentSystem: {
  Header: 'Payment system',
  1: 'We are delighted to announce that our secure payment system is powered by {0}. With Stripe, you can confidently make payments, knowing that your financial information is handled with the highest level of security.',
  2: "Stripe is a well-trusted and globally recognized payment processing platform that guarantees smooth and secure transactions for our customers. Whether you're buying products, subscribing to services, or making donations, Stripe's robust infrastructure ensures a dependable and trouble-free payment experience.",
  3: 'Please be assured that your sensitive payment details are encrypted and safeguarded throughout the entire payment process. Your privacy and security are our top priorities.',
 },
 AcceptedPaymentMethods: 'Accepted payment methods',
 IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer:
  'If you wish to make a payment using cryptocurrencies or a direct bank transfer, please contact the developer.',
 BankName: 'Bank Name:',
 AccountNumber: 'Account Number:',
 SWIFTOrBICCode: 'SWIFT/BIC Code:',
 IBAN: 'IBAN:',
 AskTheAdministratorForIt: 'Ask the administrator for it',
 PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees:
  'Please note that the buyer is responsible for covering any bank fees associated with any transaction.',
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
