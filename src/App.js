import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Navbar from './components/Navbar';
import './assets/scss/style.scss';

function App() {
  return (
    <div className="App" id="food-cashier">
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/login" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
