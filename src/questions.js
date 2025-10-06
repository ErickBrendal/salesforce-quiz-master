// Banco de perguntas expandido para todas as certificações
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
        en: "Workflow Rules in Salesforce are automation tools that streamline standard internal procedures. They can automatically perform actions such as sending email alerts, updating fields, creating tasks, or sending outbound messages when specific criteria are met. While Flow and Process Builder offer more advanced automation capabilities, Workflow Rules remain effective for simpler, rule-based automations, helping organizations save time and ensure consistent processes.",
        pt: "Regras de Fluxo de Trabalho no Salesforce são ferramentas de automação que otimizam procedimentos internos padrão. Elas podem realizar ações automaticamente, como enviar alertas por e-mail, atualizar campos, criar tarefas ou enviar mensagens de saída quando critérios específicos são atendidos. Embora o Flow e o Process Builder ofereçam recursos de automação mais avançados, as Regras de Fluxo de Trabalho continuam eficazes para automações mais simples e baseadas em regras, ajudando as organizações a economizar tempo e garantir processos consistentes."
      }
    },
    {
      id: 'pf-12',
      question: { en: "What is a custom field?", pt: "O que é um campo personalizado?" },
      options: [
        { en: "Stores unique organizational data", pt: "Armazena dados organizacionais exclusivos" },
        { en: "A standard Salesforce platform field", pt: "Um campo padrão da plataforma Salesforce" },
        { en: "Used only for system configurations", pt: "Usado apenas para configurações do sistema" },
        { en: "A field with fixed, unchangeable properties", pt: "Um campo com propriedades fixas e imutáveis" }
      ],
      correct: 0,
      explanation: { 
        en: "A custom field in Salesforce is created by an administrator to store information specific to an organization's unique business requirements. Unlike standard fields that come pre-built, custom fields allow for tailored data capture on both standard and custom objects. This flexibility is vital for extending the Salesforce data model to perfectly align with specific business processes, ensuring that all relevant information can be tracked and reported effectively.",
        pt: "Um campo personalizado no Salesforce é criado por um administrador para armazenar informações específicas dos requisitos de negócios exclusivos de uma organização. Ao contrário dos campos padrão que vêm pré-construídos, os campos personalizados permitem a captura de dados sob medida em objetos padrão e personalizados. Essa flexibilidade é vital para estender o modelo de dados do Salesforce para se alinhar perfeitamente com processos de negócios específicos, garantindo que todas as informações relevantes possam ser rastreadas e relatadas de forma eficaz."
      }
    },
    {
      id: 'pf-13',
      question: { en: "What is a sharing rule?", pt: "O que é uma regra de compartilhamento?" },
      options: [
        { en: "Extends record access beyond hierarchy", pt: "Estende acesso a registros além da hierarquia" },
        { en: "Manages file sharing permissions", pt: "Gerencia permissões de compartilhamento de arquivos" },
        { en: "Controls social media content visibility", pt: "Controla visibilidade de conteúdo de mídia social" },
        { en: "Defines report subscription settings", pt: "Define configurações de assinatura de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Sharing Rules in Salesforce are used to grant additional record access to users or groups beyond what is provided by organization-wide defaults and the role hierarchy. These rules can be based on record ownership or specific criteria, allowing for flexible and granular control over data visibility. They are crucial for ensuring that the right users have access to the necessary information, fostering collaboration while maintaining data security and compliance within the organization.",
        pt: "Regras de Compartilhamento no Salesforce são usadas para conceder acesso adicional a registros a usuários ou grupos além do que é fornecido pelos padrões de toda a organização e pela hierarquia de funções. Essas regras podem ser baseadas na propriedade do registro ou em critérios específicos, permitindo um controle flexível e granular sobre a visibilidade dos dados. Elas são cruciais para garantir que os usuários certos tenham acesso às informações necessárias, promovendo a colaboração e mantendo a segurança e conformidade dos dados dentro da organização."
      }
    },
    {
      id: 'pf-14',
      question: { en: "What is a report in Salesforce?", pt: "O que é um relatório no Salesforce?" },
      options: [
        { en: "A list of records based on criteria", pt: "Uma lista de registros baseada em critérios" },
        { en: "A static document for data storage", pt: "Um documento estático para armazenamento de dados" },
        { en: "A visual dashboard component", pt: "Um componente visual de painel" },
        { en: "A user profile activity log", pt: "Um registro de atividade de perfil de usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "A report in Salesforce is a powerful tool for analyzing data, presenting a list of records that meet specific criteria defined by the user. These reports can be customized and displayed in various formats, such as tabular, summary, matrix, or joined reports, to provide different perspectives on the data. They are fundamental for business intelligence, helping users gain insights, track performance, and make informed decisions based on their Salesforce data.",
        pt: "Um relatório no Salesforce é uma ferramenta poderosa para analisar dados, apresentando uma lista de registros que atendem a critérios específicos definidos pelo usuário. Esses relatórios podem ser personalizados e exibidos em vários formatos, como relatórios tabulares, de resumo, de matriz ou unidos, para fornecer diferentes perspectivas sobre os dados. Eles são fundamentais para a inteligência de negócios, ajudando os usuários a obter insights, acompanhar o desempenho e tomar decisões informadas com base em seus dados do Salesforce."
      }
    },
    {
      id: 'pf-15',
      question: { en: "What is a dashboard in Salesforce?", pt: "O que é um painel no Salesforce?" },
      options: [
        { en: "Visual display of key metrics and trends", pt: "Exibição visual de métricas e tendências" },
        { en: "A control panel for system settings", pt: "Um painel de controle para configurações do sistema" },
        { en: "A detailed tabular data report", pt: "Um relatório de dados tabular detalhado" },
        { en: "An interactive user input form", pt: "Um formulário interativo de entrada do usuário" }
      ],
      correct: 0,
      explanation: { 
        en: "A Salesforce Dashboard provides a visual representation of key metrics and trends, aggregating data from multiple reports into a single, dynamic interface. Dashboards are highly customizable, allowing users to visualize data through various chart types and gauges, offering quick insights into business performance. They are instrumental for monitoring progress, identifying areas for improvement, and making data-driven decisions at a glance, enhancing strategic oversight.",
        pt: "Um Painel do Salesforce oferece uma representação visual de métricas e tendências chave, agregando dados de múltiplos relatórios em uma única interface dinâmica. Os painéis são altamente personalizáveis, permitindo que os usuários visualizem dados através de vários tipos de gráficos e medidores, oferecendo insights rápidos sobre o desempenho dos negócios. Eles são instrumentais para monitorar o progresso, identificar áreas de melhoria e tomar decisões baseadas em dados rapidamente, aprimorando a supervisão estratégica."
      }
    }
  ],
  'admin-sales': [
    {
      id: 'as-1',
      question: { en: "Max active assignment rules per object?", pt: "Máximo de regras de atribuição ativas por objeto?" },
      options: [
        { en: "One active rule per object", pt: "Uma regra ativa por objeto" },
        { en: "Five active rules per object", pt: "Cinco regras ativas por objeto" },
        { en: "Ten active rules per object", pt: "Dez regras ativas por objeto" },
        { en: "Unlimited active rules allowed", pt: "Regras ativas ilimitadas permitidas" }
      ],
      correct: 0,
      explanation: { 
        en: "In Salesforce, only one assignment rule can be active for a given object at any time. This active rule, however, can contain multiple rule entries, each with its own criteria and assignment actions. This design ensures a clear and predictable flow for record assignment, preventing conflicts and ensuring that records are routed correctly to users or queues based on the defined business logic. It's a fundamental aspect of managing lead and case distribution efficiently.",
        pt: "No Salesforce, apenas uma regra de atribuição pode estar ativa para um determinado objeto a qualquer momento. Esta regra ativa, no entanto, pode conter múltiplas entradas de regra, cada uma com seus próprios critérios e ações de atribuição. Este design garante um fluxo claro e previsível para a atribuição de registros, prevenindo conflitos e garantindo que os registros sejam roteados corretamente para usuários ou filas com base na lógica de negócios definida. É um aspecto fundamental para gerenciar a distribuição de leads e casos de forma eficiente."
      }
    },
    {
      id: 'as-2',
      question: { en: "Which feature automatically assigns records to users or queues?", pt: "Qual recurso atribui automaticamente registros a usuários ou filas?" },
      options: [
        { en: "Workflow automation processes", pt: "Processos de automação de fluxo de trabalho" },
        { en: "Assignment rule configurations", pt: "Configurações de regras de atribuição" },
        { en: "Data validation rule enforcement", pt: "Aplicação de regras de validação de dados" },
        { en: "Process Builder flow definitions", pt: "Definições de fluxo do Process Builder" }
      ],
      correct: 1,
      explanation: { 
        en: "Assignment Rules are a core Salesforce feature designed to automatically route new or updated records, such as Leads and Cases, to the most appropriate users or queues. This automation is based on predefined criteria, ensuring that incoming work is distributed efficiently and consistently. By reducing manual effort and speeding up response times, assignment rules significantly improve operational efficiency and customer satisfaction, making them vital for effective sales and service operations.",
        pt: "As Regras de Atribuição são um recurso central do Salesforce projetado para rotear automaticamente registros novos ou atualizados, como Leads e Casos, para os usuários ou filas mais apropriados. Essa automação é baseada em critérios predefinidos, garantindo que o trabalho recebido seja distribuído de forma eficiente e consistente. Ao reduzir o esforço manual e acelerar os tempos de resposta, as regras de atribuição melhoram significativamente a eficiência operacional e a satisfação do cliente, tornando-as vitais para operações eficazes de vendas e serviços."
      }
    },
    {
      id: 'as-3',
      question: { en: "What is a queue in Salesforce?", pt: "O que é uma fila no Salesforce?" },
      options: [
        { en: "A shared record assignment pool", pt: "Um pool de atribuição de registros compartilhado" },
        { en: "A sequential task processing list", pt: "Uma lista de processamento sequencial de tarefas" },
        { en: "A personal user task management tool", pt: "Uma ferramenta pessoal de gerenciamento de tarefas" },
        { en: "A system for automated email responses", pt: "Um sistema para respostas automáticas de e-mail" }
      ],
      correct: 0,
      explanation: { 
        en: "A queue in Salesforce acts as a shared holding area where records (like cases, leads, or custom objects) can be stored until they are assigned to a user or group. This mechanism facilitates collaborative workload management, allowing teams to collectively own and process records. It ensures that no record is left unattended and helps distribute work evenly among team members, significantly improving response times and overall operational efficiency.",
        pt: "Uma fila no Salesforce atua como uma área de espera compartilhada onde registros (como casos, leads ou objetos personalizados) podem ser armazenados até serem atribuídos a um usuário ou grupo. Esse mecanismo facilita o gerenciamento colaborativo da carga de trabalho, permitindo que as equipes possuam e processem registros coletivamente. Garante que nenhum registro seja deixado sem atenção e ajuda a distribuir o trabalho uniformemente entre os membros da equipe, melhorando significativamente os tempos de resposta e a eficiência operacional geral."
      }
    },
    {
      id: 'as-4',
      question: { en: "What is a public group?", pt: "O que é um grupo público?" },
      options: [
        { en: "A collection of users and roles", pt: "Uma coleção de usuários e funções" },
        { en: "A group for external community users", pt: "Um grupo para usuários da comunidade externa" },
        { en: "A social media collaboration feature", pt: "Um recurso de colaboração de mídia social" },
        { en: "A profile-based security setting", pt: "Uma configuração de segurança baseada em perfil" }
      ],
      correct: 0,
      explanation: { 
        en: "A public group in Salesforce is a flexible way to group users, roles, other public groups, or territories. Its primary purpose is to simplify the management of record access by allowing administrators to grant sharing permissions to a collective rather than individual users. This is particularly useful when setting up sharing rules, assigning records to queues, or managing email alerts, ensuring efficient and scalable security and collaboration within the organization.",
        pt: "Um grupo público no Salesforce é uma forma flexível de agrupar usuários, funções, outros grupos públicos ou territórios. Seu principal objetivo é simplificar o gerenciamento do acesso a registros, permitindo que os administradores concedam permissões de compartilhamento a um coletivo, em vez de usuários individuais. Isso é particularmente útil ao configurar regras de compartilhamento, atribuir registros a filas ou gerenciar alertas por e-mail, garantindo segurança e colaboração eficientes e escaláveis dentro da organização."
      }
    },
    {
      id: 'as-5',
      question: { en: "What is the purpose of field-level security?", pt: "Qual é o propósito da segurança no nível de campo?" },
      options: [
        { en: "Restricts access to individual record fields", pt: "Restringe acesso a campos de registro individuais" },
        { en: "Controls user access to entire records", pt: "Controla acesso do usuário a registros inteiros" },
        { en: "Manages user authentication processes", pt: "Gerencia processos de autenticação de usuário" },
        { en: "Defines object-level data permissions", pt: "Define permissões de dados no nível do objeto" }
      ],
      correct: 0,
      explanation: { 
        en: "Field-level security (FLS) in Salesforce is a granular security control that allows administrators to restrict access to specific fields on a record based on a user's profile or permission sets. This ensures that sensitive or confidential data, such as salary information or private notes, is only visible and editable by authorized users. FLS is a critical component of data privacy and compliance, enabling organizations to maintain strict control over who sees what information within the platform, thereby enhancing data integrity and security.",
        pt: "A segurança no nível de campo (FLS) no Salesforce é um controle de segurança granular que permite aos administradores restringir o acesso a campos específicos em um registro com base no perfil ou conjuntos de permissões de um usuário. Isso garante que dados sensíveis ou confidenciais, como informações salariais ou notas privadas, sejam visíveis e editáveis apenas por usuários autorizados. O FLS é um componente crítico da privacidade e conformidade de dados, permitindo que as organizações mantenham controle rigoroso sobre quem vê quais informações dentro da plataforma, aumentando assim a integridade e a segurança dos dados."
      }
    },
    {
      id: 'as-6',
      question: { en: "What is a permission set?", pt: "O que é um conjunto de permissões?" },
      options: [
        { en: "Extends user access without changing profile", pt: "Estende acesso do usuário sem mudar perfil" },
        { en: "Defines baseline object and field access", pt: "Define acesso base a objeto e campo" },
        { en: "Groups users for shared record access", pt: "Agrupa usuários para acesso compartilhado a registros" },
        { en: "Manages external system integration settings", pt: "Gerencia configurações de integração de sistema externo" }
      ],
      correct: 0,
      explanation: { 
        en: "A permission set in Salesforce is a collection of settings and permissions that gives users access to various tools and functions. Unlike profiles, which typically define a user's baseline access, permission sets are used to grant additional permissions and access settings to specific users or groups without altering their profile. This modular approach allows for more flexible and precise control over user access, making it easier to manage security and extend functionalities as business needs evolve, promoting the principle of least privilege.",
        pt: "Um conjunto de permissões no Salesforce é uma coleção de configurações e permissões que concede aos usuários acesso a várias ferramentas e funções. Ao contrário dos perfis, que geralmente definem o acesso básico de um usuário, os conjuntos de permissões são usados para conceder permissões e configurações de acesso adicionais a usuários ou grupos específicos sem alterar seu perfil. Essa abordagem modular permite um controle mais flexível e preciso sobre o acesso do usuário, facilitando o gerenciamento da segurança e a extensão de funcionalidades à medida que as necessidades de negócios evoluem, promovendo o princípio do menor privilégio."
      }
    },
    {
      id: 'as-7',
      question: { en: "What is organization-wide default (OWD)?", pt: "O que é o padrão de toda a organização (OWD)?" },
      options: [
        { en: "Baseline record access for all users", pt: "Acesso base a registros para todos os usuários" },
        { en: "Controls field-level data visibility", pt: "Controla visibilidade de dados no nível do campo" },
        { en: "Security settings for guest users", pt: "Configurações de segurança para usuários convidados" },
        { en: "Rule for sharing report folders", pt: "Regra para compartilhar pastas de relatório" }
      ],
      correct: 0,
      explanation: { 
        en: "Organization-Wide Defaults (OWD) in Salesforce define the most restrictive baseline level of access that users have to records owned by others. This setting acts as the foundation for the sharing model, determining whether users can view, edit, or delete records they don't own. While OWDs set the default, access can be expanded through other sharing mechanisms like role hierarchies, sharing rules, and manual sharing, ensuring data security while allowing necessary collaboration.",
        pt: "Padrões de toda a organização (OWD) no Salesforce definem o nível base mais restritivo de acesso que os usuários têm aos registros de propriedade de outros. Essa configuração atua como a base para o modelo de compartilhamento, determinando se os usuários podem visualizar, editar ou excluir registros que não possuem. Embora os OWDs definam o padrão, o acesso pode ser expandido através de outros mecanismos de compartilhamento, como hierarquias de funções, regras de compartilhamento e compartilhamento manual, garantindo a segurança dos dados e permitindo a colaboração necessária."
      }
    },
    {
      id: 'as-8',
      question: { en: "What is a sandbox?", pt: "O que é uma sandbox?" },
      options: [
        { en: "A copy of your org for testing", pt: "Uma cópia da sua organização para testes" },
        { en: "A secure data backup solution", pt: "Uma solução segura de backup de dados" },
        { en: "A tool for managing user profiles", pt: "Uma ferramenta para gerenciar perfis de usuário" },
        { en: "A live production environment", pt: "Um ambiente de produção ao vivo" }
      ],
      correct: 0,
      explanation: { 
        en: "A Salesforce sandbox is an isolated copy of your organization, including its metadata and data, in a separate environment. Its primary purpose is to provide a safe space for development, testing, and training without impacting your live production data or operations. This allows developers and administrators to build, test, and deploy new functionalities, configurations, or integrations with confidence, ensuring stability and quality before releasing changes to end-users.",
        pt: "Uma sandbox do Salesforce é uma cópia isolada da sua organização, incluindo seus metadados e dados, em um ambiente separado. Seu principal objetivo é fornecer um espaço seguro para desenvolvimento, teste e treinamento sem impactar seus dados ou operações de produção ao vivo. Isso permite que desenvolvedores e administradores construam, testem e implementem novas funcionalidades, configurações ou integrações com confiança, garantindo estabilidade e qualidade antes de liberar as alterações para os usuários finais."
      }
    },
    {
      id: 'as-9',
      question: { en: "What is a change set?", pt: "O que é um conjunto de alterações?" },
      options: [
        { en: "Deploys customizations between Salesforce orgs", pt: "Implanta personalizações entre organizações Salesforce" },
        { en: "Tracks modifications to record data", pt: "Rastreia modificações nos dados do registro" },
        { en: "Logs system security events", pt: "Registra eventos de segurança do sistema" },
        { en: "Manages code versions and branches", pt: "Gerencia versões e ramificações de código" }
      ],
      correct: 0,
      explanation: { 
        en: "A change set in Salesforce is a powerful tool for deploying metadata components from one Salesforce organization to another, typically from a sandbox environment to a production environment. It allows administrators and developers to package and migrate customizations, such as custom objects, fields, Apex classes, and Visualforce pages, without writing code. This declarative deployment method ensures consistency and reduces manual errors, making it a fundamental part of the application lifecycle management process within Salesforce.",
        pt: "Um conjunto de alterações no Salesforce é uma ferramenta poderosa para implantar componentes de metadados de uma organização Salesforce para outra, tipicamente de um ambiente sandbox para um ambiente de produção. Ele permite que administradores e desenvolvedores empacotem e migrem personalizações, como objetos personalizados, campos, classes Apex e páginas Visualforce, sem escrever código. Este método de implantação declarativa garante consistência e reduz erros manuais, tornando-o uma parte fundamental do processo de gerenciamento do ciclo de vida do aplicativo dentro do Salesforce."
      }
    },
    {
      id: 'as-10',
      question: { en: "What is a lead conversion?", pt: "O que é uma conversão de lead?" },
      options: [
        { en: "Transforms lead into Account, Contact, Opportunity", pt: "Transforma lead em Conta, Contato, Oportunidade" },
        { en: "A metric for marketing campaign success", pt: "Uma métrica para sucesso de campanha de marketing" },
        { en: "A method for predicting future sales", pt: "Um método para prever vendas futuras" },
        { en: "An interaction with customer support", pt: "Uma interação com o suporte ao cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "Lead conversion in Salesforce is the pivotal process of transforming a qualified lead into a new Account, Contact, and optionally an Opportunity. This action signifies that a potential customer has shown sufficient interest and is ready to move further down the sales pipeline. By converting a lead, sales teams can manage the relationship more effectively, track all related activities, and progress towards closing a deal, making it a fundamental step in revenue generation and customer relationship management.",
        pt: "A conversão de lead no Salesforce é o processo fundamental de transformar um lead qualificado em uma nova Conta, Contato e, opcionalmente, uma Oportunidade. Essa ação significa que um cliente em potencial demonstrou interesse suficiente e está pronto para avançar no funil de vendas. Ao converter um lead, as equipes de vendas podem gerenciar o relacionamento de forma mais eficaz, rastrear todas as atividades relacionadas e progredir para fechar um negócio, tornando-o um passo fundamental na geração de receita e no gerenciamento do relacionamento com o cliente."
      }
    },
    {
      id: 'as-11',
      question: { en: "What is a campaign in Salesforce?", pt: "O que é uma campanha no Salesforce?" },
      options: [
        { en: "A marketing initiative tracking leads", pt: "Uma iniciativa de marketing que rastreia leads" },
        { en: "A sales pipeline forecasting tool", pt: "Uma ferramenta de previsão de pipeline de vendas" },
        { en: "A customer support case system", pt: "Um sistema de casos de suporte ao cliente" },
        { en: "A project task management feature", pt: "Um recurso de gerenciamento de tarefas de projeto" }
      ],
      correct: 0,
      explanation: { 
        en: "A campaign in Salesforce is a powerful tool for planning, managing, and tracking marketing initiatives. It allows organizations to measure the effectiveness of their marketing efforts by associating leads, contacts, and opportunities with specific campaigns. This provides valuable insights into ROI, helps optimize future marketing strategies, and ensures that sales and marketing teams are aligned on customer acquisition and engagement goals.",
        pt: "Uma campanha no Salesforce é uma ferramenta poderosa para planejar, gerenciar e rastrear iniciativas de marketing. Ela permite que as organizações meçam a eficácia de seus esforços de marketing, associando leads, contatos e oportunidades a campanhas específicas. Isso fornece insights valiosos sobre o ROI, ajuda a otimizar futuras estratégias de marketing e garante que as equipes de vendas e marketing estejam alinhadas nos objetivos de aquisição e engajamento de clientes."
      }
    },
    {
      id: 'as-12',
      question: { en: "What is a web-to-lead form?", pt: "O que é um formulário web-to-lead?" },
      options: [
        { en: "Captures website visitor data as leads", pt: "Captura dados de visitantes do site como leads" },
        { en: "Creates new customer account records", pt: "Cria novos registros de conta de cliente" },
        { en: "Submits customer service inquiries", pt: "Envia consultas de atendimento ao cliente" },
        { en: "Collects internal employee feedback", pt: "Coleta feedback interno de funcionários" }
      ],
      correct: 0,
      explanation: { 
        en: "A Web-to-Lead form in Salesforce is a powerful marketing automation tool that allows organizations to capture information directly from their website visitors and automatically create new lead records within Salesforce. This streamlines the lead generation process, ensuring that potential customer data is immediately available to sales teams for follow-up. By automating lead capture, businesses can improve response times, reduce manual data entry, and enhance the overall efficiency of their sales pipeline, leading to better conversion rates.",
        pt: "Um formulário Web-to-Lead no Salesforce é uma poderosa ferramenta de automação de marketing que permite às organizações capturar informações diretamente de seus visitantes do site e criar automaticamente novos registros de lead dentro do Salesforce. Isso otimiza o processo de geração de leads, garantindo que os dados de potenciais clientes estejam imediatamente disponíveis para as equipes de vendas para acompanhamento. Ao automatizar a captura de leads, as empresas podem melhorar os tempos de resposta, reduzir a entrada manual de dados e aumentar a eficiência geral de seu pipeline de vendas, levando a melhores taxas de conversão."
      }
    },
    {
      id: 'as-13',
      question: { en: "What is a duplicate rule?", pt: "O que é uma regra de duplicatas?" },
      options: [
        { en: "Prevents or alerts on duplicate record creation", pt: "Previne ou alerta sobre criação de registros duplicados" },
        { en: "Identifies existing duplicate records for review", pt: "Identifica registros duplicados existentes para revisão" },
        { en: "Automates the merging of similar records", pt: "Automatiza a mesclagem de registros semelhantes" },
        { en: "Automatically deletes redundant data entries", pt: "Exclui automaticamente entradas de dados redundantes" }
      ],
      correct: 0,
      explanation: { 
        en: "Duplicate Rules in Salesforce are crucial for maintaining data quality and integrity by preventing or alerting users about the creation of duplicate records. These rules work in conjunction with Matching Rules to identify potential duplicates based on predefined criteria. When a user attempts to create a record that matches an existing one, the duplicate rule can either block the creation or provide an alert, allowing the user to decide whether to proceed or merge. This helps keep the database clean, improves reporting accuracy, and ensures sales and service teams work with reliable data.",
        pt: "Regras de Duplicatas no Salesforce são cruciais para manter a qualidade e integridade dos dados, prevenindo ou alertando os usuários sobre a criação de registros duplicados. Essas regras funcionam em conjunto com as Regras de Correspondência para identificar potenciais duplicatas com base em critérios predefinidos. Quando um usuário tenta criar um registro que corresponde a um existente, a regra de duplicatas pode bloquear a criação ou fornecer um alerta, permitindo que o usuário decida se prossegue ou mescla. Isso ajuda a manter o banco de dados limpo, melhora a precisão dos relatórios e garante que as equipes de vendas e serviço trabalhem com dados confiáveis."
      }
    },
    {
      id: 'as-14',
      question: { en: "What is an email template?", pt: "O que é um modelo de email?" },
      options: [
        { en: "Pre-designed format for consistent emails", pt: "Formato pré-projetado para emails consistentes" },
        { en: "A tool for mass email distribution", pt: "Uma ferramenta para distribuição de email em massa" },
        { en: "Feature for tracking email engagement", pt: "Recurso para rastrear engajamento de email" },
        { en: "Security setting for email content encryption", pt: "Configuração de segurança para criptografia de conteúdo de email" }
      ],
      correct: 0,
      explanation: { 
        en: "An email template in Salesforce is a pre-designed email format that allows users to send consistent and professional communications. These templates can include merge fields to personalize content with recipient-specific data, dynamic content for varied messaging, and attachments. They are widely used across sales, service, and marketing for various purposes, such as sending sales proposals, customer service responses, or marketing newsletters, significantly improving efficiency and maintaining brand consistency.",
        pt: "Um modelo de email no Salesforce é um formato de email pré-projetado que permite aos usuários enviar comunicações consistentes e profissionais. Esses modelos podem incluir campos de mesclagem para personalizar o conteúdo com dados específicos do destinatário, conteúdo dinâmico para mensagens variadas e anexos. Eles são amplamente utilizados em vendas, serviço e marketing para diversas finalidades, como envio de propostas de vendas, respostas de atendimento ao cliente ou newsletters de marketing, melhorando significativamente a eficiência e mantendo a consistência da marca."
      }
    },
    {
      id: 'as-15',
      question: { en: "What is a list view?", pt: "O que é uma visualização de lista?" },
      options: [
        { en: "Customizable table of filtered records", pt: "Tabela personalizável de registros filtrados" },
        { en: "A type of static data report", pt: "Um tipo de relatório de dados estático" },
        { en: "A component for dashboard visualization", pt: "Um componente para visualização de painel" },
        { en: "A setting for page layout configuration", pt: "Uma configuração para layout de página" }
      ],
      correct: 0,
      explanation: { 
        en: "List Views in Salesforce are highly customizable tables that allow users to filter, sort, and display records based on specific criteria. They provide a quick and efficient way to access and manage groups of records, such as leads, contacts, or cases, without needing to run a full report. Users can create personal list views or share them with others, enhancing productivity and enabling focused data analysis directly from object tabs.",
        pt: "Visualizações de Lista no Salesforce são tabelas altamente personalizáveis que permitem aos usuários filtrar, classificar e exibir registros com base em critérios específicos. Elas fornecem uma maneira rápida e eficiente de acessar e gerenciar grupos de registros, como leads, contatos ou casos, sem a necessidade de executar um relatório completo. Os usuários podem criar visualizações de lista pessoais ou compartilhá-las com outros, aumentando a produtividade e permitindo a análise de dados focada diretamente das guias de objeto."
      }
    }
  ],
  'service-cloud': [
    {
      id: 'sc-1',
      question: { en: "What is Service Cloud?", pt: "O que é Service Cloud?" },
      options: [
        { en: "Platform for customer service and support", pt: "Plataforma para atendimento e suporte ao cliente" },
        { en: "A sales process automation tool", pt: "Uma ferramenta de automação de processo de vendas" },
        { en: "A marketing campaign management system", pt: "Um sistema de gerenciamento de campanhas de marketing" },
        { en: "A financial accounting solution", pt: "Uma solução de contabilidade financeira" }
      ],
      correct: 0,
      explanation: { 
        en: "Service Cloud is Salesforce's comprehensive platform designed to enhance customer service and support operations. It empowers companies to manage customer interactions efficiently, streamline service processes, and ultimately improve customer satisfaction. Key features include robust case management, a self-service knowledge base, and real-time communication channels like live chat, all aimed at providing a seamless and effective support experience.",
        pt: "Service Cloud é a plataforma abrangente da Salesforce projetada para aprimorar as operações de atendimento e suporte ao cliente. Ela capacita as empresas a gerenciar as interações com os clientes de forma eficiente, otimizar os processos de serviço e, em última análise, melhorar a satisfação do cliente. Os principais recursos incluem gerenciamento robusto de casos, uma base de conhecimento de autoatendimento e canais de comunicação em tempo real, como chat ao vivo, todos visando fornecer uma experiência de suporte contínua e eficaz."
      }
    },
    {
      id: 'sc-2',
      question: { en: "What is a case in Service Cloud?", pt: "O que é um caso no Service Cloud?" },
      options: [
        { en: "A customer's question, feedback, or issue", pt: "Uma pergunta, feedback ou problema de um cliente" },
        { en: "A sales opportunity record", pt: "Um registro de oportunidade de vendas" },
        { en: "A marketing lead profile", pt: "Um perfil de lead de marketing" },
        { en: "A project management task", pt: "Uma tarefa de gerenciamento de projeto" }
      ],
      correct: 0,
      explanation: { 
        en: "In Service Cloud, a case represents a customer's specific question, feedback, or issue that requires attention and resolution from a service agent. It serves as a central record for all interactions, activities, and information related to that particular customer inquiry. Effective case management is crucial for tracking progress, ensuring timely responses, and ultimately delivering high-quality customer support, leading to improved customer satisfaction and loyalty.",
        pt: "No Service Cloud, um caso representa uma pergunta, feedback ou problema específico de um cliente que requer atenção e resolução de um agente de serviço. Ele serve como um registro central para todas as interações, atividades e informações relacionadas a essa consulta específica do cliente. O gerenciamento eficaz de casos é crucial para acompanhar o progresso, garantir respostas oportunas e, em última análise, fornecer suporte ao cliente de alta qualidade, levando a uma melhor satisfação e lealdade do cliente."
      }
    },
    {
      id: 'sc-3',
      question: { en: "What is a knowledge base in Service Cloud?", pt: "O que é uma base de conhecimento no Service Cloud?" },
      options: [
        { en: "Repository of articles and FAQs for self-service", pt: "Repositório de artigos e FAQs para autoatendimento" },
        { en: "A database of customer contact information", pt: "Um banco de dados de informações de contato do cliente" },
        { en: "A tool for tracking service agent performance", pt: "Uma ferramenta para rastrear o desempenho do agente de serviço" },
        { en: "A system for managing customer complaint tickets", pt: "Um sistema para gerenciar tickets de reclamação do cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "A knowledge base in Service Cloud is a centralized, searchable repository of articles, FAQs, troubleshooting guides, and solutions. It empowers both customers and service agents by providing readily accessible information for self-service and quick problem resolution. By enabling customers to find answers independently, it reduces case volume and improves overall efficiency, while also equipping agents with consistent and accurate information to deliver faster support.",
        pt: "Uma base de conhecimento no Service Cloud é um repositório centralizado e pesquisável de artigos, FAQs, guias de solução de problemas e soluções. Ela capacita clientes e agentes de serviço, fornecendo informações prontamente acessíveis para autoatendimento e resolução rápida de problemas. Ao permitir que os clientes encontrem respostas de forma independente, ela reduz o volume de casos e melhora a eficiência geral, ao mesmo tempo em que equipa os agentes com informações consistentes e precisas para fornecer suporte mais rápido."
      }
    },
    {
      id: 'sc-4',
      question: { en: "What is Live Agent?", pt: "O que é Live Agent?" },
      options: [
        { en: "Real-time chat tool for customer support", pt: "Ferramenta de chat em tempo real para suporte ao cliente" },
        { en: "An AI-powered automated chatbot", pt: "Um chatbot automatizado alimentado por IA" },
        { en: "A tool for managing email-based support", pt: "Uma ferramenta para gerenciar suporte baseado em e-mail" },
        { en: "A system for inbound and outbound phone calls", pt: "Um sistema para chamadas telefônicas de entrada e saída" }
      ],
      correct: 0,
      explanation: { 
        en: "Live Agent is a real-time chat tool within Service Cloud that enables customer service agents to interact directly with customers through a website or community portal. This feature provides immediate, personalized support, allowing agents to answer questions, resolve issues, and guide customers through processes in real-time. It significantly enhances the customer experience by offering instant assistance and improving resolution times, contributing to higher customer satisfaction.",
        pt: "Live Agent é uma ferramenta de chat em tempo real dentro do Service Cloud que permite que agentes de atendimento ao cliente interajam diretamente com os clientes através de um site ou portal da comunidade. Este recurso fornece suporte imediato e personalizado, permitindo que os agentes respondam a perguntas, resolvam problemas e guiem os clientes através de processos em tempo real. Ele aprimora significativamente a experiência do cliente, oferecendo assistência instantânea e melhorando os tempos de resolução, contribuindo para uma maior satisfação do cliente."
      }
    },
    {
      id: 'sc-5',
      question: { en: "What is Omni-Channel in Service Cloud?", pt: "O que é Omni-Channel no Service Cloud?" },
      options: [
        { en: "Routes work items to most appropriate agent", pt: "Roteia itens de trabalho para o agente mais apropriado" },
        { en: "Manages multiple customer communication platforms", pt: "Gerencia múltiplas plataformas de comunicação com o cliente" },
        { en: "A dashboard for tracking agent availability", pt: "Um painel para rastrear a disponibilidade do agente" },
        { en: "A system for collecting customer feedback", pt: "Um sistema para coleta de feedback do cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "Omni-Channel in Service Cloud is a powerful routing feature that automatically pushes work items (such as cases, chats, or social media posts) to the most appropriate and available service agents. It intelligently distributes workload based on agent capacity, skills, and priority, ensuring that customers are connected with the best-suited agent for their needs. This optimizes agent productivity, reduces wait times, and accelerates resolution, leading to a more efficient and satisfying customer service experience.",
        pt: "Omni-Channel no Service Cloud é um recurso de roteamento poderoso que automaticamente envia itens de trabalho (como casos, chats ou postagens em mídias sociais) para os agentes de serviço mais apropriados e disponíveis. Ele distribui inteligentemente a carga de trabalho com base na capacidade, habilidades e prioridade do agente, garantindo que os clientes sejam conectados ao agente mais adequado para suas necessidades. Isso otimiza a produtividade do agente, reduz os tempos de espera e acelera a resolução, levando a uma experiência de atendimento ao cliente mais eficiente e satisfatória."
      }
    },
    {
      id: 'sc-6',
      question: { en: "What is a Service Console?", pt: "O que é um Console de Serviço?" },
      options: [
        { en: "Unified interface for service agents", pt: "Interface unificada para agentes de serviço" },
        { en: "A tool for generating service reports", pt: "Uma ferramenta para gerar relatórios de serviço" },
        { en: "A customer self-service web portal", pt: "Um portal web de autoatendimento do cliente" },
        { en: "A mobile app for field service operations", pt: "Um aplicativo móvel para operações de serviço de campo" }
      ],
      correct: 0,
      explanation: { 
        en: "The Service Console in Salesforce is a unified, productivity-focused interface specifically designed for service agents. It provides a comprehensive 360-degree view of the customer, allowing agents to efficiently manage multiple cases, interactions, and relevant information from a single screen. This streamlined workspace improves agent efficiency, reduces context switching, and ultimately enhances customer satisfaction by enabling faster and more informed service delivery.",
        pt: "O Console de Serviço no Salesforce é uma interface unificada e focada na produtividade, projetada especificamente para agentes de serviço. Ele fornece uma visão abrangente de 360 graus do cliente, permitindo que os agentes gerenciem eficientemente múltiplos casos, interações e informações relevantes a partir de uma única tela. Este espaço de trabalho otimizado melhora a eficiência do agente, reduz a troca de contexto e, em última análise, aumenta a satisfação do cliente, permitindo uma entrega de serviço mais rápida e informada."
      }
    },
    {
      id: 'sc-7',
      question: { en: "What is Entitlement Management?", pt: "O que é Gerenciamento de Direitos?" },
      options: [
        { en: "Defines and tracks customer service agreements", pt: "Define e rastreia acordos de serviço ao cliente" },
        { en: "A tool for managing customer loyalty programs", pt: "Uma ferramenta para gerenciar programas de fidelidade do cliente" },
        { en: "A system for tracking product warranties", pt: "Um sistema para rastrear garantias de produtos" },
        { en: "A feature for managing service agent schedules", pt: "Um recurso para gerenciar agendamentos de agentes de serviço" }
      ],
      correct: 0,
      explanation: { 
        en: "Entitlement Management in Service Cloud is a crucial feature that helps organizations define, enforce, and track customer service agreements (SLAs) and service contracts. It ensures that customers receive the appropriate level of support based on their purchased products or services and contractual terms. By automating entitlement verification, it streamlines the service process, prevents unauthorized service, and helps maintain compliance with service agreements, ultimately improving customer trust and satisfaction.",
        pt: "O Gerenciamento de Direitos no Service Cloud é um recurso crucial que ajuda as organizações a definir, aplicar e rastrear acordos de serviço ao cliente (SLAs) e contratos de serviço. Ele garante que os clientes recebam o nível apropriado de suporte com base em seus produtos ou serviços adquiridos e termos contratuais. Ao automatizar a verificação de direitos, ele otimiza o processo de serviço, evita serviços não autorizados e ajuda a manter a conformidade com os acordos de serviço, melhorando, em última análise, a confiança e a satisfação do cliente."
      }
    },
    {
      id: 'sc-8',
      question: { en: "What is a Service Level Agreement (SLA)?", pt: "O que é um Acordo de Nível de Serviço (SLA)?" },
      options: [
        { en: "Contract defining expected service level", pt: "Contrato que define o nível de serviço esperado" },
        { en: "Document outlining agent performance metrics", pt: "Documento que descreve as métricas de desempenho do agente" },
        { en: "Legal agreement between Salesforce and customers", pt: "Acordo legal entre Salesforce e clientes" },
        { en: "Policy for data privacy and security", pt: "Política para privacidade e segurança de dados" }
      ],
      correct: 0,
      explanation: { 
        en: "A Service Level Agreement (SLA) is a formal contract or agreement that defines the specific level of service expected by a customer from a service provider. In Service Cloud, SLAs are instrumental for tracking and ensuring that customer cases and issues are resolved within agreed-upon timeframes and according to defined service standards. They help manage customer expectations, prioritize work, and provide a measurable benchmark for service performance, contributing significantly to customer satisfaction and operational accountability.",
        pt: "Um Acordo de Nível de Serviço (SLA) é um contrato ou acordo formal que define o nível específico de serviço esperado por um cliente de um provedor de serviços. No Service Cloud, os SLAs são instrumentais para rastrear e garantir que os casos e problemas dos clientes sejam resolvidos dentro dos prazos acordados e de acordo com os padrões de serviço definidos. Eles ajudam a gerenciar as expectativas dos clientes, priorizar o trabalho e fornecer um benchmark mensurável para o desempenho do serviço, contribuindo significativamente para a satisfação do cliente e a responsabilidade operacional."
      }
    },
    {
      id: 'sc-9',
      question: { en: "What is a Milestone?", pt: "O que é um Marco?" },
      options: [
        { en: "A required step in a service process", pt: "Uma etapa obrigatória em um processo de serviço" },
        { en: "A customer feedback survey", pt: "Uma pesquisa de feedback do cliente" },
        { en: "A performance target for service agents", pt: "Uma meta de desempenho para agentes de serviço" },
        { en: "A type of report in Service Cloud", pt: "Um tipo de relatório no Service Cloud" }
      ],
      correct: 0,
      explanation: { 
        en: "Milestones in Service Cloud are required, time-dependent steps in a service process that must be completed to meet service level agreements (SLAs). They act as critical checkpoints, helping organizations track progress, ensure timely resolution of cases, and avoid SLA breaches. By defining and monitoring milestones, businesses can proactively manage their service commitments, improve operational efficiency, and enhance customer satisfaction by consistently delivering on promised service levels.",
        pt: "Marcos no Service Cloud são etapas obrigatórias e dependentes do tempo em um processo de serviço que devem ser concluídas para cumprir os acordos de nível de serviço (SLAs). Eles atuam como pontos de verificação críticos, ajudando as organizações a acompanhar o progresso, garantir a resolução oportuna dos casos e evitar violações de SLA. Ao definir e monitorar marcos, as empresas podem gerenciar proativamente seus compromissos de serviço, melhorar a eficiência operacional e aumentar a satisfação do cliente, cumprindo consistentemente os níveis de serviço prometidos."
      }
    },
    {
      id: 'sc-10',
      question: { en: "What is a Service Contract?", pt: "O que é um Contrato de Serviço?" },
      options: [
        { en: "Agreement for support services with a customer", pt: "Acordo para serviços de suporte com um cliente" },
        { en: "A contract for product sales transactions", pt: "Um contrato para transações de vendas de produtos" },
        { en: "A legal document for employee agreements", pt: "Um documento legal para acordos de funcionários" },
        { en: "A contract for vendor partnership terms", pt: "Um contrato para termos de parceria com fornecedores" }
      ],
      correct: 0,
      explanation: { 
        en: "A Service Contract in Salesforce is a formal agreement between a company and a customer that outlines the terms and conditions for support services. It defines crucial aspects such as service levels, entitlements (what the customer is eligible for), and the products or assets covered. By managing service contracts within Service Cloud, organizations can ensure consistent service delivery, track contract compliance, and provide customers with the support they are entitled to, fostering long-term relationships and customer loyalty.",
        pt: "Um Contrato de Serviço no Salesforce é um acordo formal entre uma empresa e um cliente que descreve os termos e condições para serviços de suporte. Ele define aspectos cruciais, como níveis de serviço, direitos (o que o cliente é elegível) e os produtos ou ativos cobertos. Ao gerenciar contratos de serviço dentro do Service Cloud, as organizações podem garantir a entrega consistente de serviços, rastrear a conformidade do contrato e fornecer aos clientes o suporte a que têm direito, promovendo relacionamentos de longo prazo e lealdade do cliente."
      }
    },
    {
      id: 'sc-11',
      question: { en: "What is a Warranty?", pt: "O que é uma Garantia?" },
      options: [
        { en: "A guarantee on a product or service for a specified period", pt: "Uma garantia em um produto ou serviço por um período especificado" },
        { en: "A type of service contract", pt: "Um tipo de contrato de serviço" },
        { en: "A customer support plan", pt: "Um plano de suporte ao cliente" },
        { en: "A legal disclaimer for product liability", pt: "Um aviso legal para responsabilidade do produto" }
      ],
      correct: 0,
      explanation: { 
        en: "A Warranty in Service Cloud represents a guarantee on a product or service for a specified period, often covering defects or malfunctions. By tracking warranties within Salesforce, companies can ensure that customers receive appropriate service and support based on their product coverage and terms. This integration helps streamline the service process, verify eligibility for repairs or replacements, and enhance customer satisfaction by honoring commitments and providing transparent service.",
        pt: "Uma Garantia no Service Cloud representa uma garantia em um produto ou serviço por um período especificado, muitas vezes cobrindo defeitos ou mau funcionamento. Ao rastrear garantias dentro do Salesforce, as empresas podem garantir que os clientes recebam serviço e suporte apropriados com base na cobertura e nos termos de seus produtos. Essa integração ajuda a otimizar o processo de serviço, verificar a elegibilidade para reparos ou substituições e aumentar a satisfação do cliente, honrando os compromissos e fornecendo um serviço transparente."
      }
    },
    {
      id: 'sc-12',
      question: { en: "What is a Contact Center?", pt: "O que é um Contact Center?" },
      options: [
        { en: "Department handling all customer communications", pt: "Departamento que lida com todas as comunicações com o cliente" },
        { en: "A physical location for customer support staff", pt: "Um local físico para a equipe de suporte ao cliente" },
        { en: "Software solution for managing customer interactions", pt: "Solução de software para gerenciar interações com clientes" },
        { en: "A system for collecting customer feedback", pt: "Um sistema para coleta de feedback do cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "A Contact Center (often referred to as a Call Center) is a centralized department or operational hub that manages all customer communications across various channels, including phone calls, emails, chats, and social media. Service Cloud provides comprehensive tools to manage these diverse interactions efficiently, enabling agents to deliver consistent and high-quality support. The goal is to streamline customer service operations, improve response times, and enhance the overall customer experience by consolidating communication management.",
        pt: "Um Contact Center (muitas vezes referido como Call Center) é um departamento centralizado ou hub operacional que gerencia todas as comunicações com o cliente em vários canais, incluindo chamadas telefônicas, e-mails, chats e mídias sociais. O Service Cloud fornece ferramentas abrangentes para gerenciar essas diversas interações de forma eficiente, permitindo que os agentes forneçam suporte consistente e de alta qualidade. O objetivo é otimizar as operações de atendimento ao cliente, melhorar os tempos de resposta e aprimorar a experiência geral do cliente, consolidando o gerenciamento da comunicação."
      }
    },
    {
      id: 'sc-13',
      question: { en: "What is CTI (Computer Telephony Integration)?", pt: "O que é CTI (Integração Computador-Telefonia)?" },
      options: [
        { en: "Integrates phone systems with computers", pt: "Integra sistemas telefônicos com computadores" },
        { en: "A tool for managing customer data records", pt: "Uma ferramenta para gerenciar registros de dados do cliente" },
        { en: "A system for automated call routing", pt: "Um sistema para roteamento automatizado de chamadas" },
        { en: "A feature for recording customer service calls", pt: "Um recurso para gravar chamadas de atendimento ao cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "CTI (Computer Telephony Integration) is a technology that seamlessly integrates telephone systems with computer systems, particularly within Service Cloud. This integration allows service agents to manage calls, view comprehensive customer information, and log interactions directly within their Salesforce console. CTI significantly enhances agent productivity by providing screen pops with relevant customer data upon incoming calls, reducing manual data entry, and improving the overall efficiency and personalization of customer service interactions.",
        pt: "CTI (Integração Computador-Telefonia) é uma tecnologia que integra perfeitamente sistemas telefônicos com sistemas de computador, particularmente dentro do Service Cloud. Essa integração permite que os agentes de serviço gerenciem chamadas, visualizem informações abrangentes do cliente e registrem interações diretamente em seu console do Salesforce. O CTI aumenta significativamente a produtividade do agente, fornecendo pop-ups de tela com dados relevantes do cliente em chamadas recebidas, reduzindo a entrada manual de dados e melhorando a eficiência geral e a personalização das interações de atendimento ao cliente."
      }
    },
    {
      id: 'sc-14',
      question: { en: "What is a Self-Service Portal?", pt: "O que é um Portal de Autoatendimento?" },
      options: [
        { en: "Website for customers to find answers independently", pt: "Site para clientes encontrarem respostas de forma independente" },
        { en: "A portal for service agents to manage cases", pt: "Um portal para agentes de serviço gerenciarem casos" },
        { en: "A platform for internal employee support", pt: "Uma plataforma para suporte interno de funcionários" },
        { en: "A tool for collecting customer feedback", pt: "Uma ferramenta para coletar feedback do cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "A Self-Service Portal in Service Cloud is a dedicated website or online community where customers can independently find answers to their questions, access knowledge articles, log new cases, and resolve issues without direct assistance from a service agent. This empowers customers to help themselves, reduces the volume of inbound support requests, and lowers operational costs. It enhances customer satisfaction by providing convenient, 24/7 access to support resources and fostering a sense of autonomy.",
        pt: "Um Portal de Autoatendimento no Service Cloud é um site ou comunidade online dedicada onde os clientes podem encontrar respostas para suas perguntas, acessar artigos da base de conhecimento, registrar novos casos e resolver problemas de forma independente, sem assistência direta de um agente de serviço. Isso capacita os clientes a se ajudarem, reduz o volume de solicitações de suporte de entrada e diminui os custos operacionais. Ele aumenta a satisfação do cliente, fornecendo acesso conveniente e 24 horas por dia, 7 dias por semana, aos recursos de suporte e promovendo um senso de autonomia."
      }
    },
    {
      id: 'sc-15',
      question: { en: "What is Community Cloud?", pt: "O que é Community Cloud?" },
      options: [
        { en: "Platform for building online communities", pt: "Plataforma para construir comunidades online" },
        { en: "A social media management tool", pt: "Uma ferramenta de gerenciamento de mídia social" },
        { en: "A platform for internal employee collaboration", pt: "Uma plataforma para colaboração interna de funcionários" },
        { en: "A system for managing customer data", pt: "Um sistema para gerenciar dados do cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "Community Cloud, now known as Experience Cloud, is a Salesforce platform that enables companies to build branded online communities for various stakeholders, including customers, partners, and employees. These communities facilitate collaboration, self-service, and knowledge sharing, allowing users to connect with each other, access relevant information, and engage directly with the company. It enhances customer loyalty, partner effectiveness, and employee engagement by providing a centralized hub for interaction and support.",
        pt: "Community Cloud, agora conhecido como Experience Cloud, é uma plataforma Salesforce que permite às empresas construir comunidades online de marca para várias partes interessadas, incluindo clientes, parceiros e funcionários. Essas comunidades facilitam a colaboração, o autoatendimento e o compartilhamento de conhecimento, permitindo que os usuários se conectem uns com os outros, acessem informações relevantes e interajam diretamente com a empresa. Ele aumenta a lealdade do cliente, a eficácia do parceiro e o engajamento dos funcionários, fornecendo um hub centralizado para interação e suporte."
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
  ],

  'service-cloud': [
    {
      id: 'sc-1',
      question: { en: "What is a Case in Service Cloud?", pt: "O que é um Caso no Service Cloud?" },
      options: [
        { en: "A customer issue or inquiry record", pt: "Um registro de problema ou consulta do cliente" },
        { en: "A sales opportunity tracking tool", pt: "Uma ferramenta de rastreamento de oportunidade de vendas" },
        { en: "A marketing campaign management feature", pt: "Um recurso de gerenciamento de campanha de marketing" },
        { en: "A financial transaction document", pt: "Um documento de transação financeira" }
      ],
      correct: 0,
      explanation: { 
        en: "A Case in Service Cloud represents a customer's issue, question, or feedback. It helps support agents track, manage, and resolve customer interactions efficiently, ensuring a comprehensive service history.",
        pt: "Um Caso no Service Cloud representa um problema, pergunta ou feedback de um cliente. Ele ajuda os agentes de suporte a rastrear, gerenciar e resolver as interações com os clientes de forma eficiente, garantindo um histórico de serviço abrangente."
      }
    },
    {
      id: 'sc-2',
      question: { en: "What is the Service Console?", pt: "O que é o Service Console?" },
      options: [
        { en: "A unified agent workspace for service", pt: "Um espaço de trabalho unificado para agentes de serviço" },
        { en: "A tool for managing sales leads", pt: "Uma ferramenta para gerenciar leads de vendas" },
        { en: "A platform for marketing automation", pt: "Uma plataforma para automação de marketing" },
        { en: "A dashboard for financial reporting", pt: "Um painel para relatórios financeiros" }
      ],
      correct: 0,
      explanation: { 
        en: "The Service Console is a unified workspace designed for service agents to manage multiple customer interactions simultaneously. It provides a 360-degree view of the customer, enabling faster and more personalized service delivery.",
        pt: "O Service Console é um espaço de trabalho unificado projetado para agentes de serviço gerenciarem múltiplas interações com clientes simultaneamente. Ele oferece uma visão 360 graus do cliente, permitindo uma entrega de serviço mais rápida e personalizada."
      }
    },
    {
      id: 'sc-3',
      question: { en: "What is Knowledge Base used for?", pt: "Para que é usada a Knowledge Base?" },
      options: [
        { en: "Storing articles for self-service and agents", pt: "Armazenar artigos para autoatendimento e agentes" },
        { en: "Managing customer contact information", pt: "Gerenciar informações de contato do cliente" },
        { en: "Tracking sales performance metrics", pt: "Rastrear métricas de desempenho de vendas" },
        { en: "Automating email marketing campaigns", pt: "Automatizar campanhas de email marketing" }
      ],
      correct: 0,
      explanation: { 
        en: "The Knowledge Base stores articles that provide solutions to common customer issues. It empowers customers with self-service options and equips agents with quick access to information, improving resolution times and consistency.",
        pt: "A Knowledge Base armazena artigos que fornecem soluções para problemas comuns de clientes. Ela capacita os clientes com opções de autoatendimento e equipa os agentes com acesso rápido a informações, melhorando os tempos de resolução e a consistência."
      }
    },
    {
      id: 'sc-4',
      question: { en: "What is Omni-Channel in Service Cloud?", pt: "O que é Omni-Channel no Service Cloud?" },
      options: [
        { en: "Routing work items to the best agent", pt: "Encaminhar itens de trabalho para o melhor agente" },
        { en: "Managing social media interactions", pt: "Gerenciar interações de mídia social" },
        { en: "Automating customer email responses", pt: "Automatizar respostas de email do cliente" },
        { en: "Creating personalized customer journeys", pt: "Criar jornadas personalizadas do cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "Omni-Channel is a feature that intelligently routes work items (like cases, chats, or leads) to the most appropriate and available agent. This ensures efficient workload distribution and optimal agent utilization, enhancing customer satisfaction.",
        pt: "Omni-Channel é um recurso que encaminha inteligentemente itens de trabalho (como casos, chats ou leads) para o agente mais apropriado e disponível. Isso garante uma distribuição eficiente da carga de trabalho e utilização ideal do agente, aumentando a satisfação do cliente."
      }
    },
    {
      id: 'sc-5',
      question: { en: "What are Entitlements and Milestones?", pt: "O que são Direitos e Marcos?" },
      options: [
        { en: "Service level agreements and steps", pt: "Acordos de nível de serviço e etapas" },
        { en: "Customer loyalty programs", pt: "Programas de fidelidade do cliente" },
        { en: "Sales process stages", pt: "Estágios do processo de vendas" },
        { en: "Marketing campaign metrics", pt: "Métricas de campanha de marketing" }
      ],
      correct: 0,
      explanation: { 
        en: "Entitlements define the level of support a customer is eligible for, while Milestones are required steps in the support process. Together, they help enforce service level agreements (SLAs) and ensure timely resolution of cases.",
        pt: "Direitos definem o nível de suporte ao qual um cliente é elegível, enquanto Marcos são etapas necessárias no processo de suporte. Juntos, eles ajudam a aplicar acordos de nível de serviço (SLAs) e garantir a resolução oportuna dos casos."
      }
    },
    {
      id: 'sc-6',
      question: { en: "What is Field Service Lightning?", pt: "O que é Field Service Lightning?" },
      options: [
        { en: "Managing on-site customer service operations", pt: "Gerenciar operações de serviço ao cliente no local" },
        { en: "A tool for email marketing automation", pt: "Uma ferramenta para automação de email marketing" },
        { en: "A platform for sales forecasting", pt: "Uma plataforma para previsão de vendas" },
        { en: "A feature for customer data analytics", pt: "Um recurso para análise de dados do cliente" }
      ],
      correct: 0,
      explanation: { 
        en: "Field Service Lightning (FSL) extends Service Cloud capabilities to manage on-site service operations. It optimizes scheduling, dispatching, and mobile workforce management, improving efficiency for field technicians and customer satisfaction.",
        pt: "Field Service Lightning (FSL) estende as capacidades do Service Cloud para gerenciar operações de serviço no local. Ele otimiza o agendamento, despacho e gerenciamento da força de trabalho móvel, melhorando a eficiência para técnicos de campo e a satisfação do cliente."
      }
    },
    {
      id: 'sc-7',
      question: { en: "What are Service Level Agreements (SLAs)?", pt: "O que são Acordos de Nível de Serviço (SLAs)?" },
      options: [
        { en: "Agreements defining service response and resolution times", pt: "Acordos que definem tempos de resposta e resolução de serviço" },
        { en: "Contracts for sales opportunities", pt: "Contratos para oportunidades de vendas" },
        { en: "Marketing campaign performance metrics", pt: "Métricas de desempenho de campanha de marketing" },
        { en: "Financial reporting standards", pt: "Padrões de relatórios financeiros" }
      ],
      correct: 0,
      explanation: { 
        en: "SLAs are agreements between a service provider and a customer that define the expected level of service. In Service Cloud, they help ensure that cases are addressed and resolved within specified timeframes, maintaining customer satisfaction and compliance.",
        pt: "SLAs são acordos entre um provedor de serviços e um cliente que definem o nível de serviço esperado. No Service Cloud, eles ajudam a garantir que os casos sejam abordados e resolvidos dentro dos prazos especificados, mantendo a satisfação do cliente e a conformidade."
      }
    },
    {
      id: 'sc-8',
      question: { en: "What is Live Agent / Einstein Bots?", pt: "O que é Live Agent / Einstein Bots?" },
      options: [
        { en: "Tools for real-time customer support", pt: "Ferramentas para suporte ao cliente em tempo real" },
        { en: "Features for sales automation", pt: "Recursos para automação de vendas" },
        { en: "Platforms for data analytics", pt: "Plataformas para análise de dados" },
        { en: "Systems for project management", pt: "Sistemas para gerenciamento de projetos" }
      ],
      correct: 0,
      explanation: { 
        en: "Live Agent provides real-time chat support with human agents, while Einstein Bots offer automated conversational experiences. Both enhance customer service by providing immediate assistance and deflecting common inquiries, improving agent efficiency.",
        pt: "Live Agent oferece suporte por chat em tempo real com agentes humanos, enquanto Einstein Bots oferecem experiências conversacionais automatizadas. Ambos aprimoram o atendimento ao cliente, fornecendo assistência imediata e desviando consultas comuns, melhorando a eficiência do agente."
      }
    }
  ]
};
