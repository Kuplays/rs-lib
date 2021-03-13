import React from "react";

const Book = ({ passedBook, removeBook, requestType, toggleAddForm, setBookId, setBookDetails}) => {
    return (
        <div className="col mb-2 mt-2">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h4 className="card-title">{passedBook.title}</h4>
                    <h5 className="card-title">{passedBook.authorName}</h5>
                    <p className="card-text">{passedBook.type}</p>
                    <small className="text-muted">Прочитано: {passedBook.yearRead}</small>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary" onClick={() => {console.log(passedBook); setBookDetails(passedBook); setBookId(passedBook.id); requestType("CHANGE"); toggleAddForm(true);}}>Изменить</button>
                    <button type="button" className="btn btn-outline-danger float-right" onClick={() => removeBook(passedBook.id)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Book;