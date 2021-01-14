import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// State
import store from './store';

// Components
import NavBar from './COMPONENTS/layout/NavBar';
import Home from './COMPONENTS/pages/Home';
import Editor from './COMPONENTS/pages/Editor';

// Style
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/editor" component={Editor} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
