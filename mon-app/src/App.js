import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  const[user, setUser] = useState({firstName: "Quentin", lastName: "Lemaire", isAuth: false});
  const {firstName, lastName, isAuth} = user;
  const [count, setCount] = useState(0);

  const authentificate = () => {
    setUser({...user, isAuth: true});
  }

  const incrementCount = () => setCount(count+1); 


  console.log(user);

  return (
    <header>
      <p>Bonjour, {firstName}</p>
      {isAuth ? 
        (<p>Vous êtes connecté</p>): 
        (<div>
          <p>Vous n'êtes pas connecté</p>
          <button onClick={() => authentificate()}>Connexion</button>
        </div>)}
      <p>
        <button onClick={() => incrementCount()}>{count}</button>
      </p>
    </header>
  )
}

export default App;
