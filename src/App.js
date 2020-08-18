import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import MenuList from './pages/menuList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu/:menulist" exact component={MenuList} />
      </Switch>
    </div>
  );
}

export default App;
