'use client';

import { useState, useEffect } from 'react';

import styles from './page.module.css';
import { getBooks } from './utils/bookStorage';

import Form from './components/Form/Form';
import Button from './components/Button/Button';
import BookList from './components/BookList/BookList';

export default function Home() {
    const [books, setBooks] = useState('');
    const [isAddBookVisible, setisAddBookVisible] = useState (false);

    useEffect(() => {
        setBooks(getBooks());
    }, []);

    function onButtonClick() {
        setBooks(getBooks());
    }

    function showAddBook() {
        setisAddBookVisible(!isAddBookVisible);
    }

    return (
        <main className={styles.main}>
            <Button label="Add a book" onClick={showAddBook}/>
            <Form isOpen={isAddBookVisible}/>
            <div className={styles.collection}>
                <Button label="Update collection" onClick={onButtonClick} />
                <h2>MY COLLECTION</h2>
                <div className={styles.booklist}>
                    <BookList books={books} />
                </div>
            </div>
        </main>
    );
}
