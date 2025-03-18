// Main
exports.default = {
 And: 'och',
 From: 'från',
 In: 'in',
 Back: 'Tillbacka',
 GoBack: 'Gå tillbacka',
 GoBackTo: 'Gå tillbacka till {0}',
 Next: 'Nästa',
 DiscordServer: 'Discord-server',
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
 FeedbackOnTrustpilot: 'Omdöme på Trustpilot',
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
  LauncherVersion: 'Launcher-version:',
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
 GalleryPage: 'Galleri – Sidnummer',
 GalleryCompareReleases: 'Galleri - Jämför versioner:',
 ScreenshotsAreAvailableInHighQuality:
  'Skärmbilder finns tillgängliga i hög kvalitet. Det kan ta en stund att ladda dem.',
 WebsiteIsNotSupportedOnMobileDevices: 'Den här webbplatsen är inte kompatibel med mobila enheter.',
 SomeImageCanBeOutdated: 'Observera att vissa bilder kan vara föråldrade!',
 SeeComparesFromTheOtherVersions: 'Se jämförelser från de andra versionerna',
 SeeTheComparisonBetween: 'Se jämförelsen mellan...',
 ThePageYouAreCurrentlyOnDisplaysAComparison: 'På den här sidan kan du jämföra olika versioner av Stella mod.',
 OldVersion: 'Gammal version',
 NewVersion: 'Ny version',
 WithMod: 'Med mod',
 WithoutMod: 'Utan mod',
 BonusScreenshot: 'Bonus skärmdump',
 tooltips: {
  GoBackToMainGalleryPage: 'Gå tillbaka till huvudsidan för galleriet',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Dela din åsikt',
 IfYouLikeThisProjectSupportMe:
  'Om du gillar det här projektet, överväg att {1}prenumerera{/1} på min YouTube-kanal, ge {2} ge projektet en stjärna {/2} på GitHub eller {3}stötta mig{/3} på ett annat sät.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  'Om du dessutom har några kommentarer eller förslag, tveka inte att gå med i vår Discord-server och dela dem med oss.',
 btn: {
  BelowYTVideo: 'Under min YouTube-video',
  OnTheDiscordServer: 'På Discord-servern',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'Klicka här för att gå till YouTube-sidan.',
  GiveAStarToMyReposOnGitHub: 'Ge en stjärna till mina GitHub-repositorier som du gillar.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: 'Titta på videor på YouTube',
 IfYouWantToRecordNewVideo:
  'Om du vill spela in och ladda upp en video om Stella Mod på YouTube, vänligen kontakta mig. Länken till din video kommer att läggas till på denna sida.',
 DeprecatedMovies: 'Föråldrade filmer',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  'Filmerna kommer från tidigare versioner av Stella Mod och anses redan vara föråldrade.',
 FirstModRelease: 'Första mod-utgåvan',
 Gameplay: 'Gameplay',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Toggle blur',
 ToggleShadows: 'Toggle shadows',
 ToggleBorder: 'Toggle border',
 ToggleBackground: 'Toggle background',
 LiveStats: 'Statistik i realtid',
 OnlineNow: 'Online nu',
 Playing: 'Spelar',
 AllDownloadsNow: 'Alla nedladdningar nu',
 Player: 'spelare',
 Players: 'spelare (plural)',
 BelowYouFindTheStatsOfStellaMod:
  'Nedanför hittar du statistiken för Stella Mod. Tidszon: Europa/Warszawa GMT+01:00 (Polen). Ha en trevlig dag!',
 PerCountry: 'Per land',
 PerHour: 'Per timme',
 PerDay: 'Per dag',
 PerMonth: 'Per månad',
 PerYear: 'Per år',
 All: 'Alla',
 Unique: 'Unik',
 FirstOpens: 'First opens',
 Peak: 'Peak',
 Connections: 'Connections',
 NumberOfGameLaunches: 'Number of game launches',
 FullDate: 'Fullständigt datum',
 Version: 'Version',
 NumberOfDownloads: 'Antal nedladdningar',
 DownloadsPerCountry: 'Nedladdningar per land',
 DownloadsPerCountryAll: 'Nedladdningar per land [Alla]',
 DownloadsPerVersionAll: 'Nedladdningar per version [Alla]',
 DownloadsPerVersionUnique: 'Nedladdningar per version [Unika]',
 DownloadsPerDayAll: 'Nedladdningar per dag [Alla]',
 DownloadsPerDayUnique: 'Nedladdningar per dag [Unika]',
 DownloadsPerMonthAll: 'Nedladdningar per månad [Alla]',
 DownloadsPerMonthUnique: 'Nedladdningar per månad [Unika]',
 DownloadsPerYearAll: 'Nedladdningar per månad [Unika]',
 DownloadsPerYearUnique: 'Nedladdningar per år [Unika]',
 StellaModDownloadsHeader: 'Stella Mod-nedladdningar',
 StellaModDownloadsText:
  'Här är nedladdningsstatistiken för Stella Mod direkt från vår officiella webbplats. Vänligen notera att viss historisk data kan vara ofullständig, eftersom vi började samla statistik en betydande tid efter den globala lanseringen av Stella Mod.<br>Se alltid till att du laddar ner Stella Mod från en betrodd källa, som <a href="https://sefinek.net">sefinek.net</a>.',
 TotalDownloads: '🔢 Totala nedladdningar',
 LastDownload: '⏰ Senaste nedladdning',
 YourTimezone: '🪐 Din tidszon',
 StellaModLauncherStatsHeader: '😻 Stella Mod Launcher stats',
 StellaModLauncherStatsText:
  'I den här kategorin presenterar vi detaljerad statistik om hur många gånger Stella Mod Launcher-programmet har startats. Detta inkluderar data om hur ofta applikationen startas.',
 AllStellaLauncherOpens: 'All Stella Launcher opens',
 UniqueStellaLauncherOpens: 'Unika öppningar av Stella Launcher',
 OpensPerCountry: 'Öppningar per land',
 OpensPerVersion: 'Öppningar per version',
 OpensPerSysVersion: 'Öppningar per systemversion',
 OpensPerSysBuild: 'Öppningar per systemversion',
 OnlineUsersWSHeader: '🌍 Online-användare - WebSocket',
 OnlineUsersWSText:
  'Denna sektion ger en omfattande översikt över användarkopplingar via vår WebSocket-server, och erbjuder realtidsinsikter om aktiva användare. Utforska dynamiska statistik som visar det aktuella antalet onlineanvändare, toppkonkurrensnivåer och användarnas geografiska fördelning.',
 Online: '🔑 Online',
 Peak1: '🍭 Peak',
 OnlinePerCountry: 'Online per country',
 OnlinePerHour: 'Online per timme',
 OnlinePerDay: 'Online per dag',
 OnlinePerMonth: 'Online per månad',
 OnlinePerYear: 'Online per år',
 PlayersInTheGameHeader: '🎮 Players in the game',
 PlayersInTheGameText:
  'Se hur många spelare som för närvarande använder Stella Mod i Genshin Impact. Stella Mod Launcher körs transparent, utan några bakgrundsåtgärder som sker utan din vetskap, vilket garanterar en smidig upplevelse som förbättrar Genshin Impact med extra funktioner, samtidigt som höga standarder för integritet och säkerhet upprätthålls. Viss data kan vara inaktuell.',
 PlayingNow: '💙 Playing now',
 Peak2: '⬆️ Peak',
 WsConnectionsHeader: '🌍 WebSocket connections and operations',
 WsConnectionsText:
  'I denna sektion kan du bekanta dig med WebSocket-mätvärden, inklusive diagram som visar frekvensen av meddelanden och hjärtslag på en timme-, dag-, månad- och årsbas.',
 Broadcast: 'Broadcast',
 Heartbeats: 'Heartbeats',
 CryptographicOperationsHeader: '🔠 Cryptographic operations',
 CryptographicOperationsText:
  'Denna sektion ger en omfattande översikt över kryptografiska aktiviteter i våra system och presenterar statistiska data om krypterings- och dekrypteringsprocesser. Besökare kan utforska diagram som visar frekvensen och framgångsraten för kryptografiska operationer under olika tidsperioder. Kryptografi spelar en avgörande roll för att säkra applikationer och kommunikationer genom att säkerställa datasekretess, integritet och äkthet, vilket skyddar mot obehörig åtkomst och cyberhot. Det är avgörande för att skydda digitala transaktioner och upprätthålla integriteten för känslig information.',
 Encryption: '🧶 Encryption',
 Decryption: '🔧 Decryption',
 Misc: '🧵 Misc',
 PerOneHour: 'Per hour',
 PerOneDay: 'Per dag',
 PerOneMonth: 'Per månad',
 PerOneYear: 'Per year',
 ErrorRatePerDay: 'Felfrekvens per dag',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Innehållsförteckning',
 1: {
  Introduction: '{0}. {1} Introduktion',
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
 ChooseYourSubscriptionTier: 'Välj din prenumerationsnivå',
 IfYouAreInterestedInTheBenefits:
  'Om du är intresserad av fördelarna, vänligen utforska alla tillgängliga nivåer för att se vilken som passar dina preferenser. Förhoppningsvis hittar du en som väcker ditt intresse!',
 IfYouHaveAnyQuestions:
  'Har du några frågor? Tveka inte att gå med i vår Discord-server eller kontakta oss via e-post. Du hittar kontaktinformation på huvudsidan på denna webbplats.',
 Recommended: 'Recommended',
 tiers: {
  1: {
   name: 'Little Kitten',
   description:
    'Grundnivå för de som bara vill stödja projektet. Detta är en bra lösning, till exempel om du slutade spela Genshin Impact och inte längre behöver förmånerna från spelet, men fortfarande vill stödja projektet frivilligt.',
  },
  2: {
   name: 'Favorite Cat',
   description:
    'Mellannivå som erbjuder de flesta av de grundläggande förmånerna kopplade till spelet Genshin Impact. Idealisk för spelare som vill njuta av ytterligare modifieringar och förbättringar i spelet.',
  },
  3: {
   name: 'Safety Kitten',
   description:
    'Avancerad nivå för betrodda användare, som erbjuder särskilda förmåner såsom system för att skydda mot ban, giveaways för Genshin Impact-konton och en anpassad utseende för Windows Terminal-gränssnittet.',
  },
  4: {
   name: 'Keyboard Cat',
   description:
    '"För spelare som vill maximera sina enheters kapabiliteter och njuta av spelet utan störningar. Denna alternativ erbjuder datoroptimeringstjänster (via TeamViewer eller AnyDesk), teknisk support och möjlighet att använda batchfiler i Stella Mod Launcher.',
  },
  5: {
   name: 'Cute Kitty',
   description:
    'Ger åtkomst till alla förmåner som erbjuds i lägre nivåer och tillåter även aktivering på flest enheter. Idealisk för spelare som uppskattar arbetet från Stella Mod-skaparen och vill stödja vidare utveckling och projektets serverinfrastruktur.',
  },
 },
 UnknownBenefit: 'Okänd förmån',
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
  PrivateClipsFromCSGO: 'Privata klipp från CS:GO och CS2',
  CompletePostArchive: 'Complete post archive',
  RayTracingForGenshin: 'Ray Tracing for Genshin',
  AbilityToUseMods: 'Ability to use mods in the game (more fun)',
  BigCollectionOfShadersMods: 'Stort urval av shaders och mods utan några buggar',
  GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
  HideYourUIDInTheGame: 'Hide your UID in the game',
  PresetsFromPreviousVersions: 'Presets from previous versions',
  EarlyAccessToStellaMod: 'Early access to Stella Mod',
  FasterDownloadServers: 'Faster download servers',
  CarefullyDesignedSecuritySystem: 'Carefully designed security system',
  MuchGreaterPrivacy: 'Much greater privacy',
  VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
  NewWindowsTerminalAppearance: 'Ny Windows Terminal (WT) utseende',
  ImagesAndInterestingVideosOfTheDevsCats: 'Foton och intressanta videor på utvecklarens katter',
  OptimizationOfYourComputerForBestPerformance: 'Optimering av din PC för den bästa prestanda',
  AssistanceRelatedToPCsOrLaptops: '"Hjälp relaterad till PC eller bärbara datorer',
  ActivationPossibleOn: 'Activation possible on {u}{0} devices{/u}',
 },
 CompareAvailablePlans: 'Compare available plans',
 benefitsShort: {
  IntDevice: '{0} device',
  IntDevices: '{0} devices',
  RoleOnTheDiscordServer: 'Role on the Discord server',
  VisibilityOnTheSubscriberList: 'Synlighet på prenumerantlistan',
  NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons',
  PrivateClipsFromCSGO: 'Privata klipp från CS:GO och CS2',
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
  'Prenumerationen betraktas som frivilligt stöd, inte som ett köp av en tjänst eller produkt. De förmåner du får är enbart som ett tecken på uppskattning.',
 IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost:
  'Om du vill, kan du fortsätta använda den kostnadsfria versionen utan extra kostnad. Beslutet är helt upp till dig.',
 Crypto: 'Crypto',
 IfYouWantToMakeAPaymentUsingCrypto: 'Om du vill göra en betalning med kryptovaluta, vänligen kontakta utvecklaren.',
 IAcceptPaymentsOnlyOnBinance: 'Jag accepterar endast gireringar på Binance.',
 CloseModal: 'Close modal',
 PaymentSystem: {
  Header: 'Betalningssystem',
  1: 'Vi är glada att meddela att vårt säkra betalningssystem drivs av {0}. Med Stripe kan du tryggt genomföra betalningar, med vetskapen om att din finansiella information hanteras med högsta säkerhetsnivå.',
  2: 'Stripe är en välrenommerad och globalt erkänd betalningsplattform som garanterar smidiga och säkra transaktioner för våra kunder. Oavsett om du köper produkter, prenumererar på tjänster eller gör donationer, säkerställer Stripes robusta infrastruktur en pålitlig och problemfri betalningsupplevelse.',
  3: 'Var säker på att dina känsliga betalningsuppgifter är krypterade och skyddade under hela betalningsprocessen. Din integritet och säkerhet är vår högsta prioritet.',
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
  'Vänligen notera att köparen är ansvarig för att täcka eventuella bankavgifter kopplade till transaktionen.',
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Rules for using our benefits and patronage',
  SubText1:
   'Vi vill uttrycka vårt uppriktiga tack till alla våra prenumeranter för deras stöd och förtroende. Innan du fortsätter med Stella Mod Plus-prenumerationen, ta gärna ett ögonblick för att bekanta dig med några viktiga riktlinjer.',
  HeaderText2: 'Förmånerna är avsedda enbart för prenumeranter:',
  SubText2:
   'Varje förmånsinlösen-token tilldelas en prenumerant och bör hållas konfidentiell. Vänligen dela inte dina förmåner med andra eller distribuera dem online. Använd dem endast för ditt personliga bruk och i enlighet med våra riktlinjer.',
  HeaderText3: 'Att prenumerera innebär inte att köpa 3DMigoto-programvaran:',
  SubText3:
   'Genom att bli prenumerant på Stella Mod Plus förvärvar du inte 3DMigoto som en digital produkt att köpa. Istället får du som prenumerant enbart tillgång till att använda 3DMigoto inom Stella Mod Launcher-applikationen.',
  Footer:
   'Vi uppskattar din närvaro i vår gemenskap och ditt stöd för vårt arbete. Om du har några frågor eller funderingar, vänligen {a}kontakta oss{/a}. Din delaktighet och förståelse för dessa regler är oerhört viktig för vårt projekt.',
 },
 request: {
  WeAreProcessingYourRequest: 'Vi behandlar din förfrågan...',
  SubscribingInProgress:
   'Vi behöver lite tid för att få allt klart. Vänligen stanna på denna sida och ge oss ett ögonblick!\nSnart kommer vi att omdirigera dig till en säker betalningssida där du kan slutföra din transaktion på ett säkert sätt. ^w^',
  ChangingTheTierInProgress:
   'Vi behöver lite tid för att ändra din nivå! Ge oss ett ögonblick, och vi lovar att allt kommer att gå smidigt. ^w^',
 },
};
