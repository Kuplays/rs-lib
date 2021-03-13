import React, { useEffect, useState } from "react";
import "../custom-css/AddBookStyle.css";

const ADD_BOOK_PATH = 'https://rstyle-server.herokuapp.com/books';
const UPDATE_BOOK_PATH = 'https://rstyle-server.herokuapp.com/books/';

const BookAddForm = ({ passedBooks, closeForm, requestType, bookId, bookDetails }) => {
    const [id, setBookId] = useState();
    const [title, setBookTitle] = useState("");
    const [authorName, setBookAuthor] = useState("");
    const [yearRead, setBookYearRead] = useState("");
    const [type, setBookType] = useState("Книга");

    useEffect(() => {
        if (requestType !== "ADD") {
            setBookTitle(bookDetails.title);
            setBookAuthor(bookDetails.authorName);
            setBookYearRead(bookDetails.yearRead);
            setBookType(bookDetails.type);
        }
    }, []);

    async function addBook(book) {
        console.log(JSON.stringify(book));
        return fetch(ADD_BOOK_PATH, {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then(data => data.json())
    }

    async function updateBook(id, book) {
        console.log(JSON.stringify(book));
        return fetch(UPDATE_BOOK_PATH + id, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then(data => data.json())
    }

    const handleSubmit = async event => {
        event.preventDefault();
        if (requestType === "ADD") {
            const result = await addBook({
                title,
                authorName,
                yearRead,
                type
            });
        } else {
            const result = await updateBook(bookId, {
                title,
                authorName,
                yearRead,
                type
            });
        }

        closeForm();
    }

    return (
        <div className="form-background">
            <div className="form-inner position-absolute">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='hidden'
                            className='form-control'
                            id='bookId'
                            value={bookId}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bookTitle'>Наименование книги</label>
                        <input
                            type='text'
                            className='form-control'
                            id='bookTitle'
                            value={title}
                            onChange={event => setBookTitle(event.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bookAuthor'>Автор</label>
                        <input
                            type='text'
                            className='form-control'
                            id='bookAuthor'
                            value={authorName}
                            onChange={event => setBookAuthor(event.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bookYearRead'>Год прочтения</label>
                        <input
                            type='number'
                            value="0"
                            className='form-control'
                            id='bookYearRead'
                            value={yearRead}
                            onChange={event => setBookYearRead(event.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='bookType'>Тип книги</label>
                        <select className="form-control" id="bookType" onChange={event => setBookType(event.target.value)} value={type}>
                            <option value="Аудиокнига">Аудиокнига</option>
                            <option value="Книга">Книга</option>
                            <option value="Электронная книга">Электронная книга</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">{requestType === "ADD" ? "Добавить" : "Изменить"}</button>
                </form>
            </div>
        </div>
    );
}

export default BookAddForm;