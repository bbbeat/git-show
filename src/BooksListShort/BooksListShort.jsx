import React, { useState, useEffect } from 'react';

export default function BooksListShort(props) {

    const [{loading, loaded, data}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const url = 'https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php'; // fill this in

    const loadData = async () => {
        if (url) {
            setDataState({
                loading: true,
                loaded: false,
                data: null
            });

            const response = await fetch(url);
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])


    let content = '';

    if (loading) {
        content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    } else if (loaded) {
        content = (
            <>
                <ul className="book-list">
                    <li className="book-list__book">
                        <div className="book-list__book-info">
                            <div className="book-list__book-title">The Thursday Murder Club</div>
                            <div className="book-list__book-author">Richard Osman</div>
                        </div>
                        <div className="book-list__book-image"><img src="https://wordery.com/jackets/718bb1a8/the-thursday-murder-club-richard-osman-9780241425442.jpg?width=163&height=250" /></div>
                    </li>
                    <li className="book-list__book">
                        <div className="book-list__book-info">
                            <div className="book-list__book-title">Code Name Bananas</div>
                            <div className="book-list__book-author">David Walliams, Tony Ross</div>
                        </div>
                        <div className="book-list__book-image"><img src="https://wordery.com/jackets/3b1a7572/code-name-bananas-david-walliams-9780008305833.jpg?width=156&height=250" /></div>
                    </li>
                </ul>
            </>
        )
    }

    return (
        <section className="latest-books">

            <h2>Latest books</h2>

            { content }

        </section>
    );
}