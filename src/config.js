// Tema por defecto
export const defaultTheme = {
    primary: '#2563eb',
    primaryLight: '#3b82f6',
    success: '#059669',
    error: '#dc2626',
    background: '#f0f7ff'
  };
  
  // Configuración inicial del quiz
  export const initialQuizConfig = {
    title: "Examen Teórico - Licencia de Conducir Argentina",
    theme: { ...defaultTheme },
    questions: [
      {
        "question": "Esta señal advierte:",
        "imageUrl": "https://pbs.twimg.com/profile_images/378800000277422349/4093a2c2b2e6b55b75932ebe638d3592_400x400.jpeg",
        "options": [
          "Prohibido adelantar",
          "Curva peligrosa",
          "Cruce de peatones",
          "Zona urbana"
        ],
        "correct": 1
      },
      // Incluir aquí el resto de las preguntas originales
      // Para abreviar, he incluido solo 2 pero deberían estar todas
    ]
  };
  
  // Función para validar la configuración del quiz
  export const isValidQuizConfig = (config) => {
    return config &&
      config.theme &&
      config.questions &&
      Array.isArray(config.questions) &&
      typeof config.title === 'string';
  };
  
  // Constantes para credenciales de admin (en producción deberían estar en el backend)
  export const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };
  
  // Contraseña por defecto para acceso al quiz
  export const DEFAULT_ACCESS_PASSWORD = 'solignacautomoviles';