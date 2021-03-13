import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import BookAddForm from './BookAddForm';
import Preloader from './Preloader';

const FETCH_ALL_BOOKS_PATH = 'https://rstyle-server.herokuapp.com/';
const DELETE_BOOK_PATH = 'https://rstyle-server.herokuapp.com/books/';

const Library = () => {
    const [isLoading, setLoadingState] = useState(true);
    const [books, setBooks] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [hasDeleted, setDeleted] = useState(false);
    const [requestType, setRequestType] = useState("ADD");
    const [bookId, setBookId] = useState(0);
    const [bookDetails, setBookDetails] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        console.log(bookDetails);
    }, [bookDetails]);

    useEffect(() => {
        fetchBooks();
    }, [showAddForm]);

    const fetchBooks = () => {
        fetch(FETCH_ALL_BOOKS_PATH)
            .then(response => response.json())
            .then(function(data) {
                setBooks(data);
                setLoadingState(false);
            });
    }

    const removeBook = (id) => {
        fetch(DELETE_BOOK_PATH + id, {method: 'DELETE'})
            .then(response => response.json())
            .then(function(data) {
                fetchBooks();
            });
    }

    if (isLoading) return <Preloader />;

    return (
        <div className="position-relative">
            {showAddForm ? <BookAddForm closeForm={setShowAddForm} requestType={requestType} bookId={bookId} bookDetails={bookDetails}/> : null}
            <BookList passedBooks={books} requestType={setRequestType} showAddBookForm={setShowAddForm} removeBook={removeBook} setBookId={setBookId} setBookDetails={setBookDetails} />
        </div>
    );
};

export default Library;