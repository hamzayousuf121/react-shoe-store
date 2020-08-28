import React from 'react';
import Nav from '../Nav'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import ProductDetails from './ProductDetails'
import Carousel from "./Carousel";
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function RouteExample() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Product">
          <Product />
        </Route>
        <Route path="/ProductDetails/:id">
          <ProductDetails />
        </Route>
        <Route path="/">
          <Carousel />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default RouteExample
