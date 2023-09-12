import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TitlePage from './components/TitlePage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    const[user, setUser] = useState({firstName: "Quentin", lastName: "Lemaire", isAuth: false});
  const {firstName, lastName, isAuth} = user;
  const [count, setCount] = useState(0);

  const authentificate = () => {
    setUser({...user, isAuth: true});
  }

  const incrementCount = () => setCount(count+1); 

  console.log(user);

  return (
    <div>
    <Header/>
    <TitlePage title="monApp" subtitle="lorem ipsum"/>
    <Footer/>
    </div>
  )
}

export default App;
