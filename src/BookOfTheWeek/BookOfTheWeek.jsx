import React, { useState, useEffect } from 'react';

export default function BookOfTheWeek(props) {
    const [{loading, loaded, data}, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const url = 'https://classes.codingbootcamp.cz/assets/classes/books-api/book-of-the-week.php'; // fill this in

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
                <div className="book-preview">

                    <img className="book-preview__image" src="https://wordery.com/jackets/d910d1fe/the-sentinel-lee-child-9781787633612.jpg?width=169&height=250" alt="The Sentinel cover" />

                    <div>

                        <h3 className="book-preview__title">The Sentinel</h3>

                        <div className="book-preview__release-date">27 Oct 2020</div>

                        <div className="book-preview__authors">
                            <span>Lee Child</span>
                            <span>Andrew Child</span>
                        </div>

                        <div className="book-preview__description">
                            The edge-of-your-seat, heart-in-mouth new Jack Reacher thriller for 2020 - his 25th adventure. and then put it right, like only he can. *** 'Jack Reacher is today's James Bond, a thriller hero we can't get enough of.' Ken Follett 'If you haven't read any Jack Reacher, you have a treat in store .
                        </div>

                    </div>

                </div>
            </>
        )
    }

    return (
        <section className="book-of-week">

            <h2>Book of the week</h2>

            { content }

        </section>
    );
}