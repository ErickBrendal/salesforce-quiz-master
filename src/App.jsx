'''
import { useState } from 'react';
import { Zap, CheckCircle, XCircle, Star, Rocket, Target, Award, Globe, BookOpen, Heart, Home, Trophy } from 'lucide-react';
import './App.css';
import { offlineQuestions } from './questions';

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
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [maxQuestions] = useState(10); // Limite de perguntas por fase

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
    },
    'service-cloud': { 
      en: 'Service Cloud',
      pt: 'Service Cloud',
      icon: '🎧',
      color: 'from-cyan-500 to-blue-600'
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

  const generateQuestionWithAPI = async () => {
    if (!apiKey) return generateOfflineQuestion();
    
    setLoading(true);
    const certName = certifications[certType][language];
    const prompt = `Generate a challenging quiz question about Salesforce ${certName} certification. \n    Ensure all 4 options have similar text length (between 3-8 words). \n    Incorrect options must be plausible and use real Salesforce technical terms, not invented ones. \n    The explanation for the correct answer must be at least 3 detailed sentences, confirming why it's correct, adding extra context or practical use cases, and mentioning benefits or related functionalities. \n    Return ONLY a JSON object with this structure:\n    {\n      "question": "question text",\n      "options": ["option1", "option2", "option3", "option4"],\n      "correct": 0,\n      "explanation": "detailed explanation"\n    }`;

    try {
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
    
    // Filtrar perguntas que ainda não foram usadas (usando IDs únicos)
    const availableQuestions = questions.filter(q => !usedQuestions.includes(q.id));
    
    // Se todas as perguntas foram usadas, resetar
    if (availableQuestions.length === 0) {
      setUsedQuestions([]);
      const randomIndex = Math.floor(Math.random() * questions.length);
      const randomQ = questions[randomIndex];
      setUsedQuestions([randomQ.id]);
      
      return {
        question: randomQ.question[language],
        options: randomQ.options.map(opt => opt[language]),
        correct: randomQ.correct,
        explanation: randomQ.explanation[language]
      };
    }
    
    // Selecionar uma pergunta aleatória das disponíveis
    const randomAvailableIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomAvailableIndex];
    
    // Marcar como usada usando ID único
    setUsedQuestions(prev => [...prev, selectedQuestion.id]);
    
    return {
      question: selectedQuestion.question[language],
      options: selectedQuestion.options.map(opt => opt[language]),
      correct: selectedQuestion.correct,
      explanation: selectedQuestion.explanation[language]
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
    setUsedQuestions([]); // Resetar perguntas usadas
    loadNextQuestion();
  };

  const loadNextQuestion = async () => {
    // Verificar se atingiu o limite de perguntas
    if (questionCount >= maxQuestions) {
      setTimeout(() => setScreen('gameover'), 1000);
      return;
    }
    
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
                  {lang === 'en' ? '🇺🇸 English' : '🇧🇷 Portugês'}
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
          {/* Botão Voltar ao Início */}
          <div className="mb-6 flex justify-end">
            <button
              onClick={() => {
                if (window.confirm(language === 'pt' ? 'Deseja realmente sair do quiz? Seu progresso será perdido.' : 'Do you really want to quit the quiz? Your progress will be lost.')) {
                  setScreen('setup');
                  setScore(0);
                  setQuestionCount(0);
                  setStreak(0);
                  setLives(3);
                  setEarnedStars(0);
                  setUsedQuestions([]);
                  setCurrentQuestion(null);
                  setSelectedAnswer(null);
                  setShowResult(false);
                }
              }}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold transition-all transform hover:scale-105 backdrop-blur-lg border border-white/30 shadow-lg"
            >
              <Home className="w-5 h-5" />
              {t.backToSetup}
            </button>
          </div>
          
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
              <p className="text-white text-xl font-semibold">{t.loading}</p>
            </div>
          ) : (
            currentQuestion && (
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <p className="text-white text-lg mb-4">{t.question} {questionCount}/{maxQuestions}</p>
                <h2 className="text-white text-3xl font-bold mb-6">{currentQuestion.question}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`p-5 rounded-xl text-left font-semibold transition-all transform hover:scale-105 flex items-center gap-3 ${
                        showResult
                          ? index === currentQuestion.correct
                            ? 'bg-green-500 text-white shadow-lg'
                            : index === selectedAnswer
                              ? 'bg-red-500 text-white shadow-lg'
                              : 'bg-white/20 text-white/70'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                      disabled={showResult}
                    >
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/30 text-white font-bold text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showResult && index === currentQuestion.correct && <CheckCircle className="w-6 h-6 text-white" />}
                      {showResult && index === selectedAnswer && index !== currentQuestion.correct && <XCircle className="w-6 h-6 text-white" />}
                    </button>
                  ))}
                </div>
                {showResult && (
                  <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20 shadow-inner">
                    <h3 className="text-white text-xl font-bold mb-3 flex items-center gap-2">
                      <BookOpen className="w-6 h-6" />
                      {t.explanation}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">{currentQuestion.explanation}</p>
                    <button
                      onClick={loadNextQuestion}
                      className="mt-6 w-full p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                    >
                      {t.nextQuestion}
                    </button>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (screen === 'gameover') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 p-4 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
          <h2 className="text-white text-5xl font-black mb-4">{t.gameOver}</h2>
          <p className="text-white text-2xl mb-6">{t.finalScore}: {score}</p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {Array.from({ length: earnedStars }).map((_, i) => (
              <Star key={i} className="w-10 h-10 text-yellow-400 animate-bounce" />
            ))}
          </div>
          <button
            onClick={() => setScreen('setup')}
            className="w-full p-5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            {t.backToSetup}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default SalesforceQuizApp;
'''
