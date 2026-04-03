// Main
exports.default = {
 And: 'och',
 From: 'från',
 In: 'i',
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
  'Förbättrad grafik, noggrant skapade shaders, imponerande FPS-upplåsning och moddar ger spelare en ännu bättre spelupplevelse än någonsin tidigare!',
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
  SelectADownloadSource: 'Välj nedladdningsserver',
  ByCompany: 'Av företaget',
  ByLocation: 'Efter Plats',
  InstallViaWinGet: 'Installera via WinGet',
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
  ShareYourFeedbackOnTrustpilot: 'Dela din feedback på Trustpilot! Vi skulle verkligen uppskatta det.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Galleri – Sida',
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
 ToggleBlur: 'Växla av eller på suddighet',
 ToggleShadows: 'Växla av eller på Skuggor',
 ToggleBorder: 'Växla av eller på kanter (kantutjämning)',
 ToggleBackground: 'Växla av eller på bakgrund',
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
 FirstOpens: 'Första öppningar',
 Peak: 'Maxpunkt',
 Connections: 'Anslutningar',
 NumberOfGameLaunches: 'Antal startningar av launchern',
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
 StellaModLauncherStatsHeader: '😻 Stella Mod Launcher-statistik',
 StellaModLauncherStatsText:
  'I den här kategorin presenterar vi detaljerad statistik om hur många gånger Stella Mod Launcher-programmet har startats. Detta inkluderar data om hur ofta applikationen startas.',
 AllStellaLauncherOpens: 'Alla öppningar av Stella Launchern',
 UniqueStellaLauncherOpens: 'Unika öppningar av Stella Launcher',
 OpensPerCountry: 'Öppningar per land',
 OpensPerVersion: 'Öppningar per version',
 OpensPerSysVersion: 'Öppningar per systemversion',
 OpensPerSysBuild: 'Öppningar per systemversion',
 WsConnectionsHeader: '🌍 WebSocket-anslutningar och operationer',
 WsConnectionsText:
  'I denna sektion kan du bekanta dig med WebSocket-mätvärden, inklusive diagram som visar frekvensen av meddelanden och hjärtslag på en timme-, dag-, månad- och årsbas.',
 Broadcast: 'Sändning',
 Heartbeats: 'Hjärtslag',
 CryptographicOperationsHeader: '🔠 Kryptografiska operationer',
 CryptographicOperationsText:
  'Denna sektion ger en omfattande översikt över kryptografiska aktiviteter i våra system och presenterar statistiska data om krypterings- och dekrypteringsprocesser. Besökare kan utforska diagram som visar frekvensen och framgångsraten för kryptografiska operationer under olika tidsperioder. Kryptografi spelar en avgörande roll för att säkra applikationer och kommunikationer genom att säkerställa datasekretess, integritet och äkthet, vilket skyddar mot obehörig åtkomst och cyberhot. Det är avgörande för att skydda digitala transaktioner och upprätthålla integriteten för känslig information.',
 Encryption: '🧶Kryptering',
 Decryption: '🔧 Dekryptering',
 Misc: '🧵 Övrigt',
 PerOneHour: 'Per timme',
 PerOneDay: 'Per dag',
 PerOneMonth: 'Per månad',
 PerOneYear: 'Per år',
 ErrorRatePerDay: 'Felfrekvens per dag',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Innehållsförteckning',
 1: {
  Introduction: '{0}. {1} Introduktion',
  Requirements: '{0}. {1} Olika Systemkrav',
  WhatIs: '{0}. {1} Vad är...',
  FAQ: '{0}. {1} FAQ',
  Support: '{0}. {1} Support',
  Troubleshooting: '{0}. {1} Felsökning',
  TermsOfUse: '{0}. {1} Användarvillkor',
  PrivacyPolicy: '{0}. {1} Integritetspolicy',
  Installation: '{0}. {1} Installation',
 },
 Changelogs: 'Ändringsloggar',
 2: {
  Versions: '{0}. {1} Versioner {2}.x.x',
  DeprecatedReleases: '{0}. {1} Föråldrade versioner',
 },
 LicensesAndCredits: 'Licenser och erkännanden',
 3: {
  StellaModLicense: '{0}. {1} Stella Mod-licens',
  ReShadeLicense: '{0}. {1} ReShade-licens',
  FPSUnlockerLicense: '{0}. {1} FPS-upplåsarlicens',
  MigotoLicense: '{0}. {1} 3DMigoto-licens',
  Credits: '{0}. {1} Lista över medverkande',
 },
};

// GET /genshin-stella-mod/repositories
exports.github = {
 AllReposOnGithub: 'Alla repositorier på GitHub',
 IfYouWantToBecomeContributor:
  'Om du vill bli bidragsgivare, skapa bara en ny {a}Ändringsförfrågan{/a}. Stort tack och glad kodning!',
 Translations: 'Översättningar',
 Resources: 'Resurser',
 Documentation: 'Dokumentation',
 More: 'Mera »',
 Deprecated: 'Föråldrad',
 InstallationWizard: 'Installationsprogram',
 UnlockedReShade: 'Upplåst ReShade',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Välj din prenumerationsnivå',
 IfYouAreInterestedInTheBenefits:
  "If you're interested in the benefits, explore all the available tiers to find one that suits your preferences. Do you have any questions? Join our Discord server or open a ticket at {0} — we typically respond within 24 hours.",
 Recommended: 'Rekommenderad',
 tiers: {
  1: "Basic tier for those who simply want to support the project. A good solution if you've stopped playing Genshin Impact and no longer need the in-game benefits, but still want to voluntarily support the project.",
  2: 'The recommended tier offering a full set of Stella Mod benefits — Ray Tracing, mods, shaders, privacy protection, giveaways, and much more. Includes standard support for Stella Plus and Stella Mod.',
  3: 'For players who want to use Stella Mod on two devices and take advantage of PC optimization and technical assistance. Includes better support.',
  4: 'The highest tier with activation on three devices and priority support. Ideal for those who expect the best possible experience and the fastest response times.',
 },
 UnknownBenefit: 'Okänd förmån',
 prices: {
  MonthlyPrice: 'Månadspris',
  Every3Months: 'Varje 3 månader',
  YearlyPrice: 'Årspris',
 },
 Everything: {
  FromTheTier: 'Allt från nivå {0}',
  FromTheTier12: 'Everything from Tier 1 & 2',
  FromTheTier12And3: 'Allt från nivå 1, 2 och 3',
 },
 TierName: 'Nivånamn',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Roll på Discord-servern',
  VisibilityOnTheSubscriberList: 'Synlighet på prenumerantlistan',
  NoAdsOnTheWebsiteForPatrons: 'Inga annonser på webbplatsen för patrons (SPC)',
  CompletePostArchive: 'Komplett arkiv av inlägg',
  RayTracingForGenshin: 'Ray Tracing för Genshin',
  AbilityToUseMods: 'Möjlighet att använda mods i spelet (mer roligt)',
  BigCollectionOfShadersMods: 'Stort urval av shaders och mods utan några buggar',
  GameUIWithoutVisibleShaders: 'Spelgränssnitt utan synliga shaders',
  HideYourUIDInTheGame: 'Dölj din UID i spelet',
  PresetsFromPreviousVersions: 'Förinställningar från tidigare versioner',
  EarlyAccessToStellaMod: 'Tidigt tillgång till Stella Mod',
  FasterDownloadServers: 'Snabbare nedladdningsservrar',
  BlockGameTelemetry: 'Genshin Impact telemetry blocking for greater privacy',
  VariousGenshinImpactAccountGiveaways: 'Olika giveaways för Genshin Impact-konton',
  NewWindowsTerminalAppearance: 'Ny Windows Terminal (WT) utseende',
  OptimizationOfYourComputerForBestPerformance: 'Optimering av din PC för den bästa prestanda',
  AssistanceRelatedToPCsOrLaptops: '"Hjälp relaterad till PC eller bärbara datorer',
  StandardSupport: 'Standard support for Stella Plus & Stella Mod',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Aktivering möjlig på {u}{0} enheter{/u}',
 },
 CompareAvailablePlans: 'Jämför tillgängliga planer',
 SPCNote: '* SPC — Sefinek Patron Center (patrons.sefinek.net)',
 benefitsShort: {
  IntDevice: '{0} enhet',
  IntDevices: '{0} enheter',
  RoleOnTheDiscordServer: 'Roll på Discord-servern',
  VisibilityOnTheSubscriberList: 'Synlighet på prenumerantlistan',
  NoAdsOnTheWebsiteForPatrons: 'Inga annonser på webbplatsen för patrons',
  CompletePostArchive: 'Komplett arkiv av inlägg',
  RayTracingForGenshin: 'Ray Tracing för Genshin',
  BigCollectionOfShadersMods: 'Stort urval av shaders och moddar',
  AbilityToUseMods: 'Abilitet till att använda moddar',
  GameUIWithoutVisibleShaders: 'Spelgränssnitt utan synliga shaders',
  HideYourUIDInTheGame: 'Dölj din UID i spelet',
  PresetsFromPreviousVersions: 'Förinställningar från tidigare versioner',
  EarlyAccessToStellaMod: 'Tidigt tillgång till Stella Mod',
  FasterDownloadServers: 'Snabbare nedladdningsservrar',
  BlockGameTelemetry: 'Blocks in-game telemetry & tracking',
  VariousGenshinImpactAccountGiveaways: 'Olika giveaways för Genshin Impact-konton',
  NewWindowsTerminalAppearance: 'Ny Windows Terminal (WT) utseende',
  OptimizationOfYourComputerForBestPerformance: 'Optimering av din dator',
  AssistanceRelatedToPCsOrLaptops: '"Hjälp relaterad till PC eller bärbara datorer',
  StandardSupport: 'Standard support',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Aktivering möjlig på',
 },
 SubscribeNow: 'Prenumerera nu',
 ChangeYourTier: 'Ändra din nivå',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Subscription is treated as voluntary support for the project, not as a purchase of a service or product. The benefits you receive are solely a token of appreciation. If you prefer, you can continue using the free version — the decision is entirely yours.',
 PaymentSystem: {
  Header: 'Betalningssystem',
  Text:
   'Payments are securely processed by {0} — a globally trusted platform supporting all major cards and payment methods. Your financial data is encrypted and protected throughout the entire transaction, so you can subscribe with complete peace of mind.',
 },
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Regler för användning av våra förmåner och patronage',
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
  WeAreProcessingYourRequest: 'Vi behandlar din förfrågan...',
  SubscribingInProgress:
   'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction.',
  ChangingTheTierInProgress:
   'We need some time to change your tier. Give us a moment, and we promise everything will go smoothly.',
 },
};
