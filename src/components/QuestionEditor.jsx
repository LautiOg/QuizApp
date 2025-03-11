import { useState } from 'react';
import PropTypes from 'prop-types';
import { X, Plus, Save, Trash2 } from 'lucide-react';
import ImageUploader from './ImageUploader';

export const QuestionEditor = ({ question, onSave, onCancel, theme }) => {
  // Estado inicial de la pregunta
  const initialState = {
    question: "",
    imageUrl: "/api/placeholder/400/400",
    options: ["", "", "", ""],
    correct: 0,
    ...question // Sobrescribimos con valores existentes si hay
  };
  
  const [editedQuestion, setEditedQuestion] = useState(initialState);
  const [error, setError] = useState("");

  // Validar la pregunta antes de guardar
  const validateQuestion = () => {
    if (!editedQuestion.question.trim()) {
      setError("La pregunta no puede estar vacía");
      return false;
    }
    if (!editedQuestion.imageUrl.trim()) {
      setError("Debe proporcionar una imagen");
      return false;
    }
    if (editedQuestion.options.some(option => !option.trim())) {
      setError("Todas las opciones deben estar completas");
      return false;
    }
    return true;
  };

  // Manejar el guardado de la pregunta
  const handleSave = () => {
    if (validateQuestion()) {
      onSave({
        ...editedQuestion,
        index: question?.index // Conservar el índice si existe
      });
    }
  };

  // Manejar el cambio en las opciones
  const handleOptionChange = (index, value) => {
    const newOptions = [...editedQuestion.options];
    newOptions[index] = value;
    setEditedQuestion(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  // Añadir una nueva opción
  const handleAddOption = () => {
    if (editedQuestion.options.length < 6) {
      setEditedQuestion(prev => ({
        ...prev,
        options: [...prev.options, ""]
      }));
    }
  };

  // Eliminar una opción
  const handleRemoveOption = (index) => {
    if (editedQuestion.options.length > 2) {
      const newOptions = editedQuestion.options.filter((_, i) => i !== index);
      
      // Ajustar el índice de la respuesta correcta si es necesario
      let newCorrect = editedQuestion.correct;
      if (editedQuestion.correct >= index) {
        newCorrect = Math.max(0, editedQuestion.correct - 1);
      }
      
      setEditedQuestion(prev => ({
        ...prev,
        options: newOptions,
        correct: newCorrect
      }));
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 style={{ color: theme.primary }}>
            {question?.index !== undefined ? 'Editar Pregunta' : 'Nueva Pregunta'}
          </h2>
          <button onClick={onCancel} className="close-button">
            <X />
          </button>
        </div>

        <div className="question-form">
          <label>Pregunta:</label>
          <input
            type="text"
            value={editedQuestion.question}
            onChange={(e) => setEditedQuestion(prev => ({
              ...prev,
              question: e.target.value
            }))}
            className="question-input"
            placeholder="Escribe la pregunta aquí"
          />
        </div>

        <ImageUploader
          imageUrl={editedQuestion.imageUrl}
          onImageChange={(newUrl) => setEditedQuestion(prev => ({
            ...prev,
            imageUrl: newUrl
          }))}
          theme={theme}
        />

        <div className="options-list">
          <label>Opciones:</label>
          {editedQuestion.options.map((option, index) => (
            <div key={index} className="option-item">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="option-input"
                placeholder={`Opción ${index + 1}`}
              />
              <input
                type="radio"
                name="correct"
                checked={editedQuestion.correct === index}
                onChange={() => setEditedQuestion(prev => ({
                  ...prev,
                  correct: index
                }))}
                className="option-radio"
                title="Marcar como respuesta correcta"
              />
              {editedQuestion.options.length > 2 && (
                <button
                  type="button"
                  onClick={() => handleRemoveOption(index)}
                  className="remove-option-btn"
                  title="Eliminar opción"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}
        </div>

        {editedQuestion.options.length < 6 && (
          <button
            type="button"
            onClick={handleAddOption}
            className="add-option-btn"
            style={{ color: theme.primary }}
          >
            <Plus size={16} /> Agregar opción
          </button>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="modal-actions">
          <button
            type="button"
            onClick={onCancel}
            className="cancel-button"
          >
            <X size={16} /> Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="save-button"
            style={{ 
              backgroundColor: theme.primary, 
              color: 'white' 
            }}
          >
            <Save size={16} /> Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

// Props validation
QuestionEditor.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    imageUrl: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    correct: PropTypes.number,
    index: PropTypes.number
  }),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    primary: PropTypes.string,
    primaryLight: PropTypes.string,
    success: PropTypes.string,
    error: PropTypes.string,
    background: PropTypes.string
  }).isRequired
};