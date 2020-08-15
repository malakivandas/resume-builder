import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import NavBar from './COMPONENTS/layout/NavBar';
import Home from './COMPONENTS/pages/Home';
import Editor from './COMPONENTS/pages/Editor';

// Style
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={Editor} />
      </Switch>
    </Router>
  );
}

export default App;
