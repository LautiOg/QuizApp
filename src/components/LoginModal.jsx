import { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { verifyAdminCredentials } from '../api'; // Importa la nueva función

export const LoginModal = ({ onLogin, onClose }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const isValid = await verifyAdminCredentials(
        credentials.username, 
        credentials.password
      );
      
      if (isValid) {
        onLogin();
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      setError('Error al verificar credenciales. Intente nuevamente.');
      console.error('Error en login admin:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content login-modal">
        <div className="modal-header">
          <h2>Acceso Administrador</h2>
          <button onClick={onClose} className="close-button">
            <X />
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Usuario:</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="form-input"
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="form-input"
              required
              disabled={isLoading}
            />
          </div>
          {error && (
            <div className="error-message">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}
          <div className="modal-actions">
            <button 
              type="button" 
              onClick={onClose} 
              className="cancel-button"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="save-button"
              disabled={isLoading}
            >
              {isLoading ? 'Verificando...' : 'Ingresar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};