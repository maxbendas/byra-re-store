import React from 'react';
import './app.css'
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

const App = () => {
    return (
        <main className="container">
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>
    );
};

export default (App);