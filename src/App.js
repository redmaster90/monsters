import React from 'react';
import CreateMonster from './components/CreateMonster';
import Monsters from './components/Monsters';

/* 
App
  CreateMonster
  Monsters
    SearchMonster
    Monster
    Monster
    Monster
      ... */


function App() {
  return (
    <div className="main-wrapper">
      <img alt="logo" className="logo-main" src="logo.svg" />
      <p className="title-main">Monsters</p>
      <CreateMonster />
      <Monsters />
    </div>
  );
}

export default App;
