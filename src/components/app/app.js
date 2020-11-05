import React from 'react';
import './app.css'
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main className="container">
            <ShopHeader numItems={5} total={200}/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>
    );
};

export default (App);