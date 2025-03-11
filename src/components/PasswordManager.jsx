import { useState } from 'react';
import PropTypes from 'prop-types';
import { X, Save, Eye, EyeOff } from 'lucide-react';
import { updateAccessPassword } from '../api'; // Importa la nueva función

const PasswordManager = ({ onClose, theme }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (!newPassword || !confirmPassword) {
      setError('Por favor complete todos los campos');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
  
    setIsLoading(true);
    
    try {
      await updateAccessPassword(newPassword);
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      // Mostrar más información sobre el error
      setError(`Error al guardar la contraseña: ${err.message}`);
      console.error('Error detallado:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 style={{ color: theme.primary }}>Cambiar Contraseña de Acceso</h2>
          <button onClick={onClose} className="close-button" disabled={isLoading}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nueva Contraseña:</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-input"
                disabled={isLoading}
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña:</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                disabled={isLoading}
              />
            </div>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {success && (
            <div className="success-message" style={{ color: theme.success }}>
              ¡Contraseña actualizada exitosamente!
            </div>
          )}

          <div className="modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="cancel-button"
              disabled={isLoading}
            >
              <X size={16} /> Cancelar
            </button>
            <button
              type="submit"
              className="save-button"
              style={{ backgroundColor: theme.primary }}
              disabled={isLoading}
            >
              <Save size={16} /> {isLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

PasswordManager.propTypes = {
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired
  }).isRequired
};

export default PasswordManager;