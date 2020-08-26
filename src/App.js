import React from 'react';
import { Switch, Route } from 'react-router-dom';



import Home from './pages/home';
import MenuList from './pages/menuList';
import MenuListDetail from './pages/menuDetail';
import Menu from './pages/menu';
import BookTable from './pages/booktable';
import Login from './pages/login';
import Signup from './pages/signup';


function App() {
  return (
    <div className="App">
   
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu/:menulist" exact component={MenuList} />
          <Route path="/menu/:menulist/:menuname" exact component={MenuListDetail} />
          <Route path="/book-a-table" exact component={BookTable} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />


        </Switch>
     
    </div>
  );
}

export default App;
