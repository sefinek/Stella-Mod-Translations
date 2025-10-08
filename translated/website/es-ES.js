// Main
exports.default = {
 And: 'y',
 From: 'desde',
 In: 'en',
 Back: 'Atrás',
 GoBack: 'Volver',
 GoBackTo: 'Regresar hasta {0}',
 Next: 'Siguiente',
 DiscordServer: 'Servidor de Discord',
 DiscordServerTooltip: 'Invitación a nuestro servidor de Discord',
 YourBrowserDoesNotSupportVideoTag: 'Tu navegador no es compatible con la etiqueta de video.',
 YourBrowserDoesNotSupportAudioTag: 'Tu navegador no es compatible con la etiqueta de video.',
 tooltips: {
  OfficialDiscordServer: 'Servidor oficial de Discord',
  SupportThisProject: 'Apoya este proyecto de manera voluntaria',
  GitHubRepositories: 'Repositorios de GitHub',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Error 400: Petición Inválida',
  InvalidURL: 'La URL de retorno es inválida.',
  ReferrerURL: 'Tú URL de referencia',
  CorrectRefURL: 'URL correcta',
 },
 wrongOs: {
  DeviceIsNotSupported: 'El dispositivo no es compatible',
  OperatingSysIsNotSupported: '¡Lo sentimos! Tu sistema operativo {0} aún no es compatible.',
  ViewSupportedSystems: 'Sistemas compatibles »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'No se puede encontrar el archivo ZIP en el servidor',
  NewUpdateIsComing:
   '¿Se acerca una nueva actualización? Quizás...\nNo te preocupes, puedes intentar de nuevo o informar de este problema en nuestro servidor de Discord.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Adéntrate en un nuevo mundo con gráficos mejorados para Genshin Impact',
 Text1:
  '¡Gráficos mejorados, shaders meticulosamente diseñados, un impresionante desbloqueo de FPS y mods brindan a los jugadores una experiencia de juego mejor que nunca!',
 Text2:
  'Redescubre el mundo de Teyvat con nuevos gráficos que hacen tu experiencia de juego más realista. Un launcher dedicado agiliza todo el proceso, permitiéndote sumergirte en la acción de forma rápida y sencilla.',
 FinalText:
  '¡No esperes más, descárgalo ahora! Lleva tu experiencia de juego al siguiente nivel. Sumérgete en el mundo mejorado de Teyvat y crea momentos inolvidables. ¡Diviértete!',
 Download: 'Descargar',
 DownloadTooltip: 'Haz clic aquí para descargar el instalador de 64 bits para Windows 10 y 11.',
 StelaModPlusTooltip:
  '¡Obtén acceso a la versión de pago de Stella Mod Plus y disfruta de numerosos beneficios y experiencias de juego mejoradas!',
 Documentation: 'Documentación',
 DocumentationTooltip: 'Consulta los requisitos del sistema, configuraciones de juego recomendadas y más.',
 Gallery: 'Galería',
 GalleryTooltip: 'Mira las capturas de pantalla del juego con ReShade inyectado.',
 Videos: 'Videos',
 VideosTooltip: 'Mira nuestros videos sobre el mod y el programa de lanzamiento.',
 Statistics: 'Estadísticas',
 StatisticsTooltip:
  'Mira cuántas personas están jugando actualmente a Genshin Impact con el Stella Mod. También explora diversas estadísticas.',
 Feedback: 'Comentarios',
 FeedbackTooltip: 'Comparte tu opinión sobre mi trabajo y Stella Mod.',
 Support: 'Soporte',
 SupportTooltip: 'Haz clic aquí si necesitas ayuda.',
 HomePage: 'Página principal',
 HomePageTooltip: 'Página principal - Sitio oficial de Sefinek',
 PlayMusic: 'Escuchar música',
 FetchingData: 'Descargando datos...',
 Version: 'Versión',
 TheVersionWithoutCaps: 'la versión',
 DownloadCount: 'Recuento de descargas',
 LastDownload: 'Última descarga',
 FeedbackOnTrustpilot: 'Reseñas en Trustpilot',
 captchaModal: {
  AreYouARobot: '¿Eres un robot?',
  FailedToVerifyCaptcha: 'Error al verificar el captcha: {0}',
  FailedToVerifyCaptchaStatusCode:
   'Error al verificar el captcha (código: {0}). Recarga la página y vuelve a intentarlo.',
 },
 mirrorModal: {
  SelectADownloadSource: 'Select a download source',
  ByCompany: 'By company',
  ByLocation: 'By location',
  InstallViaWinGet: 'Install via WinGet',
  LauncherVersion: 'Versión del launcher:',
  MirrorsAreCurrentlyUnavailable:
   'Los mirrors están actualmente deshabilitados o no disponibles para esta categoría. Por favor, revisa más tarde o contacta al administrador.',
  ChecksumHasBeenSuccessfullyCopied: '¡El checksum {0} ha sido copiado exitosamente a tu portapapeles!',
  FailedToCopyChecksumTryAgain: 'Error al copiar el checksum {0} al portapapeles. Por favor, inténtalo de nuevo.',
 },
 finalModal: {
  ThankYouForDownloading: 'Gracias por descargar',
  BecomeAStellaModSubscriber:
   '¡Hazte suscriptor de Stella Mod Plus para obtener acceso a beneficios adicionales, como la capacidad de usar 3DMigoto, FPS Unlocker y ReShade simultáneamente, una gran colección de mods sin errores, mayor seguridad (bloqueo de telemetría y análisis), un paquete de los shaders más recientes, un add-on para prevenir superposiciones de filtros en la interfaz de usuario (UI), presets de Ray Tracing y mucho más!',
  JoinOurDiscordServerToReceiveNotifications:
   'Únete a nuestro servidor de Discord para recibir notificaciones sobre las últimas actualizaciones, características y otros anuncios. Contacta al creador si tienes alguna pregunta o encuentras algún problema. Siempre estamos listos para ayudar. ¡Te deseamos un excelente día o noche!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview:
   '¡Deja una reseña en {a}trustpilot.com{/a} después de probar el software!',
  TheTotalNumberOfDownloadsNowIs: 'El número total de descargas es',
  NoProblem: 'De acuerdo',
 },
 tooltips: {
  ShareYourFeedbackOnTrustpilot: '¡Comparte tu opinión en Trustpilot! Lo agradeceríamos mucho.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Galería - Página número',
 GalleryCompareReleases: 'Galería - Comparar lanzamientos:',
 ScreenshotsAreAvailableInHighQuality:
  'Las capturas de pantalla están disponibles en alta calidad, por lo que podrián tardar un poco en cargar.',
 WebsiteIsNotSupportedOnMobileDevices: 'Este sitio web no es compatible en dispositivos moviles.',
 SomeImageCanBeOutdated: '¡Algunas imágenes pueden estar desactualizadas!',
 SeeComparesFromTheOtherVersions: 'Ver comparaciones sobre las nuevas versiones',
 SeeTheComparisonBetween: 'Ver la comparación entre...',
 ThePageYouAreCurrentlyOnDisplaysAComparison:
  'La página en la que estás actualmente muestra una comparación de distintas versiones de lanzamiento.',
 OldVersion: 'Versión antigua',
 NewVersion: 'Nueva versión',
 WithMod: 'Con mods',
 WithoutMod: 'Sin mods',
 BonusScreenshot: 'Captura de pantalla extra',
 tooltips: {
  GoBackToMainGalleryPage: 'Regresar a la página principal de la galería',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Deja tus comentarios',
 IfYouLikeThisProjectSupportMe:
  'Si te ha gustado el proyecto, considera suscribirte a mi {1}canal de Youtube{/1}, dándole una estrella {2}en GitHub{/2} o {3}ayudándome{/3} de otras maneras.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  'Además, si tienes algún comentario o sugerencia, no dudes en unirte a nuestro servidor de Discord y compartirlos con nosotros.',
 btn: {
  BelowYTVideo: 'Debajo de mi video de YouTube',
  OnTheDiscordServer: 'En el servidor de Discord',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'Haz clic aquí para ir a la página de YouTube.',
  GiveAStarToMyReposOnGitHub: 'Dale una estrella a mis repositorios en GitHub, a los que te gusten.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: 'Ver videos en YouTube',
 IfYouWantToRecordNewVideo:
  'Si deseas grabar y subir un video sobre Stella Mod a YouTube, por favor contáctame. El enlace a tu video será agregado a esta página.',
 DeprecatedMovies: 'Videos obsoletos',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  'Estos videos pertenecen a versiones anteriores de Stella Mod y se consideran obsoletos.',
 FirstModRelease: 'Primer lanzamiento del mod',
 Gameplay: 'Gameplay',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Toggle blur',
 ToggleShadows: 'Toggle shadows',
 ToggleBorder: 'Toggle border',
 ToggleBackground: 'Toggle background',
 LiveStats: 'Live stats',
 OnlineNow: 'En línea ahora',
 Playing: 'Jugando',
 AllDownloadsNow: 'All downloads now',
 Player: 'jugador',
 Players: 'jugadores',
 BelowYouFindTheStatsOfStellaMod:
  'A continuación, encontrarás las estadísticas de Stella Mod. Zona horaria: Europa/Warsaw GMT+01:00 (Polonia). ¡Que tengas un buen día!',
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
 Version: 'Versión',
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
 WsConnectionsHeader: '🌍 Conexiones WebSocket y operaciones',
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
 PerOneHour: 'Por hora',
 PerOneDay: 'Por día',
 PerOneMonth: 'Por mes',
 PerOneYear: 'Por año',
 ErrorRatePerDay: 'Error rate per day',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Tabla de Contenidos',
 1: {
  Introduction: '{0}. {1} Introducción',
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
 Documentation: 'Documentación',
 More: 'More »',
 Deprecated: 'Deprecated',
 InstallationWizard: 'Installation wizard',
 UnlockedReShade: 'Unlocked ReShade',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Elige tu grado de suscripción',
 IfYouAreInterestedInTheBenefits:
  'Si estás interesado en los beneficios, por favor explora todos los grados de suscripción para ver cual se rige más a tus preferencias. Con suerte encontrarás a alguno que sea de tu interés!',
 IfYouHaveAnyQuestions:
  'Si tienes alguna pregunta, no dudes en contactarnos mediante discord o correo electrónico. Puedes encontrar la información de contacto en la pagina principal.',
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
    "Provides access to all the benefits offered in lower tiers, and also allows activation on the most devices. Ideal for players who appreciate the work of Stella Mod creator and want to support further development and the project's server infrastructure.",
  },
 },
 UnknownBenefit: 'Unknown benefit',
 prices: {
  MonthlyPrice: 'Precio mensual',
  Every3Months: 'Cada 3 meses',
  YearlyPrice: 'Precio anual',
 },
 Everything: {
  FromTheTier: 'Todo sobre el grado {0}',
  FromTheTier12: 'Todo sobre los grados 1 y 2',
  FromTheTier12And3: 'Todo sobre los grados 1, 2 y 3',
  FromAllTheTiers: 'Todo sobre todos los grados',
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
 SubscribeNow: 'Subscribete ahora',
 ChangeYourTier: 'Cambia tu plan',
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
  Header: 'Sistema de pago',
  1: 'Nos complace anunciar que nuestro sistema de pago funciona con {0}. Con Stripe, puedes hacer pagos de forma segura, sabiendo que tu información de pago está gestionada de la manera más segura.',
  2: 'Stripe es una plataforma de procesamiento de pago reconocida globalmente y seguura, que promete rapidez y seguridad en las transaciones de nuestros usuarios. Aunque estés comprando productos, suscribiendote a servicios o haciendo donaciones, la robusta infraestructura de Stripe asegura una experiencia de pagos segura y sin problemas.',
  3: 'Tenga la seguridad de que sus datos confidenciales de pago están encriptados y protegidos durante todo el proceso de pago. Su privacidad y seguridad son nuestras principales prioridades.',
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
