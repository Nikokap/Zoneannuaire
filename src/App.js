import React from 'react';
import Logo from './img/logo.png';
import './App.css';
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="logo"/>
      <Header></Header>
    </div>
  );
}

export default App;
