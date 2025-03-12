import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { initialQuizConfig } from './config';
import { loadQuizConfig } from './api';

const QuizApp = ({ onLogout }) => {
  // Estados principales
  const [quizConfig, setQuizConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Cargar configuración al inicio
  useEffect(() => {
    const fetchQuizConfig = async () => {
      setIsLoading(true);
      try {
        const config = await loadQuizConfig();
        setQuizConfig(config);
        setError(null);
      } catch (err) {
        console.error('Error al cargar la configuración:', err);
        setError('No se pudo cargar la configuración. Usando valores predeterminados.');
        setQuizConfig(initialQuizConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizConfig();
  }, []);

  // Manejar la respuesta del usuario
  const handleAnswer = (selected) => {
    if (!answered && quizConfig) {
      const correct = selected === quizConfig.questions[currentQuestion].correct;
      setSelectedOption(selected);
      setIsCorrect(correct);
      if (correct) setScore(score + 1);
      setAnswered(true);
    }
  };

  // Manejar el botón siguiente
  const handleNext = () => {
    if (quizConfig && currentQuestion < quizConfig.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  // Reiniciar el quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setSelectedOption(null);
  };

  // Si está cargando inicialmente, muestra un indicador de carga
  if (isLoading && !quizConfig) {
    return (
      <div className="quiz-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="loading-spinner">Cargando quiz...</div>
      </div>
    );
  }

  // Si hay un error y no hay configuración, muestra el error
  if (error && !quizConfig) {
    return (
      <div className="quiz-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="error-message">
          {error}
          <button onClick={() => window.location.reload()} className="retry-button" style={{ marginTop: '20px' }}>
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  // Renderizado principal
  return (
    <div className="quiz-container" style={{ backgroundColor: quizConfig?.theme.background }}>
      {error && (
        <div className="notification error" style={{ 
          position: 'fixed', 
          top: '20px', 
          right: '20px', 
          zIndex: 1000,
          padding: '10px 20px',
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          {error}
          <button onClick={() => setError(null)} style={{ marginLeft: '10px', border: 'none', background: 'none', cursor: 'pointer' }}>×</button>
        </div>
      )}

<header className="quiz-header" 
  style={{ 
    background: `linear-gradient(135deg, ${quizConfig?.theme.primary} 0%, ${quizConfig?.theme.primaryLight} 100%)`
  }}>
  <div className="logo-title-container">
    <img 
      src="/solignac.jpg" // Reemplaza esta ruta con la ubicación de tu logo
      alt="Logo Empresa" 
      className="company-logo" 
    />
    <h1>{quizConfig?.title}</h1>
  </div>
  <div className="header-controls">
    {!showResult && (
      <span className="quiz-progress">
        Pregunta {currentQuestion + 1} de {quizConfig?.questions.length} | Puntaje: {score}
      </span>
    )}
    <button 
      onClick={onLogout}
      className="logout-button"
    >
      Cerrar sesión
    </button>
  </div>
</header>
          
      <main className="quiz-main">
        {showResult ? (
          <div className="results-card">
            <CheckCircle2 
              size={100} 
              color={quizConfig?.theme.success} 
              style={{ margin: '0 auto' }} 
            />
            <h2 style={{ color: quizConfig?.theme.primary }}>
              Resultados del Quiz
            </h2>
            <p className="score-text">
              {score} de {quizConfig?.questions.length}
            </p>
            <p className="feedback-text">
              {score === quizConfig?.questions.length 
                ? "¡Excelente! Conoces muy bien las señales de tránsito."
                : score > quizConfig?.questions.length / 2 
                  ? "Buen trabajo, pero aún puedes mejorar."
                  : "Necesitas estudiar más las señales de tránsito."}
            </p>
            <button 
              onClick={resetQuiz}
              className="retry-button"
              style={{
                background: `linear-gradient(135deg, ${quizConfig?.theme.primary} 0%, ${quizConfig?.theme.primaryLight} 100%)`
              }}
            >
              Intentar de nuevo
            </button>
          </div>
        ) : (
          <div className="question-card">
            <h2 style={{ color: quizConfig?.theme.primary }}>
              {quizConfig?.questions[currentQuestion].question}
            </h2>
            
            <img 
              src={quizConfig?.questions[currentQuestion].imageUrl}
              alt="Pregunta"
              className="question-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x400?text=Imagen+no+disponible";
              }}
            />

            <div className="options-grid">
              {quizConfig?.questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered || isLoading}
                  className={`option-button ${
                    answered && index === quizConfig?.questions[currentQuestion].correct
                      ? 'correct'
                      : answered && index === selectedOption && selectedOption !== quizConfig?.questions[currentQuestion].correct
                        ? 'incorrect'
                        : ''
                  }`}
                  style={{
                    backgroundColor: answered
                      ? index === quizConfig?.questions[currentQuestion].correct
                        ? quizConfig?.theme.success
                        : index === selectedOption && selectedOption !== quizConfig?.questions[currentQuestion].correct
                          ? quizConfig?.theme.error
                          : quizConfig?.theme.primary
                      : quizConfig?.theme.primary
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            {answered && (
          <div className="fixed-next-button-container">
            <button 
              onClick={handleNext}
              className="fixed-next-button"
              style={{ 
                backgroundColor: quizConfig?.theme.primaryLight,
                boxShadow: `0 -4px 10px rgba(0,0,0,0.1)`
              }}
              disabled={isLoading}
            >
              {currentQuestion < quizConfig?.questions.length - 1 ? 'Siguiente' : 'Ver resultados'}
            </button>
          </div>
        )}
          </div>
        )}
      </main>
    </div>
  );
};

QuizApp.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default QuizApp;