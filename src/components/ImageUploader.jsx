import { useState } from 'react';
import PropTypes from 'prop-types';
import { Upload, Link, X } from 'lucide-react';

const ImageUploader = ({ imageUrl, onImageChange, theme }) => {
  const [uploadMethod, setUploadMethod] = useState('url'); // 'url' o 'file'

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // Límite de 5MB
        alert('La imagen es demasiado grande. El tamaño máximo es 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        onImageChange(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader-container">
      <div className="upload-method-selector">
        <button
          type="button"
          onClick={() => setUploadMethod('url')}
          className={`method-button ${uploadMethod === 'url' ? 'active' : ''}`}
          style={{ 
            backgroundColor: uploadMethod === 'url' ? theme.primary : 'transparent',
            color: uploadMethod === 'url' ? 'white' : theme.primary
          }}
        >
          <Link size={16} /> URL
        </button>
        <button
          type="button"
          onClick={() => setUploadMethod('file')}
          className={`method-button ${uploadMethod === 'file' ? 'active' : ''}`}
          style={{ 
            backgroundColor: uploadMethod === 'file' ? theme.primary : 'transparent',
            color: uploadMethod === 'file' ? 'white' : theme.primary
          }}
        >
          <Upload size={16} /> Subir archivo
        </button>
      </div>

      {uploadMethod === 'url' ? (
        <div className="url-input-container">
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => onImageChange(e.target.value)}
            placeholder="Ingrese la URL de la imagen"
            className="form-input"
          />
        </div>
      ) : (
        <div className="file-upload-container">
          <label 
            className="file-upload-label"
            style={{ borderColor: theme.primary }}
          >
            <Upload size={20} />
            <span>Seleccionar imagen</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="file-input"
            />
          </label>
          <p className="file-info">Máximo 5MB. Formatos: JPG, PNG, GIF</p>
        </div>
      )}

      <div className="image-preview">
        {imageUrl && (
          <div className="preview-container">
            <img
              src={imageUrl}
              alt="Vista previa"
              onError={(e) => {
                e.target.src = "/api/placeholder/400/400";
              }}
            />
            <button
              onClick={() => onImageChange('')}
              className="remove-image-btn"
              style={{ backgroundColor: theme.error }}
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

ImageUploader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onImageChange: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
  }).isRequired
};

export default ImageUploader;