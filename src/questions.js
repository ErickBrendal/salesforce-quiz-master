export const offlineQuestions = {
  'platform-foundations': [
    {
      id: 'pf-1',
      question: { en: "What is a Salesforce Object?", pt: "O que é um Objeto Salesforce?" },
      options: [
        { en: "A custom database table structure", pt: "Uma estrutura de tabela de banco de dados" },
        { en: "A user interface component", pt: "Um componente de interface de usuário" },
        { en: "A declarative automation tool", pt: "Uma ferramenta de automação declarativa" },
        { en: "A system security setting", pt: "Uma configuração de segurança do sistema" }
      ],
      correct: 0,
      explanation: { 
        en: "A Salesforce Object is a fundamental building block, acting as a custom database table to store specific types of information. Standard objects like Account and Contact are pre-built, while custom objects extend the data model for unique business needs. They are crucial for organizing and managing data within the platform.",
        pt: "Um Objeto Salesforce é um bloco de construção fundamental, atuando como uma tabela de banco de dados personalizada para armazenar tipos específicos de informação. Objetos padrão como Conta e Contato são pré-construídos, enquanto objetos personalizados estendem o modelo de dados para necessidades de negócios exclusivas. Eles são cruciais para organizar e gerenciar dados dentro da plataforma."
      }
    },
    {
      id: 'pf-2',
      question: { en: "Which relationship type links multiple child records to multiple parent records?", pt: "Qual tipo de relacionamento liga múltiplos registros filhos a múltiplos registros pais?" },
      options: [
        { en: "Master-Detail relationship type", pt: "Relacionamento Mestre-Detalhe" },
        { en: "Lookup relationship connection", pt: "Conexão de relacionamento de Pesquisa" },
        { en: "Many-to-Many via junction object", pt: "Muitos-para-Muitos via objeto de junção" },
        { en: "Hierarchical self-relationship", pt: "Auto-relacionamento hierárquico" }
      ],
      correct: 2,
      explanation: { 
        en: "Many-to-Many relationships are crucial for complex data models, enabling flexible connections between records. They are implemented using a junction object, which is a custom object with two Master-Detail relationships to the parent objects. This setup allows a record from one object to be linked to multiple records from another, and vice-versa, providing robust data association.",
        pt: "Relacionamentos Muitos-para-Muitos são cruciais para modelos de dados complexos, permitindo conexões flexíveis entre registros. Eles são implementados usando um objeto de junção, que é um objeto personalizado com dois relacionamentos Mestre-Detalhe para os objetos pai. Essa configuração permite que um registro de um objeto seja vinculado a múltiplos registros de outro, e vice-versa, proporcionando uma associação de dados robusta."
      }
    },
    {
      id: 'pf-3',
      question: { en: "Which field type stores up to 131,072 characters?", pt: "Qual tipo de campo armazena até 131.072 caracteres?" },
      options: [
        { en: "Standard Text field type", pt: "Tipo de campo Texto Padrão" },
        { en: "Long Text Area field type", pt: "Tipo de campo Área de Texto Longa" },
        { en: "Rich Text Area field type", pt: "Tipo de campo Área de Texto Rico" },
        { en: "Simple Text Area field", pt: "Campo de Área de Texto Simples" }
      ],
      correct: 1,
      explanation: { 
        en: "The Long Text Area field type is specifically designed to store extensive textual information, accommodating up to 131,072 characters. This makes it ideal for detailed notes, descriptions, or any content requiring significant length. It's a key tool for capturing comprehensive qualitative data within Salesforce records.",
        pt: "O tipo de campo Área de Texto Longa é projetado especificamente para armazenar informações textuais extensas, acomodando até 131.072 caracteres. Isso o torna ideal para notas detalhadas, descrições ou qualquer conteúdo que exija um comprimento significativo. É uma ferramenta chave para capturar dados qualitativos abrangentes dentro dos registros do Salesforce."
      }
    },
    {
      id: 'pf-4',
      question: { en: "What is a formula field?", pt: "O que é um campo fórmula?" },
      options: [
        { en: "A field calculating values automatically", pt: "Um campo que calcula valores automaticamente" },
        { en: "A field storing complex logic", pt: "Um campo que armazena lógica complexa" },
        { en: "A field for data entry only", pt: "Um campo apenas para entrada de dados" },
        { en: "A field requiring manual updates", pt: "Um campo que requer atualizações manuais" }
      ],
      correct: 0,
      explanation: { 
        en: "A formula field in Salesforce automatically calculates its value based on an expression defined by the administrator. These fields are read-only and dynamically update whenever the values of the fields they reference change. They are incredibly useful for displaying real-time aggregated data, conditional text, or performing calculations without requiring Apex code, enhancing data accuracy and user experience.",
        pt: "Um campo fórmula no Salesforce calcula automaticamente seu valor com base em uma expressão definida pelo administrador. Esses campos são somente leitura e são atualizados dinamicamente sempre que os valores dos campos que eles referenciam mudam. Eles são incrivelmente úteis para exibir dados agregados em tempo real, texto condicional ou realizar cálculos sem a necessidade de código Apex, melhorando a precisão dos dados e a experiência do usuário."
      }
    },
    {
      id: 'pf-5',
      question: { en: "What is the difference between a Role and a Profile?", pt: "Qual a diferença entre Função e Perfil?" },
      options: [
        { en: "Roles manage record access hierarchy", pt: "Funções gerenciam hierarquia de acesso a registros" },
        { en: "Profiles define object permissions", pt: "Perfis definem permissões de objeto" },
        { en: "Roles are for system administrators", pt: "Funções são para administradores de sistema" },
        { en: "Profiles manage data sharing rules", pt: "Perfis gerenciam regras de compartilhamento de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "In Salesforce, Roles primarily control record-level access through a hierarchical structure, determining what data users can see based on their position in the organization. Profiles, on the other hand, define object-level permissions, field-level security, and user interface settings, dictating what users can do within the system. Both are critical components of the Salesforce security model, working together to ensure appropriate data visibility and functionality for each user.",
        pt: "No Salesforce, Funções controlam principalmente o acesso no nível de registro através de uma estrutura hierárquica, determinando quais dados os usuários podem ver com base em sua posição na organização. Perfis, por outro lado, definem permissões no nível de objeto, segurança no nível de campo e configurações da interface do usuário, ditando o que os usuários podem fazer dentro do sistema. Ambos são componentes críticos do modelo de segurança do Salesforce, trabalhando juntos para garantir visibilidade e funcionalidade de dados apropriadas para cada usuário."
      }
    },
    {
      id: 'pf-6',
      question: { en: "What is a validation rule?", pt: "O que é uma regra de validação?" },
      options: [
        { en: "Prevents saving records with invalid data", pt: "Impede salvar registros com dados inválidos" },
        { en: "Validates user login credentials", pt: "Valida credenciais de login do usuário" },
        { en: "Checks email format for contacts", pt: "Verifica formato de email para contatos" },
        { en: "Ensures API call authentication", pt: "Garante autenticação de chamada de API" }
      ],
      correct: 0,
      explanation: { 
        en: "A validation rule in Salesforce ensures data quality by preventing users from saving records that do not meet specified criteria. When a record fails validation, an error message is displayed to the user, guiding them to correct the input. This mechanism is crucial for maintaining data integrity and business process compliance across the platform, reducing errors and improving reporting accuracy.",
        pt: "Uma regra de validação no Salesforce garante a qualidade dos dados, impedindo que os usuários salvem registros que não atendam aos critérios especificados. Quando um registro falha na validação, uma mensagem de erro é exibida ao usuário, orientando-o a corrigir a entrada. Esse mecanismo é crucial para manter a integridade dos dados e a conformidade com os processos de negócios em toda a plataforma, reduzindo erros e melhorando a precisão dos relatórios."
      }
    },
    {
      id: 'pf-7',
      question: { en: "What is a record type?", pt: "O que é um tipo de registro?" },
      options: [
        { en: "Custom business processes and picklists", pt: "Processos de negócio e listas de seleção personalizadas" },
        { en: "A specific custom object definition", pt: "Uma definição de objeto personalizado específico" },
        { en: "A specialized data field category", pt: "Uma categoria de campo de dados especializada" },
        { en: "A unique reporting data structure", pt: "Uma estrutura de dados de relatório única" }
      ],
      correct: 0,
      explanation: { 
        en: "Record Types in Salesforce enable administrators to offer different business processes, picklist values, and page layouts to different users based on their profiles. This customization allows for tailored user experiences and streamlined workflows, ensuring that users only see and interact with relevant information and processes. It's fundamental for managing diverse business requirements within a single Salesforce instance.",
        pt: "Tipos de Registro no Salesforce permitem que os administradores ofereçam diferentes processos de negócio, valores de lista de seleção e layouts de página para diferentes usuários com base em seus perfis. Essa personalização permite experiências de usuário adaptadas e fluxos de trabalho otimizados, garantindo que os usuários vejam e interajam apenas com informações e processos relevantes. É fundamental para gerenciar requisitos de negócios diversos dentro de uma única instância do Salesforce."
      }
    },
    {
      id: 'pf-8',
      question: { en: "What is the App Launcher?", pt: "O que é o Iniciador de Aplicativos?" },
      options: [
        { en: "A central hub for all applications", pt: "Um hub central para todos os aplicativos" },
        { en: "A tool for building custom apps", pt: "Uma ferramenta para construir aplicativos personalizados" },
        { en: "A mobile device management feature", pt: "Um recurso de gerenciamento de dispositivo móvel" },
        { en: "A developer console interface", pt: "Uma interface de console de desenvolvedor" }
      ],
      correct: 0,
      explanation: { 
        en: "The App Launcher in Salesforce serves as a centralized navigation point, allowing users to quickly find and access all their available applications and items. This includes standard Salesforce apps, custom applications built on the platform, and even connected third-party apps. It significantly enhances user productivity by providing a streamlined way to switch between different functionalities and tools within the Salesforce ecosystem.",
        pt: "O Iniciador de Aplicativos no Salesforce serve como um ponto de navegação centralizado, permitindo que os usuários encontrem e acessem rapidamente todos os seus aplicativos e itens disponíveis. Isso inclui aplicativos Salesforce padrão, aplicativos personalizados construídos na plataforma e até mesmo aplicativos de terceiros conectados. Ele aumenta significativamente a produtividade do usuário, fornecendo uma maneira simplificada de alternar entre diferentes funcionalidades e ferramentas dentro do ecossistema Salesforce."
      }
    },
    {
      id: 'pf-9',
      question: { en: "What is Lightning Experience?", pt: "O que é Lightning Experience?" },
      options: [
        { en: "Salesforce's modern user interface", pt: "Interface de usuário moderna do Salesforce" },
        { en: "A mobile application platform", pt: "Plataforma de aplicativo móvel" },
        { en: "A declarative development framework", pt: "Framework de desenvolvimento declarativo" },
        { en: "A specific cloud computing service", pt: "Serviço específico de computação em nuvem" }
      ],
      correct: 0,
      explanation: { 
        en: "Lightning Experience represents Salesforce's modern, intuitive, and highly productive user interface. It was designed to enhance user experience with a focus on efficiency, offering a visually appealing layout, improved navigation, and intelligent features. This interface provides a significant upgrade from the classic UI, enabling users to work smarter and faster with better data visualization and streamlined workflows.",
        pt: "Lightning Experience representa a interface de usuário moderna, intuitiva e altamente produtiva do Salesforce. Foi projetada para aprimorar a experiência do usuário com foco na eficiência, oferecendo um layout visualmente atraente, navegação aprimorada e recursos inteligentes. Esta interface oferece uma atualização significativa da UI clássica, permitindo que os usuários trabalhem de forma mais inteligente e rápida com melhor visualização de dados e fluxos de trabalho simplificados."
      }
    },
    {
      id: 'pf-10',
      question: { en: "What is a page layout?", pt: "O que é um layout de página?" },
      options: [
        { en: "Controls field visibility on record pages", pt: "Controla visibilidade de campos em páginas de registro" },
        { en: "A template for new object creation", pt: "Um modelo para criação de novos objetos" },
        { en: "A custom object data structure", pt: "Uma estrutura de dados de objeto personalizado" },
        { en: "A report visualization configuration", pt: "Uma configuração de visualização de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Page Layouts in Salesforce are essential for customizing the user interface for different profiles and record types. They control the arrangement of fields, buttons, custom links, and related lists on object record pages. By tailoring page layouts, administrators can ensure that users see only the information relevant to their roles, streamlining data entry and improving overall productivity. This flexibility is key to adapting Salesforce to specific business processes.",
        pt: "Layouts de Página no Salesforce são essenciais para personalizar a interface do usuário para diferentes perfis e tipos de registro. Eles controlam o arranjo de campos, botões, links personalizados e listas relacionadas nas páginas de registro de objetos. Ao adaptar os layouts de página, os administradores podem garantir que os usuários vejam apenas as informações relevantes para suas funções, otimizando a entrada de dados e melhorando a produtividade geral. Essa flexibilidade é fundamental para adaptar o Salesforce a processos de negócios específicos."
      }
    },
    {
      id: 'pf-11',
      question: { en: "What is a workflow rule?", pt: "O que é uma regra de fluxo de trabalho?" },
      options: [
        { en: "Automates standard internal business processes", pt: "Automatiza processos de negócios internos padrão" },
        { en: "Defines user interface layout logic", pt: "Define lógica de layout da interface do usuário" },
        { en: "Enforces data integrity constraints", pt: "Impõe restrições de integridade de dados" },
        { en: "Manages external system integrations", pt: "Gerencia integrações de sistemas externos" }
      ],
      correct: 0,
      explanation: { 
        en: "Workflow Rules in Salesforce are automation tools that streamline standard internal procedures. They can automatically perform actions such as sending email alerts, updating fields, creating tasks, or sending outbound messages when specific criteria are met. While Flow and Process Builder offer more advanced automation capabilities, Workflow Rules remain a simple and effective solution for straightforward automation needs.",
        pt: "Regras de Fluxo de Trabalho no Salesforce são ferramentas de automação que otimizam procedimentos internos padrão. Elas podem realizar ações automaticamente, como enviar alertas de e-mail, atualizar campos, criar tarefas ou enviar mensagens de saída quando critérios específicos são atendidos. Embora o Flow e o Process Builder ofereçam recursos de automação mais avançados, as Regras de Fluxo de Trabalho continuam sendo uma solução simples e eficaz para necessidades de automação diretas."
      }
    },
    {
      id: 'pf-12',
      question: { en: "What is the purpose of the Data Loader?", pt: "Qual o propósito do Data Loader?" },
      options: [
        { en: "Bulk import/export of data records", pt: "Importação/exportação em massa de registros de dados" },
        { en: "Real-time data synchronization", pt: "Sincronização de dados em tempo real" },
        { en: "Custom data visualization tool", pt: "Ferramenta de visualização de dados personalizada" },
        { en: "Automated data backup service", pt: "Serviço de backup de dados automatizado" }
      ],
      correct: 0,
      explanation: { 
        en: "The Data Loader is a powerful client application for the bulk import or export of data. It allows you to insert, update, delete, or export Salesforce records in large quantities, making it an essential tool for data migration and management. Unlike the Data Import Wizard, it supports all objects and can handle millions of records, providing robust functionality for complex data operations.",
        pt: "O Data Loader é um aplicativo cliente poderoso para a importação ou exportação em massa de dados. Ele permite inserir, atualizar, excluir ou exportar registros do Salesforce em grandes quantidades, tornando-se uma ferramenta essencial para migração e gerenciamento de dados. Diferente do Assistente de Importação de Dados, ele suporta todos os objetos e pode lidar com milhões de registros, fornecendo funcionalidade robusta para operações de dados complexas."
      }
    },
    {
      id: 'pf-13',
      question: { en: "What is a dashboard in Salesforce?", pt: "O que é um painel no Salesforce?" },
      options: [
        { en: "A visual display of key metrics and trends", pt: "Uma exibição visual de métricas e tendências chave" },
        { en: "A collection of related data records", pt: "Uma coleção de registros de dados relacionados" },
        { en: "A custom user interface page layout", pt: "Um layout de página de interface de usuário personalizado" },
        { en: "A tool for managing user permissions", pt: "Uma ferramenta para gerenciar permissões de usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "A Salesforce Dashboard is a visual representation of key metrics and trends for your organization. Dashboards are composed of components, which are charts, tables, or metrics that display data from source reports. They provide a high-level overview of business performance at a glance, enabling quick decision-making and real-time monitoring of important data.",
        pt: "Um Painel do Salesforce é uma representação visual de métricas e tendências chave para sua organização. Os painéis são compostos por componentes, que são gráficos, tabelas ou métricas que exibem dados de relatórios de origem. Eles fornecem uma visão geral de alto nível do desempenho dos negócios, permitindo a tomada de decisões rápidas e o monitoramento em tempo real de dados importantes."
      }
    },
    {
      id: 'pf-14',
      question: { en: "What is the primary function of a report?", pt: "Qual a função primária de um relatório?" },
      options: [
        { en: "To display a set of records that meet criteria", pt: "Exibir um conjunto de registros que atendem a critérios" },
        { en: "To automate complex business processes", pt: "Automatizar processos de negócios complexos" },
        { en: "To create custom user interface pages", pt: "Criar páginas de interface de usuário personalizadas" },
        { en: "To manage data sharing and security", pt: "Gerenciar compartilhamento e segurança de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "A report in Salesforce is a list of records that meet the criteria you define. It’s displayed in rows and columns, and can be filtered, grouped, or displayed in a graphical chart. Reports are fundamental for data analysis, allowing users to gain insights into their data, track progress, and make informed business decisions. They are the foundation for dashboards and provide detailed, granular views of your information.",
        pt: "Um relatório no Salesforce é uma lista de registros que atendem aos critérios que você define. É exibido em linhas e colunas e pode ser filtrado, agrupado ou exibido em um gráfico. Os relatórios são fundamentais para a análise de dados, permitindo que os usuários obtenham insights sobre seus dados, acompanhem o progresso e tomem decisões de negócios informadas. Eles são a base para os painéis e fornecem visões detalhadas e granulares de suas informações."
      }
    },
    {
      id: 'pf-15',
      question: { en: "What is the purpose of a permission set?", pt: "Qual o propósito de um conjunto de permissões?" },
      options: [
        { en: "To grant additional permissions to specific users", pt: "Conceder permissões adicionais a usuários específicos" },
        { en: "To restrict access to certain records", pt: "Restringir o acesso a determinados registros" },
        { en: "To define the user interface layout", pt: "Definir o layout da interface do usuário" },
        { en: "To create custom automation rules", pt: "Criar regras de automação personalizadas" }
      ],
      correct: 0,
      explanation: { 
        en: "A permission set is a collection of settings and permissions that gives users access to various tools and functions. Permission sets are used to grant additional permissions to specific users, on top of their existing profile permissions, without having to create a new profile for every unique requirement. This provides a flexible and scalable way to manage user access and permissions in Salesforce.",
        pt: "Um conjunto de permissões é uma coleção de configurações e permissões que dá aos usuários acesso a várias ferramentas e funções. Os conjuntos de permissões são usados para conceder permissões adicionais a usuários específicos, além de suas permissões de perfil existentes, sem ter que criar um novo perfil para cada requisito exclusivo. Isso fornece uma maneira flexível e escalável de gerenciar o acesso e as permissões do usuário no Salesforce."
      }
    }
  ],
  'admin-sales': [
    {
      id: 'as-1',
      question: { en: "What is a sales process?", pt: "O que é um processo de vendas?" },
      options: [
        { en: "A set of stages for tracking opportunities", pt: "Um conjunto de estágios para acompanhar oportunidades" },
        { en: "A tool for managing customer support cases", pt: "Uma ferramenta para gerenciar casos de suporte ao cliente" },
        { en: "A feature for automating marketing campaigns", pt: "Um recurso para automatizar campanhas de marketing" },
        { en: "A method for creating custom reports", pt: "Um método para criar relatórios personalizados" }
      ],
      correct: 0,
      explanation: { 
        en: "A sales process in Salesforce defines the stages that an opportunity goes through from creation to close. It helps standardize sales operations, ensures consistency in how opportunities are managed, and provides a clear framework for forecasting and reporting. By mapping out the sales cycle, organizations can better guide their sales teams and track progress effectively.",
        pt: "Um processo de vendas no Salesforce define os estágios pelos quais uma oportunidade passa desde a criação até o fechamento. Ajuda a padronizar as operações de vendas, garante consistência na forma como as oportunidades são gerenciadas e fornece uma estrutura clara para previsão e relatórios. Ao mapear o ciclo de vendas, as organizações podem orientar melhor suas equipes de vendas e acompanhar o progresso de forma eficaz."
      }
    },
    {
      id: 'as-2',
      question: { en: "What is a lead in Salesforce?", pt: "O que é um lead no Salesforce?" },
      options: [
        { en: "A potential customer or prospect", pt: "Um cliente potencial ou prospect" },
        { en: "An existing customer account", pt: "Uma conta de cliente existente" },
        { en: "A closed sales opportunity", pt: "Uma oportunidade de vendas fechada" },
        { en: "A customer support inquiry", pt: "Uma consulta de suporte ao cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "A lead in Salesforce represents a potential customer or prospect who has shown interest in your product or service but has not yet been qualified. Leads are typically the first step in the sales process and need to be nurtured and qualified before being converted into an account, contact, and optionally, an opportunity. Effective lead management is crucial for building a healthy sales pipeline.",
        pt: "Um lead no Salesforce representa um cliente em potencial ou prospect que demonstrou interesse em seu produto ou serviço, mas ainda não foi qualificado. Os leads são normalmente o primeiro passo no processo de vendas e precisam ser nutridos e qualificados antes de serem convertidos em uma conta, contato e, opcionalmente, uma oportunidade. O gerenciamento eficaz de leads é crucial para construir um pipeline de vendas saudável."
      }
    },
    {
      id: 'as-3',
      question: { en: "What happens when a lead is converted?", pt: "O que acontece quando um lead é convertido?" },
      options: [
        { en: "An Account, Contact, and Opportunity are created", pt: "Uma Conta, Contato e Oportunidade são criados" },
        { en: "The lead record is permanently deleted", pt: "O registro do lead é excluído permanentemente" },
        { en: "A new marketing campaign is launched", pt: "Uma nova campanha de marketing é lançada" },
        { en: "The lead is assigned to a different user", pt: "O lead é atribuído a um usuário diferente" }
      ],
      correct: 0,
      explanation: { 
        en: "When a lead is converted in Salesforce, the system automatically creates a new Account, Contact, and, optionally, an Opportunity record from the lead information. This process signifies that the lead has been qualified and is now a viable prospect. The original lead record is then archived, preserving its data for reporting and historical tracking, ensuring a seamless transition from prospecting to active selling.",
        pt: "Quando um lead é convertido no Salesforce, o sistema cria automaticamente uma nova Conta, Contato e, opcionalmente, um registro de Oportunidade a partir das informações do lead. Esse processo significa que o lead foi qualificado e agora é um prospect viável. O registro do lead original é então arquivado, preservando seus dados para relatórios e rastreamento histórico, garantindo uma transição perfeita da prospecção para a venda ativa."
      }
    },
    {
      id: 'as-4',
      question: { en: "What is an opportunity in Salesforce?", pt: "O que é uma oportunidade no Salesforce?" },
      options: [
        { en: "A potential revenue-generating deal", pt: "Um negócio potencial que gera receita" },
        { en: "A customer service ticket or case", pt: "Um ticket ou caso de atendimento ao cliente" },
        { en: "A marketing email campaign list", pt: "Uma lista de campanha de email marketing" },
        { en: "A product or service catalog entry", pt: "Uma entrada de catálogo de produto ou serviço" }
      ],
      correct: 0,
      explanation: { 
        en: "An opportunity in Salesforce represents a potential revenue-generating deal that you are tracking. It moves through a series of sales stages, from initial qualification to final closing. Opportunities are central to sales forecasting and pipeline management, providing a clear view of potential income and the health of your sales efforts. They are a critical object for any sales-focused organization using Salesforce.",
        pt: "Uma oportunidade no Salesforce representa um negócio em potencial que gera receita que você está rastreando. Ela passa por uma série de estágios de vendas, desde a qualificação inicial até o fechamento final. As oportunidades são centrais para a previsão de vendas e o gerenciamento do pipeline, fornecendo uma visão clara da receita potencial e da saúde de seus esforços de vendas. Elas são um objeto crítico para qualquer organização focada em vendas que usa o Salesforce."
      }
    },
    {
      id: 'as-5',
      question: { en: "What is the purpose of a queue?", pt: "Qual o propósito de uma fila?" },
      options: [
        { en: "To hold records that are not yet owned by a user", pt: "Manter registros que ainda não pertencem a um usuário" },
        { en: "To create a list of tasks for a user to complete", pt: "Criar uma lista de tarefas para um usuário concluir" },
        { en: "To store a backup of important data records", pt: "Armazenar um backup de registros de dados importantes" },
        { en: "To define a sequence of approval steps", pt: "Definir uma sequência de etapas de aprovação" }
      ],
      correct: 0,
      explanation: { 
        en: "Queues in Salesforce are used to hold records that are not yet owned by a specific user. This allows teams to share the workload and manage leads, cases, or other objects more efficiently. Records in a queue can be accessed and taken ownership of by any member of the queue, ensuring that no work item is left unattended and that response times are improved.",
        pt: "As filas no Salesforce são usadas para manter registros que ainda não pertencem a um usuário específico. Isso permite que as equipes compartilhem a carga de trabalho e gerenciem leads, casos ou outros objetos de forma mais eficiente. Os registros em uma fila podem ser acessados e assumidos por qualquer membro da fila, garantindo que nenhum item de trabalho seja deixado sem atendimento e que os tempos de resposta sejam aprimorados."
      }
    },
    {
      id: 'as-6',
      question: { en: "What is a product in Salesforce?", pt: "O que é um produto no Salesforce?" },
      options: [
        { en: "An item or service that your company sells", pt: "Um item ou serviço que sua empresa vende" },
        { en: "A category of customer support cases", pt: "Uma categoria de casos de suporte ao cliente" },
        { en: "A type of marketing campaign activity", pt: "Um tipo de atividade de campanha de marketing" },
        { en: "A custom field on the Account object", pt: "Um campo personalizado no objeto Conta" }
      ],
      correct: 0,
      explanation: { 
        en: "In Salesforce, a Product is an item or service that your company sells. Products can be added to opportunities, quotes, and orders, allowing you to track what you are selling and at what price. By using products, you can maintain a standardized catalog of your offerings, which helps ensure consistency in pricing and reporting across your sales team.",
        pt: "No Salesforce, um Produto é um item ou serviço que sua empresa vende. Os produtos podem ser adicionados a oportunidades, cotações e pedidos, permitindo que você rastreie o que está vendendo e a que preço. Ao usar produtos, você pode manter um catálogo padronizado de suas ofertas, o que ajuda a garantir a consistência nos preços e nos relatórios em toda a sua equipe de vendas."
      }
    },
    {
      id: 'as-7',
      question: { en: "What is a price book?", pt: "O que é um catálogo de preços?" },
      options: [
        { en: "A list of products and their associated prices", pt: "Uma lista de produtos e seus preços associados" },
        { en: "A collection of customer discount codes", pt: "Uma coleção de códigos de desconto para clientes" },
        { en: "A report that shows sales revenue by region", pt: "Um relatório que mostra a receita de vendas por região" },
        { en: "A tool for forecasting future sales trends", pt: "Uma ferramenta para prever tendências de vendas futuras" }
      ],
      correct: 0,
      explanation: { 
        en: "A Price Book in Salesforce is a list of products and their associated prices. It allows you to create multiple price lists for your products, so you can offer different prices to different segments of customers. For example, you might have a standard price book for all customers and a custom price book with discounted prices for partners or high-volume buyers. This flexibility is essential for managing complex pricing strategies.",
        pt: "Um Catálogo de Preços no Salesforce é uma lista de produtos e seus preços associados. Ele permite que você crie várias listas de preços para seus produtos, para que possa oferecer preços diferentes para diferentes segmentos de clientes. Por exemplo, você pode ter um catálogo de preços padrão para todos os clientes e um catálogo de preços personalizado com preços com desconto para parceiros ou compradores de alto volume. Essa flexibilidade é essencial para gerenciar estratégias de preços complexas."
      }
    },
    {
      id: 'as-8',
      question: { en: "What is a quote in Salesforce?", pt: "O que é uma cotação no Salesforce?" },
      options: [
        { en: "A document that shows proposed prices for products and services", pt: "Um documento que mostra os preços propostos para produtos e serviços" },
        { en: "A summary of a customer's purchase history", pt: "Um resumo do histórico de compras de um cliente" },
        { en: "A request for a new product feature", pt: "Uma solicitação de um novo recurso de produto" },
        { en: "A contract for a long-term service agreement", pt: "Um contrato para um acordo de serviço de longo prazo" }
      ],
      correct: 0,
      explanation: { 
        en: "A Quote in Salesforce is a document that you provide to a customer, showing proposed prices for your products and services. Quotes can be created from opportunities and can be customized with discounts, quantities, and other details. Once a customer accepts a quote, it can be synced with the opportunity to ensure that the sales data is accurate and up-to-date, streamlining the sales process from proposal to close.",
        pt: "Uma Cotação no Salesforce é um documento que você fornece a um cliente, mostrando os preços propostos para seus produtos e serviços. As cotações podem ser criadas a partir de oportunidades e podem ser personalizadas com descontos, quantidades e outros detalhes. Uma vez que um cliente aceita uma cotação, ela pode ser sincronizada com a oportunidade para garantir que os dados de vendas sejam precisos e atualizados, otimizando o processo de vendas da proposta ao fechamento."
      }
    },
    {
      id: 'as-9',
      question: { en: "What is the purpose of an assignment rule?", pt: "Qual o propósito de uma regra de atribuição?" },
      options: [
        { en: "To automatically assign leads or cases to users or queues", pt: "Atribuir automaticamente leads ou casos a usuários ou filas" },
        { en: "To define the criteria for a marketing campaign", pt: "Definir os critérios para uma campanha de marketing" },
        { en: "To set the default values for fields on a new record", pt: "Definir os valores padrão para campos em um novo registro" },
        { en: "To control the visibility of records in a report", pt: "Controlar a visibilidade de registros em um relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Assignment Rules in Salesforce are used to automatically assign incoming leads and cases to the appropriate users or queues based on criteria that you define. This helps ensure that no lead or case is left unattended and that they are routed to the person or team best equipped to handle them. By automating the assignment process, you can improve response times and increase overall efficiency in your sales and service operations.",
        pt: "As Regras de Atribuição no Salesforce são usadas para atribuir automaticamente leads e casos recebidos aos usuários ou filas apropriados com base em critérios que você define. Isso ajuda a garantir que nenhum lead ou caso seja deixado sem atendimento e que eles sejam roteados para a pessoa ou equipe mais bem equipada para lidar com eles. Ao automatizar o processo de atribuição, você pode melhorar os tempos de resposta e aumentar a eficiência geral em suas operações de vendas e serviços."
      }
    },
    {
      id: 'as-10',
      question: { en: "What is a campaign in Salesforce?", pt: "O que é uma campanha no Salesforce?" },
      options: [
        { en: "A marketing initiative, such as an email blast or a trade show", pt: "Uma iniciativa de marketing, como um envio de e-mail em massa ou uma feira" },
        { en: "A collection of related sales opportunities", pt: "Uma coleção de oportunidades de vendas relacionadas" },
        { en: "A set of rules for automating customer support", pt: "Um conjunto de regras para automatizar o suporte ao cliente" },
        { en: "A custom object for tracking project tasks", pt: "Um objeto personalizado para rastrear tarefas de projeto" }
      ],
      correct: 0,
      explanation: { 
        en: "A Campaign in Salesforce is a marketing initiative that you want to plan, manage, and track. This could be an email blast, a webinar, a trade show, or any other type of marketing effort. By using campaigns, you can measure the effectiveness of your marketing activities, track the leads and opportunities they generate, and calculate the return on investment (ROI) for each initiative.",
        pt: "Uma Campanha no Salesforce é uma iniciativa de marketing que você deseja planejar, gerenciar e rastrear. Isso pode ser um envio de e-mail em massa, um webinar, uma feira ou qualquer outro tipo de esforço de marketing. Ao usar campanhas, você pode medir a eficácia de suas atividades de marketing, rastrear os leads e oportunidades que elas geram e calcular o retorno sobre o investimento (ROI) para cada iniciativa."
      }
    },
    {
      id: 'as-11',
      question: { en: "What is the difference between a standard object and a custom object?", pt: "Qual a diferença entre um objeto padrão e um objeto personalizado?" },
      options: [
        { en: "Standard objects are included with Salesforce, while custom objects are created by users", pt: "Objetos padrão são incluídos com o Salesforce, enquanto objetos personalizados são criados pelos usuários" },
        { en: "Standard objects are used for sales, while custom objects are used for service", pt: "Objetos padrão são usados para vendas, enquanto objetos personalizados são usados para serviço" },
        { en: "Standard objects can be customized, while custom objects cannot", pt: "Objetos padrão podem ser personalizados, enquanto objetos personalizados não podem" },
        { en: "Standard objects are only available in Lightning Experience", pt: "Objetos padrão estão disponíveis apenas no Lightning Experience" }
      ],
      correct: 0,
      explanation: { 
        en: "Standard objects, such as Account, Contact, and Opportunity, are the core objects that come with Salesforce out-of-the-box. Custom objects, on the other hand, are created by users to store information that is unique to their business. While both types of objects can be customized with new fields, page layouts, and validation rules, the key difference is that standard objects are pre-built by Salesforce, while custom objects are user-defined.",
        pt: "Objetos padrão, como Conta, Contato e Oportunidade, são os objetos principais que vêm com o Salesforce prontos para uso. Objetos personalizados, por outro lado, são criados pelos usuários para armazenar informações exclusivas de seus negócios. Embora ambos os tipos de objetos possam ser personalizados com novos campos, layouts de página e regras de validação, a principal diferença é que os objetos padrão são pré-construídos pelo Salesforce, enquanto os objetos personalizados são definidos pelo usuário."
      }
    },
    {
      id: 'as-12',
      question: { en: "What is a record ID in Salesforce?", pt: "O que é um ID de registro no Salesforce?" },
      options: [
        { en: "A unique identifier for every record in Salesforce", pt: "Um identificador exclusivo para cada registro no Salesforce" },
        { en: "A number that indicates the order in which a record was created", pt: "Um número que indica a ordem em que um registro foi criado" },
        { en: "A code that determines who can access a record", pt: "Um código que determina quem pode acessar um registro" },
        { en: "A name that is used to refer to a record in a report", pt: "Um nome que é usado para se referir a um registro em um relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "A Record ID is a globally unique, 15- or 18-character alphanumeric string that is assigned to every record when it is created in Salesforce. This ID is used to identify the record and is the primary key for the object. Because it is unique across all of Salesforce, it is a reliable way to reference a specific record in formulas, validation rules, and API calls.",
        pt: "Um ID de Registro é uma string alfanumérica globalmente única, de 15 ou 18 caracteres, que é atribuída a cada registro quando ele é criado no Salesforce. Este ID é usado para identificar o registro e é a chave primária para o objeto. Como é único em todo o Salesforce, é uma maneira confiável de referenciar um registro específico em fórmulas, regras de validação e chamadas de API."
      }
    },
    {
      id: 'as-13',
      question: { en: "What is the purpose of a lookup relationship?", pt: "Qual o propósito de um relacionamento de pesquisa?" },
      options: [
        { en: "To link two objects together", pt: "Ligar dois objetos" },
        { en: "To create a parent-child relationship where the child record can exist on its own", pt: "Criar um relacionamento pai-filho onde o registro filho pode existir por conta própria" },
        { en: "To create a relationship where the child record is deleted when the parent is deleted", pt: "Criar um relacionamento onde o registro filho é excluído quando o pai é excluído" },
        { en: "To create a many-to-many relationship between two objects", pt: "Criar um relacionamento de muitos para muitos entre dois objetos" }
      ],
      correct: 1,
      explanation: { 
        en: "A lookup relationship is used to link two objects together, creating a parent-child relationship where the child record can exist on its own. This means that if the parent record is deleted, the child record will not be deleted. This is in contrast to a master-detail relationship, where the child record is deleted when the parent is deleted. Lookup relationships are more flexible than master-detail relationships and are used when you need to create a loose coupling between two objects.",
        pt: "Um relacionamento de pesquisa é usado para ligar dois objetos, criando um relacionamento pai-filho onde o registro filho pode existir por conta própria. Isso significa que, se o registro pai for excluído, o registro filho não será excluído. Isso contrasta com um relacionamento mestre-detalhe, onde o registro filho é excluído quando o pai é excluído. Os relacionamentos de pesquisa são mais flexíveis do que os relacionamentos mestre-detalhe e são usados quando você precisa criar um acoplamento fraco entre dois objetos."
      }
    },
    {
      id: 'as-14',
      question: { en: "What is the purpose of a master-detail relationship?", pt: "Qual o propósito de um relacionamento mestre-detalhe?" },
      options: [
        { en: "To create a parent-child relationship where the child record cannot exist on its own", pt: "Criar um relacionamento pai-filho onde o registro filho não pode existir por conta própria" },
        { en: "To link two objects together in a loose coupling", pt: "Ligar dois objetos em um acoplamento fraco" },
        { en: "To create a many-to-many relationship between two objects", pt: "Criar um relacionamento de muitos para muitos entre dois objetos" },
        { en: "To create a self-relationship on an object", pt: "Criar um auto-relacionamento em um objeto" }
      ],
      correct: 0,
      explanation: { 
        en: "A master-detail relationship is used to create a parent-child relationship where the child record cannot exist on its own. This means that if the parent record is deleted, the child record will also be deleted. This is in contrast to a lookup relationship, where the child record can exist on its own. Master-detail relationships are less flexible than lookup relationships and provide a number of benefits, such as cascading deletes and roll-up summary fields.",
        pt: "Um relacionamento mestre-detalhe é usado para criar um relacionamento pai-filho onde o registro filho não pode existir por conta própria. Isso significa que, se o registro pai for excluído, o registro filho também será excluído. Isso contrasta com um relacionamento de pesquisa, onde o registro filho pode existir por conta própria. Os relacionamentos mestre-detalhe são menos flexíveis do que os relacionamentos de pesquisa, mas fornecem vários benefícios, como exclusões em cascata e campos de resumo de totalização."
      }
    },
    {
      id: 'as-15',
      question: { en: "What is the purpose of a roll-up summary field?", pt: "Qual o propósito de um campo de resumo de totalização?" },
      options: [
        { en: "To calculate values from related records", pt: "Calcular valores de registros relacionados" },
        { en: "To create a custom formula field", pt: "Criar um campo de fórmula personalizado" },
        { en: "To define a validation rule", pt: "Definir uma regra de validação" },
        { en: "To create a custom report type", pt: "Criar um tipo de relatório personalizado" }
      ],
      correct: 0,
      explanation: { 
        en: "A roll-up summary field is a field that calculates values from related records, such as the sum of all opportunities for an account. Roll-up summary fields can only be created on the master side of a master-detail relationship. They are a powerful tool for aggregating data and can be used to create a wide variety of reports and dashboards.",
        pt: "Um campo de resumo de totalização é um campo que calcula valores de registros relacionados, como a soma de todas as oportunidades de uma conta. Os campos de resumo de totalização só podem ser criados no lado mestre de um relacionamento mestre-detalhe. Eles são uma ferramenta poderosa para agregar dados e podem ser usados para criar uma ampla variedade de relatórios e painéis."
      }
    }
  ],
  'service-cloud': [
    {
      id: 'sc-1',
      question: { en: "What is a case in Service Cloud?", pt: "O que é um caso no Service Cloud?" },
      options: [
        { en: "A customer's question, feedback, or issue", pt: "A pergunta, feedback ou problema de um cliente" },
        { en: "A sales opportunity in the final stage", pt: "Uma oportunidade de vendas na fase final" },
        { en: "A marketing campaign targeting a specific audience", pt: "Uma campanha de marketing direcionada a um público específico" },
        { en: "A task assigned to a support agent", pt: "Uma tarefa atribuída a um agente de suporte" }
      ],
      correct: 0,
      explanation: { 
        en: "In Service Cloud, a case is a record that tracks a customer's question, feedback, or issue. It is the central object in Service Cloud and is used to manage the entire customer service process, from initial contact to resolution. Cases can be created from a variety of channels, such as email, phone, web, and social media, and can be assigned to agents or queues for resolution.",
        pt: "No Service Cloud, um caso é um registro que rastreia a pergunta, feedback ou problema de um cliente. É o objeto central no Service Cloud e é usado para gerenciar todo o processo de atendimento ao cliente, desde o contato inicial até a resolução. Os casos podem ser criados a partir de uma variedade de canais, como e-mail, telefone, web e mídias sociais, e podem ser atribuídos a agentes ou filas para resolução."
      }
    },
    {
      id: 'sc-2',
      question: { en: "What is the purpose of a case queue?", pt: "Qual o propósito de uma fila de casos?" },
      options: [
        { en: "To hold cases that are not yet assigned to a user", pt: "Manter casos que ainda não foram atribuídos a um usuário" },
        { en: "To create a list of tasks for a support agent", pt: "Criar uma lista de tarefas para um agente de suporte" },
        { en: "To store a backup of important case records", pt: "Armazenar um backup de registros de casos importantes" },
        { en: "To define a sequence of approval steps for a case", pt: "Definir uma sequência de etapas de aprovação para um caso" }
      ],
      correct: 0,
      explanation: { 
        en: "A case queue is a location where cases are held before they are assigned to a specific user. This allows teams to share the workload and manage cases more efficiently. Cases in a queue can be accessed and taken ownership of by any member of the queue, ensuring that no case is left unattended and that response times are improved.",
        pt: "Uma fila de casos é um local onde os casos são mantidos antes de serem atribuídos a um usuário específico. Isso permite que as equipes compartilhem a carga de trabalho e gerenciem os casos de forma mais eficiente. Os casos em uma fila podem ser acessados e assumidos por qualquer membro da fila, garantindo que nenhum caso seja deixado sem atendimento e que os tempos de resposta sejam aprimorados."
      }
    },
    {
      id: 'sc-3',
      question: { en: "What is the purpose of a case assignment rule?", pt: "Qual o propósito de uma regra de atribuição de casos?" },
      options: [
        { en: "To automatically assign cases to users or queues", pt: "Atribuir automaticamente casos a usuários ou filas" },
        { en: "To define the criteria for a service level agreement", pt: "Definir os critérios para um acordo de nível de serviço" },
        { en: "To set the default values for fields on a new case", pt: "Definir os valores padrão para campos em um novo caso" },
        { en: "To control the visibility of cases in a report", pt: "Controlar a visibilidade de casos em um relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "A case assignment rule is used to automatically assign incoming cases to the appropriate users or queues based on criteria that you define. This helps ensure that no case is left unattended and that they are routed to the person or team best equipped to handle them. By automating the assignment process, you can improve response times and increase overall efficiency in your service operations.",
        pt: "Uma regra de atribuição de casos é usada para atribuir automaticamente os casos recebidos aos usuários ou filas apropriados com base nos critérios que você define. Isso ajuda a garantir que nenhum caso seja deixado sem atendimento e que eles sejam roteados para a pessoa ou equipe mais bem equipada para lidar com eles. Ao automatizar o processo de atribuição, você pode melhorar os tempos de resposta e aumentar a eficiência geral em suas operações de serviço."
      }
    },
    {
      id: 'sc-4',
      question: { en: "What is the purpose of a case escalation rule?", pt: "Qual o propósito de uma regra de escalonamento de casos?" },
      options: [
        { en: "To automatically escalate cases that are not resolved within a certain time frame", pt: "Escalonar automaticamente casos que não são resolvidos dentro de um determinado período de tempo" },
        { en: "To define the criteria for a service level agreement", pt: "Definir os critérios para um acordo de nível de serviço" },
        { en: "To set the default values for fields on a new case", pt: "Definir os valores padrão para campos em um novo caso" },
        { en: "To control the visibility of cases in a report", pt: "Controlar a visibilidade de casos em um relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "A case escalation rule is used to automatically escalate cases that are not resolved within a certain time frame. This helps ensure that high-priority cases are not neglected and that they are brought to the attention of the appropriate people. By automating the escalation process, you can improve customer satisfaction and reduce the risk of service level agreement (SLA) violations.",
        pt: "Uma regra de escalonamento de casos é usada para escalonar automaticamente os casos que não são resolvidos dentro de um determinado período de tempo. Isso ajuda a garantir que os casos de alta prioridade não sejam negligenciados e que sejam levados ao conhecimento das pessoas apropriadas. Ao automatizar o processo de escalonamento, você pode melhorar a satisfação do cliente e reduzir o risco de violações do acordo de nível de serviço (SLA)."
      }
    },
    {
      id: 'sc-5',
      question: { en: "What is the purpose of a knowledge base?", pt: "Qual o propósito de uma base de conhecimento?" },
      options: [
        { en: "To store and manage a library of articles and solutions", pt: "Armazenar e gerenciar uma biblioteca de artigos e soluções" },
        { en: "To create a list of tasks for a support agent", pt: "Criar uma lista de tarefas para um agente de suporte" },
        { en: "To store a backup of important case records", pt: "Armazenar um backup de registros de casos importantes" },
        { en: "To define a sequence of approval steps for a case", pt: "Definir uma sequência de etapas de aprovação para um caso" }
      ],
      correct: 0,
      explanation: { 
        en: "A knowledge base is a library of articles and solutions that can be used by support agents and customers to find answers to common questions. By creating a knowledge base, you can deflect cases, reduce support costs, and improve customer satisfaction. A well-maintained knowledge base is a valuable asset for any service organization.",
        pt: "Uma base de conhecimento é uma biblioteca de artigos e soluções que podem ser usados por agentes de suporte e clientes para encontrar respostas para perguntas comuns. Ao criar uma base de conhecimento, você pode desviar casos, reduzir os custos de suporte e melhorar a satisfação do cliente. Uma base de conhecimento bem mantida é um ativo valioso para qualquer organização de serviço."
      }
    },
    {
      id: 'sc-6',
      question: { en: "What is the purpose of a service level agreement (SLA)?", pt: "Qual o propósito de um acordo de nível de serviço (SLA)?" },
      options: [
        { en: "To define the level of service that a customer can expect to receive", pt: "Definir o nível de serviço que um cliente pode esperar receber" },
        { en: "To create a list of tasks for a support agent", pt: "Criar uma lista de tarefas para um agente de suporte" },
        { en: "To store a backup of important case records", pt: "Armazenar um backup de registros de casos importantes" },
        { en: "To define a sequence of approval steps for a case", pt: "Definir uma sequência de etapas de aprovação para um caso" }
      ],
      correct: 0,
      explanation: { 
        en: "A service level agreement (SLA) is a contract between a service provider and a customer that defines the level of service that the customer can expect to receive. SLAs typically include metrics such as response time, resolution time, and uptime. By using SLAs, you can set clear expectations with your customers and ensure that you are meeting their needs.",
        pt: "Um acordo de nível de serviço (SLA) é um contrato entre um provedor de serviços e um cliente que define o nível de serviço que o cliente pode esperar receber. Os SLAs geralmente incluem métricas como tempo de resposta, tempo de resolução e tempo de atividade. Ao usar SLAs, você pode definir expectativas claras com seus clientes e garantir que está atendendo às suas necessidades."
      }
    },
    {
      id: 'sc-7',
      question: { en: "What is the purpose of a milestone?", pt: "Qual o propósito de um marco?" },
      options: [
        { en: "To track the progress of a case against an SLA", pt: "Acompanhar o progresso de um caso em relação a um SLA" },
        { en: "To create a list of tasks for a support agent", pt: "Criar uma lista de tarefas para um agente de suporte" },
        { en: "To store a backup of important case records", pt: "Armazenar um backup de registros de casos importantes" },
        { en: "To define a sequence of approval steps for a case", pt: "Definir uma sequência de etapas de aprovação para um caso" }
      ],
      correct: 0,
      explanation: { 
        en: "A milestone is a required step in your support process. It represents a metric, such as first response time or resolution time, that you want to track. Milestones are added to cases and are used to track the progress of a case against an SLA. By using milestones, you can ensure that you are meeting your service level agreements and providing a high level of customer service.",
        pt: "Um marco é uma etapa necessária em seu processo de suporte. Ele representa uma métrica, como o tempo da primeira resposta ou o tempo de resolução, que você deseja rastrear. Os marcos são adicionados aos casos e são usados para acompanhar o progresso de um caso em relação a um SLA. Ao usar marcos, você pode garantir que está cumprindo seus acordos de nível de serviço e fornecendo um alto nível de atendimento ao cliente."
      }
    },
    {
      id: 'sc-8',
      question: { en: "What is the purpose of an entitlement?", pt: "Qual o propósito de um direito?" },
      options: [
        { en: "To define the level of support that a customer is entitled to receive", pt: "Definir o nível de suporte que um cliente tem direito a receber" },
        { en: "To create a list of tasks for a support agent", pt: "Criar uma lista de tarefas para um agente de suporte" },
        { en: "To store a backup of important case records", pt: "Armazenar um backup de registros de casos importantes" },
        { en: "To define a sequence of approval steps for a case", pt: "Definir uma sequência de etapas de aprovação para um caso" }
      ],
      correct: 0,
      explanation: { 
        en: "An entitlement is a unit of customer support, such as a phone call or a web case. Entitlements are used to define the level of support that a customer is entitled to receive. For example, you might create an entitlement that gives a customer 10 phone calls per month. By using entitlements, you can ensure that you are providing the right level of support to your customers and that you are not over-servicing them.",
        pt: "Um direito é uma unidade de suporte ao cliente, como uma ligação telefônica ou um caso da web. Os direitos são usados para definir o nível de suporte que um cliente tem direito a receber. Por exemplo, você pode criar um direito que dá a um cliente 10 ligações telefônicas por mês. Ao usar os direitos, você pode garantir que está fornecendo o nível certo de suporte aos seus clientes e que não está prestando serviços em excesso."
      }
    },
    {
      id: 'sc-9',
      question: { en: "What is the purpose of a service contract?", pt: "Qual o propósito de um contrato de serviço?" },
      options: [
        { en: "To define the terms of a customer's support agreement", pt: "Definir os termos do contrato de suporte de um cliente" },
        { en: "To create a list of tasks for a support agent", pt: "Criar uma lista de tarefas para um agente de suporte" },
        { en: "To store a backup of important case records", pt: "Armazenar um backup de registros de casos importantes" },
        { en: "To define a sequence of approval steps for a case", pt: "Definir uma sequência de etapas de aprovação para um caso" }
      ],
      correct: 0,
      explanation: { 
        en: "A service contract is a legal agreement between a service provider and a customer that defines the terms of the customer's support agreement. Service contracts typically include information such as the start and end dates of the contract, the level of support that the customer is entitled to receive, and the price of the contract. By using service contracts, you can ensure that you have a clear understanding with your customers about the level of support that you will provide.",
        pt: "Um contrato de serviço é um acordo legal entre um provedor de serviços e um cliente que define os termos do contrato de suporte do cliente. Os contratos de serviço geralmente incluem informações como as datas de início e término do contrato, o nível de suporte que o cliente tem direito a receber e o preço do contrato. Ao usar contratos de serviço, você pode garantir que tenha um entendimento claro com seus clientes sobre o nível de suporte que fornecerá."
      }
    },
    {
      id: 'sc-10',
      question: { en: "What is a solution?", pt: "O que é uma solução?" },
      options: [
        { en: "To document the resolution of a case", pt: "Documentar a resolução de um caso" },
        { en: "To create a list of tasks for a support agent", pt: "Criar uma lista de tarefas para um agente de suporte" },
        { en: "To store a backup of important case records", pt: "Armazenar um backup de registros de casos importantes" },
        { en: "To define a sequence of approval steps for a case", pt: "Definir uma sequência de etapas de aprovação para um caso" }
      ],
      correct: 0,
      explanation: { 
        en: "A solution is a detailed description of how to resolve a customer's issue. Solutions can be created from cases and can be used by support agents and customers to find answers to common questions. By creating a library of solutions, you can deflect cases, reduce support costs, and improve customer satisfaction.",
        pt: "Uma solução é uma descrição detalhada de como resolver o problema de um cliente. As soluções podem ser criadas a partir de casos e podem ser usadas por agentes de suporte e clientes para encontrar respostas para perguntas comuns. Ao criar uma biblioteca de soluções, você pode desviar casos, reduzir os custos de suporte e melhorar a satisfação do cliente."
      }
    },
    {
      id: 'sc-11',
      question: { en: "What is the purpose of the Service Cloud Console?", pt: "Qual o propósito do Console do Service Cloud?" },
      options: [
        { en: "To provide a unified interface for support agents to manage cases", pt: "Fornecer uma interface unificada para os agentes de suporte gerenciarem os casos" },
        { en: "To create custom reports and dashboards", pt: "Criar relatórios e painéis personalizados" },
        { en: "To manage user permissions and security settings", pt: "Gerenciar permissões de usuário e configurações de segurança" },
        { en: "To automate complex business processes", pt: "Automatizar processos de negócios complexos" }
      ],
      correct: 0,
      explanation: { 
        en: "The Service Cloud Console is a unified interface that allows support agents to manage cases more efficiently. It provides a 360-degree view of the customer, so agents have all the information they need to resolve cases quickly and effectively. The console also includes a number of features that help agents to be more productive, such as keyboard shortcuts, macros, and a knowledge base.",
        pt: "O Console do Service Cloud é uma interface unificada que permite que os agentes de suporte gerenciem os casos de forma mais eficiente. Ele fornece uma visão de 360 graus do cliente, para que os agentes tenham todas as informações de que precisam para resolver os casos de forma rápida e eficaz. O console também inclui vários recursos que ajudam os agentes a serem mais produtivos, como atalhos de teclado, macros e uma base de conhecimento."
      }
    },
    {
      id: 'sc-12',
      question: { en: "What is the purpose of a macro?", pt: "Qual o propósito de uma macro?" },
      options: [
        { en: "To automate repetitive tasks", pt: "Automatizar tarefas repetitivas" },
        { en: "To create a custom report type", pt: "Criar um tipo de relatório personalizado" },
        { en: "To define a validation rule", pt: "Definir uma regra de validação" },
        { en: "To create a custom formula field", pt: "Criar um campo de fórmula personalizado" }
      ],
      correct: 0,
      explanation: { 
        en: "A macro is a set of instructions that can be used to automate repetitive tasks. For example, you could create a macro that sends an email, updates a case, and closes the case. By using macros, you can save time and improve your productivity. Macros can be run on a single record or on a list of records.",
        pt: "Uma macro é um conjunto de instruções que podem ser usadas para automatizar tarefas repetitivas. Por exemplo, você pode criar uma macro que envia um e-mail, atualiza um caso e fecha o caso. Ao usar macros, você pode economizar tempo e melhorar sua produtividade. As macros podem ser executadas em um único registro ou em uma lista de registros."
      }
    },
    {
      id: 'sc-13',
      question: { en: "What is the purpose of a quick text?", pt: "Qual o propósito de um texto rápido?" },
      options: [
        { en: "To insert predefined text into emails, chats, and other messages", pt: "Inserir texto predefinido em e-mails, bate-papos e outras mensagens" },
        { en: "To create a custom report type", pt: "Criar um tipo de relatório personalizado" },
        { en: "To define a validation rule", pt: "Definir uma regra de validação" },
        { en: "To create a custom formula field", pt: "Criar um campo de fórmula personalizado" }
      ],
      correct: 0,
      explanation: { 
        en: "Quick text is a feature that allows you to insert predefined text into emails, chats, and other messages. This can save you time and improve your productivity. For example, you could create a quick text message that includes a greeting, a link to a knowledge base article, and a closing. By using quick text, you can ensure that your messages are consistent and accurate.",
        pt: "O texto rápido é um recurso que permite inserir texto predefinido em e-mails, bate-papos e outras mensagens. Isso pode economizar tempo e melhorar sua produtividade. Por exemplo, você pode criar uma mensagem de texto rápido que inclua uma saudação, um link para um artigo da base de conhecimento e um encerramento. Ao usar o texto rápido, você pode garantir que suas mensagens sejam consistentes e precisas."
      }
    },
    {
      id: 'sc-14',
      question: { en: "What is the purpose of an email template?", pt: "Qual o propósito de um modelo de e-mail?" },
      options: [
        { en: "To create a standardized email message", pt: "Criar uma mensagem de e-mail padronizada" },
        { en: "To create a custom report type", pt: "Criar um tipo de relatório personalizado" },
        { en: "To define a validation rule", pt: "Definir uma regra de validação" },
        { en: "To create a custom formula field", pt: "Criar um campo de fórmula personalizado" }
      ],
      correct: 0,
      explanation: { 
        en: "An email template is a preformatted email that you can use to create a standardized email message. Email templates can include text, images, and merge fields. By using email templates, you can save time and ensure that your email messages are consistent and accurate.",
        pt: "Um modelo de e-mail é um e-mail pré-formatado que você pode usar para criar uma mensagem de e-mail padronizada. Os modelos de e-mail podem incluir texto, imagens e campos de mesclagem. Ao usar modelos de e-mail, você pode economizar tempo e garantir que suas mensagens de e-mail sejam consistentes e precisas."
      }
    },
    {
      id: 'sc-15',
      question: { en: "What is Email Studio?", pt: "O que é o Email Studio?" },
      options: [
        { en: "A tool for creating and sending email campaigns", pt: "Uma ferramenta para criar e enviar campanhas de e-mail" },
        { en: "An email client", pt: "Um cliente de e-mail" },
        { en: "An email server", pt: "Um servidor de e-mail" },
        { en: "A design tool", pt: "Uma ferramenta de design" }
      ],
      correct: 0,
      explanation: { 
        en: "Email Studio is a tool that allows you to create and send email campaigns. It includes a drag-and-drop editor, a library of templates, and a number of features that help you to personalize your emails and track their performance. By using Email Studio, you can create professional-looking email campaigns that get results.",
        pt: "O Email Studio é uma ferramenta que permite criar e enviar campanhas de e-mail. Ele inclui um editor de arrastar e soltar, uma biblioteca de modelos e vários recursos que ajudam a personalizar seus e-mails e acompanhar seu desempenho. Ao usar o Email Studio, você pode criar campanhas de e-mail com aparência profissional que geram resultados."
      }
    }
  ]
};
