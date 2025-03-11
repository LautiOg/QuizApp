import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Edit3, Plus, Trash2, Settings, Key } from 'lucide-react';
import PropTypes from 'prop-types';
import { LoginModal } from './components/LoginModal';
import { QuestionEditor } from './components/QuestionEditor';
import PasswordManager from './components/PasswordManager';
import { initialQuizConfig } from './config'; // Mantén la configuración inicial
import { loadQuizConfig, saveQuizConfig } from './api'; // Importa las nuevas funciones

const QuizApp = ({ onLogout }) => {
  // Estados principales
  const [quizConfig, setQuizConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Nuevo estado para la opción seleccionada

  // Estados para modales
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPasswordManager, setShowPasswordManager] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

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
    
    // Opcional: Configura polling para actualizar la configuración periódicamente
    const intervalId = setInterval(fetchQuizConfig, 30000); // Actualiza cada 30 segundos
    
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  // Guardar configuración cuando cambie
  const handleSaveConfig = async (newConfig) => {
    setIsLoading(true);
    try {
      await saveQuizConfig(newConfig);
      setQuizConfig(newConfig);
      setError(null);
    } catch (err) {
      console.error('Error al guardar la configuración:', err);
      setError('Error al guardar los cambios.');
    } finally {
      setIsLoading(false);
    }
  };

  // Manejar la respuesta del usuario
  const handleAnswer = (selected) => {
    if (!answered && quizConfig) {
      const correct = selected === quizConfig.questions[currentQuestion].correct;
      setSelectedOption(selected); // Guardar la opción seleccionada
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
      setSelectedOption(null); // Resetear la opción seleccionada
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
    setSelectedOption(null); // Resetear la opción seleccionada
  };

  // Funciones para administración
  const handleAdminClick = () => {
    if (!isAdmin) {
      setShowLoginModal(true);
    } else {
      setIsAdmin(false);
    }
  };

  const handleLogin = () => {
    setIsAdmin(true);
    setShowLoginModal(false);
  };

  const handleEditQuestion = (index) => {
    if (isAdmin && quizConfig) {
      setEditingQuestion({
        ...quizConfig.questions[index],
        index
      });
    }
  };

  const handleSaveQuestion = (question) => {
    if (!quizConfig) return;
    
    const newQuestions = [...quizConfig.questions];
    if (question.index !== undefined) {
      // Editar pregunta existente
      newQuestions[question.index] = question;
    } else {
      // Añadir nueva pregunta
      newQuestions.push(question);
    }
    
    const newConfig = {
      ...quizConfig,
      questions: newQuestions
    };
    
    handleSaveConfig(newConfig);
    setEditingQuestion(null);
  };

  const handleDeleteQuestion = (index) => {
    if (isAdmin && quizConfig && window.confirm('¿Estás seguro de que quieres eliminar esta pregunta?')) {
      const newQuestions = quizConfig.questions.filter((_, i) => i !== index);
      const newConfig = {
        ...quizConfig,
        questions: newQuestions
      };
      
      handleSaveConfig(newConfig);
    }
  };

  const handleResetConfig = () => {
    if (isAdmin && window.confirm('¿Estás seguro de que quieres restaurar la configuración inicial? Se perderán todos los cambios.')) {
      handleSaveConfig(initialQuizConfig);
      resetQuiz();
      setEditingQuestion(null);
    }
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

  // Componente AdminPanel
  const AdminPanel = () => (
    <div className="admin-panel">
      <div className="admin-buttons">
        <button
          onClick={() => setEditingQuestion({
            question: "",
            imageUrl: "/api/placeholder/400/400",
            options: ["", "", "", ""],
            correct: 0
          })}
          className="admin-button"
          style={{ backgroundColor: quizConfig.theme.primary }}
          disabled={isLoading}
        >
          <Plus size={16} /> Nueva Pregunta
        </button>
        <button
          onClick={() => setShowPasswordManager(true)}
          className="admin-button"
          style={{ backgroundColor: quizConfig.theme.primary }}
          disabled={isLoading}
        >
          <Key size={16} /> Cambiar Contraseña
        </button>
        <button
          onClick={handleResetConfig}
          className="admin-button"
          style={{ backgroundColor: quizConfig.theme.error }}
          disabled={isLoading}
        >
          <Settings size={16} /> Restaurar
        </button>
      </div>

      {isLoading && (
        <div className="loading-indicator">Guardando cambios...</div>
      )}

      <div className="questions-list">
        {quizConfig.questions.map((q, index) => (
          <div key={index} className="question-item">
            <div className="question-header">
              <strong>Pregunta {index + 1}</strong>
              <div className="question-actions">
                <button
                  onClick={() => handleEditQuestion(index)}
                  className="action-button"
                  title="Editar pregunta"
                  disabled={isLoading}
                >
                  <Edit3 size={16} color="white" />
                </button>
                <button
                  onClick={() => handleDeleteQuestion(index)}
                  className="action-button delete"
                  title="Eliminar pregunta"
                  disabled={isLoading}
                >
                  <Trash2 size={16} color="white" />
                </button>
              </div>
            </div>
            <div className="question-content" title={q.question}>
              {q.question}
            </div>
            <div className="question-content" style={{ fontSize: '0.8rem' }}>
              Respuesta correcta: {q.options[q.correct]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Resto del componente (renderizado principal)
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
        <h1>{quizConfig?.title}</h1>
        <div className="header-controls">
          {!showResult && (
            <span className="quiz-progress">
              Pregunta {currentQuestion + 1} de {quizConfig?.questions.length} | Puntaje: {score}
            </span>
          )}
          <div className="button-group">
            <button
              onClick={handleAdminClick}
              className={`admin-toggle ${isAdmin ? 'active' : ''}`}
              disabled={isLoading}
            >
              {isAdmin ? 'Salir del modo admin' : 'Modo admin'}
            </button>
            <button 
              onClick={onLogout}
              className="logout-button"
            >
              Cerrar sesión
            </button>
          </div>
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
              <>
                <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? (
                    <>
                      <CheckCircle2 size={30} />
                      <p>¡Correcto!</p>
                    </>
                  ) : (
                    <>
                      <XCircle size={30} />
                      <p>Incorrecto. La respuesta correcta era: {quizConfig?.questions[currentQuestion].options[quizConfig?.questions[currentQuestion].correct]}</p>
                    </>
                  )}
                </div>
                <button 
                  onClick={handleNext}
                  className="next-button"
                  style={{ backgroundColor: quizConfig?.theme.primaryLight }}
                  disabled={isLoading}
                >
                  {currentQuestion < quizConfig?.questions.length - 1 ? 'Siguiente' : 'Ver resultados'}
                </button>
              </>
            )}
          </div>
        )}
      </main>

      {isAdmin && <AdminPanel />}
      
      {editingQuestion !== null && (
        <QuestionEditor
          question={editingQuestion}
          onSave={handleSaveQuestion}
          onCancel={() => setEditingQuestion(null)}
          theme={quizConfig?.theme}
        />
      )}
      
      {showLoginModal && (
        <LoginModal 
          onLogin={handleLogin} 
          onClose={() => setShowLoginModal(false)} 
        />
      )}
      
      {showPasswordManager && (
        <PasswordManager
          onClose={() => setShowPasswordManager(false)}
          theme={quizConfig?.theme}
        />
      )}
    </div>
  );
};

QuizApp.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default QuizApp;