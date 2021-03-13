import React from "react";
import Book from "./Book";
import AddBookPlaceholder from "./AddBookPlaceholder";

const BookList = ({passedBooks, showAddBookForm, removeBook, requestType, setBookId, setBookDetails}) => {
    const booksSorted = passedBooks.sort(function(left, right) {
        return left.yearRead - right.yearRead;
    });

    const booksToRender = booksSorted.map((book) => 
        <Book passedBook={book} setBookDetails={setBookDetails} key={book.id} removeBook={removeBook} requestType={requestType} toggleAddForm={showAddBookForm} setBookId={setBookId}/>
    );

    return (
        <div className="row row-cols-1 row-cols-md-3 mt-3">
            {booksToRender}
            <AddBookPlaceholder toggleAddForm={showAddBookForm} requestType={requestType} />
        </div>
    );
}

export default BookList;