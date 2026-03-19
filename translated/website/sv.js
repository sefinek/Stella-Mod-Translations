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
  'Om du är intresserad av fördelarna, vänligen utforska alla tillgängliga nivåer för att se vilken som passar dina preferenser. Förhoppningsvis hittar du en som väcker ditt intresse!',
 IfYouHaveAnyQuestions:
  'Har du några frågor? Tveka inte att gå med i vår Discord-server eller kontakta oss via e-post. Du hittar kontaktinformation på huvudsidan på denna webbplats.',
 Recommended: 'Rekommenderad',
 tiers: {
  1: {
   // name: 'Little Kitten',
   description:
    'Grundnivå för de som bara vill stödja projektet. Detta är en bra lösning, till exempel om du slutade spela Genshin Impact och inte längre behöver förmånerna från spelet, men fortfarande vill stödja projektet frivilligt.',
  },
  2: {
   // name: 'Favorite Cat',
   description:
    'Mellannivå som erbjuder de flesta av de grundläggande förmånerna kopplade till spelet Genshin Impact. Idealisk för spelare som vill njuta av ytterligare modifieringar och förbättringar i spelet.',
  },
  3: {
   // name: 'Safety Kitten',
   description:
    'Avancerad nivå för betrodda användare, som erbjuder särskilda förmåner såsom system för att skydda mot ban, giveaways för Genshin Impact-konton och en anpassad utseende för Windows Terminal-gränssnittet.',
  },
  4: {
   // name: 'Keyboard Cat',
   description:
    '"För spelare som vill maximera sina enheters kapabiliteter och njuta av spelet utan störningar. Denna alternativ erbjuder datoroptimeringstjänster (via TeamViewer eller AnyDesk), teknisk support och möjlighet att använda batchfiler i Stella Mod Launcher.',
  },
  5: {
   // name: 'Cute Kitty',
   description:
    'Ger åtkomst till alla förmåner som erbjuds i lägre nivåer och tillåter även aktivering på flest enheter. Idealisk för spelare som uppskattar arbetet från Stella Mod-skaparen och vill stödja vidare utveckling och projektets serverinfrastruktur.',
  },
 },
 UnknownBenefit: 'Okänd förmån',
 prices: {
  MonthlyPrice: 'Månadspris',
  Every3Months: 'Varje 3 månader',
  YearlyPrice: 'Årspris',
 },
 Everything: {
  FromTheTier: 'Allt från nivå {0}',
  FromTheTier12: 'Allt från nivå 1 och 2',
  FromTheTier12And3: 'Allt från nivå 1, 2 och 3',
  FromAllTheTiers: 'Allt från alla nivåer',
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
  CarefullyDesignedSecuritySystem: 'Noggrant utformat säkerhetssystem',
  MuchGreaterPrivacy: 'Mycket större integritet',
  VariousGenshinImpactAccountGiveaways: 'Olika giveaways för Genshin Impact-konton',
  NewWindowsTerminalAppearance: 'Ny Windows Terminal (WT) utseende',
  // ImagesAndInterestingVideosOfTheDevsCats: 'Photos and interesting videos of the developer\'s cats',

  OptimizationOfYourComputerForBestPerformance: 'Optimering av din PC för den bästa prestanda',
  AssistanceRelatedToPCsOrLaptops: '"Hjälp relaterad till PC eller bärbara datorer',
  ActivationPossibleOn: 'Aktivering möjlig på {u}{0} enheter{/u}',
 },
 CompareAvailablePlans: 'Jämför tillgängliga planer',
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
  CarefullyDesignedSecuritySystem: 'Noggrant utformat säkerhetssystem',
  MuchGreaterPrivacy: 'Much better privacy (game telemetry blocking)',
  VariousGenshinImpactAccountGiveaways: 'Olika giveaways för Genshin Impact-konton',
  NewWindowsTerminalAppearance: 'Ny Windows Terminal (WT) utseende',
  // ImagesAndInterestingVideosOfTheDevsCats: 'Dev\'s cat images & interesting videos',

  OptimizationOfYourComputerForBestPerformance: 'Optimering av din dator',
  AssistanceRelatedToPCsOrLaptops: '"Hjälp relaterad till PC eller bärbara datorer',
  ActivationPossibleOn: 'Aktivering möjlig på',
 },
 SubscribeNow: 'Prenumerera nu',
 ChangeYourTier: 'Ändra din nivå',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Prenumerationen betraktas som frivilligt stöd, inte som ett köp av en tjänst eller produkt. De förmåner du får är enbart som ett tecken på uppskattning.',
 IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost:
  'Om du vill, kan du fortsätta använda den kostnadsfria versionen utan extra kostnad. Beslutet är helt upp till dig.',
 Crypto: 'Crypto',
 IfYouWantToMakeAPaymentUsingCrypto: 'Om du vill göra en betalning med kryptovaluta, vänligen kontakta utvecklaren.',
 IAcceptPaymentsOnlyOnBinance: 'Jag accepterar endast gireringar på Binance.',
 CloseModal: 'Stäng modal',
 PaymentSystem: {
  Header: 'Betalningssystem',
  1: 'Vi är glada att meddela att vårt säkra betalningssystem drivs av {0}. Med Stripe kan du tryggt genomföra betalningar, med vetskapen om att din finansiella information hanteras med högsta säkerhetsnivå.',
  2: 'Stripe är en välrenommerad och globalt erkänd betalningsplattform som garanterar smidiga och säkra transaktioner för våra kunder. Oavsett om du köper produkter, prenumererar på tjänster eller gör donationer, säkerställer Stripes robusta infrastruktur en pålitlig och problemfri betalningsupplevelse.',
  3: 'Var säker på att dina känsliga betalningsuppgifter är krypterade och skyddade under hela betalningsprocessen. Din integritet och säkerhet är vår högsta prioritet.',
 },
 AcceptedPaymentMethods: 'Accepterade betalningssätt',
 IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer:
  'Om du vill göra en betalning med kryptovalutor eller en direkt banköverföring, vänligen kontakta utvecklaren.',
 BankName: 'Bankens namn:',
 AccountNumber: 'Kontonummer:',
 SWIFTOrBICCode: 'SWIFT/BIC-koden:',
 IBAN: 'IBAN:',
 AskTheAdministratorForIt: 'Fråga administratören om det',
 PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees:
  'Vänligen notera att köparen är ansvarig för att täcka eventuella bankavgifter kopplade till transaktionen.',
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Regler för användning av våra förmåner och patronage',
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
