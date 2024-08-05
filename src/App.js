import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import '../theme/index.css';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <DarkModeToggle />
    </div>
  );
};

export default App;