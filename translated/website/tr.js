// Main
exports.default = {
 And: 've',
 From: 'itibaren',
 In: 'içinde',
 Back: 'Geri',
 GoBack: 'Geri dön',
 GoBackTo: "{0}'a geri dön",
 Next: 'Sonraki',
 DiscordServer: 'Discord sunucusu',
 DiscordServerTooltip: 'Discord sunucumuza davet',
 YourBrowserDoesNotSupportVideoTag: 'Tarayıcınız video etiketini desteklemiyor.',
 YourBrowserDoesNotSupportAudioTag: 'Tarayıcınız ses etiketini desteklemiyor.',
 tooltips: {
  OfficialDiscordServer: 'Resmi Discord sunucusu',
  SupportThisProject: 'Bu projeyi gönüllü olarak destekleyin',
  GitHubRepositories: 'GitHub depoları',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Hata 400: Hatalı İstek',
  InvalidURL: "Geri dönüş URL'si geçersiz.",
  ReferrerURL: "Yönlendiren URL'niz",
  CorrectRefURL: 'Doğru URL',
 },
 wrongOs: {
  DeviceIsNotSupported: 'Cihaz desteklenmiyor',
  OperatingSysIsNotSupported: 'Üzgünüz! İşletim sisteminiz {0}, henüz desteklenmiyor.',
  ViewSupportedSystems: 'Desteklenen sistemleri görüntüle »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'Sunucuda ZIP dosyasını bulamıyoruz',
  NewUpdateIsComing:
   'Yeni güncelleme geliyor mu? Muhtemelen...\nHer neyse, lütfen daha sonra tekrar deneyin veya bu sorunu Discord sunucumuzda bildirin.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Genshin Impact için Geliştirilmiş Grafiklerle Yeni Bir Dünyaya Adım Atın',
 Text1:
  'Geliştirilmiş grafikler, titizlikle hazırlanmış gölgelendiriciler, etkileyici FPS kilit açma ve modlar oyunculara her zamankinden daha iyi bir oyun deneyimi sunuyor!',
 Text2:
  'Oyununuzu daha gerçekçi hale getiren yeni grafiklerle Teyvat dünyasını yeniden keşfedin. Özel bir başlatıcı tüm süreci kolaylaştırarak oyuncuların aksiyona hızlı ve kolay bir şekilde atlamasını sağlıyor.',
 FinalText:
  "Beklemeyin, şimdi indirin! Oyununuzu bir sonraki seviyeye taşıyın. Kendinizi Teyvat'ın gelişmiş dünyasına bırakın ve unutulmaz anlar yaratın. İyi eğlenceler!",
 Download: 'İndir',
 DownloadTooltip: 'Windows 10 ve 11 için x64-bit yükleyiciyi indirmek için buraya tıklayın.',
 StelaModPlusTooltip:
  "Stella Mod Plus'ın ücretli sürümüne erişin ve sayısız avantajın ve gelişmiş oyun deneyimlerinin tadını çıkarın!",
 Documentation: 'Belgeler',
 DocumentationTooltip: 'Sistem gereksinimlerini, önerilen oyun ayarlarını ve daha fazlasını kontrol edin!',
 Gallery: 'Galeri',
 GalleryTooltip: 'ReShade enjekte edilmiş oyunda ki ekran görüntülerine bakın.',
 Videos: 'Videolar',
 VideosTooltip: 'Modu ve başlatıcıyı gösteren videolarımızı izleyin.',
 Statistics: 'İstatistikler',
 StatisticsTooltip:
  'Şu anda kaç kişinin Stella Modunu kullanarak Genshin Impact oynadığını kontrol edin. Ayrıca çeşitli diğer istatistiklere de göz atın.',
 Feedback: 'Geri bildirim',
 FeedbackTooltip: 'Çalışmalarım ve Stella Mod hakkındaki görüşlerinizi paylaşın.',
 Support: 'Destek',
 SupportTooltip: 'Yardıma ihtiyacınız varsa buraya tıklayın.',
 HomePage: 'Ana Sayfa',
 HomePageTooltip: "Ana sayfa - Sefinek'in resmi web sitesi",
 PlayMusic: 'Müziği Çal',
 FetchingData: 'Veri getiriliyor...',
 Version: 'Versiyon',
 TheVersionWithoutCaps: 'versiyon',
 DownloadCount: 'İndirilme sayısı',
 LastDownload: 'Son indirilme',
 FeedbackOnTrustpilot: "Trustpilot'ta Geri Bildirim",
 captchaModal: {
  AreYouARobot: 'Sen robot musun?',
  FailedToVerifyCaptcha: 'Captcha doğrulaması başarısız oldu: {0}',
  FailedToVerifyCaptchaStatusCode:
   'Captcha doğrulanamadı (hata kodu: {0}). Web sitesini yeniden yükleyin ve tekrar deneyin.',
 },
 mirrorModal: {
  SelectDownloadServer: 'İndirme sunucusunu seçin',
  Companies: 'Şirketler',
  Countries: 'Ülkeler',
  LauncherVersion: 'Başlatıcı sürümü:',
  MirrorsAreCurrentlyUnavailable:
   'Mirrors are currently disabled or unavailable for this category. Please check back later, or contact the administrator.',
  ChecksumHasBeenSuccessfullyCopied: 'The {0} checksum has been successfully copied to the clipboard!',
  FailedToCopyChecksumTryAgain: 'Failed to copy the {0} checksum to the clipboard. Please try again.',
 },
 finalModal: {
  ThankYouForDownloading: 'İndirdiğiniz için teşekkürler',
  BecomeAStellaModSubscriber:
   "3DMigoto, FPS Unlocker ve ReShade'i aynı anda kullanabilme, hatasız modlardan oluşan geniş bir koleksiyon, gelişmiş güvenlik (telemetri ve analizleri engelleme), en yeni gölgelendiricilerden oluşan bir paket, kullanıcı arayüzünde (UI) filtre kaplamalarını önleyen bir eklenti, Işın İzleme ön ayarları ve çok daha fazlası gibi ek avantajlara erişmek için Stella Mod Plus abonesi olun!",
  JoinOurDiscordServerToReceiveNotifications:
   'En son güncellemeler, özellikler ve diğer duyurular hakkında bilgilendirmeler almak için Discord sunucumuza katılın. Herhangi bir sorunuz varsa veya herhangi bir sorunla karşılaşırsanız içerik oluşturucu ile iletişime geçin. Her zaman yardıma hazırız. Harika bir gün veya gece geçirmeniz dileğiyle!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview:
   'Yazılımı test ettikten sonra {a}trustpilot.com{/a} adresinde bir inceleme bırakın!',
  TheTotalNumberOfDownloadsNowIs: 'Anlık toplam indirme sayısı',
  NoProblem: 'Sorun değil',
 },
 tooltips: {
  PageViews: 'Sayfa görüntülemeleri. İstatistikler 19 Ocak 2024 tarihinden itibaren toplanmıştır.',
  ShareYourFeedbackOnTrustpilot: "Görüşlerinizi Trustpilot'ta paylaşın! Çok memnun oluruz.",
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Galeri - Sayfa numarası',
 GalleryCompareReleases: 'Galeri - Sürümleri karşılaştırın:',
 ScreenshotsAreAvailableInHighQuality:
  'Yüksek kalitede ekran görüntüleri mevcuttur. Bunların yüklenmesi biraz zaman alabilir.',
 WebsiteIsNotSupportedOnMobileDevices: 'Bu web sitesi mobil cihazlarda desteklenmemektedir.',
 SomeImageCanBeOutdated: 'Bazı resimler güncel olmayabilir!',
 SeeComparesFromTheOtherVersions: 'Diğer sürümlerdeki karşılaştırmalara bakın',
 SeeTheComparisonBetween: 'Aralarındaki karşılaştırmaya bakın...',
 ThePageYouAreCurrentlyOnDisplaysAComparison:
  'Şu anda bulunduğunuz sayfada farklı sürümlerin karşılaştırması gösterilmektedir.',
 OldVersion: 'Eski sürüm',
 NewVersion: 'Yeni sürüm',
 WithMod: 'Modlu',
 WithoutMod: 'Modsuz',
 BonusScreenshot: 'Bonus ekran görüntüsü',
 tooltips: {
  GoBackToMainGalleryPage: 'Ana galeri sayfasına geri dön',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Görüşlerinizi paylaşın',
 IfYouLikeThisProjectSupportMe:
  "Bu projeyi beğendiyseniz, YouTube kanalıma {1} abone olmayı{/1}, GitHub'da {2} yıldız{/2} vermeyi veya {3} beni başka bir şekilde desteklemeyi{/3} düşünün.",
 IfYouHaveAnyFeedBackOrSuggestionsUseChat:
  'Ayrıca, herhangi bir düşünceniz veya öneriniz varsa, bunları doğrudan içerik oluşturucuya göndermek için sohbet özelliğini kullanmaktan çekinmeyin.',
 btn: {
  BelowYTVideo: 'Below my YouTube video',
  OnTheDiscordServer: 'On the Discord server',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'YouTube sayfasına gitmek için buraya tıklayın.',
  GiveAStarToMyReposOnGitHub: "GitHub'daki projelerimden beğendiklerinize bir yıldız verin.",
 },
};

// GET /genshin-stella-mod/support
exports.support = {
 SomeQuestions: 'Herhangi bir sorunuz var mı? Desteğe ihtiyacınız var mı?',
 DoYouHaveAnyIssuesOrQuestionsAboutMod:
  'Stella Mod ile ilgili herhangi bir sorununuz ya da sadece bir sorunuz var mı? Eğer öyleyse, bizimle iletişime geçmekten çekinmeyin! Ekibimiz, her türlü soru veya endişenizde size yardımcı olmak için burada.',
 WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures:
  'İster modun kurulumuyla ilgili yardıma ihtiyacınız olsun, ister modun özellikleriyle ilgili sorularınız olsun, size yardımcı olmak için buradayız.',
 PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions:
  "Topluluğumuzun da sorularınızı yanıtlamaya hazır olduğunu lütfen unutmayın. Bunu yapmak için Discord sunucumuza katılın veya GitHub'da yeni bir soru oluşturun.",
 SimplyClickOnTheChatIconInTheBottomRightCorner:
  "Sadece bir hesap oluşturun veya Sefinek Patron Center'da oturum açın ve {a} Lehçe veya İngilizce bir bilet{/a} gönderin. Stella Mod'un HoYoverse ile bağlantılı olmadığını lütfen unutmayın.",
 CreatANewTicket: 'Yeni bir bilet oluşturun',
 JoinToDiscordServer: 'Discord sunucusuna katılın',
 SendAnEmail: 'Bir e-posta gönderin',
 tooltips: {
  CreateANewTicket: 'SPC web sitesinde yeni bir bilet oluşturmak için buraya tıklayın.',
  JoinOurOfficialDiscordServer: 'Resmi Discord sunucumuza katılın.',
  SendAnEmailToTheDeveloper: 'Daha detaylı bir yanıt bekliyorsanız geliştiriciye bir e-posta gönderin.',
  ReturnTo: 'Şuraya dön: Genshin Stella Mod - İşte maceranız başlıyor.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: "YouTube'daki videoları izleyin",
 IfYouWantToRecordNewVideo:
  "Stella Mod hakkında bir video kaydetmek ve YouTube'a yüklemek istiyorsanız, lütfen benimle iletişime geçin. Videonuzun bağlantısı bu sayfaya eklenecektir.",
 DeprecatedMovies: 'Kullanım dışı filmler',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  "Filmler Stella Mod'un önceki sürümlerine aittir ve zaten eski olarak kabul edilirler.",
 FirstModRelease: 'İlk mod sürümü',
 Gameplay: 'Oynanış',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Bulanıklığı aç / kapat',
 ToggleShadows: 'Gölgeleri aç / kapat',
 ToggleBorder: 'Kenarları aç / kapat',
 ToggleBackground: 'Arka planı aç / kapat',
 LiveStats: 'Canlı istatistikler',
 OnlineNow: 'Şimdi çevrimiçi',
 Playing: 'Playing',
 AllDownloadsNow: 'Anlık tüm indirilmeler',
 Player: 'oyuncu',
 Players: 'oyuncular',
 BelowYouFindTheStatsOfStellaMod:
  "Aşağıda Stella Mod'un istatistiklerini bulacaksınız. Saat dilimi: Avrupa/Varşova GMT+01:00 (Polonya). İyi günler dilerim!",
 PerCountry: 'Ülke başına',
 PerHour: 'Saat başına',
 PerDay: 'Gün başına',
 PerMonth: 'Ay başına',
 PerYear: 'Yıl başına',
 All: 'Tümü',
 Unique: 'Benzersiz',
 FirstOpens: 'İlk başlatılmalar',
 Peak: 'Zirve',
 Connections: 'Connections',
 NumberOfGameLaunches: 'Başlatıcının başlatılma sayısı',
 FullDate: 'Tam tarih',
 Version: 'Sürüm',
 NumberOfDownloads: 'İndirilme sayısı',
 DownloadsPerCountry: 'Ülke başına indirilmeler',
 DownloadsPerCountryAll: 'Ülke başına indirilmeler [Tümü]',
 DownloadsPerVersionAll: 'Sürüm başına indirilme [Tümü]',
 DownloadsPerVersionUnique: 'Sürüm başına indirilme [Benzersiz]',
 DownloadsPerDayAll: 'Günlük indirilme sayısı [Tümü]',
 DownloadsPerDayUnique: 'Günlük indirilme sayısı [Benzersiz]',
 DownloadsPerMonthAll: 'Aylık indirilme sayısı [Tümü]',
 DownloadsPerMonthUnique: 'Aylık indirilme sayısı [Benzersiz]',
 DownloadsPerYearAll: 'Yıl başına indirilme [Tümü]',
 DownloadsPerYearUnique: 'Yıl başına indirilme [Benzersiz]',
 StellaModDownloadsHeader: '📥 Stella Mod indirilmeleri',
 StellaModDownloadsText:
  'İşte Stella Mod için doğrudan resmi web sitemizden indirilme istatistikleri. Stella Mod\'un dünya çapında piyasaya sürülmesinden önemli bir süre sonra istatistik toplamaya başladığımız için bazı geçmiş verilerin eksik olabileceğini lütfen unutmayın. <br>Her zaman Stella Mod\'u <a href="https://sefinek.net">sefinek.net</a> gibi güvenilir bir kaynaktan indirdiğinizden emin olun.',
 TotalDownloads: '🔢 Toplam indirilmeler',
 LastDownload: '⏰ Son indirilme',
 YourTimezone: '🪐 Saat diliminiz',
 StellaModLauncherStatsHeader: '😻 Stella Mod Başlatıcı istatistikleri',
 StellaModLauncherStatsText:
  'Bu kategoride, Stella Mod Launcher programının kaç kez başlatıldığına dair ayrıntılı istatistikler sunuyoruz. Bu, uygulamanın ne sıklıkla başlatıldığına ilişkin verileri içerir.',
 AllStellaLauncherOpens: 'Başlatılan Tüm Stella başlatıcılar',
 UniqueStellaLauncherOpens: 'Benzersiz Başlatılan Stella Başlatıcılar',
 OpensPerCountry: 'Ülke başına başlatılma',
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
