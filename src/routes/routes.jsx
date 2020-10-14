import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Home, About, Furnitures, Shop, Contact } from '../pages';

const Routes = () => {
    return (
        <Switch>
          <Route path="/Woodstock/about">
            <About />
          </Route>
          <Route path="/Woodstock/furnitures">
            <Furnitures />
          </Route>
          <Route path="/Woodstock/shop">
            <Shop />
          </Route>
          <Route path="/Woodstock/contact">
            <Contact />
          </Route>
          <Route exact path="/Woodstock/">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/Woodstock/" />
          </Route>
        </Switch>
    )
}

export default Routes;