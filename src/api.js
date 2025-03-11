// api.js - Versión que no usa localStorage
// Para que todos los usuarios vean la misma configuración
import { initialQuizConfig } from './config';

// Variable global que almacena el estado actual de la aplicación durante la sesión
let appData = {
  quizConfig: initialQuizConfig,
  accessPasswords: [{ id: 1, password: "solignacautomoviles" }],
  adminCredentials: [{ id: 1, username: "admin", password: "admin123" }]
};

// Función para cargar la configuración del quiz
export const loadQuizConfig = async () => {
  try {
    return appData.quizConfig;
  } catch (error) {
    console.error('Error al cargar la configuración:', error);
    return initialQuizConfig;
  }
};

// Función para guardar la configuración del quiz (solo en memoria)
export const saveQuizConfig = async (config) => {
  try {
    appData.quizConfig = config;
    return config;
  } catch (error) {
    console.error('Error al guardar la configuración:', error);
    throw error;
  }
};

// Función para verificar la contraseña de acceso
export const checkAccessPassword = async (password) => {
  try {
    return appData.accessPasswords.some(item => item.password === password);
  } catch (error) {
    console.error('Error al verificar la contraseña:', error);
    throw error;
  }
};

// Función para cambiar la contraseña de acceso
export const updateAccessPassword = async (newPassword) => {
  try {
    // Actualizar la contraseña existente o crear una nueva
    const existingPasswordIndex = appData.accessPasswords.findIndex(p => p.id === 1);
    
    if (existingPasswordIndex >= 0) {
      appData.accessPasswords[existingPasswordIndex].password = newPassword;
    } else {
      appData.accessPasswords.push({ id: 1, password: newPassword });
    }
    
    return true;
  } catch (error) {
    console.error('Error al actualizar la contraseña:', error);
    throw error;
  }
};

// Función para verificar credenciales de administrador
export const verifyAdminCredentials = async (username, password) => {
  try {
    return appData.adminCredentials.some(admin => 
      admin.username === username && admin.password === password
    );
  } catch (error) {
    console.error('Error al verificar credenciales:', error);
    throw error;
  }
};

// Función para inicializar los datos de la aplicación con datos externos
export const initializeAppData = (data) => {
  if (data && data.quizConfig) {
    appData = { ...appData, ...data };
  }
};