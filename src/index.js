import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import Library from './components/Library';
import useToken from './hooks/useToken';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  const { token, setToken } = useToken();

  if (!token) return (
    <BrowserRouter>
    <Navbar setToken={setToken} />
      <div className="container shadow-lg">
        <Login setToken={setToken} />
      </div>
    </BrowserRouter>
  );

  return (
    <BrowserRouter>
    <Navbar setToken={setToken} tokenState={token}/>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/login" exact component={Login} />
          <Route path="/library" exact component={Library} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));


