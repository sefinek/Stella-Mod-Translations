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
  SelectDownloadServer: 'İndirme kaynağını seçin',
  Companies: 'Kaynaklar',
  Countries: 'Sunucular',
  LauncherVersion: 'Başlatıcı sürümü:',
  MirrorsAreCurrentlyUnavailable:
   'Sunucular şu anda bu kategori için devre dışı veya kullanılamıyor. Lütfen daha sonra tekrar kontrol edin veya yöneticiyle iletişime geçin.',
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
  PageViews: 'Site ziyaretleri. İstatistikler 19 Ocak 2024 tarihinden itibaren toplanmıştır.',
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
 SeeTheComparisonBetween: 'Aralarındaki farklara bakın...',
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
  'If you like this project, consider {1}subscribing{/1} to my YouTube channel, giving {2}a star{/2} on GitHub, or {3}supporting me{/3} in another way.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  "Additionally, if you have any comments or suggestions, don't hesitate to join our Discord server and share them with us.",
 btn: {
  BelowYTVideo: 'YouTube videoma',
  OnTheDiscordServer: 'Discord sunucusunda',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'YouTube sayfasına gitmek için buraya tıklayın.',
  GiveAStarToMyReposOnGitHub: "GitHub'daki projelerimden beğendiklerinize bir yıldız verin.",
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
 OnlineNow: 'Şuan çevrimiçi',
 Playing: 'Oynuyor',
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
 Connections: 'Bağlantılar',
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
 OpensPerVersion: 'Sürüm başına başlatılma',
 OpensPerSysVersion: 'Sistem sürümü başına başlatılma',
 OpensPerSysBuild: 'Sistem yapısı başına başlatılma',
 OnlineUsersWSHeader: '🌍 Çevrimiçi kullanıcılar - WebSocket',
 OnlineUsersWSText:
  'Bu bölüm, WebSocket sunucumuz aracılığıyla kullanıcı bağlantısına kapsamlı bir genel bakış sağlayarak aktif kullanıcılara ilişkin gerçek zamanlı bilgiler sunar. Mevcut çevrimiçi kullanıcı sayısını, en yüksek aktiflik seviyelerini ve kullanıcıların coğrafi dağılımını gösteren dinamik istatistikleri kontrol edin.',
 Online: '🔑 Çevrimiçi',
 Peak1: '🍭 Zirve',
 OnlinePerCountry: 'Ülke başına aktiflik',
 OnlinePerHour: 'Saat başına aktiflik',
 OnlinePerDay: 'Günlük aktiflik',
 OnlinePerMonth: 'Aylık aktiflik',
 OnlinePerYear: 'Yıllık aktiflik',
 PlayersInTheGameHeader: '🎮 Oyundaki oyuncular',
 PlayersInTheGameText:
  "Genshin Impact oyununda şu anda kaç oyuncunun Stella Modunu kullandığını görün. Stella Mod Launcher şeffaf bir şekilde çalışır, bilginiz dışında hiçbir arka plan eylemi gerçekleşmez ve yüksek gizlilik ve güvenlik standartlarını korurken Genshin Impact'i ek özelliklerle geliştiren sorunsuz bir deneyim sağlar. Bazı veriler hatalı olabilir.",
 PlayingNow: '💙 Şimdi oynanıyor',
 Peak2: '⬆️ Peak',
 WsConnectionsHeader: '🌍 WebSocket bağlantıları ve işlemleri',
 WsConnectionsText:
  'In this section, familiarize yourself with WebSocket metrics, including charts that display the frequency of messages and heartbeats on an hourly, daily, monthly, and yearly basis.',
 Broadcast: 'Aktiflik',
 Heartbeats: 'İstekler',
 CryptographicOperationsHeader: '🔠 Şifreleme işlemleri',
 CryptographicOperationsText:
  'Bu bölüm, şifreleme ve deşifreleme işlemlerine ilişkin istatistiksel veriler sunarak sistemlerimizdeki kriptografik faaliyetlere kapsamlı bir genel bakış sağlar. Ziyaretçiler, çeşitli zaman dilimlerinde kriptografik işlemlerin sıklığını ve başarı oranlarını gösteren grafikleri inceleyebilirler. Kriptografi, verilerin gizliliğini, bütünlüğünü ve gerçekliğini sağlayarak uygulamaların ve iletişimin güvenliğini sağlamada çok önemli bir rol oynar, böylece yetkisiz erişime ve siber tehditlere karşı koruma sağlar. Sanal işlemlerin korunması ve hassas bilgilerin gizliliğinin korunması için hayati önem taşır.',
 Encryption: '🧶 Şifreleme',
 Decryption: 'Deşifreleme',
 Misc: '🧵 Çeşitli',
 PerOneHour: 'Saatlik',
 PerOneDay: 'Günlük',
 PerOneMonth: 'Aylık',
 PerOneYear: 'Yıllık',
 ErrorRatePerDay: 'Günlük hata oranı',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Kaynaklar',
 1: {
  Introduction: '{0}. {1} Giriş',
  Requirements: '{0}. {1} Gereksinimler',
  WhatIs: '{0}. {1} Ne oldu...',
  FAQ: '{0}. {1} SSS',
  Support: '{0}. {1} Destek',
  Troubleshooting: '{0}. {1} Sorun Giderme',
  TermsOfUse: '{0}. {1} Kullanım Koşulları',
  PrivacyPolicy: '{0}. {1} Gizlilik Politikası',
  Installation: '{0}. {1} Kurulum',
 },
 Changelogs: 'Değişiklikler',
 2: {
  Versions: '{0}. {1} Sürümler {2}.x.x',
  DeprecatedReleases: '{0}. {1} Kullanımdan kaldırılan sürümler',
 },
 LicensesAndCredits: 'Lisanslar ve Emeği geçenler',
 3: {
  StellaModLicense: '{0}. {1} Stella Mod lisansı',
  ReShadeLicense: '{0}. {1} ReShade lisansı',
  FPSUnlockerLicense: '{0}. {1} FPS Unlocker lisansı',
  MigotoLicense: '{0}. {1} 3DMigoto lisansı',
  Credits: '{0}. {1} Emeği geçenler',
 },
 CreationDate: 'Oluşturulma tarihi: {0}',
 FileSize: 'Dosya boyutu: {0}',
 bytes: 'bayt',
};

// GET /genshin-stella-mod/repositories
exports.github = {
 AllReposOnGithub: "GitHub'daki tüm projeler",
 IfYouWantToBecomeContributor: 'Katkıda bulunmak istiyorsanız, yeni bir {a}Talep{/a} oluşturmanız yeterlidir!',
 Translations: 'Çeviriler',
 Resources: 'Kaynaklar',
 Documentation: 'Belgeler',
 More: 'Dahası',
 Deprecated: 'Kullanım dışı',
 InstallationWizard: 'Kurulum sihirbazı',
 UnlockedReShade: 'Unlocked ReShade',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Abonelik seviyenizi seçin',
 IfYouAreInterestedInTheBenefits:
  'Avantajlarla ilgileniyorsanız, hangisinin tercihlerinize uygun olduğunu görmek için lütfen mevcut tüm kademeleri inceleyin. Umarım ilginizi çekecek bir tane bulursunuz!',
 IfYouHaveAnyQuestions:
  'Herhangi bir sorunuz var mı? Discord sunucumuza katılmaktan veya e-posta yoluyla bizimle iletişime geçmekten çekinmeyin. İletişim bilgilerini bu web sitesinin ana sayfasında bulabilirsiniz.',
 Recommended: 'Önerilen',
 tiers: {
  1: {
   name: 'Küçük Kedicik',
   description:
    'Sadece projeyi desteklemek isteyenler için temel seviye. Örneğin, Genshin Impact oynamayı bıraktıysanız ve artık oyunun faydalarına ihtiyacınız yoksa, ancak yine de projeyi gönüllü olarak desteklemek istiyorsanız, bu iyi bir çözümdür.',
  },
  2: {
   name: 'Favori Kedicik',
   description:
    'Genshin Impact oyunuyla ilişkili temel avantajların çoğunu sunan orta seviye. Oyunda ek değişikliklerin ve geliştirmelerin keyfini çıkarmak isteyen oyuncular için idealdir.',
  },
  3: {
   name: 'Güvenlik Kedisi',
   description:
    'Engellenmelere karşı koruma sağlayan sistemler, Genshin Impact hesapları için hediyeler ve Windows Terminal arayüzü için özel bir görünüm gibi özel avantajlar sunan güvenilir kullanıcılar için gelişmiş seviye.',
  },
  4: {
   name: 'Klavye Kedisi',
   description:
    "Cihazlarının yeteneklerini en üst düzeye çıkarmak ve herhangi bir kesinti olmadan oyunun tadını çıkarmak isteyen oyuncular için. Bu seçenek, bilgisayar optimizasyon hizmetleri (TeamViewer veya AnyDesk aracılığıyla), teknik destek ve Stella Mod Launcher'da ki dosyaları kullanma olanağı sunar.",
  },
  5: {
   name: 'Sevimli Kedicik',
   description:
    "Daha düşük kademelerde sunulan tüm avantajlara erişim sağlar ve ayrıca birden fazla cihazda etkinleştirmeye izin verir. Stella Mod'un yaratıcısının çalışmalarını takdir eden ve daha fazla gelişmeyi ve projenin sunucu altyapısını desteklemek isteyen oyuncular için idealdir.",
  },
 },
 UnknownBenefit: 'Bilinmeyen avantaj',
 prices: {
  MonthlyPrice: 'Aylık fiyat',
  Every3Months: 'Her 3 ayda bir',
  YearlyPrice: 'Yıllık fiyat',
 },
 Everything: {
  FromTheTier: "Seviye {0}'dan itibaren kalan her şey",
  FromTheTier12: "Seviye 1 ve 2'den kalan her şey",
  FromTheTier12And3: "Seviye 1, 2 ve 3'ten kalan her şey",
  FromAllTheTiers: 'Tüm Seviyelerdeki Kalan Her Şey',
 },
 TierName: 'Seviye ismi',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Discord sunucusunda özel rol',
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
