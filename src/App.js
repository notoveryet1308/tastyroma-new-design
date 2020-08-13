import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
