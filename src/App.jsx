import { useState } from 'react';
import { Trophy, Zap, CheckCircle, XCircle, Star, Rocket, Target, Award, Globe, BookOpen, Heart } from 'lucide-react';
import './App.css';

const SalesforceQuizApp = () => {
  const [screen, setScreen] = useState('setup');
  const [language, setLanguage] = useState('pt');
  const [certType, setCertType] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lives, setLives] = useState(3);
  const [earnedStars, setEarnedStars] = useState(0);

  const certifications = {
    'platform-foundations': { 
      en: 'Platform Foundations',
      pt: 'Platform Foundations',
      icon: '🏗️',
      color: 'from-blue-500 to-cyan-500'
    },
    'admin-sales': { 
      en: 'Administrator Sales',
      pt: 'Administrador Sales',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500'
    },
    'sales': { 
      en: 'Sales Cloud',
      pt: 'Sales Cloud',
      icon: '💼',
      color: 'from-green-500 to-emerald-500'
    },
    'marketing': { 
      en: 'Marketing Cloud',
      pt: 'Marketing Cloud',
      icon: '📧',
      color: 'from-orange-500 to-red-500'
    },
    'agentforce': { 
      en: 'Agentforce Specialist',
      pt: 'Agentforce Specialist',
      icon: '🤖',
      color: 'from-indigo-500 to-purple-500'
    },
    'data-cloud': { 
      en: 'Data Cloud',
      pt: 'Data Cloud',
      icon: '☁️',
      color: 'from-teal-500 to-blue-500'
    },
    'business-analyst': { 
      en: 'Business Analyst',
      pt: 'Business Analyst',
      icon: '📊',
      color: 'from-yellow-500 to-orange-500'
    }
  };

  const translations = {
    en: {
      title: 'Salesforce Quiz Master',
      subtitle: 'Become a Certified Trailblazer',
      selectLanguage: 'Select Language',
      selectCert: 'Choose Your Certification Path',
      apiKeyLabel: 'OpenAI API Key (Optional)',
      apiKeyPlaceholder: 'sk-...',
      startQuiz: 'Start Quiz',
      score: 'Score',
      streak: 'Streak',
      lives: 'Lives',
      question: 'Question',
      loading: 'Generating question...',
      correct: 'Correct!',
      incorrect: 'Incorrect!',
      explanation: 'Explanation',
      nextQuestion: 'Next Question',
      tryAgain: 'Try Again',
      gameOver: 'Game Over!',
      finalScore: 'Final Score',
      backToSetup: 'Back to Setup',
      stars: 'Stars Earned'
    },
    pt: {
      title: 'Salesforce Quiz Master',
      subtitle: 'Torne-se um Trailblazer Certificado',
      selectLanguage: 'Selecione o Idioma',
      selectCert: 'Escolha seu Caminho de Certificação',
      apiKeyLabel: 'Chave da API OpenAI (Opcional)',
      apiKeyPlaceholder: 'sk-...',
      startQuiz: 'Iniciar Quiz',
      score: 'Pontuação',
      streak: 'Sequência',
      lives: 'Vidas',
      question: 'Questão',
      loading: 'Gerando pergunta...',
      correct: 'Correto!',
      incorrect: 'Incorreto!',
      explanation: 'Explicação',
      nextQuestion: 'Próxima Pergunta',
      tryAgain: 'Tentar Novamente',
      gameOver: 'Fim de Jogo!',
      finalScore: 'Pontuação Final',
      backToSetup: 'Voltar ao Início',
      stars: 'Estrelas Conquistadas'
    }
  };

  const t = translations[language];

  // Banco de perguntas offline (fallback)
  const offlineQuestions = {
    'platform-foundations': [
      {
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
      }
    ],
    'admin-sales': [
      {
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
      }
    ],
    'sales': [
      {
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
      }
    ],
    'marketing': [
      {
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
      }
    ],
    'agentforce': [
      {
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
      }
    ],
    'data-cloud': [
      {
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
      }
    ],
    'business-analyst': [
      {
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
      }
    ]
  };

  const generateQuestionWithAPI = async () => {
    if (!apiKey || apiKey.length < 20) {
      return generateOfflineQuestion();
    }

    setLoading(true);
    try {
      const certName = certifications[certType][language];
      const prompt = language === 'pt' 
        ? `Gere uma pergunta de múltipla escolha sobre Salesforce ${certName}. Formate como JSON com: question (string), options (array de 4 strings), correct (índice da resposta correta 0-3), explanation (explicação detalhada da resposta correta). A pergunta deve ser atualizada e relevante para 2025.`
        : `Generate a multiple choice question about Salesforce ${certName}. Format as JSON with: question (string), options (array of 4 strings), correct (correct answer index 0-3), explanation (detailed explanation of correct answer). The question should be updated and relevant for 2025.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a Salesforce certification expert. Generate challenging quiz questions.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.8
        })
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      const content = data.choices[0].message.content;
      const questionData = JSON.parse(content);
      
      setLoading(false);
      return questionData;
    } catch (error) {
      console.error('API Error:', error);
      setLoading(false);
      return generateOfflineQuestion();
    }
  };

  const generateOfflineQuestion = () => {
    const questions = offlineQuestions[certType] || offlineQuestions['platform-foundations'];
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    
    return {
      question: randomQ.question[language],
      options: randomQ.options.map(opt => opt[language]),
      correct: randomQ.correct,
      explanation: randomQ.explanation[language]
    };
  };

  const startQuiz = async () => {
    if (!certType) return;
    setScreen('quiz');
    setScore(0);
    setQuestionCount(0);
    setStreak(0);
    setLives(3);
    setEarnedStars(0);
    loadNextQuestion();
  };

  const loadNextQuestion = async () => {
    setSelectedAnswer(null);
    setShowResult(false);
    const question = await generateQuestionWithAPI();
    setCurrentQuestion(question);
    setQuestionCount(prev => prev + 1);
  };

  const handleAnswer = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === currentQuestion.correct) {
      const points = 10 + (streak * 5);
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      setEarnedStars(prev => prev + 1);
    } else {
      setStreak(0);
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => setScreen('gameover'), 2000);
        }
        return newLives;
      });
    }
  };

  // Setup Screen
  if (screen === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-4 overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse top-0 -left-20"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse bottom-0 -right-20 animation-delay-1000"></div>
          <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse top-1/2 left-1/2 animation-delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-400 animate-bounce" />
            </div>
            <h1 className="text-6xl font-black text-white mb-3 drop-shadow-2xl">
              {t.title}
            </h1>
            <p className="text-2xl text-blue-200 font-semibold flex items-center justify-center gap-2">
              <Rocket className="w-6 h-6" />
              {t.subtitle}
              <Star className="w-6 h-6 text-yellow-400" />
            </p>
          </div>

          {/* Language Selection */}
          <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <label className="block text-white text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              {t.selectLanguage}
            </label>
            <div className="grid grid-cols-2 gap-4">
              {['en', 'pt'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`p-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 ${
                    language === lang
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {lang === 'en' ? '🇺🇸 English' : '🇧🇷 Português'}
                </button>
              ))}
            </div>
          </div>

          {/* Certification Selection */}
          <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <label className="block text-white text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" />
              {t.selectCert}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(certifications).map(([key, cert]) => (
                <button
                  key={key}
                  onClick={() => setCertType(key)}
                  className={`p-6 rounded-2xl font-bold text-left transition-all transform hover:scale-105 ${
                    certType === key
                      ? `bg-gradient-to-r ${cert.color} text-white shadow-2xl scale-105`
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cert.icon}</span>
                    <span className="text-lg">{cert[language]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* API Key Input */}
          <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <label className="block text-white text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              {t.apiKeyLabel}
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={t.apiKeyPlaceholder}
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-4 focus:ring-purple-500/50 text-lg"
            />
            <p className="text-blue-200 text-sm mt-3">
              💡 {language === 'pt' 
                ? 'Com API: perguntas dinâmicas e atualizadas | Sem API: banco de perguntas offline'
                : 'With API: dynamic updated questions | Without API: offline question bank'}
            </p>
          </div>

          {/* Start Button */}
          <button
            onClick={startQuiz}
            disabled={!certType}
            className={`w-full p-8 rounded-3xl font-black text-3xl transition-all transform ${
              certType
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 shadow-2xl hover:shadow-green-500/50'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              <Rocket className="w-10 h-10" />
              {t.startQuiz}
              <Zap className="w-10 h-10" />
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (screen === 'quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-6 text-center shadow-xl">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-white/80 text-sm font-semibold">{t.score}</p>
              <p className="text-3xl font-black text-white">{score}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-center shadow-xl">
              <Zap className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-white/80 text-sm font-semibold">{t.streak}</p>
              <p className="text-3xl font-black text-white">{streak}🔥</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 text-center shadow-xl">
              <Heart className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-white/80 text-sm font-semibold">{t.lives}</p>
              <p className="text-3xl font-black text-white">{'❤️'.repeat(lives)}</p>
            </div>
          </div>

          {/* Question Card */}
          {loading ? (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
              <div className="animate-spin w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"></div>
              <p className="text-white text-2xl font-bold">{t.loading}</p>
            </div>
          ) : currentQuestion && (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Question Header */}
              <div className="mb-6">
                <p className="text-purple-300 text-sm font-bold mb-2">{t.question} {questionCount}</p>
                <h2 className="text-white text-2xl font-bold leading-relaxed">{currentQuestion.question}</h2>
              </div>

              {/* Answer Options */}
              <div className="space-y-4 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correct;
                  const showCorrect = showResult && isCorrect;
                  const showIncorrect = showResult && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-6 rounded-2xl text-left font-bold text-lg transition-all transform hover:scale-102 ${
                        showCorrect
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl scale-102'
                          : showIncorrect
                          ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-xl scale-102'
                          : isSelected
                          ? 'bg-white/30 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {showCorrect && <CheckCircle className="w-6 h-6 flex-shrink-0" />}
                        {showIncorrect && <XCircle className="w-6 h-6 flex-shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Result Explanation */}
              {showResult && (
                <div className={`mt-6 p-6 rounded-2xl ${
                  selectedAnswer === currentQuestion.correct
                    ? 'bg-gradient-to-r from-green-500/20 to-emerald-600/20 border-2 border-green-400'
                    : 'bg-gradient-to-r from-red-500/20 to-pink-600/20 border-2 border-red-400'
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    {selectedAnswer === currentQuestion.correct ? (
                      <>
                        <CheckCircle className="w-8 h-8 text-green-400" />
                        <h3 className="text-2xl font-black text-green-300">{t.correct}</h3>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-8 h-8 text-red-400" />
                        <h3 className="text-2xl font-black text-red-300">{t.incorrect}</h3>
                      </>
                    )}
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl mb-4">
                    <p className="text-sm font-semibold text-purple-300 mb-2">{t.explanation}:</p>
                    <p className="text-white text-lg leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                  <button
                    onClick={loadNextQuestion}
                    className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl"
                  >
                    {t.nextQuestion} →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (screen === 'gameover') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-4 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
          <Award className="w-32 h-32 mx-auto mb-6 text-yellow-400 animate-bounce" />
          <h2 className="text-6xl font-black text-white mb-4">{t.gameOver}</h2>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-8 mb-6">
            <p className="text-2xl text-white font-bold mb-2">{t.finalScore}</p>
            <p className="text-7xl font-black text-white">{score}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/20 rounded-xl p-6">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-blue-300" />
              <p className="text-white/80 mb-1">{t.question}s</p>
              <p className="text-4xl font-black text-white">{questionCount}</p>
            </div>
            <div className="bg-white/20 rounded-xl p-6">
              <Star className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <p className="text-white/80 mb-1">{t.stars}</p>
              <p className="text-4xl font-black text-white">{earnedStars}</p>
            </div>
          </div>
          <button
            onClick={() => setScreen('setup')}
            className="w-full p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-xl"
          >
            {t.backToSetup}
          </button>
        </div>
      </div>
    );
  }
};

export default SalesforceQuizApp;
