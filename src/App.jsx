import React, { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';

export const App = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [contrastMode, setContrastMode] = useState('standard');

  const handleToggleContrast = () => {
    setContrastMode(prev => (prev === 'standard' ? 'high' : 'standard'));
  };

  useEffect(() => {
    if (contrastMode === 'high') {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
  }, [contrastMode]);

  return (
    <LandingPage
      currentLang={currentLang}
      onLangChange={setCurrentLang}
      contrastMode={contrastMode}
      onToggleContrast={handleToggleContrast}
    />
  );
};

export default App;
