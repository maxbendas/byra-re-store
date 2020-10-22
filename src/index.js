import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from '../src/components/app';
import {BookstoreServiceProvider} from './components/bookstore-service-context'
import ErrorBoundry from "./components/error-boundry";
import {BrowserRouter as Router} from "react-router-dom";
import BookstoreService from "./services/bookstore-services";
import store from "./store";

const bookstoreService = new BookstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

