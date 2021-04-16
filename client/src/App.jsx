import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import Messenger from './components/Messenger/Messenger';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Friends from './components/Friends/Friends';

const App = () => {
  const isOnline = useSelector((state) => state.user.isOnline);
  return (
    <div className="app">
      <div className="container-fluid h-100 p-0">
        <div className="row h-100 app__row">
          <Router>
            <Switch>
              <Route path="/chat/:id">
                {!isOnline ? (
                  <Redirect to="/login" />
                ) : (
                  <>
                    <Header />
                    <Sidebar />
                    <Chat />
                  </>
                )}
              </Route>
              <Route path="/friends">
                {!isOnline ? (
                  <Redirect to="/login" />
                ) : (
                  <>
                    <Header />
                    <Sidebar />
                    <Friends />
                  </>
                )}
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                {!isOnline ? (
                  <Redirect to="/login" />
                ) : (
                  <>
                    <Header />
                    <Sidebar />
                    <Messenger />
                  </>
                )}
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
