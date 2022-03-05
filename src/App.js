import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Anime from './components/Anime';
import About from './components/About';
import Request from './components/Request';
import Home from './components/Home';
import AnimeDetails from './components/AnimeDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
          <div className='App'>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/anime" exact component={Anime} />
              <Route path="/request" component={Request} />
              <Route path="/about" component={About} />
              <Route path="/anime/:id"  component={AnimeDetails}/>
            
            </Switch>
          </div>
        </Router>
    );
}

export default App;