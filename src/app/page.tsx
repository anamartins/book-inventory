'use client';

import { useState, useEffect } from 'react';

import styles from './page.module.css';
import { getBooks } from './utils/bookStorage';

import Form from './components/Form/Form';
import Button from './components/Button/Button';
import BookList from './components/BookList/BookList';

export default function Home() {
    const [books, setBooks] = useState('');

    useEffect(() => {
        setBooks(getBooks());
    }, []);

    function onButtonClick() {
        setBooks(getBooks());
    }

    return (
        <main className={styles.main}>
            <Form />
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
