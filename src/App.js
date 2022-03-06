import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Anime from './components/Anime';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
          <div className='App'>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/anime" exact component={Anime} />
              <Route path="/about" component={About} />
            
            </Switch>
          </div>
        </Router>
    );
}

export default App;