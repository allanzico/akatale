import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Providers/StateProvider';
import Payment from './Components/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Components/Orders/Orders';
import ProductDetails from './Components/Product/ProductDetails';
import InsertProducts from './Components/Admin/InsertProducts';
import ViewProducts from './Components/Admin/ViewProducts';

//Stripe public key
const promise = loadStripe("pk_test_51HZyRFJBd9d7yEVytDyVHNsazcROMmJuFfzvRKHtfukPWudwvHgp5byIgG9saUiNsqbrZxX4ULxKehv8E91nR1Wo00278F99SP");



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
          <Route path="/products/:id">
              <ProductDetails/>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/product/upload">
              <InsertProducts/>
              <ViewProducts/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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