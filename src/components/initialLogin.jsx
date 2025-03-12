import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { checkAccessPassword } from '../api'; // Importa la nueva función

export const InitialLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const isValid = await checkAccessPassword(password);
      
      if (isValid) {
        onLogin();
      } else {
        setError('Contraseña incorrecta');
      }
    } catch (err) {
      setError('Error al verificar la contraseña. Intente nuevamente.');
      console.error('Error en login:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="initial-login-container">
      <div className="login-card">
        <h2>Acceso al Quiz de Señales Solignac</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
};

InitialLogin.propTypes = {
  onLogin: PropTypes.func.isRequired
};