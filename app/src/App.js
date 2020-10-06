import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Providers/StateProvider';



function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("USER>>>>", authUser);

      if (authUser) {
        //User logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        //User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])


  return (
    <BrowserRouter>
      <div className="app" >
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;