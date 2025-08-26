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
  'Geliştirilmiş grafikler, titizlikle hazırlanmış gölgelendiriciler, etkileyici FPS sınırı kaldırma ve modlar oyunculara her zamankinden daha iyi bir oyun deneyimi sunuyor!',
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
  SelectADownloadSource: 'Bir indirme kaynağı seçiniz',
  ByCompany: 'Şirket tarafından',
  ByLocation: 'Konuma göre',
  InstallViaWinGet: 'WinGet aracılığıyla yükleyin',
  LauncherVersion: 'Başlatıcı sürümü:',
  MirrorsAreCurrentlyUnavailable:
   'Sunucular şu anda bu kategori için devre dışı veya kullanılamıyor. Lütfen daha sonra tekrar kontrol edin veya yöneticiyle iletişime geçin.',
  ChecksumHasBeenSuccessfullyCopied: '{0} Doğrulama kodu başarıyla panoya kopyalandı!',
  FailedToCopyChecksumTryAgain: '{0} Doğrulama kodu panoya kopyalanamadı. Lütfen tekrar deneyin.',
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
  "Bu projeyi beğendiyseniz, {1} YouTube kanalıma abone olmayı{/1}, GitHub'da {2} bir yıldız{/2} vermeyi veya {3} beni başka bir yol ile desteklemeyi{/3} düşünün.",
 AdditionallyIfYouHaveCommentsOrSuggestions:
  'Ayrıca, herhangi bir yorumunuz veya öneriniz varsa, Discord sunucumuza katılmaktan ve bunları bizimle paylaşmaktan çekinmeyin.',
 btn: {
  BelowYTVideo: 'YouTube videoma',
  OnTheDiscordServer: 'Discord sunucusunda',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'YouTube sayfasına gitmek için buraya tıklayın.',
  GiveAStarToMyReposOnGitHub: "GitHub'daki depolarımdan beğendiklerinize bir yıldız verin.",
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
 Peak: 'Üst Limit',
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
  'Bu kategoride, Stella Mod Başlatıcısı programının kaç kez başlatıldığına dair ayrıntılı istatistikler sunuyoruz. Bu, uygulamanın ne sıklıkla başlatıldığına ilişkin verileri içerir.',
 AllStellaLauncherOpens: 'Başlatılan Tüm Stella başlatıcılar',
 UniqueStellaLauncherOpens: 'Benzersiz Başlatılan Stella Başlatıcılar',
 OpensPerCountry: 'Ülke başına başlatılma',
 OpensPerVersion: 'Sürüm başına başlatılma',
 OpensPerSysVersion: 'Sistem sürümü başına başlatılma',
 OpensPerSysBuild: 'Sistem yapısı başına başlatılma',
 WsConnectionsHeader: '🌍 WebSocket bağlantıları ve işlemleri',
 WsConnectionsText:
  'Bu bölümde, mesajların ve isteklerin sıklığını saatlik, günlük, aylık ve yıllık olarak gösteren grafikler de dahil olmak üzere WebSocket ölçümlerini görmüş olun.',
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
 AllReposOnGithub: 'GitHub üzerindeki tüm depolar',
 IfYouWantToBecomeContributor: 'Katkıda bulunmak istiyorsanız, yeni bir {a}Talep{/a} oluşturmanız yeterlidir!',
 Translations: 'Çeviriler',
 Resources: 'Kaynaklar',
 Documentation: 'Belgeler',
 More: 'Dahası',
 Deprecated: 'Kullanım dışı',
 InstallationWizard: 'Kurulum sihirbazı',
 UnlockedReShade: 'Sınırı kaldırılmış ReShade',
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
    "Cihazlarının yeteneklerini en üst düzeye çıkarmak ve herhangi bir kesinti olmadan oyunun tadını çıkarmak isteyen oyuncular için. Bu seçenek, bilgisayar optimizasyon hizmetleri (TeamViewer veya AnyDesk aracılığıyla), teknik destek ve Stella Mod Başlatıcısın'da ki dosyaları kullanma olanağı sunar.",
  },
  5: {
   name: 'Sevimli Kedicik',
   description:
    "Daha düşük seviyelerde bulunan tüm avantajlara erişim sağlar ve ayrıca çoğu cihazda aktivasyona izin verir. Stella Mod'un yapımcısının çalışmalarını takdir eden ve daha fazla geliştirmeyi ve projenin sunucu altyapısını desteklemek isteyen oyuncular için idealdir.",
  },
 },
 UnknownBenefit: 'Bilinmeyen avantaj',
 prices: {
  MonthlyPrice: 'Aylık fiyat',
  Every3Months: 'Her 3 ayda bir',
  YearlyPrice: 'Yıllık fiyat',
 },
 Everything: {
  FromTheTier: "Seviye {0}'den itibaren mevcut olan her şey",
  FromTheTier12: "Seviye 1 ve 2'den itibaren mevcut olan her şey",
  FromTheTier12And3: "Seviye 1, 2 ve 3'den itibaren mevcut olan her şey",
  FromAllTheTiers: 'Tüm Seviyelerden itibaren mevcut olan Her Şey',
 },
 TierName: 'Seviye ismi',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Discord sunucusunda özel rol',
  VisibilityOnTheSubscriberList: 'Abone listesinde görünürlük',
  NoAdsOnTheWebsiteForPatrons: 'Aboneler için web sitesinde reklam yok (SPC)',
  PrivateClipsFromCSGO: "CS:GO ve CS2'den özel klipler",
  CompletePostArchive: 'Gönderi arşivinin tamamı',
  RayTracingForGenshin: 'Genshin için Işın İzleme',
  AbilityToUseMods: 'Oyunda modları kullanabilme (daha eğlenceli)',
  BigCollectionOfShadersMods: 'En sorunsuz dopdolu gölgelendirici ve mod koleksiyonu',
  GameUIWithoutVisibleShaders: 'Özel grafik efektleri olmadan oyun arayüzü',
  HideYourUIDInTheGame: 'Oyun içinde Kimliğinizi gizleyin',
  PresetsFromPreviousVersions: 'Önceki sürümlerden hazır ayarlar',
  EarlyAccessToStellaMod: 'Stella moduna erken erişim',
  FasterDownloadServers: 'Yüksek hızlı veri sunucuları',
  CarefullyDesignedSecuritySystem: 'Özenle tasarlanmış güvenlik sistemi',
  MuchGreaterPrivacy: 'Çok daha iyi gizlilik',
  VariousGenshinImpactAccountGiveaways: 'Çeşitli Genshin Impact hesap hediyeleri',
  NewWindowsTerminalAppearance: 'Yeni Windows Terminali (WT) görünümü',
  ImagesAndInterestingVideosOfTheDevsCats: 'Geliştiricinin kedilerinin fotoğrafları ve ilginç videoları',
  OptimizationOfYourComputerForBestPerformance: 'Bilgisayarınız için en iyi performans optimizasyonu',
  AssistanceRelatedToPCsOrLaptops: 'Masaüstü bilgisayarlar veya dizüstü bilgisayarlarla ilgili yardım',
  ActivationPossibleOn: 'Etkinleştirme {u}{0} cihazlarda mümkündür{/u}',
 },
 CompareAvailablePlans: 'Mevcut planları karşılaştırın',
 benefitsShort: {
  IntDevice: '{0} cihaz',
  IntDevices: '{0} cihazlar',
  RoleOnTheDiscordServer: 'Discord sunucusundaki rol',
  VisibilityOnTheSubscriberList: 'Abone listesinde görünürlük',
  NoAdsOnTheWebsiteForPatrons: 'Aboneler için reklamsız web sitesi',
  PrivateClipsFromCSGO: "CS:GO ve CS2'den özel klipler",
  CompletePostArchive: 'Gönderi arşivinin tamamı',
  RayTracingForGenshin: 'Genshin için Işın İzleme',
  BigCollectionOfShadersMods: 'Dopdolu gölgelendirici ve mod koleksiyonu',
  AbilityToUseMods: 'Mod kullanabilme',
  GameUIWithoutVisibleShaders: 'Özel grafik efektleri olmadan oyun arayüzü',
  HideYourUIDInTheGame: 'Oyun içinde Kimliğinizi gizleyin',
  PresetsFromPreviousVersions: 'Önceki sürümlerden hazır ayarlar',
  EarlyAccessToStellaMod: 'Stella moduna erken erişim',
  FasterDownloadServers: 'Yüksek hızlı veri sunucuları',
  CarefullyDesignedSecuritySystem: 'Özenle tasarlanmış güvenlik sistemi',
  MuchGreaterPrivacy: 'Çok daha iyi gizlilik',
  VariousGenshinImpactAccountGiveaways: 'Çeşitli Genshin Impact hesap hediyeleri',
  NewWindowsTerminalAppearance: 'Yeni Windows Terminal (WT) görünümü',
  ImagesAndInterestingVideosOfTheDevsCats: 'Geliştiricinin kedisinin resimleri ve ilginç videoları',
  OptimizationOfYourComputerForBestPerformance: 'Bilgisayarınız için optimizasyon',
  AssistanceRelatedToPCsOrLaptops: 'Bilgisayarlar veya dizüstü bilgisayarlarla ilgili yardım',
  ActivationPossibleOn: 'Etkinleştirme mümkün',
 },
 SubscribeNow: 'Şimdi abone ol',
 ChangeYourTier: 'Seviyenizi değiştirin',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Abonelik, bir hizmet veya ürünün satın alınması olarak değil, gönüllü destek olarak değerlendirilir. Aldığınız avantajlar yalnızca bir takdir göstergesidir.',
 IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost:
  'Dilerseniz ücretsiz sürümü hiçbir ücret ödemeden kullanmaya devam edebilirsiniz. Karar tamamen size kalmış.',
 Crypto: 'Kripto',
 IfYouWantToMakeAPaymentUsingCrypto:
  'Kripto para kullanarak bir ödeme yapmak istiyorsanız, lütfen geliştiriciyle iletişime geçin.',
 IAcceptPaymentsOnlyOnBinance: 'Sadece Binance üzerinden ödeme kabul ediyorum.',
 CloseModal: 'Pencereyi kapat',
 PaymentSystem: {
  Header: 'Ödeme sistemi',
  1: 'Güvenli ödeme sistemimizin {0} tarafından desteklendiğini duyurmaktan mutluluk duyuyoruz. Stripe ile, finansal bilgilerinizin en üst düzeyde güvenle ele alındığını bilerek rahatlıkla ödeme yapabilirsiniz.',
  2: "Stripe, müşterilerimiz için sorunsuz ve güvenli işlemleri garanti eden, iyi güvenilen ve dünya çapında tanınan bir ödeme işleme platformudur. İster ürün satın alıyor, ister hizmetlere abone oluyor veya bağış yapıyor olun, Stripe'ın sağlam altyapısı güvenilir ve sorunsuz bir ödeme deneyimi sağlar.",
  3: 'Lütfen hassas ödeme bilgilerinizin tüm ödeme süreci boyunca şifrelendiğinden ve korunduğundan emin olun. Gizliliğiniz ve güvenliğiniz bizim için en önemli önceliklerimizdir.',
 },
 AcceptedPaymentMethods: 'Kabul edilen ödeme yöntemleri',
 IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer:
  'Kripto para birimleri veya doğrudan banka havalesi kullanarak ödeme yapmak istiyorsanız, lütfen geliştirici ile iletişime geçin.',
 BankName: 'Banka ismi:',
 AccountNumber: 'Hesap Numarası:',
 SWIFTOrBICCode: 'SWIFT/BIC Kodu:',
 IBAN: 'IBAN:',
 AskTheAdministratorForIt: 'Yöneticiden isteyin',
 PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees:
  'Herhangi bir işlemle ilgili banka ücretlerinin karşılanmasından alıcının sorumlu olduğunu lütfen unutmayın.',
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Avantajlarımızı ve özelliklerimizi kullanma kuralları',
  SubText1:
   'Destekleri ve güvenleri için tüm abonelerimize en içten şükranlarımızı sunarız. Stella Mod Plus aboneliğine devam etmeden önce, lütfen birkaç önemli yönergeyi öğrenmek için bir dakikanızı ayırın.',
  HeaderText2: 'Avantajlar yalnızca abonelere yöneliktir:',
  SubText2:
   'Her bir özellik kullanım anahtarı bir aboneye atanır ve gizli tutulmalıdır. Lütfen avantajlarınızı başkalarıyla paylaşmayın veya çevrimiçi olarak dağıtmayın. Bunları yalnızca kişisel kullanımınız için ve yönergelerimize uygun olarak kullanın.',
  HeaderText3: 'Abone olmak 3DMigoto yazılımını satın almak anlamına gelmez:',
  SubText3:
   "Stella Mod Plus'a abone olmakla, 3DMigoto'yu satın almak için dijital bir ürün olarak edinmiş olmuyorsunuz. Bunun yerine, abonemiz olarak, yalnızca Stella Mod Başlatıcısının uygulama içerisinde 3DMigoto'yu kullanabilme erişimine sahip olursunuz.",
  Footer:
   'Topluluğumuzdaki varlığınız ve çalışmalarımıza verdiğiniz destek için teşekkür ederiz. Herhangi bir sorunuz veya endişeniz varsa, lütfen {a}bizimle iletişime geçin{/a}. Katılımınız ve bu kuralları anlamanız projemiz için son derece önemlidir.',
 },
 request: {
  WeAreProcessingYourRequest: 'Talebinizi işleme alıyoruz...',
  SubscribingInProgress:
   'Her şeyi hazır hale getirmek için biraz zamana ihtiyacımız var. Lütfen bu sayfada kalın ve bize bir dakika verin! Kısa süre içinde sizi işleminizi güvenle tamamlayabileceğiniz güvenli bir ödeme sayfasına yönlendireceğiz. ^w^',
  ChangingTheTierInProgress:
   'Seviyenizi değiştirmek için biraz zamana ihtiyacımız var! Bize biraz zaman verin, her şeyin yolunda gideceğine söz veriyoruz. ^w^',
 },
};
