import React from 'react';
import Main from './components/Main';
import BackgroundVideo from './components/BackgroundVideo';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Main />
      <About />
    </div>
  );
}

export default App;  // Adicione esta linha para exportar o componente