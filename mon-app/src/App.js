import logo from './logo.svg';
import './App.css';

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

  const user = {
    firstName: "Quentin",
    lastName: "Lemaire",
    isAuth: false
  };

  const authentificateur = () => user.isAuth = true;

  console.log(user);

  return (
    <header>
      <p>Bonjour, {user.firstName}</p>
      {user.isAuth ? 
        (<p>Vous êtes connecté</p>) : 
        (<div><p>Vous n'êtes pas connecté</p><button onClick={() => authentificateur()}>Connexion</button></div>)}
    </header>
  )
}

export default App;
