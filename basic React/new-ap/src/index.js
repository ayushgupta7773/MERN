import React from 'react'
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import './index.css'
import {Book} from './Book';
import {newBookList} from './newBookList'


function Index() {
    const findBook = (id) => {
        const book = newBookList.find((book) => book.id === id);
        console.log(book);
    }
    
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>My Fav Albums </h1>
            <section className='bookList' >
                {newBookList.map((book) => {
                    return <Book 
                    key={book.id} findBook={findBook}
                     {...book}
                    /> 
                })}
            </section>
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(Index());

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Index />);