// Main
exports.default = {
 And: 'i',
 From: 'z',
 In: 'w',
 Back: 'Wróć',
 GoBack: 'Wstecz',
 GoBackTo: 'Wróć do {0}',
 Next: 'Dalej',
 DiscordServer: 'Serwer Discord',
 DiscordServerTooltip: 'Zaproszenie na nasz serwer Discord',
 YourBrowserDoesNotSupportVideoTag: 'Twoja przeglądarka nie obsługuje tagu wideo.',
 YourBrowserDoesNotSupportAudioTag: 'Twoja przeglądarka nie obsługuje tagu audio.',
 tooltips: {
  OfficialDiscordServer: 'Oficjalny serwer Discord',
  SupportThisProject: 'Wesprzyj ten projekt dobrowolnie',
  GitHubRepositories: 'Repozytoria GitHub',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Błąd 400: Zła prośba',
  InvalidURL: 'Wsteczny adres URL jest nieprawidłowy.',
  ReferrerURL: 'Twój adres URL strony odsyłającej',
  CorrectRefURL: 'Poprawny adres URL strony odsyłającej',
 },
 wrongOs: {
  DeviceIsNotSupported: 'Urządzenie nie jest obsługiwane',
  OperatingSysIsNotSupported: 'Wybacz! Twój system operacyjny {0}, nie jest jeszcze wspierany.',
  ViewSupportedSystems: 'Wyświetl wspierane systemy »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'Nie możemy znaleźć pliku ZIP na serwerze',
  NewUpdateIsComing:
   'Nadchodzi nowa aktualizacja? Możliwe...\nW każdym razie spróbuj ponownie później lub zgłoś ten problem na naszym serwerze Discord.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Wkrocz do nowego świata z ulepszoną grafiką w Genshin Impact',
 Text1:
  'Ulepszona grafika, precyzyjnie dopracowane shadery, imponujące odblokowanie FPS oraz mody zapewniające graczom jeszcze lepsze wrażenia z rozgrywki niż kiedykolwiek wcześniej!',
 Text2:
  'Odkryj na nowo świat Teyvat dzięki nowej grafice, która sprawi, że rozgrywka stanie się bardziej realistyczna. Dedykowany launcher usprawnia cały proces, pozwalając graczom szybko i łatwo zanurzyć się w akcji.',
 FinalText:
  'Nie czekaj, pobierz już teraz! Przenieś swoją rozgrywkę na wyższy poziom. Zanurz się w ulepszonym świecie Teyvat i twórz niezapomniane chwile. Baw się dobrze!',
 Download: 'Pobierz',
 DownloadTooltip: 'Kliknij tutaj, aby pobrać instalator x64-bit dla Windows 10 i 11.',
 StelaModPlusTooltip:
  'Uzyskaj dostęp do płatnej wersji Stella Mod Plus i ciesz się wieloma korzyściami oraz ulepszonymi wrażeniami z gry!',
 Documentation: 'Dokumentacja',
 DocumentationTooltip: 'Sprawdź wymagania systemowe, zalecane ustawienia gry i więcej!',
 Gallery: 'Galeria',
 GalleryTooltip: 'Zobacz zrzuty ekranu z gry ze wstrzykniętym ReShade.',
 Videos: 'Filmy',
 VideosTooltip: 'Oglądaj nasze filmy prezentujące moda i program uruchamiający.',
 Statistics: 'Statystyki',
 StatisticsTooltip:
  'Sprawdź, ile osób gra obecnie w Genshin Impact z użytym Stella Modem. Przeglądaj także inne statystyki.',
 Feedback: 'Opinie',
 FeedbackTooltip: 'Podziel się swoją opinią na temat mojej pracy i Stella Mod.',
 Support: 'Wsparcie',
 SupportTooltip: 'Kliknij tutaj, jeśli potrzebujesz pomocy.',
 HomePage: 'Strona główna',
 HomePageTooltip: 'Strona główna - Oficjalna strona Sefinka',
 PlayMusic: 'Odtwórz muzykę',
 FetchingData: 'Pobieranie danych...',
 Version: 'Wersja',
 TheVersionWithoutCaps: 'wersja',
 DownloadCount: 'Liczba pobrań',
 LastDownload: 'Ostatnie pobranie',
 FeedbackOnTrustpilot: 'Opinie na Trustpilot',
 captchaModal: {
  AreYouARobot: 'Jesteś robotem?',
  FailedToVerifyCaptcha: 'Wystąpił problem podczas weryfikacji captchy: {0}',
  FailedToVerifyCaptchaStatusCode:
   'Coś poszło nie tak podczas weryfikacji captchy (kod statusu: {0}). Odśwież stronę i spróbuj ponownie.',
 },
 mirrorModal: {
  SelectADownloadSource: 'Wybierz źródło pobierania',
  ByCompany: 'Według firmy',
  ByLocation: 'Według lokalizacji',
  InstallViaWinGet: 'Zainstaluj używając WinGet',
  LauncherVersion: 'Wersja launchera:',
  MirrorsAreCurrentlyUnavailable: 'Serwery lustrzane są obecnie niedostępne dla tej kategorii.',
  ChecksumHasBeenSuccessfullyCopied: 'Suma kontrolna {0} została pomyślnie skopiowana do schowka!',
  FailedToCopyChecksumTryAgain:
   'Coś poszło nie tak podczas kopiowania sumy kontrolnej {0} do schowka. Spróbuj ponownie.',
 },
 finalModal: {
  ThankYouForDownloading: 'Dziękujemy za pobranie',
  BecomeAStellaModSubscriber:
   'Zostań subskrybentem Stella Mod Plus, aby uzyskać dostęp do wielu korzyści, takich jak możliwość jednoczesnego korzystania z 3DMigoto, FPS Unlockera i ReShade, obszerna kolekcja modów wolnych od błędów, lepsze bezpieczeństwo (blokowanie telemetrii i analityki), paczka najnowszych shaderów, dodatek zapobiegający nakładaniu filtrów na interfejs użytkownika (UI), preset Ray Tracingu i wiele więcej!',
  JoinOurDiscordServerToReceiveNotifications:
   'Dołącz do naszego serwera Discord, aby otrzymywać powiadomienia o najnowszych aktualizacjach, funkcjach i innych ogłoszeniach. Skontaktuj się z twórcą, jeśli masz jakieś pytania lub napotkasz jakieś problemy. Zawsze jesteśmy gotowi pomóc. Życzę ci wspaniałego dnia lub nocy!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview:
   'Zostaw opinię na stronie {a}trustpilot.com{/a} po przetestowaniu oprogramowania!',
  TheTotalNumberOfDownloadsNowIs: 'Całkowita liczba pobrań wynosi obecnie',
  NoProblem: 'Nie ma problemu',
 },
 tooltips: {
  ShareYourFeedbackOnTrustpilot:
   'Podziel się z nami swoją opinią w serwisie Trustpilot! Będziemy za to bardzo wdzięczni.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Galeria - Numer strony',
 GalleryCompareReleases: 'Galeria - Porównaj wydania:',
 ScreenshotsAreAvailableInHighQuality:
  'Zrzuty ekranu są dostępne w wysokiej jakości. Wczytanie ich może zająć trochę czasu.',
 WebsiteIsNotSupportedOnMobileDevices: 'Ta witryna nie jest obsługiwana na urządzeniach mobilnych.',
 SomeImageCanBeOutdated: 'Niektóre zdjęcia mogą być nieaktualne!',
 SeeComparesFromTheOtherVersions: 'Zobacz porównania z innymi wersjami',
 SeeTheComparisonBetween: 'Zobacz porównanie między...',
 ThePageYouAreCurrentlyOnDisplaysAComparison:
  'Strona, na której aktualnie się znajdujesz, wyświetla porównanie różnych wersji wydań.',
 OldVersion: 'Stara wersja',
 NewVersion: 'Nowa wersja',
 WithMod: 'Z modem',
 WithoutMod: 'Bez moda',
 BonusScreenshot: 'Bonusowe zrzuty ekranu',
 tooltips: {
  GoBackToMainGalleryPage: 'Wróć do strony głównej galerii',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Podziel się swoją opinią',
 IfYouLikeThisProjectSupportMe:
  'Jeśli podoba Ci się ten projekt, rozważ {1}subskrypcję{/1} mojego kanału na YouTube, danie {2}gwiazdki{/2} na GitHubie lub {3}wsparcie mnie{/3} w inny sposób.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  'Dodatkowo, jeśli masz jakiekolwiek uwagi lub sugestie, nie wahaj się dołączyć na nasz serwer Discord i podzielić się nimi z nami.',
 btn: {
  BelowYTVideo: 'Pod filmem na YouTube',
  OnTheDiscordServer: 'Na serwerze Discord',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'Kliknij tutaj, aby przejść do strony YouTube.',
  GiveAStarToMyReposOnGitHub: 'Nadaj gwiazdkę moim repozytoriom na GitHubie, tym, które lubisz.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: 'Obejrzyj filmy na YouTube',
 IfYouWantToRecordNewVideo:
  'Jeśli chcesz nagrać i przesłać film na YouTube o Stella Modzie, skontaktuj się ze mną. Link do Twojego filmu zostanie dodany do tej strony.',
 DeprecatedMovies: 'Przestarzałe nagrania',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  'Te filmy pochodzą z poprzednich wersji Stella Mod i są uważane już za przestarzałe.',
 FirstModRelease: 'Pierwsza wersja moda',
 Gameplay: 'Rozgrywka',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Przełącz rozmycie',
 ToggleShadows: 'Przełącz cienie',
 ToggleBorder: 'Przełącz obramowanie',
 ToggleBackground: 'Przełącz tło',
 LiveStats: 'Statystyki na żywo',
 OnlineNow: 'Online teraz',
 Playing: 'W grze',
 AllDownloadsNow: 'Wszystkich pobrań teraz',
 Player: 'gracz',
 Players: 'graczy',
 BelowYouFindTheStatsOfStellaMod:
  'Poniżej znajdziesz statystyki Stella Mod. Strefa czasowa: Europa/Warszawa GMT+01:00 (Polska). Miłego dnia!',
 PerCountry: 'Na kraj',
 PerHour: 'Na godzinę',
 PerDay: 'Na dzień',
 PerMonth: 'Na miesiąc',
 PerYear: 'Na rok',
 All: 'Wszystkie',
 Unique: 'Unikalne',
 FirstOpens: 'Pierwsze uruchomienia',
 Peak: 'Szczyt',
 Connections: 'Połączenia',
 NumberOfGameLaunches: 'Uruchomienia gry',
 FullDate: 'Pełna data',
 Version: 'Wersja',
 NumberOfDownloads: 'Liczba pobrań',
 DownloadsPerCountry: 'Pobrania na kraj',
 DownloadsPerCountryAll: 'Pobrania na kraj [Wszystkie]',
 DownloadsPerVersionAll: 'Pobrania na wersje [Wszystkie]',
 DownloadsPerVersionUnique: 'Pobrania na wersje [Unikalne]',
 DownloadsPerDayAll: 'Pobrania na dzień [Wszystkie]',
 DownloadsPerDayUnique: 'Pobrania na dzień [Unikalne]',
 DownloadsPerMonthAll: 'Pobrania na miesiąc [Wszystkie]',
 DownloadsPerMonthUnique: 'Pobrania na miesiąc [Unikalne]',
 DownloadsPerYearAll: 'Pobrania na rok [Wszystkie]',
 DownloadsPerYearUnique: 'Pobrania na rok [Unikalne]',
 StellaModDownloadsHeader: '📥 Pobrania Stella Mod',
 StellaModDownloadsText:
  "Oto statystyki pobrań Stella Mod bezpośrednio z naszej oficjalnej strony. Historia niektórych danych może być niekompletna, ponieważ zbieranie statystyk zostało wprowadzone znaczący czas po globalnym wydaniu Stella Mod.<br>Zawsze upewnij się, że pobierasz oprogramowanie Stella Mod ze zaufanego źródła, takiego jak <a href='https://sefinek.net'>sefinek.net</a>.",
 TotalDownloads: '🔢 Wszystkie',
 LastDownload: '⏰ Ostatnie pobranie',
 YourTimezone: '🪐 Twoja strefa czasowa',
 StellaModLauncherStatsHeader: '😻 Statystyki Stella Mod Launcher',
 StellaModLauncherStatsText:
  'W tej kategorii prezentujemy szczegółowe statystyki dotyczące liczby uruchomień programu Stella Mod Launcher. Obejmuje to dane na temat częstotliwości otwierania aplikacji oraz wszelkie zauważalne wzorce zaangażowania użytkowników w launcher.',
 AllStellaLauncherOpens: 'Wszystkie uruchomienia',
 UniqueStellaLauncherOpens: 'Unikalne uruchomienia',
 OpensPerCountry: 'Uruchomienia na kraj',
 OpensPerVersion: 'Uruchomienia na wersję',
 OpensPerSysVersion: 'Uruchomienia na wersję systemu',
 OpensPerSysBuild: 'Uruchomienia na kompilację systemu',
 WsConnectionsHeader: '🌍 Połączenia i operacje WebSocket',
 WsConnectionsText:
  'Zapoznaj się z metrykami WebSocket w tej sekcji, która zawiera wykresy przedstawiające częstotliwość wiadomości i odbicia serca na godzinę, dzień, miesiąc i rok.',
 Broadcast: 'Transmisja',
 Heartbeats: 'Obicia serca',
 CryptographicOperationsHeader: '🔠 Operacje kryptograficzne',
 CryptographicOperationsText:
  'Ta sekcja oferuje kompleksowy przegląd działań kryptograficznych w naszych systemach, prezentując dane statystyczne dotyczące procesów szyfrowania i deszyfrowania. Odwiedzający mogą zobaczyć wykresy przedstawiające częstotliwość i sukces operacji kryptograficznych w różnych okresach. Kryptografia jest kluczowa w aplikacjach i komunikacji, zapewniając poufność danych, integralność i autentyczność, chroniąc tym samym przed nieautoryzowanym dostępem i zagrożeniami cybernetycznymi. Jest niezbędna w zabezpieczaniu transakcji cyfrowych i utrzymaniu prywatności wrażliwych informacji.',
 Encryption: '🧶 Szyfrowanie',
 Decryption: '🔧 Deszyfrowanie',
 Misc: '🧵 Różne',
 PerOneHour: 'Na godzinę',
 PerOneDay: 'Na dzień',
 PerOneMonth: 'Na miesiąc',
 PerOneYear: 'Na rok',
 ErrorRatePerDay: 'Wskaźnik błędów na dzień',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Spis treści',
 1: {
  Introduction: '{0}. {1} Wprowadzenie',
  Requirements: '{0}. {1} Wymagania sprzętowe',
  WhatIs: '{0}. {1} Czym jest...',
  FAQ: '{0}. {1} FAQ: Pytania i odpowiedzi',
  Support: '{0}. {1} Wsparcie',
  Troubleshooting: '{0}. {1} Rozwiązywanie problemów',
  TermsOfUse: '{0}. {1} Warunki użytkowania',
  PrivacyPolicy: '{0}. {1} Polityka prywatności',
  Installation: '{0}. {1} Instalacja',
 },
 Changelogs: 'Lista zmian',
 2: {
  Versions: '{0}. {1} Wersje {2}.x.x',
  DeprecatedReleases: '{0}. {1} Przestarzałe wersje',
 },
 LicensesAndCredits: 'Licencje & Uznania',
 3: {
  StellaModLicense: '{0}. {1} Licencja Stella Mod',
  ReShadeLicense: '{0}. {1} Licencja ReShade',
  FPSUnlockerLicense: '{0}. {1} Licencja FPS Unlocker',
  MigotoLicense: '{0}. {1} Licencja 3DMigoto',
  Credits: '{0}. {1} Uznania autorskie',
 },
};

// GET /genshin-stella-mod/repositories
exports.github = {
 AllReposOnGithub: 'Wszystkie repozytoria na GitHubie',
 IfYouWantToBecomeContributor:
  'Jeśli chcesz zostać współtwórcą, po prostu utwórz nowy {a}Pull Request{/a}. Dzięki bardzo i życzę miłego kodowania!',
 Translations: 'Tłumaczenia',
 Resources: 'Zasoby',
 Documentation: 'Dokumentacja',
 More: 'Więcej »',
 Deprecated: 'Przestarzałe',
 InstallationWizard: 'Kreator instalacji',
 UnlockedReShade: 'Odblokowany ReShade',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Wybierz tier subskrypcji',
 IfYouAreInterestedInTheBenefits:
  'Jeśli jesteś zainteresowany korzyściami, zapoznaj się ze wszystkimi dostępnymi poziomami, aby sprawdzić, który z nich najlepiej odpowiada Twoim preferencjom. Mam nadzieję, że znajdziesz coś, co Cię zainteresuje!',
 IfYouHaveAnyQuestions:
  'Masz jakieś pytania? Nie krępuj się dołączyć do naszego Discord serwer lub skontaktować się z nami za pomocą e-maila.',
 Recommended: 'Polecane',
 tiers: {
  1: {
   name: 'Mały Kociak',
   description:
    'Podstawowy poziom dla tych, którzy po prostu chcą wesprzeć projekt. Dobry wybór, jeśli np. przestałeś grać w Genshin Impact i nie potrzebujesz już korzyści, ale nadal chcesz dobrowolnie wspierać projekt.',
  },
  2: {
   name: 'Ulubiony Kot',
   description:
    'Średni tier, który oferuje większość podstawowych korzyści związanych z grą Genshin Impact. Idealne dla graczy, którzy chcą korzystać z dodatkowych modyfikacji i ulepszeń w grze.',
  },
  3: {
   name: 'Bezpieczny Kotek',
   description:
    'Zaawansowany tier dla zaufanych użytkowników, który oferuje specjalne korzyści, takie jak systemy zabezpieczeń przed banem, giveaways na konta Genshin Impact, a także niestandardowy wygląd interfejsu Windows Terminal.',
  },
  4: {
   name: 'Klawiatury Kot',
   description:
    'Dla graczy, którzy chcą maksymalnie wykorzystać możliwości swoich urządzeń i cieszyć się grą bez jakichkolwiek zakłóceń. Ta opcja oferuje usługi optymalizacji komputera (poprzez TeamViewer lub AnyDesk), wsparcie techniczne oraz możliwość używania plików wsadowych w Stella Mod Launcher.',
  },
  5: {
   name: 'Śliczna Kicia',
   description:
    'Zapewnia dostęp do wszystkich korzyści oferowanych w niższych tierach, a także umożliwia aktywację na największej liczbie urządzeń. Idealny dla graczy, którzy doceniają pracę twórcy Stella Mod i chcą wspierać dalszy rozwój oraz serwerownię projektu.',
  },
 },
 UnknownBenefit: 'Nieznana korzyść',
 prices: {
  MonthlyPrice: 'Rozliczenie miesięczne',
  Every3Months: 'Co 3 miesiące',
  YearlyPrice: 'Rozliczenie coroczne',
 },
 Everything: {
  FromTheTier: 'Wszystko z poziomu {0}',
  FromTheTier12: 'Wszystko z Tieru 1 i 2',
  FromTheTier12And3: 'Wszystko z Tieru 1, 2 i 3',
  FromAllTheTiers: 'Korzyści ze wszystkich tierów',
 },
 TierName: 'Nazwa tieru',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Rola na serwerze Discord',
  VisibilityOnTheSubscriberList: 'Widoczność na liście subskrybentów',
  NoAdsOnTheWebsiteForPatrons: 'Brak reklam na stronie dla patronów (SPC)',
  PrivateClipsFromCSGO: 'Prywatne klipy z CS:GO i CS2',
  CompletePostArchive: 'Pełne archiwum postów',
  RayTracingForGenshin: 'Ray Tracing dla Genshina',
  AbilityToUseMods: 'Możliwość korzystania z modów w grze (więcej zabawy)',
  BigCollectionOfShadersMods: 'Duża kolekcja shaderów i modów bez żadnych błędów',
  GameUIWithoutVisibleShaders: 'Interfejs gry bez widocznych shaderów',
  HideYourUIDInTheGame: 'Ukryj swoje UID w grze',
  PresetsFromPreviousVersions: 'Presety z poprzednich wersji',
  EarlyAccessToStellaMod: 'Wczesny dostęp do Stella Mod',
  FasterDownloadServers: 'Szybsze serwery pobierania',
  CarefullyDesignedSecuritySystem: 'Starannie zaprojektowany system bezpieczeństwa',
  MuchGreaterPrivacy: 'Znacznie większa prywatność',
  VariousGenshinImpactAccountGiveaways: 'Różne eventy na konta do Genshin Impact',
  NewWindowsTerminalAppearance: 'Nowy wygląd Windows Terminal (WT)',
  ImagesAndInterestingVideosOfTheDevsCats: 'Zdjęcia i ciekawe filmiki kotów dewelopera',
  OptimizationOfYourComputerForBestPerformance: 'Optymalizacja Twojego komputera lub laptopa',
  AssistanceRelatedToPCsOrLaptops: 'Pomoc dotycząca komputerów PC lub laptopów',
  ActivationPossibleOn: 'Aktywacja możliwa na {u}{0} urządzeniach{/u}',
 },
 CompareAvailablePlans: 'Porównaj dostępne plany',
 benefitsShort: {
  IntDevice: '{0} urządzeniu',
  IntDevices: '{0} urządzeniach',
  RoleOnTheDiscordServer: 'Rola na serwerze Discord',
  VisibilityOnTheSubscriberList: 'Widoczność na liście subskrybentów',
  NoAdsOnTheWebsiteForPatrons: 'Brak reklam na stronie dla patronów',
  PrivateClipsFromCSGO: 'Prywatne klipy z CS:GO i CS2',
  CompletePostArchive: 'Pełne archiwum postów',
  RayTracingForGenshin: 'Ray Tracing dla Genshina',
  BigCollectionOfShadersMods: 'Duża kolekcja shaderów i modów',
  AbilityToUseMods: 'Możliwość używania modów',
  GameUIWithoutVisibleShaders: 'Interfejs gry bez widocznych shaderów',
  HideYourUIDInTheGame: 'Ukryj swoje UID w grze',
  PresetsFromPreviousVersions: 'Presety z poprzednich wersji',
  EarlyAccessToStellaMod: 'Wczesny dostęp do Stella Mod',
  FasterDownloadServers: 'Szybsze serwery pobierania',
  CarefullyDesignedSecuritySystem: 'Lepszy system bezpieczeństwa',
  MuchGreaterPrivacy: 'Znacznie większa prywatność',
  VariousGenshinImpactAccountGiveaways: 'Różne rozdania kont Genshin Impact',
  NewWindowsTerminalAppearance: 'Nowy wygląd Windows Terminal (WT)',
  ImagesAndInterestingVideosOfTheDevsCats: 'Zdjęcia i ciekawe filmiki kotów dewa',
  OptimizationOfYourComputerForBestPerformance: 'Optymalizacja Twojego komputera',
  AssistanceRelatedToPCsOrLaptops: 'Pomoc dot. komputerów PC lub laptopów',
  ActivationPossibleOn: 'Aktywacja możliwa na',
 },
 SubscribeNow: 'Subskrybuj teraz',
 ChangeYourTier: 'Zmień swój tier',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Subskrypcja jest traktowana jako dobrowolne wsparcie, a nie jako zakup usługi lub produktu. Korzyści otrzymujesz tylko i wyłącznie jako dowód wdzięczności.',
 IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost:
  'Jeśli chcesz, możesz nadal korzystać z darmowej wersji całkowicie bezpłatnie. Decyzja należy wyłącznie od Ciebie.',
 Crypto: 'Kryptowaluty',
 IfYouWantToMakeAPaymentUsingCrypto:
  'Jeśli chcesz dokonać płatności za pomocą kryptowaluty, skontaktuj się z deweloperem.',
 IAcceptPaymentsOnlyOnBinance: 'Akceptuję płatności tylko na Binance.',
 CloseModal: 'Zamknij okno modalne',
 PaymentSystem: {
  Header: 'System płatności',
  1: 'Nasz bezpieczny system płatności jest napędzany dzięki {0}. To właśnie dzięki tej bramce płatności możesz śmiało dokonywać płatności, wiedząc, że Twoje dane finansowe są traktowane z najwyższym poziomem bezpieczeństwa.',
  2: 'Stripe to dobrze zaufana i globalnie rozpoznawana platforma do przetwarzania płatności, która gwarantuje płynne i bezpieczne transakcje dla naszej społeczności. Bez względu na to, czy kupujesz produkty, subskrybujesz usługi czy dokonujesz darowizn, solidna infrastruktura Stripe zapewnia niezawodne i bezproblemowe doświadczenie płatności.',
  3: 'Możesz być pewien, że Twoje wrażliwe dane płatnicze są szyfrowane i chronione na każdym etapie procesu płatności. Twoja prywatność i bezpieczeństwo są dla nas najwyższym priorytetem.',
 },
 AcceptedPaymentMethods: 'Akceptowane metody płatności',
 IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer:
  'Jeśli chcesz dokonać płatności za pomocą kryptowalut lub przelewu bankowego, skontaktuj się z deweloperem.',
 BankName: 'Nazwa banku:',
 AccountNumber: 'Numer konta:',
 SWIFTOrBICCode: 'Kod SWIFT/BIC:',
 IBAN: 'IBAN:',
 AskTheAdministratorForIt: 'Zapytaj administratora o to',
 PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees:
  'Prosimy pamiętać, że to kupujący ponosi odpowiedzialność za pokrycie wszelkich opłat bankowych związanych z jakąkolwiek transakcją.',
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Zasady korzystania z naszych korzyści i patronatu',
  SubText1:
   'Chcielibyśmy wyrazić naszą serdeczną wdzięczność wszystkim naszym subskrybentom za ich wsparcie i zaufanie. Przed rozpoczęciem subskrypcji Stella Mod Plus prosimy o zapoznanie się z kilkoma ważnymi wytycznymi.',
  HeaderText2: 'Korzyści są przeznaczone wyłącznie dla subskrybentów:',
  SubText2:
   'Każdy token korzyści jest przypisany do subskrybenta i powinien być traktowany jako poufny. Prosimy nie udostępniać swoich korzyści innym ani nie rozpowszechniać ich online. Wykorzystuj je wyłącznie do celów osobistych i zgodnie z naszymi wytycznymi.',
  HeaderText3: 'Subskrypcja nie pokrywa się z zakupem oprogramowania 3DMigoto:',
  SubText3:
   'Stając się subskrybentem Stella Mod Plus, nie nabywasz 3DMigoto jako produkt cyfrowy. Jako subskrybent, zyskujesz wyłącznie dostęp do korzystania z 3DMigoto w aplikacji Stella Mod Launcher.',
  Footer:
   'Cenimy Twoją obecność w naszej społeczności i Twoje wsparcie dla naszej pracy. Jeśli masz jakieś pytania lub obawy, {a}skontaktuj się z nami{/a}. Twoje uczestnictwo i zrozumienie tych zasad są niezwykle ważne dla naszego projektu.',
 },
 request: {
  WeAreProcessingYourRequest: 'Przetwarzamy Twoje zgłoszenie...',
  SubscribingInProgress:
   'Potrzebujemy chwili, aby wszystko przygotować. Proszę, pozostań na tej stronie i daj nam chwilę!\nWkrótce przekierujemy Cię na bezpieczną stronę płatności, gdzie możesz bezpiecznie dokonać transakcji. ^w^',
  ChangingTheTierInProgress:
   'Potrzebujemy trochę czasu, aby zmienić Twój tier! Daj nam chwilę, a obiecujemy, że wszystko pójdzie gładko. ^w^',
 },
};
