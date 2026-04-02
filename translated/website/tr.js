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
 Version: 'Versiyon',
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
 PerOneHour: 'Saat başına',
 PerOneDay: 'Gün başına',
 PerOneMonth: 'Ay başına',
 PerOneYear: 'Yıl başına',
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
  "If you're interested in the benefits, explore all the available tiers to find one that suits your preferences. Do you have any questions? Join our Discord server or open a ticket at {0} — we typically respond within 24 hours.",
 Recommended: 'Önerilen',
 tiers: {
  1: "Basic tier for those who simply want to support the project. A good solution if you've stopped playing Genshin Impact and no longer need the in-game benefits, but still want to voluntarily support the project.",
  2: 'The recommended tier offering a full set of Stella Mod benefits — Ray Tracing, mods, shaders, privacy protection, giveaways, and much more. Includes standard support for Stella Plus and Stella Mod.',
  3: 'For players who want to use Stella Mod on two devices and take advantage of PC optimization and technical assistance. Includes better support.',
  4: 'The highest tier with activation on three devices and priority support. Ideal for those who expect the best possible experience and the fastest response times.',
 },
 UnknownBenefit: 'Bilinmeyen avantaj',
 prices: {
  MonthlyPrice: 'Aylık fiyat',
  Every3Months: 'Her 3 ayda bir',
  YearlyPrice: 'Yıllık fiyat',
 },
 Everything: {
  FromTheTier: "Seviye {0}'den itibaren mevcut olan her şey",
  FromTheTier12: 'Everything from Tier 1 & 2',
  FromTheTier12And3: "Seviye 1, 2 ve 3'den itibaren mevcut olan her şey",
 },
 TierName: 'Seviye ismi',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Discord sunucusunda özel rol',
  VisibilityOnTheSubscriberList: 'Abone listesinde görünürlük',
  NoAdsOnTheWebsiteForPatrons: 'Aboneler için web sitesinde reklam yok (SPC)',
  CompletePostArchive: 'Gönderi arşivinin tamamı',
  RayTracingForGenshin: 'Genshin için Işın İzleme',
  AbilityToUseMods: 'Oyunda modları kullanabilme (daha eğlenceli)',
  BigCollectionOfShadersMods: 'En sorunsuz dopdolu gölgelendirici ve mod koleksiyonu',
  GameUIWithoutVisibleShaders: 'Özel grafik efektleri olmadan oyun arayüzü',
  HideYourUIDInTheGame: 'Oyun içinde Kimliğinizi gizleyin',
  PresetsFromPreviousVersions: 'Önceki sürümlerden hazır ayarlar',
  EarlyAccessToStellaMod: 'Stella moduna erken erişim',
  FasterDownloadServers: 'Yüksek hızlı veri sunucuları',
  BlockGameTelemetry: 'Genshin Impact telemetry blocking for greater privacy',
  VariousGenshinImpactAccountGiveaways: 'Çeşitli Genshin Impact hesap hediyeleri',
  NewWindowsTerminalAppearance: 'Yeni Windows Terminali (WT) görünümü',
  OptimizationOfYourComputerForBestPerformance: 'Bilgisayarınız için en iyi performans optimizasyonu',
  AssistanceRelatedToPCsOrLaptops: 'Masaüstü bilgisayarlar veya dizüstü bilgisayarlarla ilgili yardım',
  StandardSupport: 'Standard support for Stella Plus & Stella Mod',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Etkinleştirme {u}{0} cihazlarda mümkündür{/u}',
 },
 CompareAvailablePlans: 'Mevcut planları karşılaştırın',
 SPCNote: '* SPC — Sefinek Patron Center (patrons.sefinek.net)',
 benefitsShort: {
  IntDevice: '{0} cihaz',
  IntDevices: '{0} cihazlar',
  RoleOnTheDiscordServer: 'Discord sunucusunda özel rol',
  VisibilityOnTheSubscriberList: 'Abone listesinde görünürlük',
  NoAdsOnTheWebsiteForPatrons: 'Aboneler için reklamsız web sitesi',
  CompletePostArchive: 'Gönderi arşivinin tamamı',
  RayTracingForGenshin: 'Genshin için Işın İzleme',
  BigCollectionOfShadersMods: 'Dopdolu gölgelendirici ve mod koleksiyonu',
  AbilityToUseMods: 'Mod kullanabilme',
  GameUIWithoutVisibleShaders: 'Özel grafik efektleri olmadan oyun arayüzü',
  HideYourUIDInTheGame: 'Oyun içinde Kimliğinizi gizleyin',
  PresetsFromPreviousVersions: 'Önceki sürümlerden hazır ayarlar',
  EarlyAccessToStellaMod: 'Stella moduna erken erişim',
  FasterDownloadServers: 'Yüksek hızlı veri sunucuları',
  BlockGameTelemetry: 'Blocks in-game telemetry & tracking',
  VariousGenshinImpactAccountGiveaways: 'Çeşitli Genshin Impact hesap hediyeleri',
  NewWindowsTerminalAppearance: 'Yeni Windows Terminali (WT) görünümü',
  OptimizationOfYourComputerForBestPerformance: 'Bilgisayarınız için optimizasyon',
  AssistanceRelatedToPCsOrLaptops: 'Masaüstü bilgisayarlar veya dizüstü bilgisayarlarla ilgili yardım',
  StandardSupport: 'Standard support',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Etkinleştirme mümkün',
 },
 SubscribeNow: 'Şimdi abone ol',
 ChangeYourTier: 'Seviyenizi değiştirin',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Subscription is treated as voluntary support for the project, not as a purchase of a service or product. The benefits you receive are solely a token of appreciation. If you prefer, you can continue using the free version — the decision is entirely yours.',
 PaymentSystem: {
  Header: 'Ödeme sistemi',
  Text:
   'Payments are securely processed by {0} — a globally trusted platform supporting all major cards and payment methods. Your financial data is encrypted and protected throughout the entire transaction, so you can subscribe with complete peace of mind.',
 },
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Avantajlarımızı ve özelliklerimizi kullanma kuralları',
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
  WeAreProcessingYourRequest: 'Talebinizi işleme alıyoruz...',
  SubscribingInProgress:
   'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction.',
  ChangingTheTierInProgress:
   'We need some time to change your tier. Give us a moment, and we promise everything will go smoothly.',
 },
};
