import { useState } from 'react';
import { InitialLogin } from './components/initialLogin';
import QuizApp from './QuizApp';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    isLoggedIn ? 
      <QuizApp onLogout={() => setIsLoggedIn(false)} /> : 
      <InitialLogin onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;