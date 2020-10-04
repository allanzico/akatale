import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Checkout from './Components/Checkout/Checkout';



function App() {
  return (
    <BrowserRouter>
      <div className="app" >
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;