// Main
exports.default = {
 And: 'e',
 From: 'de',
 In: 'em',
 Back: 'Voltar',
 GoBack: 'Retornar',
 GoBackTo: 'Voltar para {0}',
 Next: 'Próximo',
 DiscordServer: 'Servidor do Discord',
 DiscordServerTooltip: 'Convite para nosso servidor do Discord',
 YourBrowserDoesNotSupportVideoTag: 'Seu navegador não suporta a tag de vídeo.',
 YourBrowserDoesNotSupportAudioTag: 'Seu navegador não dá suporte a tag de áudio.',
 tooltips: {
  OfficialDiscordServer: 'Servidor oficial do Discord',
  SupportThisProject: 'Apoie este projeto voluntariamente',
  GitHubRepositories: 'Repositórios GitHub',
 },
};

// Errors
exports.errors = {
 400: {
  BadRequest: 'Erro 400: Solicitação incorreta',
  InvalidURL: 'O URL de retorno é inválido.',
  ReferrerURL: 'Seu URL de referência',
  CorrectRefURL: 'Corrigir URL',
 },
 wrongOs: {
  DeviceIsNotSupported: 'Dispositivo não suportado',
  OperatingSysIsNotSupported: 'Lamentamos! Seu sistema operacional {0}, ainda não é suportado.',
  ViewSupportedSystems: 'Ver sistemas suportados »',
 },
 missingZip: {
  WeCannotFindZipFileOnTheServer: 'Não conseguimos encontrar o arquivo ZIP no servidor',
  NewUpdateIsComing:
   'Nova atualização está chegando? Provavelmente...\nDe qualquer forma, tente novamente mais tarde ou relate esse problema em nosso servidor do Discord.',
 },
};

// GET /genshin-stella-mod
exports.home = {
 Header: 'Entre em um novo mundo com gráficos aprimorados para Genshin Impact',
 Text1:
  'Gráficos aprimorados, shaders meticulosamente elaborados, desbloqueio impressionante de FPS e mods proporcionam aos jogadores uma experiência de jogo ainda melhor do que nunca!',
 Text2:
  'Redescubra o mundo de Teyvat com novos gráficos que tornam sua jogabilidade mais realista. Um launcher dedicado simplifica todo o processo, permitindo que os jogadores entrem na ação de forma rápida e fácil.',
 FinalText:
  'Não espere, baixe agora! Leve sua jogabilidade para o próximo nível. Mergulhe no mundo aprimorado de Teyvat e crie momentos inesquecíveis. Divirta-se!',
 Download: 'Fazer Download',
 DownloadTooltip: 'Clique aqui para baixar o instalador x64 bits para Windows 10 e 11.',
 StelaModPlusTooltip:
  'Tenha acesso à versão paga do Stella Mod Plus e aproveite inúmeros benefícios e experiências de jogo aprimoradas!',
 Documentation: 'Documentação',
 DocumentationTooltip: 'Verifique os requisitos do sistema, as configurações de jogo recomendadas e muito mais!',
 Gallery: 'Galeria',
 GalleryTooltip: 'Veja as capturas de tela do jogo com o ReShade injetado.',
 Videos: 'Vídeos',
 VideosTooltip: 'Assista aos nossos vídeos mostrando o mod e o launcher.',
 Statistics: 'Estatísticas',
 StatisticsTooltip:
  'Verifique quantas pessoas estão jogando Genshin Impact atualmente usando o Stella Mod. Navegue também por várias outras estatísticas.',
 Feedback: 'Feedback',
 FeedbackTooltip: 'Compartilhe sua opinião sobre meu trabalho e o Stella Mod.',
 Support: 'Suporte',
 SupportTooltip: 'Clique aqui se precisar de ajuda.',
 HomePage: 'Página inicial',
 HomePageTooltip: 'Página inicial - Site oficial do Sefinek',
 PlayMusic: 'Tocar música',
 FetchingData: 'Buscando dados...',
 Version: 'Versão',
 TheVersionWithoutCaps: 'a versão',
 DownloadCount: 'Número de downloads',
 LastDownload: 'Último download',
 FeedbackOnTrustpilot: 'Feedback na Trustpilot',
 captchaModal: {
  AreYouARobot: 'Você é um robô?',
  FailedToVerifyCaptcha: 'Falha ao verificar captcha: {0}',
  FailedToVerifyCaptchaStatusCode:
   'Falha ao verificar captcha (código de status: {0}). Recarregue o site e tente novamente.',
 },
 mirrorModal: {
  SelectADownloadSource: 'Select a download source',
  ByCompany: 'By company',
  ByLocation: 'By location',
  InstallViaWinGet: 'Install via WinGet',
  LauncherVersion: 'Versão do launcher:',
  MirrorsAreCurrentlyUnavailable:
   'Os mirrors estão desabilitados ou indisponíveis para esta categoria. Por favor, volte mais tarde ou entre em contato com o administrador.',
  ChecksumHasBeenSuccessfullyCopied: 'A soma de verificação {0} foi copiada com sucesso para a área de transferência!',
  FailedToCopyChecksumTryAgain:
   'Falha ao copiar a soma de verificação {0} para a área de transferência. Tente novamente.',
 },
 finalModal: {
  ThankYouForDownloading: 'Agradecemos pelo download',
  BecomeAStellaModSubscriber:
   'Torne-se um assinante do Stella Mod Plus para ter acesso a benefícios adicionais, como a capacidade de usar o 3DMigoto, o FPS Unlocker e o ReShade simultaneamente, uma grande coleção de mods livre de erros, segurança aprimorada (bloqueio de telemetria e análise), um pacote dos shaders mais recentes, um complemento para evitar sobreposições de filtros na interface do usuário (IU), predefinições de Ray Tracing e muito mais!',
  JoinOurDiscordServerToReceiveNotifications:
   'Junte-se ao nosso servidor do Discord para receber notificações sobre as últimas atualizações, recursos e outros anúncios. Entre em contato com o criador se tiver alguma dúvida ou encontrar algum problema. Estamos sempre prontos para ajudar. Desejamos a você um ótimo dia ou noite!',
  IfYouReEnjoyingStellaModConsiderLeavingAReview:
   'Deixe uma avaliação em {a}trustpilot.com{/a} após testar o software!',
  TheTotalNumberOfDownloadsNowIs: 'O número total de downloads agora é',
  NoProblem: 'Sem problema',
 },
 tooltips: {
  ShareYourFeedbackOnTrustpilot: 'Deixe seu feedback no Trustpilot! Nós apreciaríamos muito.',
 },
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
 GalleryPage: 'Galeria - Número da página',
 GalleryCompareReleases: 'Galeria - Comparar lançamentos:',
 ScreenshotsAreAvailableInHighQuality:
  'As capturas de tela estão disponíveis em alta qualidade. Pode levar um tempo para carregá-las.',
 WebsiteIsNotSupportedOnMobileDevices: 'Este site não é compatível com dispositivos móveis.',
 SomeImageCanBeOutdated: 'Algumas imagens podem estar desatualizadas!',
 SeeComparesFromTheOtherVersions: 'Veja comparações de outras versões',
 SeeTheComparisonBetween: 'Veja a comparação entre...',
 ThePageYouAreCurrentlyOnDisplaysAComparison:
  'A página em que você está atualmente exibe uma comparação de diferentes versões de lançamentos.',
 OldVersion: 'Versão anterior',
 NewVersion: 'Nova versão',
 WithMod: 'Com Mod',
 WithoutMod: 'Sem Mod',
 BonusScreenshot: 'Captura de tela bônus',
 tooltips: {
  GoBackToMainGalleryPage: 'Voltar para a página principal da galeria',
 },
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
 LeaveYourFeedback: 'Deixe sua opinião',
 IfYouLikeThisProjectSupportMe:
  'Se você gosta deste projeto, considere {1}inscrever-se{/1} no meu canal do YouTube, dar {2}uma estrela{/2} no GitHub ou {3}me apoiar{/3} de outra forma.',
 AdditionallyIfYouHaveCommentsOrSuggestions:
  'Além disso, se você tiver algum comentário ou sugestão, não hesite em entrar no nosso servidor do Discord e compartilhá-los conosco.',
 btn: {
  BelowYTVideo: 'Abaixo meu vídeo do YouTube',
  OnTheDiscordServer: 'Visitar o servidor do Discord',
 },
 tooltips: {
  ClickHereToGoToTheYTPage: 'Clique aqui para ir para a página do YouTube.',
  GiveAStarToMyReposOnGitHub: 'Dê uma estrela para meus repositórios no GitHub, aqueles que você gosta.',
 },
};

// GET /genshin-stella-mod/videos
exports.videos = {
 WatchVideosOnYT: 'Assista a vídeos no YouTube',
 IfYouWantToRecordNewVideo:
  'Se você quiser gravar e enviar um vídeo sobre Stella Mod para o YouTube, entre em contato comigo. O link para seu vídeo será adicionado a esta página.',
 DeprecatedMovies: 'Vídeos obsoletos',
 TheMoviesAreFromPreviousVersionsOfStellaMod:
  'Os vídeos são de versões anteriores do Stella Mod e já são considerados desatualizados.',
 FirstModRelease: 'Primeiro lançamento do mod',
 Gameplay: 'Gameplay',
};

// GET /genshin-stella-mod/stats
exports.stats = {
 ToggleBlur: 'Alternar desfoque',
 ToggleShadows: 'Alternar Sombras',
 ToggleBorder: 'Alternar borda',
 ToggleBackground: 'Alternar plano de fundo',
 LiveStats: 'Estatísticas ao vivo',
 OnlineNow: 'Online agora',
 Playing: 'Jogando',
 AllDownloadsNow: 'Todos os downloads agora',
 Player: 'jogador',
 Players: 'jogadores',
 BelowYouFindTheStatsOfStellaMod:
  'Abaixo você encontrará as estatísticas do Stella Mod. Fuso horário: Europe/Warsaw GMT+01:00 (Polônia). Tenha um bom dia!',
 PerCountry: 'Por país',
 PerHour: 'Por hora',
 PerDay: 'Por dia',
 PerMonth: 'Por mês',
 PerYear: 'Por ano',
 All: 'Todos',
 Unique: 'Exclusivos',
 FirstOpens: 'Primeira vez',
 Peak: 'Pico',
 Connections: 'Conexões',
 NumberOfGameLaunches: 'Número de execuções do jogo',
 FullDate: 'Data completa',
 Version: 'Versão',
 NumberOfDownloads: 'Número de Downloads',
 DownloadsPerCountry: 'Downloads por país',
 DownloadsPerCountryAll: 'Downloads por país [Todos]',
 DownloadsPerVersionAll: 'Downloads por versão [Todos]',
 DownloadsPerVersionUnique: 'Downloads por versão [Único]',
 DownloadsPerDayAll: 'Downloads por dia [Todos]',
 DownloadsPerDayUnique: 'Downloads por dia [Único]',
 DownloadsPerMonthAll: 'Downloads por mês [Todos]',
 DownloadsPerMonthUnique: 'Downloads por mês [Único]',
 DownloadsPerYearAll: 'Downloads por ano [Todos]',
 DownloadsPerYearUnique: 'Downloads por ano [Único]',
 StellaModDownloadsHeader: '📥 Downloads do Stella Mod',
 StellaModDownloadsText:
  'Aqui estão as estatísticas de download do Stella Mod diretamente do nosso site oficial. Observe que alguns dados históricos podem estar incompletos, pois começamos a coletar estatísticas um tempo significativo após o lançamento global do Stella Mod.<br>Sempre garanta que você baixe o Stella Mod de uma fonte confiável, como <a href="https://sefinek.net">sefinek.net</a>.',
 TotalDownloads: '🔢 Total de downloads',
 LastDownload: '⏰ Último download',
 YourTimezone: '🪐 Seu fuso horário',
 StellaModLauncherStatsHeader: '😻 Estatísticas do Stella Mod Launcher',
 StellaModLauncherStatsText:
  'Nesta categoria, apresentamos estatísticas detalhadas sobre quantas vezes o Stella Mod Launcher foi iniciado. Isso inclui dados sobre a frequência com que o aplicativo é iniciado.',
 AllStellaLauncherOpens: 'Todas as execuções do Stella Launcher',
 UniqueStellaLauncherOpens: 'Execuções exclusivas do Stella launcher',
 OpensPerCountry: 'Execuções por país',
 OpensPerVersion: 'Execuções por versão',
 OpensPerSysVersion: 'Execuções por versão do sistema',
 OpensPerSysBuild: 'Execuções por build do sistema',
 WsConnectionsHeader: '🌍 Conexões e operações WebSocket',
 WsConnectionsText:
  'Nesta seção, familiarize-se com as métricas do WebSocket, incluindo gráficos que exibem a frequência de mensagens e pulsações por hora, dia, mês e ano.',
 Broadcast: 'Transmissão',
 Heartbeats: 'Batimentos',
 CryptographicOperationsHeader: '🔠 Operações criptográficas',
 CryptographicOperationsText:
  'Esta seção fornece uma visão geral abrangente das atividades criptográficas em nossos sistemas, apresentando dados estatísticos sobre processos de criptografia e descriptografia. Os visitantes podem explorar gráficos que exibem a frequência e as taxas de sucesso das operações criptográficas em vários períodos de tempo. A criptografia desempenha um papel crucial na proteção de aplicativos e comunicações, garantindo a confidencialidade, integridade e autenticidade dos dados, protegendo assim contra acesso não autorizado e ameaças cibernéticas. É vital para proteger transações digitais e manter a privacidade de informações confidenciais.',
 Encryption: '🧶 Criptografia',
 Decryption: '🔧 Descriptografia',
 Misc: '🧵 Diversos',
 PerOneHour: 'Por hora',
 PerOneDay: 'Por dia',
 PerOneMonth: 'Por mês',
 PerOneYear: 'Por ano',
 ErrorRatePerDay: 'Taxa de erro por dia',
};

// GET /genshin-stella-mod/docs
exports.docs = {
 TableOfContents: 'Sumário',
 1: {
  Introduction: '{0}. {1} Introdução',
  Requirements: '{0}. {1} Requisitos',
  WhatIs: '{0}. {1} O que é...',
  FAQ: '{0}. {1} Perguntas frequentes',
  Support: '{0}. {1} Suporte',
  Troubleshooting: '{0}. {1} Solução de problemas',
  TermsOfUse: '{0}. {1} Termos de uso',
  PrivacyPolicy: '{0}. {1} Política de privacidade',
  Installation: '{0}. {1} Instalação',
 },
 Changelogs: 'Changelogs',
 2: {
  Versions: '{0}. {1} Versões {2}.x.x',
  DeprecatedReleases: '{0}. {1} Versões obsoletas',
 },
 LicensesAndCredits: 'Licença & Créditos',
 3: {
  StellaModLicense: '{0}. {1} Licença do Stella Mod',
  ReShadeLicense: '{0}. {1} Licença ReShade',
  FPSUnlockerLicense: '{0}. {1} Licença do FPS Unlocker',
  MigotoLicense: '{0}. {1} Licença 3DMigoto',
  Credits: '{0}. {1} Créditos',
 },
};

// GET /genshin-stella-mod/repositories
exports.github = {
 AllReposOnGithub: 'Todos os repositórios no GitHub',
 IfYouWantToBecomeContributor:
  'Se você quiser se tornar um colaborador, basta criar uma nova {a}Pull Request{/a}. Muito obrigado e ótimo coding!',
 Translations: 'Traduções',
 Resources: 'Recursos',
 Documentation: 'Documentação',
 More: 'Mais »',
 Deprecated: 'Descontinuado',
 InstallationWizard: 'Assistente de Instalação',
 UnlockedReShade: 'ReShade desbloqueado',
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
 ChooseYourSubscriptionTier: 'Escolha seu nível de assinatura',
 IfYouAreInterestedInTheBenefits:
  "If you're interested in the benefits, explore all the available tiers to find one that suits your preferences. Do you have any questions? Join our Discord server or open a ticket at {0} — we typically respond within 24 hours.",
 Recommended: 'Recomendado',
 tiers: {
  1: "Basic tier for those who simply want to support the project. A good solution if you've stopped playing Genshin Impact and no longer need the in-game benefits, but still want to voluntarily support the project.",
  2: 'The recommended tier offering a full set of Stella Mod benefits — Ray Tracing, mods, shaders, privacy protection, giveaways, and much more. Includes standard support for Stella Plus and Stella Mod.',
  3: 'For players who want to use Stella Mod on two devices and take advantage of PC optimization and technical assistance. Includes better support.',
  4: 'The highest tier with activation on three devices and priority support. Ideal for those who expect the best possible experience and the fastest response times.',
 },
 UnknownBenefit: 'Benefício desconhecido',
 prices: {
  MonthlyPrice: 'Preço mensal',
  Every3Months: 'A cada 3 meses',
  YearlyPrice: 'Preço anual',
 },
 Everything: {
  FromTheTier: 'Tudo do Nível {0}',
  FromTheTier12: 'Everything from Tier 1 & 2',
  FromTheTier12And3: 'Tudo do Nível 1, 2 & 3',
 },
 TierName: 'Nome do Tier',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Cargo no servidor do Discord',
  VisibilityOnTheSubscriberList: 'Visibilidade na lista de assinantes',
  NoAdsOnTheWebsiteForPatrons: 'Nenhum anúncio no site para patrocinadores (SPC)',
  CompletePostArchive: 'Arquivo de postagem completo',
  RayTracingForGenshin: 'Ray Tracing para Genshin',
  AbilityToUseMods: 'Capacidade de usar mods no jogo (mais diversão)',
  BigCollectionOfShadersMods: 'Grande coleção de shaders e mods sem bugs',
  GameUIWithoutVisibleShaders: 'Interface do jogo sem shaders visíveis',
  HideYourUIDInTheGame: 'Esconda seu UID no jogo',
  PresetsFromPreviousVersions: 'Presets de versões anteriores',
  EarlyAccessToStellaMod: 'Acesso antecipado ao Stella Mod',
  FasterDownloadServers: 'Servidores de download mais rápidos',
  BlockGameTelemetry: 'Genshin Impact telemetry blocking for greater privacy',
  VariousGenshinImpactAccountGiveaways: 'Vários sorteios de contas Genshin Impact',
  NewWindowsTerminalAppearance: 'Nova aparência do Windows Terminal (WT)',
  OptimizationOfYourComputerForBestPerformance: 'Otimização do seu PC para o melhor desempenho',
  AssistanceRelatedToPCsOrLaptops: 'Assistência relacionada a PCs ou laptops',
  StandardSupport: 'Standard support for Stella Plus & Stella Mod',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Ativação possível em {u}{0} dispositivos{/u}',
 },
 CompareAvailablePlans: 'Compare os planos disponíveis',
 SPCNote: '* SPC — Sefinek Patron Center (patrons.sefinek.net)',
 benefitsShort: {
  IntDevice: '{0} dispositivo',
  IntDevices: '{0} dispositivos',
  RoleOnTheDiscordServer: 'Cargo no servidor do Discord',
  VisibilityOnTheSubscriberList: 'Visibilidade na lista de assinantes',
  NoAdsOnTheWebsiteForPatrons: 'Nenhum anúncio no site para clientes',
  CompletePostArchive: 'Arquivo de postagem completo',
  RayTracingForGenshin: 'Ray Tracing para Genshin',
  BigCollectionOfShadersMods: 'Grande coleção de shaders e mods',
  AbilityToUseMods: 'Capacidade de usar mods',
  GameUIWithoutVisibleShaders: 'Interface do jogo sem shaders visíveis',
  HideYourUIDInTheGame: 'Esconda seu UID no jogo',
  PresetsFromPreviousVersions: 'Presets de versões anteriores',
  EarlyAccessToStellaMod: 'Acesso antecipado ao Stella Mod',
  FasterDownloadServers: 'Servidores de download mais rápidos',
  BlockGameTelemetry: 'Blocks in-game telemetry & tracking',
  VariousGenshinImpactAccountGiveaways: 'Vários sorteios de contas Genshin Impact',
  NewWindowsTerminalAppearance: 'Nova aparência do Windows Terminal (WT)',
  OptimizationOfYourComputerForBestPerformance: 'Otimização do seu computador',
  AssistanceRelatedToPCsOrLaptops: 'Assistência relacionada a PCs ou laptops',
  StandardSupport: 'Standard support',
  BetterSupport: 'Better support',
  PrioritySupport: 'Priority support',
  ActivationPossibleOn: 'Ativação possível em',
 },
 SubscribeNow: 'Assine agora',
 ChangeYourTier: 'Mude seu nível',
 SubscriptionIsTreatedAsVoluntarySupport:
  'Subscription is treated as voluntary support for the project, not as a purchase of a service or product. The benefits you receive are solely a token of appreciation. If you prefer, you can continue using the free version — the decision is entirely yours.',
 PaymentSystem: {
  Header: 'Meio de pagamento',
  Text:
   'Payments are securely processed by {0} — a globally trusted platform supporting all major cards and payment methods. Your financial data is encrypted and protected throughout the entire transaction, so you can subscribe with complete peace of mind.',
 },
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Regras para usar nossos benefícios e patrocínios',
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
  WeAreProcessingYourRequest: 'Estamos processando sua solicitação...',
  SubscribingInProgress:
   'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction.',
  ChangingTheTierInProgress:
   'We need some time to change your tier. Give us a moment, and we promise everything will go smoothly.',
 },
};
