import React from 'react';
import ShoppingCartTable from "../shopping-cart-table";
import BookList from "../book-list/book-list";

const HomePage = () => {

    return (
        <div>
            <BookList/>
            <ShoppingCartTable/>
        </div>
    );
};

export default HomePage;