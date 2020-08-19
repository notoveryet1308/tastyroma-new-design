import React from 'react';
import { Switch, Route } from 'react-router-dom';



import Home from './pages/home';
import MenuList from './pages/menuList';
import MenuListDetail from './pages/menuDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu/:menulist" exact component={MenuList} />
        <Route path="/menu/:menulist/:menuname" exact component={MenuListDetail} />
      </Switch>
    </div>
  );
}

export default App;
