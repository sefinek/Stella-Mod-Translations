// Main
exports.default = {
 And: 'и',
 From: 'из',
 In: 'в',
 Back: 'Назад',
 GoBack: 'Назад',
 GoBackTo: 'Вернуться к {0}',
 Next: 'Далее',
 DiscordServer: 'Discord-сервер',
 DiscordServerTooltip: 'Приглашение на наш Discord-сервер',
 YourBrowserDoesNotSupportVideoTag: 'Ваш браузер не поддерживает тег видео.',
 YourBrowserDoesNotSupportAudioTag: 'Ваш браузер не поддерживает тег аудио.',
 tooltips: {
  OfficialDiscordServer: 'Официальный Discord-сервер',
  SupportThisProject: 'Добровольно поддержать этот проект',
  GitHubRepositories: 'Репозитории GitHub',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Ошибка 400: Плохой запрос',
  InvalidURL: 'Возвращаемый URL-адрес недействителен.',
  ReferrerURL: 'URL-адрес вашего реферера',
  CorrectRefURL: 'Правильный URL',
 },
 wrongOs: {
  DeviceIsNotSupported: 'Устройство не поддерживается',
  OperatingSysIsNotSupported: 'Мы сожалеем! Ваша операционная система {0} пока не поддерживается.',
  ViewSupportedSystems: 'Посмотреть поддерживаемые системы »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'Мы не можем найти ZIP-файл на сервере',
  NewUpdateIsComing:
   'Новое обновление на подходе? Возможно...\nВ любом случае, пожалуйста, повторите попытку позже или сообщите об этом на нашем сервере Discord.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Сделайте шаг в новый мир с улучшенной графикой для Genshin Impact',
 Text1:
  'Улучшенная графика, тщательно проработанные шейдеры, разблокировка FPS и моды обеспечивают игрокам еще более лучшие игровые впечатления, чем когда-либо прежде!',
 Text2:
  'Откройте для себя мир Тейвата заново благодаря новой графике, которая сделает ваш игровой процесс более реалистичным. Специальный лаунчер упрощает весь процесс, позволяя игрокам быстро и легко включиться в действие.',
 FinalText:
  'Не ждите, скачивайте прямо сейчас! Поднимите свой игровой процесс на новый уровень. Погрузитесь в расширенный мир Тейвата и создайте незабываемые моменты. Получайте удовольствие!',
 Download: 'Скачать',
 DownloadTooltip: 'Нажмите здесь, чтобы загрузить 64-разрядный установщик для Windows 10 и 11.',
 StelaModPlusTooltip:
  'Получите доступ к платной версии Stella Mod Plus и насладитесь многочисленными преимуществами и улучшенными игровыми возможностями!',
 Documentation: 'Документация',
 DocumentationTooltip: 'Проверьте системные требования, рекомендуемые настройки игры и многое другое!',
 Gallery: 'Галерея',
 GalleryTooltip: 'Посмотрите скриншоты из игры с использованием ReShade.',
 Videos: 'Видео',
 VideosTooltip: 'Посмотрите наши видеоролики, демонстрирующие работу мода и лаунчера.',
 Statistics: 'Статистика',
 StatisticsTooltip:
  'Проверьте, сколько человек в данный момент играет в Genshin Impact, используя Stella Mod. Также просмотрите другую статистику.',
 Feedback: 'Обратная связь',
 FeedbackTooltip: 'Поделитесь своим мнением о моей работе и Stella Mod.',
 Support: 'Поддержка',
 SupportTooltip: 'Нажмите здесь, если вам нужна помощь.',
 HomePage: 'Домашняя страница',
 HomePageTooltip: 'Домашняя страница - Официальный сайт Sefinek',
 PlayMusic: 'Включить музыку',
 FetchingData: 'Получение данных...',
 Version: 'Версия',
 TheVersionWithoutCaps: 'версия',
 DownloadCount: 'Количество загрузок',
 LastDownload: 'Последняя загрузка',
 FeedbackOnTrustpilot: 'Отзывы на Trustpilot',
 captchaModal: {
  AreYouARobot: 'Вы робот?',
  FailedToVerifyCaptcha: 'Не удалось проверить капчу: {0}',
  FailedToVerifyCaptchaStatusCode:
   'Не удалось проверить капчу (код состояния: {0}). Перезагрузите сайт и повторите попытку.',
 },
 mirrorModal: {
  SelectADownloadSource: 'Выбрать источник загрузки',
  ByCompany: 'По компании',
  ByLocation: 'По местоположению',
  InstallViaWinGet: 'Установить через WinGet',
  LauncherVersion: 'Версия лаунчера:',
  MirrorsAreCurrentlyUnavailable:
   'Зеркала в настоящее время отключены или недоступны для этой категории. Пожалуйста, проверьте это позже или свяжитесь с администратором.',
  ChecksumHasBeenSuccessfullyCopied: 'Контрольная сумма {0} была успешно скопирована в буфер обмена!',
  FailedToCopyChecksumTryAgain:
   'Не удалось скопировать контрольную сумму {0} в буфер обмена. Пожалуйста, попробуйте еще раз.',
 },
 finalModal: {
  ThankYouForDownloading: 'Благодарим вас за загрузку',
  BecomeAStellaModSubscriber:
   'Станьте подписчиком Stella Mod Plus и получите доступ к дополнительным преимуществам, таким как возможность одновременного использования 3DMigoto, FPS Unlocker и ReShade, большая коллекция безошибочных модов, повышенная безопасность (блокировка телеметрии и аналитики), пакет новейших шейдеров, дополнение для предотвращения наложения фильтров на пользовательский интерфейс (UI), пресеты Ray Tracing и многое другое!',
  JoinOurDiscordServerToReceiveNotifications:
   'Присоединяйтесь к нашему серверу Discord, чтобы получать уведомления о последних обновлениях, функциях и других объявлениях. Свяжитесь с создателем, если у вас возникнут вопросы или проблемы. Мы всегда готовы помочь. Желаем вам отличного дня или ночи!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview:
   'Оставьте отзыв на {a}trustpilot.com{/a} после тестирования программного обеспечения!',
  TheTotalNumberOfDownloadsNowIs: 'Общее количество скачиваний',
  NoProblem: 'Нет проблем',
 },
 tooltips: {
  ShareYourFeedbackOnTrustpilot: 'Поделитесь своим отзывом на Trustpilot! Мы будем вам очень признательны.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Галерея - Номер страницы',
 GalleryCompareReleases: 'Галерея - Сравните релизы:',
 ScreenshotsAreAvailableInHighQuality:
  'Скриншоты доступны в высоком качестве. Их загрузка может занять некоторое время.',
 WebsiteIsNotSupportedOnMobileDevices: 'Этот сайт не поддерживается на мобильных устройствах.',
 SomeImageCanBeOutdated: 'Некоторые изображения могут быть устаревшими!',
 SeeComparesFromTheOtherVersions: 'Посмотрите сравнения с другими версиями',
 SeeTheComparisonBetween: 'Посмотрите сравнение между...',
 ThePageYouAreCurrentlyOnDisplaysAComparison:
  'На странице, на которой вы сейчас находитесь, отображается сравнение различных версий релизов.',
 OldVersion: 'Старая версия',
 NewVersion: 'Новая версия',
 WithMod: 'С модом',
 WithoutMod: 'Без мода',
 BonusScreenshot: 'Бонус+Скриншот\n',
 tooltips: {
  GoBackToMainGalleryPage: 'Вернуться к основной странице галереи',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Поделитесь своим мнением',
 IfYouLikeThisProjectSupportMe:
  'Если вам понравился этот проект, рассмотрите возможность {1}подписаться{/1} на мой канал на YouTube, поставить {2}звезду{/2} на GitHub или {3}поддержать меня{/3} другим способом.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  'Кроме того, если у вас есть какие-либо комментарии или предложения, не стесняйтесь присоединиться к нашему серверу Discord и поделиться ими с нами.',
 btn: {
  BelowYTVideo: 'Ниже мое видео на YouTube',
  OnTheDiscordServer: 'На сервере Discord',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'Нажмите здесь, чтобы перейти на страницу YouTube.',
  GiveAStarToMyReposOnGitHub: 'Дайте звезду моим репозиториям на GitHub, которые вам нравятся.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: 'Смотреть видео на YouTube',
 IfYouWantToRecordNewVideo:
  'Если вы хотите записать и загрузить видео о Stella Mod на YouTube, пожалуйста, свяжитесь со мной. Ссылка на ваше видео будет добавлена на эту страницу.',
 DeprecatedMovies: 'Утратившие актуальность фильмы',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  'Эти фильмы относятся к предыдущим версиям Stella Mod и уже считаются устаревшими.',
 FirstModRelease: 'Релиз первого мода',
 Gameplay: 'Игровой процесс',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Переключить размытие',
 ToggleShadows: 'Переключить тени',
 ToggleBorder: 'Переключить границы',
 ToggleBackground: 'Переключить фон',
 LiveStats: 'Статистика в прямом эфире',
 OnlineNow: 'Сейчас онлайн',
 Playing: 'Играют',
 AllDownloadsNow: 'Все загрузки сейчас',
 Player: 'игрок',
 Players: 'игроки',
 BelowYouFindTheStatsOfStellaMod:
  'Ниже вы найдёте статистику по Stella Mod. Часовой пояс: Европа/Варшава GMT+01:00 (Польша). Хорошего дня!',
 PerCountry: 'На страну',
 PerHour: 'В час',
 PerDay: 'В день',
 PerMonth: 'В месяц',
 PerYear: 'За год',
 All: 'Все',
 Unique: 'Уникальный',
 FirstOpens: 'Первые открытия',
 Peak: 'Пик',
 Connections: 'Соединения',
 NumberOfGameLaunches: 'Количество запущенных игр',
 FullDate: 'Полная версия',
 Version: 'Версия',
 NumberOfDownloads: 'Количество скачиваний',
 DownloadsPerCountry: 'Количество скачиваний по странам',
 DownloadsPerCountryAll: 'Количество скачиваний по странам [Все]',
 DownloadsPerVersionAll: 'Количество скачиваний по версиям [Все]',
 DownloadsPerVersionUnique: 'Количество скачиваний по версиям [Уникальные]',
 DownloadsPerDayAll: 'Количество скачиваний в день [Все]',
 DownloadsPerDayUnique: 'Скачиваний в день [Уникальные]',
 DownloadsPerMonthAll: 'Скачиваний в месяц [Все]',
 DownloadsPerMonthUnique: 'Скачиваний в месяц [Уникальные]',
 DownloadsPerYearAll: 'Скачиваний в год [Все]',
 DownloadsPerYearUnique: 'Скачиваний в год [Уникальные]',
 StellaModDownloadsHeader: '📥 Stella Mod загрузки',
 StellaModDownloadsText:
  'Вот статистика загрузок Stella Mod непосредственно с нашего официального сайта. Обратите внимание, что некоторые исторические данные могут быть неполными, так как мы начали собирать статистику спустя значительное время после глобального выпуска Stella Mod.<br>Всегда проверяйте, что вы загружаете Stella Mod из надежного источника, например, <a href="https://sefinek.net">sefinek.net</a>.',
 TotalDownloads: '🔢 Общее количество загрузок',
 LastDownload: '⏰ Последняя загрузка',
 YourTimezone: '🪐 Ваш часовой пояс',
 StellaModLauncherStatsHeader: '😻 Статистика Stella Mod Launcher',
 StellaModLauncherStatsText:
  'В этой категории мы представляем подробную статистику о том, сколько раз программа Stella Mod Launcher была запущена. Сюда входят данные о том, как часто запускается приложение.',
 AllStellaLauncherOpens: 'Открывается Лаунчер Stella',
 UniqueStellaLauncherOpens: 'Открывается уникальный лаунчер Stella',
 OpensPerCountry: 'Открытия по странам',
 OpensPerVersion: 'Открытия по версиям',
 OpensPerSysVersion: 'Открытия по системным версиям',
 OpensPerSysBuild: 'Открытия по системным билдам',
 WsConnectionsHeader: '🌍 Соединения и операции с WebSocket',
 WsConnectionsText:
  'В этом разделе вы ознакомитесь с показателями WebSocket, включая графики, отображающие частоту сообщений и сердцебиений на почасовой, ежедневной, ежемесячной и годовой основе.',
 Broadcast: 'Трансляция',
 Heartbeats: 'Сердцебиение',
 CryptographicOperationsHeader: '🔠 Криптографические операции',
 CryptographicOperationsText:
  'В этом разделе представлен полный обзор криптографической деятельности в наших системах, а также статистические данные о процессах шифрования и дешифрования. Посетители могут изучить графики, отображающие частоту и успешность криптографических операций за различные промежутки времени. Криптография играет важнейшую роль в обеспечении безопасности приложений и коммуникаций, гарантируя конфиденциальность, целостность и подлинность данных, тем самым защищая от несанкционированного доступа и киберугроз. Она жизненно важна для обеспечения безопасности цифровых транзакций и сохранения конфиденциальности конфиденциальной информации.',
 Encryption: '🧶 Шифрование',
 Decryption: '🔧 Расшифровка',
 Misc: '🧵 Разное',
 PerOneHour: 'В час',
 PerOneDay: 'В день',
 PerOneMonth: 'В месяц',
 PerOneYear: 'За год',
 ErrorRatePerDay: 'Количество ошибок в день',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Таблица контента',
 1: {
  Introduction: '{0}. {1} Введение',
  Requirements: '{0}. {1} Требования',
  WhatIs: '{0}. {1} Что такое...',
  FAQ: '{0}. {1} ЧаВо',
  Support: '{0}. {1} Поддержка',
  Troubleshooting: '{0}. {1} Устранение неполадок',
  TermsOfUse: '{0}. {1} Правила использования',
  PrivacyPolicy: '{0}. {1} Политика конфиденциальности',
  Installation: '{0}. {1} Установка',
 },
 Changelogs: 'Список изменений',
 2: {
  Versions: '{0}. {1} Версии {2}.x.x',
  DeprecatedReleases: '{0}. {1} Устаревшие релизы',
 },
 LicensesAndCredits: 'Лицензии и Титры',
 3: {
  StellaModLicense: '{0}. {1} Лицензия Stella Mod',
  ReShadeLicense: '{0}. {1} Лицензия ReShade',
  FPSUnlockerLicense: '{0}. {1} Лицензия Разблокировщика FPS',
  MigotoLicense: '{0}. {1} Лицензия 3DMigoto',
  Credits: '{0}. {1} Титры',
 },
};

// GET /genshin-stella-mod/repositories
exports.github = {
 AllReposOnGithub: 'Все репозитории на GitHub',
 IfYouWantToBecomeContributor:
  'Если вы хотите стать участником, просто {a}создайте новый запрос{/a}. Большое вам спасибо и удачного написания кода!',
 Translations: 'Переводы',
 Resources: 'Ресурсы',
 Documentation: 'Документация',
 More: 'Подробнее »',
 Deprecated: 'Утраченные',
 InstallationWizard: 'Мастер установки',
 UnlockedReShade: 'Разблокирован ReShade',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Выберите уровень подписки',
 IfYouAreInterestedInTheBenefits:
  'Если вас заинтересовали преимущества, изучите все доступные уровни, чтобы понять, какой из них соответствует вашим предпочтениям. Надеемся, вы найдете тот, который вас заинтересует!',
 IfYouHaveAnyQuestions:
  'У вас есть вопросы? Не стесняйтесь присоединиться к нашему серверу Discord или связаться с нами по электронной почте. Контактную информацию можно найти на главной странице этого сайта.',
 Recommended: 'Рекомендуем',
 tiers: {
  1: {
   // name: 'Little Kitten',
   description:
    'Базовый уровень для тех, кто просто хочет поддержать проект. Это хорошее решение, например, если вы перестали играть в Genshin Impact и больше не нуждаетесь в преимуществах игры, но все еще хотите добровольно поддержать проект.',
  },
  2: {
   // name: 'Favorite Cat',
   description:
    'Средний уровень, который предлагает большинство основных преимуществ, связанных с игрой Genshin Impact. Идеально подходит для игроков, которые хотят пользоваться дополнительными модификациями и улучшениями в игре.',
  },
  3: {
   // name: 'Safety Kitten',
   description:
    'Расширенный уровень для доверенных пользователей, который предлагает особые преимущества, такие как системы защиты от банов, раздачи призов для учетных записей Genshin Impact и настраиваемый внешний вид интерфейса Windows Terminal.',
  },
  4: {
   // name: 'Keyboard Cat',
   description:
    'Для игроков, которые хотят максимально использовать возможности своих устройств и наслаждаться игрой без каких-либо сбоев. Этот вариант предлагает услуги по оптимизации компьютера (через TeamViewer или AnyDesk), техническую поддержку и возможность использовать пакетные файлы в Stella Mod Launcher.',
  },
  5: {
   // name: 'Cute Kitty',
   description:
    'Предоставляет доступ ко всем преимуществам, предлагаемым на нижних уровнях, а также позволяет активировать их на большинстве устройств. Идеально подходит для игроков, которые ценят работу создателя Stella Mod и хотят поддержать дальнейшее развитие и серверную инфраструктуру проекта.',
  },
 },
 UnknownBenefit: 'Неизвестная польза',
 prices: {
  MonthlyPrice: 'Месячная стоимость',
  Every3Months: 'Каждые 3 месяца',
  YearlyPrice: 'Годовая цена',
 },
 Everything: {
  FromTheTier: 'Все с уровня {0}',
  FromTheTier12: 'Все из Уровня 1 и 2',
  FromTheTier12And3: 'Все из уровней 1, 2 и 3',
  FromAllTheTiers: 'Все со всех уровнях',
 },
 TierName: 'Наименование яруса',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Роль в Discord сервере',
  VisibilityOnTheSubscriberList: 'Видимость в списке подписчиков',
  NoAdsOnTheWebsiteForPatrons: 'Никакой рекламы на сайте для поситителей (SPC)',
  CompletePostArchive: 'Полный архив сообщений',
  RayTracingForGenshin: 'RTX для Genshin',
  AbilityToUseMods: 'Возможность использования модов в игре (больше для веселья)',
  BigCollectionOfShadersMods: 'Большая коллекция шейдеров и модов без багов',
  GameUIWithoutVisibleShaders: 'Игровой интерфейс без видемости шейдеров',
  HideYourUIDInTheGame: 'Скрыть свой UID в игре',
  PresetsFromPreviousVersions: 'Пресеты из предыдущих версий',
  EarlyAccessToStellaMod: 'Ранний доступ к Stella Mod',
  FasterDownloadServers: 'Быстрые сервера загрузки',
  CarefullyDesignedSecuritySystem: 'Тщательно продуманная система безопасности',
  MuchGreaterPrivacy: 'Гораздо большая конфиденциальность',
  VariousGenshinImpactAccountGiveaways: 'Различные подарки для аккаунта Genshin Impact',
  NewWindowsTerminalAppearance: 'Новый внешний вид терминала Windows (WT)',
  // ImagesAndInterestingVideosOfTheDevsCats: 'Photos and interesting videos of the developer\'s cats',

  OptimizationOfYourComputerForBestPerformance:
   'Оптимизация вашего компьютера для достижения максимальной производительности',
  AssistanceRelatedToPCsOrLaptops: 'Помощь, связанная с ПК или ноутбуками',
  ActivationPossibleOn: 'Активация возможна на {u}{0} устройствах{/u}',
 },
 CompareAvailablePlans: 'Сравните доступные планы',
 benefitsShort: {
  IntDevice: '{0} устройство',
  IntDevices: '{0} устройства',
  RoleOnTheDiscordServer: 'Роль в Discord сервере',
  VisibilityOnTheSubscriberList: 'Видимость в списке подписчиков',
  NoAdsOnTheWebsiteForPatrons: 'Отсутствие рекламы на сайте для патронов',
  CompletePostArchive: 'Полный архив сообщений',
  RayTracingForGenshin: 'RTX для Genshin',
  BigCollectionOfShadersMods: 'Большая коллекция шейдеров и модов',
  AbilityToUseMods: 'Возможность использования модов в игре (больше для веселья)',
  GameUIWithoutVisibleShaders: 'Игровой интерфейс без видемости шейдеров',
  HideYourUIDInTheGame: 'Скрыть свой UID в игре',
  PresetsFromPreviousVersions: 'Пресеты из предыдущих версий',
  EarlyAccessToStellaMod: 'Ранний доступ к Stella Mod',
  FasterDownloadServers: 'Быстрые сервера загрузки',
  CarefullyDesignedSecuritySystem: 'Тщательно продуманная система безопасности',
  MuchGreaterPrivacy: 'Much better privacy (game telemetry blocking)',
  VariousGenshinImpactAccountGiveaways: 'Различные подарки для аккаунта Genshin Impact',
  NewWindowsTerminalAppearance: 'Новый внешний вид терминала Windows (WT)',
  // ImagesAndInterestingVideosOfTheDevsCats: 'Dev\'s cat images & interesting videos',

  OptimizationOfYourComputerForBestPerformance: 'Оптимизация вашего компьютера',
  AssistanceRelatedToPCsOrLaptops: 'Помощь, связанная с ПК или ноутбуками',
  ActivationPossibleOn: 'Активация возможна на',
 },
 SubscribeNow: 'Подписаться сейчас',
 ChangeYourTier: 'Изменить уровень подписки',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Ваша подписка - это добровольная поддержка, а не покупка услуги. Все получаемые вами бонусы - это наша благодарность за вашу помощь.',
 IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost:
  'При желании вы можете продолжать использовать бесплатную версию без каких-либо платежей. Решение полностью остается за вами.',
 Crypto: 'Криптовалюта',
 IfYouWantToMakeAPaymentUsingCrypto:
  'Если вы хотите произвести оплату с помощью криптовалюты, пожалуйста, свяжитесь с разработчиком.',
 IAcceptPaymentsOnlyOnBinance: 'Я принимаю платежи только на Binance.',
 CloseModal: 'Закрыть',
 PaymentSystem: {
  Header: 'Платежная система',
  1: 'Мы рады сообщить, что наша безопасная платежная система работает на {0}. Благодаря Stripe вы можете с уверенностью совершать платежи, зная, что ваша финансовая информация обрабатывается с высочайшим уровнем безопасности.',
  2: 'Stripe - это надежная и признанная во всем мире платформа для обработки платежей, которая гарантирует нашим клиентам бесперебойные и безопасные транзакции. Покупаете ли вы товары, подписываетесь на услуги или делаете пожертвования, надежная инфраструктура Stripe обеспечивает надежную и бесперебойную работу платежной системы.',
  3: 'Пожалуйста, будьте уверены, что ваши конфиденциальные платежные данные будут зашифрованы и защищены на протяжении всего процесса оплаты. Ваша конфиденциальность и безопасность - наши главные приоритеты.',
 },
 AcceptedPaymentMethods: 'Доступные способы оплаты',
 IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer:
  'Если вы хотите произвести оплату с помощью криптовалют или прямого банковского перевода, пожалуйста, свяжитесь с разработчиком.',
 BankName: 'Название Банка:',
 AccountNumber: 'Номер счёта:',
 SWIFTOrBICCode: 'Код SWIFT/BIC:',
 IBAN: 'IBAN (международный номер банковского счета):',
 AskTheAdministratorForIt: 'Попросите об этом администратора',
 PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees:
  'Пожалуйста, обратите внимание, что покупатель несет ответственность за покрытие любых банковских комиссий, связанных с любой транзакцией.',
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Правила использования наших преимуществ и спонсорства',
  SubText1:
   'Мы хотели бы выразить искреннюю благодарность всем нашим подписчикам за поддержку и доверие. Прежде чем приступить к оформлению подписки Stella Mod Plus, пожалуйста, ознакомьтесь с несколькими важными рекомендациями.',
  HeaderText2: 'Эксклюзивно для подписчиков:',
  SubText2:
   'Каждый токен активации преимуществ является персональным и должен оставаться конфиденциальным. Передача, распространение или публикация токенов запрещены. Используйте их исключительно для личного пользования и в рамках установленных правил.',
  HeaderText3: 'Подписка не означает приобретение программного обеспечения 3DMigoto:',
  SubText3:
   'Став подписчиком Stella Mod Plus, вы не приобретаете 3DMigoto как цифровой продукт для покупки. Вместо этого, став нашим подписчиком, вы получаете доступ к использованию 3DMigoto только в Лаунчере Stella Mod.',
  Footer:
   'Мы искренне ценим ваше участие в нашем сообществе и поддержку нашей работы. При возникновении вопросов или сложностей, пожалуйста, {a}свяжитесь с нами{/a}. Ваше понимание этих правил и активность крайне важны для развития нашего проекта.',
 },
 request: {
  WeAreProcessingYourRequest: 'Мы обрабатываем ваш запрос...',
  SubscribingInProgress:
   'Подготавливаем всё необходимое для вас. Не покидайте страницу, пожалуйста!\nБуквально через мгновение мы перенаправим вас на безопасную страницу оплаты. ^w^',
  ChangingTheTierInProgress:
   'Нам нужно немного времени, чтобы изменить ваш уровень подписки! Пожалуйста, подождите чуть-чуть, и мы обещаем, что всё пройдёт гладко! ^w^',
 },
};
