import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import './book-list.css'
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props
        const data= bookstoreService.getBooks()
        console.log(data)
    }

    render() {
        const {books} = this.props
        return (
            <ul>
                {
                    books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <BookListItem book={book}/>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {books}
}

export default withBookstoreService()(connect(mapStateToProps)(BookList));