// Banco de perguntas expandido para todas as certificações
export const offlineQuestions = {
  'platform-foundations': [
    {
      id: 'pf-1',
      question: { en: "What is a Salesforce Object?", pt: "O que é um Objeto Salesforce?" },
      options: [
        { en: "A database table", pt: "Uma tabela de banco de dados" },
        { en: "A user interface", pt: "Uma interface de usuário" },
        { en: "A programming language", pt: "Uma linguagem de programação" },
        { en: "A security protocol", pt: "Um protocolo de segurança" }
      ],
      correct: 0,
      explanation: { 
        en: "A Salesforce Object is essentially a database table that stores specific types of information. Standard objects like Account and Contact are pre-built, while custom objects can be created for unique business needs.",
        pt: "Um Objeto Salesforce é essencialmente uma tabela de banco de dados que armazena tipos específicos de informação. Objetos padrão como Conta e Contato são pré-construídos, enquanto objetos personalizados podem ser criados para necessidades específicas de negócio."
      }
    },
    {
      id: 'pf-2',
      question: { en: "What type of relationship allows multiple child records to be associated with multiple parent records?", pt: "Que tipo de relacionamento permite que múltiplos registros filhos sejam associados a múltiplos registros pais?" },
      options: [
        { en: "Master-Detail", pt: "Mestre-Detalhe" },
        { en: "Lookup", pt: "Pesquisa" },
        { en: "Many-to-Many", pt: "Muitos-para-Muitos" },
        { en: "Hierarchical", pt: "Hierárquico" }
      ],
      correct: 2,
      explanation: { 
        en: "Many-to-Many relationships are created using junction objects. This allows multiple records from one object to relate to multiple records from another object.",
        pt: "Relacionamentos Muitos-para-Muitos são criados usando objetos de junção. Isso permite que múltiplos registros de um objeto se relacionem com múltiplos registros de outro objeto."
      }
    },
    {
      id: 'pf-3',
      question: { en: "Which field type can contain up to 131,072 characters?", pt: "Qual tipo de campo pode conter até 131.072 caracteres?" },
      options: [
        { en: "Text", pt: "Texto" },
        { en: "Text Area (Long)", pt: "Área de Texto (Longa)" },
        { en: "Rich Text Area", pt: "Área de Texto Rico" },
        { en: "Text Area", pt: "Área de Texto" }
      ],
      correct: 1,
      explanation: { 
        en: "Text Area (Long) fields can store up to 131,072 characters, making them ideal for storing large amounts of text data.",
        pt: "Campos de Área de Texto (Longa) podem armazenar até 131.072 caracteres, tornando-os ideais para armazenar grandes quantidades de dados de texto."
      }
    },
    {
      id: 'pf-4',
      question: { en: "What is a formula field?", pt: "O que é um campo fórmula?" },
      options: [
        { en: "A field that automatically calculates values", pt: "Um campo que calcula valores automaticamente" },
        { en: "A field that stores formulas", pt: "Um campo que armazena fórmulas" },
        { en: "A field for mathematical operations only", pt: "Um campo apenas para operações matemáticas" },
        { en: "A field that requires manual calculation", pt: "Um campo que requer cálculo manual" }
      ],
      correct: 0,
      explanation: { 
        en: "Formula fields automatically calculate values based on other fields, expressions, or values. They are read-only and update automatically when referenced fields change.",
        pt: "Campos fórmula calculam automaticamente valores baseados em outros campos, expressões ou valores. Eles são somente leitura e atualizam automaticamente quando campos referenciados mudam."
      }
    },
    {
      id: 'pf-5',
      question: { en: "What is the difference between a Role and a Profile?", pt: "Qual é a diferença entre uma Função e um Perfil?" },
      options: [
        { en: "Roles control record access, Profiles control object permissions", pt: "Funções controlam acesso a registros, Perfis controlam permissões de objetos" },
        { en: "They are the same thing", pt: "São a mesma coisa" },
        { en: "Roles control object permissions, Profiles control record access", pt: "Funções controlam permissões de objetos, Perfis controlam acesso a registros" },
        { en: "Roles are for admins only", pt: "Funções são apenas para administradores" }
      ],
      correct: 0,
      explanation: { 
        en: "Roles control record-level access through the role hierarchy, while Profiles control object-level permissions and field-level security.",
        pt: "Funções controlam acesso no nível de registro através da hierarquia de funções, enquanto Perfis controlam permissões no nível de objeto e segurança no nível de campo."
      }
    },
    {
      id: 'pf-6',
      question: { en: "What is a validation rule?", pt: "O que é uma regra de validação?" },
      options: [
        { en: "A rule that prevents invalid data from being saved", pt: "Uma regra que impede dados inválidos de serem salvos" },
        { en: "A rule that validates user passwords", pt: "Uma regra que valida senhas de usuário" },
        { en: "A rule that checks email addresses", pt: "Uma regra que verifica endereços de email" },
        { en: "A rule that validates API calls", pt: "Uma regra que valida chamadas de API" }
      ],
      correct: 0,
      explanation: { 
        en: "Validation rules verify that data entered by users meets specified criteria before they can save a record. If the validation fails, an error message is displayed.",
        pt: "Regras de validação verificam se os dados inseridos pelos usuários atendem aos critérios especificados antes que possam salvar um registro. Se a validação falhar, uma mensagem de erro é exibida."
      }
    },
    {
      id: 'pf-7',
      question: { en: "What is a record type?", pt: "O que é um tipo de registro?" },
      options: [
        { en: "Different business processes and picklist values for different users", pt: "Diferentes processos de negócio e valores de lista de seleção para diferentes usuários" },
        { en: "A type of custom object", pt: "Um tipo de objeto personalizado" },
        { en: "A type of field", pt: "Um tipo de campo" },
        { en: "A type of report", pt: "Um tipo de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Record Types allow you to offer different business processes, picklist values, and page layouts to different users based on their profile.",
        pt: "Tipos de Registro permitem oferecer diferentes processos de negócio, valores de lista de seleção e layouts de página para diferentes usuários com base em seu perfil."
      }
    },
    {
      id: 'pf-8',
      question: { en: "What is the App Launcher?", pt: "O que é o Iniciador de Aplicativos?" },
      options: [
        { en: "A menu to access all apps and items", pt: "Um menu para acessar todos os aplicativos e itens" },
        { en: "A tool to create new apps", pt: "Uma ferramenta para criar novos aplicativos" },
        { en: "A mobile application", pt: "Um aplicativo móvel" },
        { en: "A development tool", pt: "Uma ferramenta de desenvolvimento" }
      ],
      correct: 0,
      explanation: { 
        en: "The App Launcher provides a single location where users can access all their apps and items, including standard apps, custom apps, and connected apps.",
        pt: "O Iniciador de Aplicativos fornece um local único onde os usuários podem acessar todos os seus aplicativos e itens, incluindo aplicativos padrão, personalizados e conectados."
      }
    },
    {
      id: 'pf-9',
      question: { en: "What is Lightning Experience?", pt: "O que é Lightning Experience?" },
      options: [
        { en: "The modern Salesforce user interface", pt: "A interface de usuário moderna do Salesforce" },
        { en: "A mobile app", pt: "Um aplicativo móvel" },
        { en: "A development framework", pt: "Um framework de desenvolvimento" },
        { en: "A type of cloud service", pt: "Um tipo de serviço em nuvem" }
      ],
      correct: 0,
      explanation: { 
        en: "Lightning Experience is Salesforce's modern, intuitive user interface that provides enhanced productivity features, better visualizations, and improved user experience.",
        pt: "Lightning Experience é a interface de usuário moderna e intuitiva do Salesforce que fornece recursos de produtividade aprimorados, melhores visualizações e experiência de usuário melhorada."
      }
    },
    {
      id: 'pf-10',
      question: { en: "What is a page layout?", pt: "O que é um layout de página?" },
      options: [
        { en: "Controls the organization and fields visible on a record page", pt: "Controla a organização e campos visíveis em uma página de registro" },
        { en: "A template for creating pages", pt: "Um modelo para criar páginas" },
        { en: "A type of custom object", pt: "Um tipo de objeto personalizado" },
        { en: "A report layout", pt: "Um layout de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Page Layouts control the layout and organization of fields, buttons, and related lists on object record pages. Different layouts can be assigned to different profiles.",
        pt: "Layouts de Página controlam o layout e organização de campos, botões e listas relacionadas nas páginas de registro de objetos. Diferentes layouts podem ser atribuídos a diferentes perfis."
      }
    },
    {
      id: 'pf-11',
      question: { en: "What is a workflow rule?", pt: "O que é uma regra de fluxo de trabalho?" },
      options: [
        { en: "Automates standard internal procedures to save time", pt: "Automatiza procedimentos internos padrão para economizar tempo" },
        { en: "A rule for creating workflows", pt: "Uma regra para criar fluxos de trabalho" },
        { en: "A security rule", pt: "Uma regra de segurança" },
        { en: "A validation rule", pt: "Uma regra de validação" }
      ],
      correct: 0,
      explanation: { 
        en: "Workflow Rules automate standard internal procedures and processes to save time across your organization. They can send email alerts, update fields, create tasks, and send outbound messages.",
        pt: "Regras de Fluxo de Trabalho automatizam procedimentos e processos internos padrão para economizar tempo em toda a organização. Elas podem enviar alertas por email, atualizar campos, criar tarefas e enviar mensagens de saída."
      }
    },
    {
      id: 'pf-12',
      question: { en: "What is a custom field?", pt: "O que é um campo personalizado?" },
      options: [
        { en: "A field created to store specific information unique to your organization", pt: "Um campo criado para armazenar informações específicas exclusivas da sua organização" },
        { en: "A field that comes with Salesforce", pt: "Um campo que vem com o Salesforce" },
        { en: "A field for customization only", pt: "Um campo apenas para personalização" },
        { en: "A field that cannot be modified", pt: "Um campo que não pode ser modificado" }
      ],
      correct: 0,
      explanation: { 
        en: "Custom fields are created to store information that is specific to your organization's needs. They complement standard fields and can be added to both standard and custom objects.",
        pt: "Campos personalizados são criados para armazenar informações específicas das necessidades da sua organização. Eles complementam campos padrão e podem ser adicionados a objetos padrão e personalizados."
      }
    },
    {
      id: 'pf-13',
      question: { en: "What is a sharing rule?", pt: "O que é uma regra de compartilhamento?" },
      options: [
        { en: "Extends access to records beyond role hierarchy", pt: "Estende o acesso a registros além da hierarquia de funções" },
        { en: "A rule for sharing files", pt: "Uma regra para compartilhar arquivos" },
        { en: "A social media sharing rule", pt: "Uma regra de compartilhamento de mídia social" },
        { en: "A rule for sharing reports", pt: "Uma regra para compartilhar relatórios" }
      ],
      correct: 0,
      explanation: { 
        en: "Sharing Rules extend access to records beyond what is granted by organization-wide defaults and role hierarchy. They can be based on record ownership or criteria.",
        pt: "Regras de Compartilhamento estendem o acesso a registros além do que é concedido por padrões de toda a organização e hierarquia de funções. Elas podem ser baseadas em propriedade de registro ou critérios."
      }
    },
    {
      id: 'pf-14',
      question: { en: "What is a report in Salesforce?", pt: "O que é um relatório no Salesforce?" },
      options: [
        { en: "A list of records that meet criteria you define", pt: "Uma lista de registros que atendem aos critérios que você define" },
        { en: "A document file", pt: "Um arquivo de documento" },
        { en: "A type of dashboard", pt: "Um tipo de painel" },
        { en: "A user report", pt: "Um relatório de usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "Reports are lists of records that meet the criteria you define. They can be displayed in various formats including tabular, summary, matrix, and joined formats.",
        pt: "Relatórios são listas de registros que atendem aos critérios que você define. Eles podem ser exibidos em vários formatos, incluindo tabular, resumo, matriz e formatos unidos."
      }
    },
    {
      id: 'pf-15',
      question: { en: "What is a dashboard in Salesforce?", pt: "O que é um painel no Salesforce?" },
      options: [
        { en: "A visual display of key metrics and trends", pt: "Uma exibição visual de métricas e tendências principais" },
        { en: "A control panel for settings", pt: "Um painel de controle para configurações" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A user interface component", pt: "Um componente de interface de usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "Dashboards are visual displays of key metrics and trends for records in your org. They are built from reports and can contain up to 20 components.",
        pt: "Painéis são exibições visuais de métricas e tendências principais para registros em sua organização. Eles são construídos a partir de relatórios e podem conter até 20 componentes."
      }
    }
  ],
  'admin-sales': [
    {
      id: 'as-1',
      question: { en: "What is the maximum number of active assignment rules per object?", pt: "Qual é o número máximo de regras de atribuição ativas por objeto?" },
      options: [
        { en: "1", pt: "1" },
        { en: "5", pt: "5" },
        { en: "10", pt: "10" },
        { en: "Unlimited", pt: "Ilimitado" }
      ],
      correct: 0,
      explanation: { 
        en: "Only ONE assignment rule can be active per object at a time. However, that rule can contain multiple rule entries to handle different scenarios.",
        pt: "Apenas UMA regra de atribuição pode estar ativa por objeto por vez. No entanto, essa regra pode conter múltiplas entradas de regra para lidar com diferentes cenários."
      }
    },
    {
      id: 'as-2',
      question: { en: "Which feature allows you to automatically assign records to users or queues?", pt: "Qual recurso permite atribuir automaticamente registros a usuários ou filas?" },
      options: [
        { en: "Workflow Rules", pt: "Regras de Fluxo de Trabalho" },
        { en: "Assignment Rules", pt: "Regras de Atribuição" },
        { en: "Validation Rules", pt: "Regras de Validação" },
        { en: "Process Builder", pt: "Process Builder" }
      ],
      correct: 1,
      explanation: { 
        en: "Assignment Rules automatically assign records to users or queues based on criteria you define. They are available for Leads and Cases.",
        pt: "Regras de Atribuição atribuem automaticamente registros a usuários ou filas com base em critérios que você define. Elas estão disponíveis para Leads e Casos."
      }
    },
    {
      id: 'as-3',
      question: { en: "What is a queue in Salesforce?", pt: "O que é uma fila no Salesforce?" },
      options: [
        { en: "A holding area for records before assignment", pt: "Uma área de espera para registros antes da atribuição" },
        { en: "A line of users waiting", pt: "Uma linha de usuários esperando" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A workflow action", pt: "Uma ação de fluxo de trabalho" }
      ],
      correct: 0,
      explanation: { 
        en: "Queues are holding areas for records that don't have an owner yet. They help distribute work among team members and ensure no records fall through the cracks.",
        pt: "Filas são áreas de espera para registros que ainda não têm um proprietário. Elas ajudam a distribuir o trabalho entre os membros da equipe e garantem que nenhum registro seja esquecido."
      }
    },
    {
      id: 'as-4',
      question: { en: "What is a public group?", pt: "O que é um grupo público?" },
      options: [
        { en: "A collection of users, roles, or other groups", pt: "Uma coleção de usuários, funções ou outros grupos" },
        { en: "A social media group", pt: "Um grupo de mídia social" },
        { en: "A public folder", pt: "Uma pasta pública" },
        { en: "A type of profile", pt: "Um tipo de perfil" }
      ],
      correct: 0,
      explanation: { 
        en: "Public Groups are collections of individual users, roles, territories, or other groups. They simplify sharing records and can be used in sharing rules and manual sharing.",
        pt: "Grupos Públicos são coleções de usuários individuais, funções, territórios ou outros grupos. Eles simplificam o compartilhamento de registros e podem ser usados em regras de compartilhamento e compartilhamento manual."
      }
    },
    {
      id: 'as-5',
      question: { en: "What is the purpose of field-level security?", pt: "Qual é o propósito da segurança no nível de campo?" },
      options: [
        { en: "Control which fields users can view and edit", pt: "Controlar quais campos os usuários podem visualizar e editar" },
        { en: "Secure field data encryption", pt: "Criptografia segura de dados de campo" },
        { en: "Field validation", pt: "Validação de campo" },
        { en: "Field formatting", pt: "Formatação de campo" }
      ],
      correct: 0,
      explanation: { 
        en: "Field-Level Security controls whether users can see, edit, and delete specific fields. It's set at the profile or permission set level.",
        pt: "Segurança no Nível de Campo controla se os usuários podem ver, editar e excluir campos específicos. É definida no nível de perfil ou conjunto de permissões."
      }
    },
    {
      id: 'as-6',
      question: { en: "What is a permission set?", pt: "O que é um conjunto de permissões?" },
      options: [
        { en: "Extends users' access without changing their profile", pt: "Estende o acesso dos usuários sem alterar seu perfil" },
        { en: "A set of user permissions", pt: "Um conjunto de permissões de usuário" },
        { en: "A security setting", pt: "Uma configuração de segurança" },
        { en: "A type of profile", pt: "Um tipo de perfil" }
      ],
      correct: 0,
      explanation: { 
        en: "Permission Sets extend users' functional access without changing their profiles. They grant additional permissions and can be assigned to multiple users.",
        pt: "Conjuntos de Permissões estendem o acesso funcional dos usuários sem alterar seus perfis. Eles concedem permissões adicionais e podem ser atribuídos a múltiplos usuários."
      }
    },
    {
      id: 'as-7',
      question: { en: "What is organization-wide default (OWD)?", pt: "O que é o padrão de toda a organização (OWD)?" },
      options: [
        { en: "The baseline level of access users have to records", pt: "O nível básico de acesso que os usuários têm aos registros" },
        { en: "Default settings for the organization", pt: "Configurações padrão para a organização" },
        { en: "Organization preferences", pt: "Preferências da organização" },
        { en: "Default user settings", pt: "Configurações padrão do usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "Organization-Wide Defaults specify the baseline level of access users have to each other's records. It's the foundation of your org's sharing model.",
        pt: "Padrões de Toda a Organização especificam o nível básico de acesso que os usuários têm aos registros uns dos outros. É a base do modelo de compartilhamento da sua organização."
      }
    },
    {
      id: 'as-8',
      question: { en: "What is a sandbox?", pt: "O que é uma sandbox?" },
      options: [
        { en: "A testing environment that is a copy of production", pt: "Um ambiente de teste que é uma cópia da produção" },
        { en: "A storage area", pt: "Uma área de armazenamento" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A security feature", pt: "Um recurso de segurança" }
      ],
      correct: 0,
      explanation: { 
        en: "Sandboxes are copies of your production organization used for development, testing, and training without compromising the data and applications in your production org.",
        pt: "Sandboxes são cópias da sua organização de produção usadas para desenvolvimento, testes e treinamento sem comprometer os dados e aplicativos em sua organização de produção."
      }
    },
    {
      id: 'as-9',
      question: { en: "What is a change set?", pt: "O que é um conjunto de alterações?" },
      options: [
        { en: "A tool to send customizations from one org to another", pt: "Uma ferramenta para enviar personalizações de uma organização para outra" },
        { en: "A set of changes to records", pt: "Um conjunto de alterações em registros" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A workflow action", pt: "Uma ação de fluxo de trabalho" }
      ],
      correct: 0,
      explanation: { 
        en: "Change Sets are tools for sending customizations from one Salesforce org to another. They're commonly used to migrate changes from sandbox to production.",
        pt: "Conjuntos de Alterações são ferramentas para enviar personalizações de uma organização Salesforce para outra. Eles são comumente usados para migrar alterações de sandbox para produção."
      }
    },
    {
      id: 'as-10',
      question: { en: "What is a lead conversion?", pt: "O que é uma conversão de lead?" },
      options: [
        { en: "Converting a lead into an account, contact, and optionally an opportunity", pt: "Converter um lead em uma conta, contato e opcionalmente uma oportunidade" },
        { en: "Converting currency", pt: "Converter moeda" },
        { en: "Converting data types", pt: "Converter tipos de dados" },
        { en: "Converting file formats", pt: "Converter formatos de arquivo" }
      ],
      correct: 0,
      explanation: { 
        en: "Lead Conversion transforms a Lead into an Account, Contact, and optionally an Opportunity. This happens when a lead becomes a qualified sales opportunity.",
        pt: "Conversão de Lead transforma um Lead em uma Conta, Contato e opcionalmente uma Oportunidade. Isso acontece quando um lead se torna uma oportunidade de vendas qualificada."
      }
    },
    {
      id: 'as-11',
      question: { en: "What is a campaign in Salesforce?", pt: "O que é uma campanha no Salesforce?" },
      options: [
        { en: "A marketing project to generate leads and build brand awareness", pt: "Um projeto de marketing para gerar leads e construir reconhecimento de marca" },
        { en: "A sales campaign", pt: "Uma campanha de vendas" },
        { en: "An email campaign only", pt: "Apenas uma campanha de email" },
        { en: "A type of report", pt: "Um tipo de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Campaigns are marketing projects designed to generate leads, build brand awareness, and drive sales. They track campaign members and measure ROI.",
        pt: "Campanhas são projetos de marketing projetados para gerar leads, construir reconhecimento de marca e impulsionar vendas. Elas rastreiam membros da campanha e medem o ROI."
      }
    },
    {
      id: 'as-12',
      question: { en: "What is a web-to-lead form?", pt: "O que é um formulário web-to-lead?" },
      options: [
        { en: "A form that captures leads from your website", pt: "Um formulário que captura leads do seu site" },
        { en: "A web page", pt: "Uma página web" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A lead generation tool", pt: "Uma ferramenta de geração de leads" }
      ],
      correct: 0,
      explanation: { 
        en: "Web-to-Lead forms capture visitor information from your company website and automatically create lead records in Salesforce.",
        pt: "Formulários Web-to-Lead capturam informações de visitantes do site da sua empresa e criam automaticamente registros de lead no Salesforce."
      }
    },
    {
      id: 'as-13',
      question: { en: "What is a duplicate rule?", pt: "O que é uma regra de duplicatas?" },
      options: [
        { en: "Prevents users from creating duplicate records", pt: "Impede que usuários criem registros duplicados" },
        { en: "A rule for duplicating records", pt: "Uma regra para duplicar registros" },
        { en: "A validation rule", pt: "Uma regra de validação" },
        { en: "A workflow rule", pt: "Uma regra de fluxo de trabalho" }
      ],
      correct: 0,
      explanation: { 
        en: "Duplicate Rules prevent users from creating duplicate records by comparing new records against existing ones based on matching criteria you define.",
        pt: "Regras de Duplicatas impedem que usuários criem registros duplicados comparando novos registros com os existentes com base em critérios de correspondência que você define."
      }
    },
    {
      id: 'as-14',
      question: { en: "What is an email template?", pt: "O que é um modelo de email?" },
      options: [
        { en: "A reusable email message format", pt: "Um formato de mensagem de email reutilizável" },
        { en: "An email design", pt: "Um design de email" },
        { en: "An email signature", pt: "Uma assinatura de email" },
        { en: "An email client", pt: "Um cliente de email" }
      ],
      correct: 0,
      explanation: { 
        en: "Email Templates are reusable message formats that can include merge fields to personalize content. They save time and ensure consistent messaging.",
        pt: "Modelos de Email são formatos de mensagem reutilizáveis que podem incluir campos de mesclagem para personalizar o conteúdo. Eles economizam tempo e garantem mensagens consistentes."
      }
    },
    {
      id: 'as-15',
      question: { en: "What is a list view?", pt: "O que é uma visualização de lista?" },
      options: [
        { en: "A filtered list of records", pt: "Uma lista filtrada de registros" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A view mode", pt: "Um modo de visualização" },
        { en: "A dashboard component", pt: "Um componente de painel" }
      ],
      correct: 0,
      explanation: { 
        en: "List Views are filtered lists of records that meet specific criteria. They provide quick access to frequently used record sets and can be shared with others.",
        pt: "Visualizações de Lista são listas filtradas de registros que atendem a critérios específicos. Elas fornecem acesso rápido a conjuntos de registros usados com frequência e podem ser compartilhadas com outros."
      }
    }
  ],
  'sales': [
    {
      id: 'sc-1',
      question: { en: "What is the purpose of a Sales Process?", pt: "Qual é o propósito de um Processo de Vendas?" },
      options: [
        { en: "Control which opportunity stages are available", pt: "Controlar quais estágios de oportunidade estão disponíveis" },
        { en: "Automate email sending", pt: "Automatizar envio de emails" },
        { en: "Generate reports", pt: "Gerar relatórios" },
        { en: "Manage user permissions", pt: "Gerenciar permissões de usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "Sales Processes define which opportunity stages are available to different sales teams based on their record types, helping standardize and optimize the sales workflow.",
        pt: "Processos de Vendas definem quais estágios de oportunidade estão disponíveis para diferentes equipes de vendas baseado em seus tipos de registro, ajudando a padronizar e otimizar o fluxo de trabalho de vendas."
      }
    },
    {
      id: 'sc-2',
      question: { en: "What is the relationship between Accounts and Opportunities?", pt: "Qual é o relacionamento entre Contas e Oportunidades?" },
      options: [
        { en: "Master-Detail", pt: "Mestre-Detalhe" },
        { en: "Lookup", pt: "Pesquisa" },
        { en: "Many-to-Many", pt: "Muitos-para-Muitos" },
        { en: "Hierarchical", pt: "Hierárquico" }
      ],
      correct: 1,
      explanation: { 
        en: "Accounts and Opportunities have a Lookup relationship, allowing multiple opportunities to be associated with a single account.",
        pt: "Contas e Oportunidades têm um relacionamento de Pesquisa, permitindo que múltiplas oportunidades sejam associadas a uma única conta."
      }
    },
    {
      id: 'sc-3',
      question: { en: "What is an opportunity?", pt: "O que é uma oportunidade?" },
      options: [
        { en: "A potential revenue-generating event or sale", pt: "Um evento potencial de geração de receita ou venda" },
        { en: "A business opportunity", pt: "Uma oportunidade de negócio" },
        { en: "A type of account", pt: "Um tipo de conta" },
        { en: "A lead", pt: "Um lead" }
      ],
      correct: 0,
      explanation: { 
        en: "Opportunities represent potential revenue-generating events or sales. They track details like amount, close date, stage, and probability.",
        pt: "Oportunidades representam eventos potenciais de geração de receita ou vendas. Elas rastreiam detalhes como valor, data de fechamento, estágio e probabilidade."
      }
    },
    {
      id: 'sc-4',
      question: { en: "What is a product in Salesforce?", pt: "O que é um produto no Salesforce?" },
      options: [
        { en: "Items your company sells", pt: "Itens que sua empresa vende" },
        { en: "A Salesforce product", pt: "Um produto Salesforce" },
        { en: "A type of service", pt: "Um tipo de serviço" },
        { en: "A report type", pt: "Um tipo de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Products are the items and services your company sells. They can be added to opportunities via opportunity line items and tracked in price books.",
        pt: "Produtos são os itens e serviços que sua empresa vende. Eles podem ser adicionados a oportunidades via itens de linha de oportunidade e rastreados em livros de preços."
      }
    },
    {
      id: 'sc-5',
      question: { en: "What is a price book?", pt: "O que é um livro de preços?" },
      options: [
        { en: "A collection of products and their prices", pt: "Uma coleção de produtos e seus preços" },
        { en: "A book about pricing", pt: "Um livro sobre precificação" },
        { en: "A pricing strategy", pt: "Uma estratégia de precificação" },
        { en: "A type of report", pt: "Um tipo de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Price Books are collections of products and their prices. Organizations can have multiple price books for different markets, currencies, or customer segments.",
        pt: "Livros de Preços são coleções de produtos e seus preços. As organizações podem ter múltiplos livros de preços para diferentes mercados, moedas ou segmentos de clientes."
      }
    },
    {
      id: 'sc-6',
      question: { en: "What is a quote in Salesforce?", pt: "O que é uma cotação no Salesforce?" },
      options: [
        { en: "A record of proposed prices for products and services", pt: "Um registro de preços propostos para produtos e serviços" },
        { en: "A famous saying", pt: "Um ditado famoso" },
        { en: "A type of opportunity", pt: "Um tipo de oportunidade" },
        { en: "A contract", pt: "Um contrato" }
      ],
      correct: 0,
      explanation: { 
        en: "Quotes are records of proposed prices for products and services. They can be created from opportunities and sent to customers for approval.",
        pt: "Cotações são registros de preços propostos para produtos e serviços. Elas podem ser criadas a partir de oportunidades e enviadas aos clientes para aprovação."
      }
    },
    {
      id: 'sc-7',
      question: { en: "What is a contract?", pt: "O que é um contrato?" },
      options: [
        { en: "An agreement defining terms of service", pt: "Um acordo definindo termos de serviço" },
        { en: "A legal document", pt: "Um documento legal" },
        { en: "A type of opportunity", pt: "Um tipo de oportunidade" },
        { en: "A quote", pt: "Uma cotação" }
      ],
      correct: 0,
      explanation: { 
        en: "Contracts are agreements that define the terms of service between your company and customers. They track contract details, terms, and renewal dates.",
        pt: "Contratos são acordos que definem os termos de serviço entre sua empresa e clientes. Eles rastreiam detalhes do contrato, termos e datas de renovação."
      }
    },
    {
      id: 'sc-8',
      question: { en: "What is an order?", pt: "O que é um pedido?" },
      options: [
        { en: "A customer's request to purchase products or services", pt: "Uma solicitação do cliente para comprar produtos ou serviços" },
        { en: "A command", pt: "Um comando" },
        { en: "A type of opportunity", pt: "Um tipo de oportunidade" },
        { en: "A contract", pt: "Um contrato" }
      ],
      correct: 0,
      explanation: { 
        en: "Orders represent a customer's request to purchase products or services. They can be created from quotes or opportunities and track order fulfillment.",
        pt: "Pedidos representam uma solicitação do cliente para comprar produtos ou serviços. Eles podem ser criados a partir de cotações ou oportunidades e rastreiam o cumprimento do pedido."
      }
    },
    {
      id: 'sc-9',
      question: { en: "What is territory management?", pt: "O que é gerenciamento de território?" },
      options: [
        { en: "A system for organizing accounts and opportunities by geography or other criteria", pt: "Um sistema para organizar contas e oportunidades por geografia ou outros critérios" },
        { en: "Managing geographical areas", pt: "Gerenciar áreas geográficas" },
        { en: "A type of role", pt: "Um tipo de função" },
        { en: "A sharing rule", pt: "Uma regra de compartilhamento" }
      ],
      correct: 0,
      explanation: { 
        en: "Territory Management is a system for organizing accounts, opportunities, and users by geography, industry, or other criteria to optimize sales coverage.",
        pt: "Gerenciamento de Território é um sistema para organizar contas, oportunidades e usuários por geografia, indústria ou outros critérios para otimizar a cobertura de vendas."
      }
    },
    {
      id: 'sc-10',
      question: { en: "What is a sales cadence?", pt: "O que é uma cadência de vendas?" },
      options: [
        { en: "A series of touchpoints with prospects over time", pt: "Uma série de pontos de contato com prospects ao longo do tempo" },
        { en: "A sales rhythm", pt: "Um ritmo de vendas" },
        { en: "A type of workflow", pt: "Um tipo de fluxo de trabalho" },
        { en: "A sales process", pt: "Um processo de vendas" }
      ],
      correct: 0,
      explanation: { 
        en: "Sales Cadences are series of touchpoints (calls, emails, tasks) with prospects over time. They help sales reps stay organized and follow up consistently.",
        pt: "Cadências de Vendas são séries de pontos de contato (chamadas, emails, tarefas) com prospects ao longo do tempo. Elas ajudam os representantes de vendas a se manterem organizados e acompanharem consistentemente."
      }
    },
    {
      id: 'sc-11',
      question: { en: "What is Einstein Opportunity Scoring?", pt: "O que é Pontuação de Oportunidade Einstein?" },
      options: [
        { en: "AI-powered prediction of opportunity win likelihood", pt: "Previsão com IA da probabilidade de ganho de oportunidade" },
        { en: "A scoring system", pt: "Um sistema de pontuação" },
        { en: "A manual scoring tool", pt: "Uma ferramenta de pontuação manual" },
        { en: "A report type", pt: "Um tipo de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Einstein Opportunity Scoring uses AI to analyze your historical data and predict the likelihood of winning each opportunity, helping prioritize sales efforts.",
        pt: "Pontuação de Oportunidade Einstein usa IA para analisar seus dados históricos e prever a probabilidade de ganhar cada oportunidade, ajudando a priorizar esforços de vendas."
      }
    },
    {
      id: 'sc-12',
      question: { en: "What is a sales path?", pt: "O que é um caminho de vendas?" },
      options: [
        { en: "Visual guidance for each stage of your sales process", pt: "Orientação visual para cada estágio do seu processo de vendas" },
        { en: "A route to sales", pt: "Uma rota para vendas" },
        { en: "A type of workflow", pt: "Um tipo de fluxo de trabalho" },
        { en: "A sales territory", pt: "Um território de vendas" }
      ],
      correct: 0,
      explanation: { 
        en: "Sales Path provides visual guidance for each stage of your sales process, showing key fields and guidance for success at each opportunity stage.",
        pt: "Caminho de Vendas fornece orientação visual para cada estágio do seu processo de vendas, mostrando campos-chave e orientação para o sucesso em cada estágio de oportunidade."
      }
    },
    {
      id: 'sc-13',
      question: { en: "What is collaborative forecasting?", pt: "O que é previsão colaborativa?" },
      options: [
        { en: "A tool for predicting future sales revenue", pt: "Uma ferramenta para prever receita de vendas futura" },
        { en: "Weather forecasting", pt: "Previsão do tempo" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A dashboard", pt: "Um painel" }
      ],
      correct: 0,
      explanation: { 
        en: "Collaborative Forecasting allows sales teams to predict future revenue, track quota attainment, and adjust forecasts collaboratively across the organization.",
        pt: "Previsão Colaborativa permite que equipes de vendas prevejam receita futura, rastreiem o cumprimento de cotas e ajustem previsões colaborativamente em toda a organização."
      }
    },
    {
      id: 'sc-14',
      question: { en: "What is a contact role on an opportunity?", pt: "O que é uma função de contato em uma oportunidade?" },
      options: [
        { en: "Defines the role a contact plays in an opportunity", pt: "Define o papel que um contato desempenha em uma oportunidade" },
        { en: "A type of contact", pt: "Um tipo de contato" },
        { en: "A job title", pt: "Um cargo" },
        { en: "A user role", pt: "Uma função de usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "Contact Roles define the role each contact plays in an opportunity (e.g., Decision Maker, Influencer). This helps track who's involved in the deal.",
        pt: "Funções de Contato definem o papel que cada contato desempenha em uma oportunidade (por exemplo, Tomador de Decisão, Influenciador). Isso ajuda a rastrear quem está envolvido no negócio."
      }
    },
    {
      id: 'sc-15',
      question: { en: "What is opportunity team selling?", pt: "O que é venda em equipe de oportunidade?" },
      options: [
        { en: "Allows multiple sales reps to work together on an opportunity", pt: "Permite que múltiplos representantes de vendas trabalhem juntos em uma oportunidade" },
        { en: "A sales team", pt: "Uma equipe de vendas" },
        { en: "A type of territory", pt: "Um tipo de território" },
        { en: "A sharing rule", pt: "Uma regra de compartilhamento" }
      ],
      correct: 0,
      explanation: { 
        en: "Opportunity Team Selling allows multiple sales reps to collaborate on an opportunity, each with defined roles and split credit for the sale.",
        pt: "Venda em Equipe de Oportunidade permite que múltiplos representantes de vendas colaborem em uma oportunidade, cada um com funções definidas e crédito dividido pela venda."
      }
    }
  ],
  'marketing': [
    {
      id: 'mc-1',
      question: { en: "What is a Journey in Marketing Cloud?", pt: "O que é uma Jornada no Marketing Cloud?" },
      options: [
        { en: "An automated customer engagement path", pt: "Um caminho automatizado de engajamento do cliente" },
        { en: "A type of email template", pt: "Um tipo de template de email" },
        { en: "A reporting dashboard", pt: "Um painel de relatórios" },
        { en: "A data extension", pt: "Uma extensão de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Journey Builder creates automated, multi-step customer engagement paths that respond to customer behavior and preferences.",
        pt: "Journey Builder cria caminhos automatizados de engajamento do cliente em múltiplas etapas que respondem ao comportamento e preferências do cliente."
      }
    },
    {
      id: 'mc-2',
      question: { en: "What is a data extension?", pt: "O que é uma extensão de dados?" },
      options: [
        { en: "A table that stores data in Marketing Cloud", pt: "Uma tabela que armazena dados no Marketing Cloud" },
        { en: "A file extension", pt: "Uma extensão de arquivo" },
        { en: "A data type", pt: "Um tipo de dado" },
        { en: "A database", pt: "Um banco de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Extensions are tables within Marketing Cloud that store data. They're more flexible than lists and can store any type of data.",
        pt: "Extensões de Dados são tabelas dentro do Marketing Cloud que armazenam dados. Elas são mais flexíveis que listas e podem armazenar qualquer tipo de dado."
      }
    },
    {
      id: 'mc-3',
      question: { en: "What is Email Studio?", pt: "O que é Email Studio?" },
      options: [
        { en: "A tool for creating and sending email campaigns", pt: "Uma ferramenta para criar e enviar campanhas de email" },
        { en: "An email client", pt: "Um cliente de email" },
        { en: "An email server", pt: "Um servidor de email" },
        { en: "A design tool", pt: "Uma ferramenta de design" }
      ],
      correct: 0,
      explanation: { 
        en: "Email Studio is Marketing Cloud's email marketing tool for creating, sending, and tracking email campaigns with advanced personalization.",
        pt: "Email Studio é a ferramenta de email marketing do Marketing Cloud para criar, enviar e rastrear campanhas de email com personalização avançada."
      }
    },
    {
      id: 'mc-4',
      question: { en: "What is Mobile Studio?", pt: "O que é Mobile Studio?" },
      options: [
        { en: "A tool for SMS and push notification campaigns", pt: "Uma ferramenta para campanhas de SMS e notificações push" },
        { en: "A mobile app", pt: "Um aplicativo móvel" },
        { en: "A mobile website builder", pt: "Um construtor de sites móveis" },
        { en: "A mobile testing tool", pt: "Uma ferramenta de teste móvel" }
      ],
      correct: 0,
      explanation: { 
        en: "Mobile Studio enables SMS, MMS, push notifications, and group messaging campaigns to engage customers on mobile devices.",
        pt: "Mobile Studio permite campanhas de SMS, MMS, notificações push e mensagens em grupo para engajar clientes em dispositivos móveis."
      }
    },
    {
      id: 'mc-5',
      question: { en: "What is Social Studio?", pt: "O que é Social Studio?" },
      options: [
        { en: "A tool for social media marketing and listening", pt: "Uma ferramenta para marketing e escuta de mídia social" },
        { en: "A social network", pt: "Uma rede social" },
        { en: "A social media platform", pt: "Uma plataforma de mídia social" },
        { en: "A design tool", pt: "Uma ferramenta de design" }
      ],
      correct: 0,
      explanation: { 
        en: "Social Studio helps manage social media marketing, publishing, engagement, and social listening across multiple social networks.",
        pt: "Social Studio ajuda a gerenciar marketing de mídia social, publicação, engajamento e escuta social em múltiplas redes sociais."
      }
    },
    {
      id: 'mc-6',
      question: { en: "What is Advertising Studio?", pt: "O que é Advertising Studio?" },
      options: [
        { en: "A tool for managing digital advertising campaigns", pt: "Uma ferramenta para gerenciar campanhas de publicidade digital" },
        { en: "An advertising agency", pt: "Uma agência de publicidade" },
        { en: "A design tool", pt: "Uma ferramenta de design" },
        { en: "A reporting tool", pt: "Uma ferramenta de relatórios" }
      ],
      correct: 0,
      explanation: { 
        en: "Advertising Studio enables you to create and manage digital advertising campaigns across platforms like Facebook, Google, and LinkedIn using CRM data.",
        pt: "Advertising Studio permite criar e gerenciar campanhas de publicidade digital em plataformas como Facebook, Google e LinkedIn usando dados de CRM."
      }
    },
    {
      id: 'mc-7',
      question: { en: "What is Content Builder?", pt: "O que é Content Builder?" },
      options: [
        { en: "A tool for creating and managing marketing content", pt: "Uma ferramenta para criar e gerenciar conteúdo de marketing" },
        { en: "A website builder", pt: "Um construtor de sites" },
        { en: "A text editor", pt: "Um editor de texto" },
        { en: "A design tool", pt: "Uma ferramenta de design" }
      ],
      correct: 0,
      explanation: { 
        en: "Content Builder is a centralized tool for creating, managing, and sharing marketing content across all Marketing Cloud channels.",
        pt: "Content Builder é uma ferramenta centralizada para criar, gerenciar e compartilhar conteúdo de marketing em todos os canais do Marketing Cloud."
      }
    },
    {
      id: 'mc-8',
      question: { en: "What is AMPscript?", pt: "O que é AMPscript?" },
      options: [
        { en: "A scripting language for personalizing content", pt: "Uma linguagem de script para personalizar conteúdo" },
        { en: "A programming language", pt: "Uma linguagem de programação" },
        { en: "A markup language", pt: "Uma linguagem de marcação" },
        { en: "A database query language", pt: "Uma linguagem de consulta de banco de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "AMPscript is Marketing Cloud's proprietary scripting language used to personalize email and landing page content dynamically.",
        pt: "AMPscript é a linguagem de script proprietária do Marketing Cloud usada para personalizar conteúdo de email e páginas de destino dinamicamente."
      }
    },
    {
      id: 'mc-9',
      question: { en: "What is a subscriber in Marketing Cloud?", pt: "O que é um assinante no Marketing Cloud?" },
      options: [
        { en: "A person who has opted in to receive communications", pt: "Uma pessoa que optou por receber comunicações" },
        { en: "A paying customer", pt: "Um cliente pagante" },
        { en: "A user account", pt: "Uma conta de usuário" },
        { en: "A contact", pt: "Um contato" }
      ],
      correct: 0,
      explanation: { 
        en: "Subscribers are individuals who have opted in to receive communications from your organization. They're identified by a unique subscriber key.",
        pt: "Assinantes são indivíduos que optaram por receber comunicações da sua organização. Eles são identificados por uma chave de assinante única."
      }
    },
    {
      id: 'mc-10',
      question: { en: "What is a send classification?", pt: "O que é uma classificação de envio?" },
      options: [
        { en: "Defines sender profile and delivery settings", pt: "Define perfil do remetente e configurações de entrega" },
        { en: "A type of email", pt: "Um tipo de email" },
        { en: "A classification system", pt: "Um sistema de classificação" },
        { en: "A sending method", pt: "Um método de envio" }
      ],
      correct: 0,
      explanation: { 
        en: "Send Classifications define sender profile, delivery profile, and CAN-SPAM classification for email sends, ensuring compliance and consistency.",
        pt: "Classificações de Envio definem perfil do remetente, perfil de entrega e classificação CAN-SPAM para envios de email, garantindo conformidade e consistência."
      }
    },
    {
      id: 'mc-11',
      question: { en: "What is Einstein Engagement Scoring?", pt: "O que é Pontuação de Engajamento Einstein?" },
      options: [
        { en: "AI-powered prediction of email engagement likelihood", pt: "Previsão com IA da probabilidade de engajamento de email" },
        { en: "A scoring system", pt: "Um sistema de pontuação" },
        { en: "A manual scoring tool", pt: "Uma ferramenta de pontuação manual" },
        { en: "A report type", pt: "Um tipo de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Einstein Engagement Scoring uses AI to predict how likely each subscriber is to engage with your emails, helping optimize send times and targeting.",
        pt: "Pontuação de Engajamento Einstein usa IA para prever a probabilidade de cada assinante engajar com seus emails, ajudando a otimizar horários de envio e segmentação."
      }
    },
    {
      id: 'mc-12',
      question: { en: "What is a triggered send?", pt: "O que é um envio acionado?" },
      options: [
        { en: "An automated email sent based on a specific event", pt: "Um email automatizado enviado com base em um evento específico" },
        { en: "A manual send", pt: "Um envio manual" },
        { en: "A scheduled send", pt: "Um envio agendado" },
        { en: "A test send", pt: "Um envio de teste" }
      ],
      correct: 0,
      explanation: { 
        en: "Triggered Sends are automated emails sent in response to specific events or actions, like welcome emails or password resets.",
        pt: "Envios Acionados são emails automatizados enviados em resposta a eventos ou ações específicas, como emails de boas-vindas ou redefinições de senha."
      }
    },
    {
      id: 'mc-13',
      question: { en: "What is a suppression list?", pt: "O que é uma lista de supressão?" },
      options: [
        { en: "A list of subscribers who should not receive emails", pt: "Uma lista de assinantes que não devem receber emails" },
        { en: "A blacklist", pt: "Uma lista negra" },
        { en: "A spam list", pt: "Uma lista de spam" },
        { en: "A deletion list", pt: "Uma lista de exclusão" }
      ],
      correct: 0,
      explanation: { 
        en: "Suppression Lists contain subscribers who should not receive certain types of communications, helping maintain compliance and respect preferences.",
        pt: "Listas de Supressão contêm assinantes que não devem receber certos tipos de comunicações, ajudando a manter conformidade e respeitar preferências."
      }
    },
    {
      id: 'mc-14',
      question: { en: "What is a publication list?", pt: "O que é uma lista de publicação?" },
      options: [
        { en: "A list subscribers can opt in or out of", pt: "Uma lista da qual assinantes podem optar por participar ou sair" },
        { en: "A publishing schedule", pt: "Um cronograma de publicação" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A content list", pt: "Uma lista de conteúdo" }
      ],
      correct: 0,
      explanation: { 
        en: "Publication Lists allow subscribers to manage their email preferences by opting in or out of specific types of communications.",
        pt: "Listas de Publicação permitem que assinantes gerenciem suas preferências de email optando por participar ou sair de tipos específicos de comunicações."
      }
    },
    {
      id: 'mc-15',
      question: { en: "What is Interaction Studio?", pt: "O que é Interaction Studio?" },
      options: [
        { en: "A real-time personalization and interaction management tool", pt: "Uma ferramenta de personalização e gerenciamento de interação em tempo real" },
        { en: "A design tool", pt: "Uma ferramenta de design" },
        { en: "A testing tool", pt: "Uma ferramenta de teste" },
        { en: "A reporting tool", pt: "Uma ferramenta de relatórios" }
      ],
      correct: 0,
      explanation: { 
        en: "Interaction Studio (formerly Evergage) provides real-time personalization and interaction management across web, mobile, and email channels.",
        pt: "Interaction Studio (anteriormente Evergage) fornece personalização em tempo real e gerenciamento de interação em canais web, móvel e email."
      }
    }
  ],
  'agentforce': [
    {
      id: 'af-1',
      question: { en: "What is Agentforce primarily used for?", pt: "Para que o Agentforce é usado principalmente?" },
      options: [
        { en: "AI-powered autonomous agents", pt: "Agentes autônomos com IA" },
        { en: "Data backup", pt: "Backup de dados" },
        { en: "Email marketing", pt: "Marketing por email" },
        { en: "Report generation", pt: "Geração de relatórios" }
      ],
      correct: 0,
      explanation: { 
        en: "Agentforce enables AI-powered autonomous agents that can handle tasks, make decisions, and take actions on behalf of users.",
        pt: "Agentforce habilita agentes autônomos com IA que podem lidar com tarefas, tomar decisões e executar ações em nome dos usuários."
      }
    },
    {
      id: 'af-2',
      question: { en: "What type of AI does Agentforce use?", pt: "Que tipo de IA o Agentforce usa?" },
      options: [
        { en: "Generative AI and Machine Learning", pt: "IA Generativa e Aprendizado de Máquina" },
        { en: "Rule-based AI only", pt: "Apenas IA baseada em regras" },
        { en: "Simple automation", pt: "Automação simples" },
        { en: "No AI", pt: "Sem IA" }
      ],
      correct: 0,
      explanation: { 
        en: "Agentforce leverages both Generative AI and Machine Learning to create intelligent, adaptive agents that can understand context and make decisions.",
        pt: "Agentforce aproveita tanto IA Generativa quanto Aprendizado de Máquina para criar agentes inteligentes e adaptativos que podem entender contexto e tomar decisões."
      }
    },
    {
      id: 'af-3',
      question: { en: "What is an agent action in Agentforce?", pt: "O que é uma ação de agente no Agentforce?" },
      options: [
        { en: "A specific task the agent can perform", pt: "Uma tarefa específica que o agente pode executar" },
        { en: "A user action", pt: "Uma ação de usuário" },
        { en: "A workflow step", pt: "Um passo de fluxo de trabalho" },
        { en: "A report action", pt: "Uma ação de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Actions are specific tasks that Agentforce agents can perform, such as creating records, sending emails, or updating data.",
        pt: "Ações de Agente são tarefas específicas que agentes Agentforce podem executar, como criar registros, enviar emails ou atualizar dados."
      }
    },
    {
      id: 'af-4',
      question: { en: "How does Agentforce learn from interactions?", pt: "Como o Agentforce aprende com interações?" },
      options: [
        { en: "Through continuous feedback and data analysis", pt: "Através de feedback contínuo e análise de dados" },
        { en: "Manual programming only", pt: "Apenas programação manual" },
        { en: "It doesn't learn", pt: "Não aprende" },
        { en: "Random selection", pt: "Seleção aleatória" }
      ],
      correct: 0,
      explanation: { 
        en: "Agentforce agents learn and improve through continuous feedback, data analysis, and machine learning algorithms that adapt to patterns and outcomes.",
        pt: "Agentes Agentforce aprendem e melhoram através de feedback contínuo, análise de dados e algoritmos de aprendizado de máquina que se adaptam a padrões e resultados."
      }
    },
    {
      id: 'af-5',
      question: { en: "What is agent reasoning in Agentforce?", pt: "O que é raciocínio de agente no Agentforce?" },
      options: [
        { en: "The agent's ability to analyze context and make decisions", pt: "A capacidade do agente de analisar contexto e tomar decisões" },
        { en: "A logical operator", pt: "Um operador lógico" },
        { en: "A validation rule", pt: "Uma regra de validação" },
        { en: "A workflow rule", pt: "Uma regra de fluxo de trabalho" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Reasoning is the AI capability that allows agents to analyze context, understand intent, and make intelligent decisions based on available data.",
        pt: "Raciocínio de Agente é a capacidade de IA que permite aos agentes analisar contexto, entender intenção e tomar decisões inteligentes baseadas em dados disponíveis."
      }
    },
    {
      id: 'af-6',
      question: { en: "What is an agent topic in Agentforce?", pt: "O que é um tópico de agente no Agentforce?" },
      options: [
        { en: "A category of tasks the agent specializes in", pt: "Uma categoria de tarefas em que o agente se especializa" },
        { en: "A discussion topic", pt: "Um tópico de discussão" },
        { en: "A knowledge article", pt: "Um artigo de conhecimento" },
        { en: "A report category", pt: "Uma categoria de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Topics define categories of tasks or domains that an agent specializes in, helping organize and route work appropriately.",
        pt: "Tópicos de Agente definem categorias de tarefas ou domínios em que um agente se especializa, ajudando a organizar e rotear trabalho apropriadamente."
      }
    },
    {
      id: 'af-7',
      question: { en: "How does Agentforce integrate with Salesforce data?", pt: "Como o Agentforce se integra com dados do Salesforce?" },
      options: [
        { en: "Native integration with all Salesforce objects and data", pt: "Integração nativa com todos os objetos e dados do Salesforce" },
        { en: "Manual data export only", pt: "Apenas exportação manual de dados" },
        { en: "No integration", pt: "Sem integração" },
        { en: "API calls only", pt: "Apenas chamadas de API" }
      ],
      correct: 0,
      explanation: { 
        en: "Agentforce has native integration with Salesforce, allowing agents to access and manipulate all Salesforce objects and data seamlessly.",
        pt: "Agentforce tem integração nativa com Salesforce, permitindo que agentes acessem e manipulem todos os objetos e dados do Salesforce perfeitamente."
      }
    },
    {
      id: 'af-8',
      question: { en: "What is agent handoff?", pt: "O que é transferência de agente?" },
      options: [
        { en: "Transferring a task from AI agent to human agent", pt: "Transferir uma tarefa de agente IA para agente humano" },
        { en: "Changing agents", pt: "Trocar agentes" },
        { en: "Ending a conversation", pt: "Encerrar uma conversa" },
        { en: "Starting a new task", pt: "Iniciar uma nova tarefa" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Handoff is the process of seamlessly transferring a task or conversation from an AI agent to a human agent when needed.",
        pt: "Transferência de Agente é o processo de transferir perfeitamente uma tarefa ou conversa de um agente IA para um agente humano quando necessário."
      }
    },
    {
      id: 'af-9',
      question: { en: "What is agent training in Agentforce?", pt: "O que é treinamento de agente no Agentforce?" },
      options: [
        { en: "Providing examples and feedback to improve agent performance", pt: "Fornecer exemplos e feedback para melhorar o desempenho do agente" },
        { en: "User training", pt: "Treinamento de usuário" },
        { en: "Manual programming", pt: "Programação manual" },
        { en: "Documentation", pt: "Documentação" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Training involves providing examples, feedback, and corrections to help AI agents learn and improve their performance over time.",
        pt: "Treinamento de Agente envolve fornecer exemplos, feedback e correções para ajudar agentes IA a aprender e melhorar seu desempenho ao longo do tempo."
      }
    },
    {
      id: 'af-10',
      question: { en: "What is agent analytics?", pt: "O que é análise de agente?" },
      options: [
        { en: "Metrics and insights about agent performance", pt: "Métricas e insights sobre desempenho do agente" },
        { en: "User analytics", pt: "Análise de usuário" },
        { en: "Data analytics", pt: "Análise de dados" },
        { en: "Report analytics", pt: "Análise de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Analytics provides metrics and insights about agent performance, including success rates, response times, and user satisfaction.",
        pt: "Análise de Agente fornece métricas e insights sobre desempenho do agente, incluindo taxas de sucesso, tempos de resposta e satisfação do usuário."
      }
    },
    {
      id: 'af-11',
      question: { en: "What is conversational AI in Agentforce?", pt: "O que é IA conversacional no Agentforce?" },
      options: [
        { en: "Natural language understanding and generation", pt: "Compreensão e geração de linguagem natural" },
        { en: "Chat functionality", pt: "Funcionalidade de chat" },
        { en: "Voice recognition", pt: "Reconhecimento de voz" },
        { en: "Text messaging", pt: "Mensagens de texto" }
      ],
      correct: 0,
      explanation: { 
        en: "Conversational AI enables agents to understand and generate natural language, allowing for human-like interactions with users.",
        pt: "IA Conversacional permite que agentes entendam e gerem linguagem natural, permitindo interações semelhantes a humanos com usuários."
      }
    },
    {
      id: 'af-12',
      question: { en: "What is agent orchestration?", pt: "O que é orquestração de agente?" },
      options: [
        { en: "Coordinating multiple agents to work together", pt: "Coordenar múltiplos agentes para trabalhar juntos" },
        { en: "Music for agents", pt: "Música para agentes" },
        { en: "Agent scheduling", pt: "Agendamento de agente" },
        { en: "Workflow management", pt: "Gerenciamento de fluxo de trabalho" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Orchestration coordinates multiple AI agents to work together on complex tasks, each handling their specialized domain.",
        pt: "Orquestração de Agente coordena múltiplos agentes IA para trabalhar juntos em tarefas complexas, cada um lidando com seu domínio especializado."
      }
    },
    {
      id: 'af-13',
      question: { en: "What is agent memory?", pt: "O que é memória de agente?" },
      options: [
        { en: "The agent's ability to remember context across interactions", pt: "A capacidade do agente de lembrar contexto entre interações" },
        { en: "Storage capacity", pt: "Capacidade de armazenamento" },
        { en: "Database memory", pt: "Memória de banco de dados" },
        { en: "Cache memory", pt: "Memória cache" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Memory allows AI agents to remember context, previous interactions, and user preferences across multiple conversations.",
        pt: "Memória de Agente permite que agentes IA lembrem contexto, interações anteriores e preferências do usuário em múltiplas conversas."
      }
    },
    {
      id: 'af-14',
      question: { en: "What is agent personalization?", pt: "O que é personalização de agente?" },
      options: [
        { en: "Tailoring agent responses based on user data and preferences", pt: "Adaptar respostas do agente com base em dados e preferências do usuário" },
        { en: "Customizing agent appearance", pt: "Personalizar aparência do agente" },
        { en: "User customization", pt: "Personalização de usuário" },
        { en: "Theme customization", pt: "Personalização de tema" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Personalization tailors responses and actions based on individual user data, preferences, and interaction history.",
        pt: "Personalização de Agente adapta respostas e ações com base em dados individuais do usuário, preferências e histórico de interação."
      }
    },
    {
      id: 'af-15',
      question: { en: "What is agent escalation?", pt: "O que é escalação de agente?" },
      options: [
        { en: "Routing complex issues to specialized agents or humans", pt: "Rotear problemas complexos para agentes especializados ou humanos" },
        { en: "Increasing agent priority", pt: "Aumentar prioridade do agente" },
        { en: "Escalating to management", pt: "Escalar para gerência" },
        { en: "Raising ticket priority", pt: "Aumentar prioridade do ticket" }
      ],
      correct: 0,
      explanation: { 
        en: "Agent Escalation automatically routes complex or sensitive issues to specialized AI agents or human agents when needed.",
        pt: "Escalação de Agente roteia automaticamente problemas complexos ou sensíveis para agentes IA especializados ou agentes humanos quando necessário."
      }
    }
  ],
  'data-cloud': [
    {
      id: 'dc-1',
      question: { en: "What is the primary purpose of Data Cloud?", pt: "Qual é o propósito principal do Data Cloud?" },
      options: [
        { en: "Unify customer data from multiple sources", pt: "Unificar dados de clientes de múltiplas fontes" },
        { en: "Store email templates", pt: "Armazenar templates de email" },
        { en: "Manage user permissions", pt: "Gerenciar permissões de usuário" },
        { en: "Create reports", pt: "Criar relatórios" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Cloud unifies customer data from multiple sources into a single, comprehensive view, enabling better insights and personalization.",
        pt: "Data Cloud unifica dados de clientes de múltiplas fontes em uma única visão abrangente, permitindo melhores insights e personalização."
      }
    },
    {
      id: 'dc-2',
      question: { en: "What is a data stream in Data Cloud?", pt: "O que é um fluxo de dados no Data Cloud?" },
      options: [
        { en: "A continuous flow of data from a source", pt: "Um fluxo contínuo de dados de uma fonte" },
        { en: "A data river", pt: "Um rio de dados" },
        { en: "A type of report", pt: "Um tipo de relatório" },
        { en: "A data export", pt: "Uma exportação de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Streams are continuous flows of data from various sources into Data Cloud, enabling real-time data ingestion and processing.",
        pt: "Fluxos de Dados são fluxos contínuos de dados de várias fontes para o Data Cloud, permitindo ingestão e processamento de dados em tempo real."
      }
    },
    {
      id: 'dc-3',
      question: { en: "What is data harmonization?", pt: "O que é harmonização de dados?" },
      options: [
        { en: "Standardizing data from different sources into a common format", pt: "Padronizar dados de diferentes fontes em um formato comum" },
        { en: "Making data sound good", pt: "Fazer dados soarem bem" },
        { en: "Data synchronization", pt: "Sincronização de dados" },
        { en: "Data cleaning", pt: "Limpeza de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Harmonization standardizes data from different sources into a common format, making it easier to analyze and use across systems.",
        pt: "Harmonização de Dados padroniza dados de diferentes fontes em um formato comum, facilitando a análise e uso em sistemas."
      }
    },
    {
      id: 'dc-4',
      question: { en: "What is identity resolution?", pt: "O que é resolução de identidade?" },
      options: [
        { en: "Matching and merging records that belong to the same individual", pt: "Combinar e mesclar registros que pertencem ao mesmo indivíduo" },
        { en: "User authentication", pt: "Autenticação de usuário" },
        { en: "Password recovery", pt: "Recuperação de senha" },
        { en: "Identity verification", pt: "Verificação de identidade" }
      ],
      correct: 0,
      explanation: { 
        en: "Identity Resolution matches and merges records from different sources that belong to the same individual, creating a unified customer profile.",
        pt: "Resolução de Identidade combina e mescla registros de diferentes fontes que pertencem ao mesmo indivíduo, criando um perfil unificado de cliente."
      }
    },
    {
      id: 'dc-5',
      question: { en: "What is a unified profile?", pt: "O que é um perfil unificado?" },
      options: [
        { en: "A single, comprehensive view of a customer", pt: "Uma visão única e abrangente de um cliente" },
        { en: "A user profile", pt: "Um perfil de usuário" },
        { en: "A social media profile", pt: "Um perfil de mídia social" },
        { en: "A company profile", pt: "Um perfil de empresa" }
      ],
      correct: 0,
      explanation: { 
        en: "Unified Profiles combine data from multiple sources to create a single, comprehensive view of each customer across all touchpoints.",
        pt: "Perfis Unificados combinam dados de múltiplas fontes para criar uma visão única e abrangente de cada cliente em todos os pontos de contato."
      }
    },
    {
      id: 'dc-6',
      question: { en: "What is data segmentation in Data Cloud?", pt: "O que é segmentação de dados no Data Cloud?" },
      options: [
        { en: "Grouping customers based on shared characteristics", pt: "Agrupar clientes com base em características compartilhadas" },
        { en: "Dividing data into parts", pt: "Dividir dados em partes" },
        { en: "Data partitioning", pt: "Particionamento de dados" },
        { en: "Data filtering", pt: "Filtragem de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Segmentation groups customers based on shared characteristics, behaviors, or attributes for targeted marketing and personalization.",
        pt: "Segmentação de Dados agrupa clientes com base em características, comportamentos ou atributos compartilhados para marketing direcionado e personalização."
      }
    },
    {
      id: 'dc-7',
      question: { en: "What is real-time activation?", pt: "O que é ativação em tempo real?" },
      options: [
        { en: "Using data immediately as it's collected", pt: "Usar dados imediatamente conforme são coletados" },
        { en: "Activating features", pt: "Ativar recursos" },
        { en: "Real-time reporting", pt: "Relatórios em tempo real" },
        { en: "Live streaming", pt: "Transmissão ao vivo" }
      ],
      correct: 0,
      explanation: { 
        en: "Real-Time Activation allows you to use customer data immediately as it's collected to trigger personalized experiences and actions.",
        pt: "Ativação em Tempo Real permite usar dados de clientes imediatamente conforme são coletados para acionar experiências e ações personalizadas."
      }
    },
    {
      id: 'dc-8',
      question: { en: "What is a data model in Data Cloud?", pt: "O que é um modelo de dados no Data Cloud?" },
      options: [
        { en: "The structure and relationships of data objects", pt: "A estrutura e relacionamentos de objetos de dados" },
        { en: "A data template", pt: "Um modelo de dados" },
        { en: "A database schema", pt: "Um esquema de banco de dados" },
        { en: "A data type", pt: "Um tipo de dado" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Models define the structure, relationships, and attributes of data objects in Data Cloud, providing a framework for data organization.",
        pt: "Modelos de Dados definem a estrutura, relacionamentos e atributos de objetos de dados no Data Cloud, fornecendo uma estrutura para organização de dados."
      }
    },
    {
      id: 'dc-9',
      question: { en: "What is data enrichment?", pt: "O que é enriquecimento de dados?" },
      options: [
        { en: "Adding additional information to existing data", pt: "Adicionar informações adicionais a dados existentes" },
        { en: "Making data richer", pt: "Tornar dados mais ricos" },
        { en: "Data validation", pt: "Validação de dados" },
        { en: "Data cleaning", pt: "Limpeza de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Enrichment adds additional information from external sources to existing customer data, providing deeper insights and context.",
        pt: "Enriquecimento de Dados adiciona informações adicionais de fontes externas a dados existentes de clientes, fornecendo insights e contexto mais profundos."
      }
    },
    {
      id: 'dc-10',
      question: { en: "What is a calculated insight?", pt: "O que é um insight calculado?" },
      options: [
        { en: "A metric derived from customer data", pt: "Uma métrica derivada de dados de clientes" },
        { en: "A calculation", pt: "Um cálculo" },
        { en: "A formula field", pt: "Um campo fórmula" },
        { en: "A report metric", pt: "Uma métrica de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Calculated Insights are metrics derived from customer data, such as lifetime value, engagement scores, or propensity models.",
        pt: "Insights Calculados são métricas derivadas de dados de clientes, como valor vitalício, pontuações de engajamento ou modelos de propensão."
      }
    },
    {
      id: 'dc-11',
      question: { en: "What is data federation?", pt: "O que é federação de dados?" },
      options: [
        { en: "Accessing data from multiple sources without moving it", pt: "Acessar dados de múltiplas fontes sem movê-los" },
        { en: "Data governance", pt: "Governança de dados" },
        { en: "Data replication", pt: "Replicação de dados" },
        { en: "Data migration", pt: "Migração de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Federation allows you to access and query data from multiple sources without physically moving or copying it into Data Cloud.",
        pt: "Federação de Dados permite acessar e consultar dados de múltiplas fontes sem movê-los ou copiá-los fisicamente para o Data Cloud."
      }
    },
    {
      id: 'dc-12',
      question: { en: "What is a data action?", pt: "O que é uma ação de dados?" },
      options: [
        { en: "An automated action triggered by data conditions", pt: "Uma ação automatizada acionada por condições de dados" },
        { en: "A data operation", pt: "Uma operação de dados" },
        { en: "A workflow action", pt: "Uma ação de fluxo de trabalho" },
        { en: "A data export", pt: "Uma exportação de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Actions are automated actions triggered when specific data conditions are met, enabling real-time responses to customer behavior.",
        pt: "Ações de Dados são ações automatizadas acionadas quando condições específicas de dados são atendidas, permitindo respostas em tempo real ao comportamento do cliente."
      }
    },
    {
      id: 'dc-13',
      question: { en: "What is data lineage?", pt: "O que é linhagem de dados?" },
      options: [
        { en: "Tracking the origin and transformations of data", pt: "Rastrear a origem e transformações de dados" },
        { en: "Data history", pt: "Histórico de dados" },
        { en: "Data ancestry", pt: "Ancestralidade de dados" },
        { en: "Data versioning", pt: "Versionamento de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Lineage tracks the origin, movement, and transformations of data throughout its lifecycle, ensuring transparency and compliance.",
        pt: "Linhagem de Dados rastreia a origem, movimento e transformações de dados ao longo de seu ciclo de vida, garantindo transparência e conformidade."
      }
    },
    {
      id: 'dc-14',
      question: { en: "What is consent management in Data Cloud?", pt: "O que é gerenciamento de consentimento no Data Cloud?" },
      options: [
        { en: "Managing customer data privacy preferences", pt: "Gerenciar preferências de privacidade de dados de clientes" },
        { en: "User permissions", pt: "Permissões de usuário" },
        { en: "Data access control", pt: "Controle de acesso a dados" },
        { en: "Security settings", pt: "Configurações de segurança" }
      ],
      correct: 0,
      explanation: { 
        en: "Consent Management tracks and honors customer data privacy preferences, ensuring compliance with regulations like GDPR and CCPA.",
        pt: "Gerenciamento de Consentimento rastreia e honra preferências de privacidade de dados de clientes, garantindo conformidade com regulamentos como GDPR e CCPA."
      }
    },
    {
      id: 'dc-15',
      question: { en: "What is predictive analytics in Data Cloud?", pt: "O que é análise preditiva no Data Cloud?" },
      options: [
        { en: "Using AI to predict future customer behavior", pt: "Usar IA para prever comportamento futuro de clientes" },
        { en: "Forecasting", pt: "Previsão" },
        { en: "Trend analysis", pt: "Análise de tendências" },
        { en: "Statistical analysis", pt: "Análise estatística" }
      ],
      correct: 0,
      explanation: { 
        en: "Predictive Analytics uses AI and machine learning to analyze historical data and predict future customer behavior, preferences, and outcomes.",
        pt: "Análise Preditiva usa IA e aprendizado de máquina para analisar dados históricos e prever comportamento, preferências e resultados futuros de clientes."
      }
    }
  ],
  'business-analyst': [
    {
      id: 'ba-1',
      question: { en: "What is a key responsibility of a Salesforce Business Analyst?", pt: "Qual é uma responsabilidade chave de um Analista de Negócios Salesforce?" },
      options: [
        { en: "Gathering and documenting requirements", pt: "Coletar e documentar requisitos" },
        { en: "Writing Apex code", pt: "Escrever código Apex" },
        { en: "Managing servers", pt: "Gerenciar servidores" },
        { en: "Designing databases", pt: "Projetar bancos de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Business Analysts focus on understanding business needs, gathering requirements, and translating them into Salesforce solutions.",
        pt: "Analistas de Negócios focam em entender necessidades de negócio, coletar requisitos e traduzi-los em soluções Salesforce."
      }
    },
    {
      id: 'ba-2',
      question: { en: "What is a user story?", pt: "O que é uma história de usuário?" },
      options: [
        { en: "A description of a feature from the user's perspective", pt: "Uma descrição de um recurso da perspectiva do usuário" },
        { en: "A user biography", pt: "Uma biografia de usuário" },
        { en: "A case study", pt: "Um estudo de caso" },
        { en: "A user manual", pt: "Um manual de usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "User Stories describe features or requirements from the end user's perspective, typically following the format: 'As a [user], I want [goal] so that [benefit]'.",
        pt: "Histórias de Usuário descrevem recursos ou requisitos da perspectiva do usuário final, tipicamente seguindo o formato: 'Como [usuário], eu quero [objetivo] para que [benefício]'."
      }
    },
    {
      id: 'ba-3',
      question: { en: "What is a process map?", pt: "O que é um mapa de processo?" },
      options: [
        { en: "A visual representation of a business process", pt: "Uma representação visual de um processo de negócio" },
        { en: "A geographical map", pt: "Um mapa geográfico" },
        { en: "A project plan", pt: "Um plano de projeto" },
        { en: "A data model", pt: "Um modelo de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Process Maps visually represent business processes, showing steps, decision points, and flow, helping identify inefficiencies and improvement opportunities.",
        pt: "Mapas de Processo representam visualmente processos de negócio, mostrando etapas, pontos de decisão e fluxo, ajudando a identificar ineficiências e oportunidades de melhoria."
      }
    },
    {
      id: 'ba-4',
      question: { en: "What is gap analysis?", pt: "O que é análise de lacunas?" },
      options: [
        { en: "Identifying the difference between current and desired state", pt: "Identificar a diferença entre estado atual e desejado" },
        { en: "Finding missing data", pt: "Encontrar dados faltantes" },
        { en: "Analyzing gaps in reports", pt: "Analisar lacunas em relatórios" },
        { en: "Identifying security gaps", pt: "Identificar lacunas de segurança" }
      ],
      correct: 0,
      explanation: { 
        en: "Gap Analysis identifies the difference between the current state and desired future state, helping prioritize requirements and solutions.",
        pt: "Análise de Lacunas identifica a diferença entre o estado atual e o estado futuro desejado, ajudando a priorizar requisitos e soluções."
      }
    },
    {
      id: 'ba-5',
      question: { en: "What is stakeholder management?", pt: "O que é gerenciamento de partes interessadas?" },
      options: [
        { en: "Identifying and engaging with project stakeholders", pt: "Identificar e engajar com partes interessadas do projeto" },
        { en: "Managing shareholders", pt: "Gerenciar acionistas" },
        { en: "User management", pt: "Gerenciamento de usuários" },
        { en: "Team management", pt: "Gerenciamento de equipe" }
      ],
      correct: 0,
      explanation: { 
        en: "Stakeholder Management involves identifying, analyzing, and engaging with individuals or groups who have an interest in or influence on the project.",
        pt: "Gerenciamento de Partes Interessadas envolve identificar, analisar e engajar com indivíduos ou grupos que têm interesse ou influência no projeto."
      }
    },
    {
      id: 'ba-6',
      question: { en: "What is a requirements document?", pt: "O que é um documento de requisitos?" },
      options: [
        { en: "A formal document detailing project requirements", pt: "Um documento formal detalhando requisitos do projeto" },
        { en: "A list of requirements", pt: "Uma lista de requisitos" },
        { en: "A user manual", pt: "Um manual de usuário" },
        { en: "A project plan", pt: "Um plano de projeto" }
      ],
      correct: 0,
      explanation: { 
        en: "Requirements Documents formally detail functional and non-functional requirements, serving as a contract between stakeholders and the development team.",
        pt: "Documentos de Requisitos detalham formalmente requisitos funcionais e não funcionais, servindo como um contrato entre partes interessadas e a equipe de desenvolvimento."
      }
    },
    {
      id: 'ba-7',
      question: { en: "What is acceptance criteria?", pt: "O que é critério de aceitação?" },
      options: [
        { en: "Conditions that must be met for a feature to be accepted", pt: "Condições que devem ser atendidas para um recurso ser aceito" },
        { en: "User acceptance", pt: "Aceitação do usuário" },
        { en: "Quality standards", pt: "Padrões de qualidade" },
        { en: "Testing criteria", pt: "Critérios de teste" }
      ],
      correct: 0,
      explanation: { 
        en: "Acceptance Criteria define specific conditions that must be met for a feature or user story to be considered complete and accepted by stakeholders.",
        pt: "Critérios de Aceitação definem condições específicas que devem ser atendidas para que um recurso ou história de usuário seja considerado completo e aceito pelas partes interessadas."
      }
    },
    {
      id: 'ba-8',
      question: { en: "What is a use case?", pt: "O que é um caso de uso?" },
      options: [
        { en: "A detailed description of how users interact with a system", pt: "Uma descrição detalhada de como usuários interagem com um sistema" },
        { en: "A test case", pt: "Um caso de teste" },
        { en: "A business case", pt: "Um caso de negócio" },
        { en: "An example", pt: "Um exemplo" }
      ],
      correct: 0,
      explanation: { 
        en: "Use Cases provide detailed descriptions of how users interact with a system to achieve specific goals, including steps, actors, and outcomes.",
        pt: "Casos de Uso fornecem descrições detalhadas de como usuários interagem com um sistema para alcançar objetivos específicos, incluindo etapas, atores e resultados."
      }
    },
    {
      id: 'ba-9',
      question: { en: "What is data modeling?", pt: "O que é modelagem de dados?" },
      options: [
        { en: "Designing the structure of data and relationships", pt: "Projetar a estrutura de dados e relacionamentos" },
        { en: "Creating data", pt: "Criar dados" },
        { en: "Data analysis", pt: "Análise de dados" },
        { en: "Data visualization", pt: "Visualização de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "Data Modeling involves designing the structure, relationships, and constraints of data to support business requirements and ensure data integrity.",
        pt: "Modelagem de Dados envolve projetar a estrutura, relacionamentos e restrições de dados para apoiar requisitos de negócio e garantir integridade de dados."
      }
    },
    {
      id: 'ba-10',
      question: { en: "What is change management?", pt: "O que é gerenciamento de mudanças?" },
      options: [
        { en: "Managing the people side of organizational change", pt: "Gerenciar o lado humano da mudança organizacional" },
        { en: "Managing code changes", pt: "Gerenciar mudanças de código" },
        { en: "Managing project changes", pt: "Gerenciar mudanças de projeto" },
        { en: "Managing configuration changes", pt: "Gerenciar mudanças de configuração" }
      ],
      correct: 0,
      explanation: { 
        en: "Change Management focuses on the people side of organizational change, ensuring users adopt new systems and processes successfully.",
        pt: "Gerenciamento de Mudanças foca no lado humano da mudança organizacional, garantindo que usuários adotem novos sistemas e processos com sucesso."
      }
    },
    {
      id: 'ba-11',
      question: { en: "What is a wireframe?", pt: "O que é um wireframe?" },
      options: [
        { en: "A visual blueprint of a user interface", pt: "Um blueprint visual de uma interface de usuário" },
        { en: "A network diagram", pt: "Um diagrama de rede" },
        { en: "A data model", pt: "Um modelo de dados" },
        { en: "A process flow", pt: "Um fluxo de processo" }
      ],
      correct: 0,
      explanation: { 
        en: "Wireframes are visual blueprints of user interfaces, showing layout, content placement, and functionality without detailed design elements.",
        pt: "Wireframes são blueprints visuais de interfaces de usuário, mostrando layout, posicionamento de conteúdo e funcionalidade sem elementos de design detalhados."
      }
    },
    {
      id: 'ba-12',
      question: { en: "What is user acceptance testing (UAT)?", pt: "O que é teste de aceitação do usuário (UAT)?" },
      options: [
        { en: "Testing by end users to validate the solution meets requirements", pt: "Teste por usuários finais para validar que a solução atende requisitos" },
        { en: "Automated testing", pt: "Teste automatizado" },
        { en: "Unit testing", pt: "Teste unitário" },
        { en: "Performance testing", pt: "Teste de desempenho" }
      ],
      correct: 0,
      explanation: { 
        en: "User Acceptance Testing is performed by end users to validate that the solution meets business requirements and is ready for deployment.",
        pt: "Teste de Aceitação do Usuário é realizado por usuários finais para validar que a solução atende requisitos de negócio e está pronta para implantação."
      }
    },
    {
      id: 'ba-13',
      question: { en: "What is a business process?", pt: "O que é um processo de negócio?" },
      options: [
        { en: "A series of steps to achieve a business objective", pt: "Uma série de etapas para alcançar um objetivo de negócio" },
        { en: "A business plan", pt: "Um plano de negócios" },
        { en: "A workflow", pt: "Um fluxo de trabalho" },
        { en: "A procedure", pt: "Um procedimento" }
      ],
      correct: 0,
      explanation: { 
        en: "Business Processes are series of steps or activities performed to achieve specific business objectives, involving people, systems, and data.",
        pt: "Processos de Negócio são séries de etapas ou atividades realizadas para alcançar objetivos específicos de negócio, envolvendo pessoas, sistemas e dados."
      }
    },
    {
      id: 'ba-14',
      question: { en: "What is requirements prioritization?", pt: "O que é priorização de requisitos?" },
      options: [
        { en: "Ranking requirements by importance and urgency", pt: "Classificar requisitos por importância e urgência" },
        { en: "Listing requirements", pt: "Listar requisitos" },
        { en: "Organizing requirements", pt: "Organizar requisitos" },
        { en: "Documenting requirements", pt: "Documentar requisitos" }
      ],
      correct: 0,
      explanation: { 
        en: "Requirements Prioritization ranks requirements by importance, urgency, and business value to help teams focus on delivering the most critical features first.",
        pt: "Priorização de Requisitos classifica requisitos por importância, urgência e valor de negócio para ajudar equipes a focar em entregar os recursos mais críticos primeiro."
      }
    },
    {
      id: 'ba-15',
      question: { en: "What is a business case?", pt: "O que é um caso de negócio?" },
      options: [
        { en: "A justification for a project based on costs and benefits", pt: "Uma justificativa para um projeto baseada em custos e benefícios" },
        { en: "A use case", pt: "Um caso de uso" },
        { en: "A test case", pt: "Um caso de teste" },
        { en: "A case study", pt: "Um estudo de caso" }
      ],
      correct: 0,
      explanation: { 
        en: "Business Cases provide justification for projects by analyzing costs, benefits, risks, and return on investment to support decision-making.",
        pt: "Casos de Negócio fornecem justificativa para projetos analisando custos, benefícios, riscos e retorno sobre investimento para apoiar tomada de decisão."
      }
    }
  ]
};
