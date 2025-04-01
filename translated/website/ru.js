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
  SelectDownloadServer: 'Выберите сервер для загрузки',
  Companies: 'Компании',
  Countries: 'Страны',
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
 OnlineUsersWSHeader: 'Пользователи онлайн - WebSocket',
 OnlineUsersWSText:
  'В этом разделе представлен полный обзор подключения пользователей через наш сервер WebSocket, который позволяет в режиме реального времени получать информацию об активных пользователях. Изучите динамическую статистику, показывающую текущее количество пользователей в сети, пиковые уровни параллелизма и географическое распределение пользователей.',
 Online: '🔑 Онлайн',
 Peak1: '🍭 Пик',
 OnlinePerCountry: 'Онлайн по странам',
 OnlinePerHour: 'Онлайн в час',
 OnlinePerDay: 'Онлайн в день',
 OnlinePerMonth: 'Онлайн в месяц',
 OnlinePerYear: 'Онлайн в год',
 PlayersInTheGameHeader: '🎮 Игроки в игре',
 PlayersInTheGameText:
  'Узнайте, сколько игроков в настоящее время используют Stella Mod в Genshin Impact. Stella Mod Launcher работает прозрачно, никаких фоновых действий не происходит без вашего ведома, обеспечивая плавную работу и расширяя возможности Genshin Impact, при этом поддерживая высокие стандарты конфиденциальности и безопасности. Некоторые данные могут быть неточными.',
 PlayingNow: '💙 Играть сейчас',
 Peak2: '⬆️ Пик',
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
 PerOneYear: 'В год',
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
 CreationDate: 'Дата создания: {0}',
 FileSize: 'Размер файла: {0}',
 bytes: 'байт',
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
   name: 'Маленький котенок',
   description:
    'Базовый уровень для тех, кто просто хочет поддержать проект. Это хорошее решение, например, если вы перестали играть в Genshin Impact и больше не нуждаетесь в преимуществах игры, но все еще хотите добровольно поддержать проект.',
  },
  2: {
   name: 'Любимый кот',
   description:
    'Средний уровень, который предлагает большинство основных преимуществ, связанных с игрой Genshin Impact. Идеально подходит для игроков, которые хотят пользоваться дополнительными модификациями и улучшениями в игре.',
  },
  3: {
   name: 'Котенок в безопасности',
   description:
    'Расширенный уровень для доверенных пользователей, который предлагает особые преимущества, такие как системы защиты от банов, раздачи призов для учетных записей Genshin Impact и настраиваемый внешний вид интерфейса Windows Terminal.',
  },
  4: {
   name: 'Клавиатурный кот',
   description:
    'Для игроков, которые хотят максимально использовать возможности своих устройств и наслаждаться игрой без каких-либо сбоев. Этот вариант предлагает услуги по оптимизации компьютера (через TeamViewer или AnyDesk), техническую поддержку и возможность использовать пакетные файлы в Stella Mod Launcher.',
  },
  5: {
   name: 'Милая кошечка',
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
  PrivateClipsFromCSGO: 'Приватные клипы с CS:GO и CS2',
  CompletePostArchive: 'Полный архив сообщений',
  RayTracingForGenshin: 'RTX для Genshin',
  AbilityToUseMods: 'Возможность использования модов в игре (больше для веселья)',
  BigCollectionOfShadersMods: 'Большая коллекция шейдеров и модов без багов',
  GameUIWithoutVisibleShaders: 'Игровой интерфейс без видемости шейдеров',
  HideYourUIDInTheGame: 'Скрыть свой UID в игре',
  PresetsFromPreviousVersions: 'Пресеты из предыдущих версий',
  EarlyAccessToStellaMod: 'Ранний доступ к Stella ModFAQ',
  FasterDownloadServers: 'Быстрые сервера загрузки',
  CarefullyDesignedSecuritySystem: 'Тщательно продуманная система безопасности',
  MuchGreaterPrivacy: 'Гораздо большая конфиденциальность',
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
