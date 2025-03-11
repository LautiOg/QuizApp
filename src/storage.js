import { initialQuizConfig, isValidQuizConfig, defaultTheme } from './config';

// Cargar configuración del quiz desde localStorage
export const loadQuizConfig = () => {
  try {
    const savedConfig = localStorage.getItem('quizConfig');
    if (!savedConfig) {
      return initialQuizConfig;
    }
    
    const parsedConfig = JSON.parse(savedConfig);
    
    if (!isValidQuizConfig(parsedConfig)) {
      console.warn('Configuración inválida en localStorage, usando configuración inicial');
      return initialQuizConfig;
    }
    
    // Asegurar que todos los campos del tema estén presentes
    parsedConfig.theme = {
      ...defaultTheme,
      ...parsedConfig.theme
    };

    return parsedConfig;
  } catch (error) {
    console.error('Error al cargar desde localStorage:', error);
    return initialQuizConfig;
  }
};

// Guardar configuración del quiz en localStorage
export const saveQuizConfig = (config) => {
  try {
    if (!isValidQuizConfig(config)) {
      console.error('Intentando guardar configuración inválida');
      return false;
    }
    localStorage.setItem('quizConfig', JSON.stringify(config));
    return true;
  } catch (error) {
    console.error('Error al guardar en localStorage:', error);
    return false;
  }
};

// Función genérica para obtener cualquier ítem del localStorage
export const getStorageItem = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error al obtener ${key} desde localStorage:`, error);
    return defaultValue;
  }
};

// Función genérica para guardar cualquier ítem en el localStorage
export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error al guardar ${key} en localStorage:`, error);
    return false;
  }
};