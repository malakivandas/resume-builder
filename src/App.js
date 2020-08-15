import React, { Fragment } from 'react';

// Components
import NavBar from './COMPONENTS/layout/NavBar';

// Style
import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div style={{ height: '2000px' }}>Hello</div>
    </Fragment>
  );
}

export default App;
