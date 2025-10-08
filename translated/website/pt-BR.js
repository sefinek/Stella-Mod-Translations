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
  'Se você estiver interessado nos benefícios, explore todos os níveis disponíveis para ver qual se adéqua às suas preferências. Com sorte, você encontrará um que desperte seu interesse!',
 IfYouHaveAnyQuestions:
  'Você tem alguma pergunta? Não hesite em se juntar ao nosso servidor do Discord ou entre em contato conosco por e-mail. Você pode encontrar as informações de contato na página principal deste site.',
 Recommended: 'Recomendado',
 tiers: {
  1: {
   name: 'Gatinho',
   description:
    'Nível básico para aqueles que querem apenas apoiar o projeto. Esta é uma boa solução, por exemplo, se você parou de jogar Genshin Impact e não precisa mais dos benefícios do jogo, mas ainda quer apoiar o projeto voluntariamente.',
  },
  2: {
   name: 'Gato favorito',
   description:
    'Nível médio que oferece a maioria dos benefícios básicos associados ao jogo Genshin Impact. Ideal para jogadores que querem aproveitar modificações e melhorias adicionais no jogo.',
  },
  3: {
   name: 'Gatinho segurança',
   description:
    'Nível avançado para usuários confiáveis, que oferece benefícios especiais, como sistemas de proteção contra banimentos, brindes para contas do Genshin Impact e uma aparência personalizada para a interface do Terminal do Windows.',
  },
  4: {
   name: 'Keyboard Cat',
   description:
    'Para jogadores que querem maximizar as capacidades de seus dispositivos e aproveitar o jogo sem interrupções. Esta opção oferece serviços de otimização de computador (via TeamViewer ou AnyDesk), suporte técnico e a capacidade de usar arquivos em lote no launcher do Stella Mod.',
  },
  5: {
   name: 'Gatinho fofo',
   description:
    'Fornece acesso a todos os benefícios oferecidos em níveis mais baixos e também permite ativação na maioria dos dispositivos. Ideal para jogadores que apreciam o trabalho do criador do Stella Mod e querem dar suporte ao desenvolvimento posterior e à infraestrutura de servidores do projeto.',
  },
 },
 UnknownBenefit: 'Benefício desconhecido',
 prices: {
  MonthlyPrice: 'Preço mensal',
  Every3Months: 'A cada 3 meses',
  YearlyPrice: 'Preço anual',
 },
 Everything: {
  FromTheTier: 'Tudo do Nível {0}',
  FromTheTier12: 'Tudo do Nível 1 e 2',
  FromTheTier12And3: 'Tudo do Nível 1, 2 & 3',
  FromAllTheTiers: 'Tudo de todos os níveis',
 },
 TierName: 'Nome do Tier',
 benefitsFull: {
  RoleOnTheDiscordServer: 'Cargo no servidor do Discord',
  VisibilityOnTheSubscriberList: 'Visibilidade na lista de assinantes',
  NoAdsOnTheWebsiteForPatrons: 'Nenhum anúncio no site para patrocinadores (SPC)',
  PrivateClipsFromCSGO: 'Clipes privados de CS:GO e CS2',
  CompletePostArchive: 'Arquivo de postagem completo',
  RayTracingForGenshin: 'Ray Tracing para Genshin',
  AbilityToUseMods: 'Capacidade de usar mods no jogo (mais diversão)',
  BigCollectionOfShadersMods: 'Grande coleção de shaders e mods sem bugs',
  GameUIWithoutVisibleShaders: 'Interface do jogo sem shaders visíveis',
  HideYourUIDInTheGame: 'Esconda seu UID no jogo',
  PresetsFromPreviousVersions: 'Presets de versões anteriores',
  EarlyAccessToStellaMod: 'Acesso antecipado ao Stella Mod',
  FasterDownloadServers: 'Servidores de download mais rápidos',
  CarefullyDesignedSecuritySystem: 'Sistema de segurança cuidadosamente projetado',
  MuchGreaterPrivacy: 'Privacidade muito maior',
  VariousGenshinImpactAccountGiveaways: 'Vários sorteios de contas Genshin Impact',
  NewWindowsTerminalAppearance: 'Nova aparência do Windows Terminal (WT)',
  ImagesAndInterestingVideosOfTheDevsCats: 'Fotos e vídeos interessantes dos gatos do desenvolvedor',
  OptimizationOfYourComputerForBestPerformance: 'Otimização do seu PC para o melhor desempenho',
  AssistanceRelatedToPCsOrLaptops: 'Assistência relacionada a PCs ou laptops',
  ActivationPossibleOn: 'Ativação possível em {u}{0} dispositivos{/u}',
 },
 CompareAvailablePlans: 'Compare os planos disponíveis',
 benefitsShort: {
  IntDevice: '{0} dispositivo',
  IntDevices: '{0} dispositivos',
  RoleOnTheDiscordServer: 'Cargo no servidor do Discord',
  VisibilityOnTheSubscriberList: 'Visibilidade na lista de assinantes',
  NoAdsOnTheWebsiteForPatrons: 'Nenhum anúncio no site para clientes',
  PrivateClipsFromCSGO: 'Clipes privados de CS:GO e CS2',
  CompletePostArchive: 'Arquivo de postagem completo',
  RayTracingForGenshin: 'Ray Tracing para Genshin',
  BigCollectionOfShadersMods: 'Grande coleção de shaders e mods',
  AbilityToUseMods: 'Capacidade de usar mods',
  GameUIWithoutVisibleShaders: 'Interface do jogo sem shaders visíveis',
  HideYourUIDInTheGame: 'Esconda seu UID no jogo',
  PresetsFromPreviousVersions: 'Presets de versões anteriores',
  EarlyAccessToStellaMod: 'Acesso antecipado ao Stella Mod',
  FasterDownloadServers: 'Servidores de download mais rápidos',
  CarefullyDesignedSecuritySystem: 'Sistema de segurança cuidadosamente projetado',
  MuchGreaterPrivacy: 'Privacidade muito maior',
  VariousGenshinImpactAccountGiveaways: 'Vários sorteios de contas Genshin Impact',
  NewWindowsTerminalAppearance: 'Nova aparência do Windows Terminal (WT)',
  ImagesAndInterestingVideosOfTheDevsCats: 'Imagens e vídeos interessantes do gato do desenvolvedor',
  OptimizationOfYourComputerForBestPerformance: 'Otimização do seu computador',
  AssistanceRelatedToPCsOrLaptops: 'Assistência relacionada a PCs ou laptops',
  ActivationPossibleOn: 'Ativação possível em',
 },
 SubscribeNow: 'Assine agora',
 ChangeYourTier: 'Mude seu nível',
 SubscriptionIsTreatedAsVoluntarySupport:
  'A assinatura é tratada como suporte voluntário, não como uma compra de um serviço ou produto. Os benefícios que você recebe são apenas um símbolo de apreciação.',
 IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost:
  'Se desejar, você pode continuar a usar a versão gratuita sem custo algum. A decisão é inteiramente sua.',
 Crypto: 'Criptomoeda',
 IfYouWantToMakeAPaymentUsingCrypto:
  'Se você quiser fazer um pagamento usando criptomoeda, entre em contato com o desenvolvedor.',
 IAcceptPaymentsOnlyOnBinance: 'Aceito pagamentos somente na Binance.',
 CloseModal: 'Fechar modal',
 PaymentSystem: {
  Header: 'Meio de pagamento',
  1: 'Temos o prazer de anunciar que nosso sistema de pagamento seguro é alimentado por {0}. Com o Stripe, você pode fazer pagamentos com confiança, sabendo que suas informações financeiras são tratadas com o mais alto nível de segurança.',
  2: 'Stripe é uma plataforma de processamento de pagamentos confiável e reconhecida globalmente que garante transações suaves e seguras para nossos clientes. Não importa se você está comprando produtos, assinando serviços ou fazendo doações, a infraestrutura robusta da Stripe garante uma experiência de pagamento confiável e sem problemas.',
  3: 'Tenha certeza de que seus detalhes de pagamento sensíveis são criptografados e protegidos durante todo o processo de pagamento. Sua privacidade e segurança são nossas principais prioridades.',
 },
 AcceptedPaymentMethods: 'Métodos de pagamento aceitos',
 IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer:
  'Se você deseja fazer um pagamento usando criptomoedas ou transferência bancária direta, entre em contato com o desenvolvedor.',
 BankName: 'Nome do banco:',
 AccountNumber: 'Número da Conta:',
 SWIFTOrBICCode: 'Código SWIFT/BIC:',
 IBAN: 'IBAN:',
 AskTheAdministratorForIt: 'Peça isso ao administrador',
 PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees:
  'Observe que o comprador é responsável por cobrir quaisquer taxas bancárias associadas a qualquer transação.',
 RulesForUsingOurBenefitsAndPatronage: {
  HeaderText1: 'Regras para usar nossos benefícios e patrocínios',
  SubText1:
   'Gostaríamos de expressar nossa sincera gratidão a todos os nossos assinantes pelo apoio e confiança. Antes de prosseguir com a assinatura do Stella Mod Plus, reserve um momento para se familiarizar com algumas diretrizes importantes.',
  HeaderText2: 'Os benefícios são destinados exclusivamente aos assinantes:',
  SubText2:
   'Cada token de resgate de benefício é atribuído a um assinante e deve ser mantido confidencial. Não compartilhe seus benefícios com outros nem os distribua online. Utilize-os somente para seu uso pessoal e de acordo com nossas diretrizes.',
  HeaderText3: 'A assinatura não equivale à compra do software 3DMigoto:',
  SubText3:
   'Ao se tornar um assinante do Stella Mod Plus, você não está adquirindo o 3DMigoto como um produto digital para compra. Em vez disso, como nosso assinante, você ganha acesso somente para usar o 3DMigoto dentro do aplicativo Stella Mod Launcher.',
  Footer:
   'Agradecemos sua presença em nossa comunidade e seu apoio ao nosso trabalho. Se você tiver alguma dúvida ou preocupação, {a}entre em contato conosco{/a}. Sua participação e compreensão dessas regras são incrivelmente importantes para o nosso projeto.',
 },
 request: {
  WeAreProcessingYourRequest: 'Estamos processando sua solicitação...',
  SubscribingInProgress:
   'Precisamos de um pouco de tempo para deixar tudo pronto. Por favor, permaneça nesta página e nos dê um momento!\nEm breve, nós o redirecionaremos para uma página de pagamento segura, onde você poderá concluir sua transação com segurança. ^w^',
  ChangingTheTierInProgress:
   'Precisamos de algum tempo para alterar seu nível! Dê-nos um momento, e prometemos que tudo correrá bem. ^w^',
 },
};
