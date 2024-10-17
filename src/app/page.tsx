'use client';

import { useState } from 'react';

import styles from './page.module.css';
import { getBooks } from './utils/bookStorage';

import Form from './components/Form/Form';
import Button from './components/Button/Button';
import BookList from './components/BookList/BookList';

export default function Home() {
    const [books, setBooks] = useState('');
    const [isShowAddBook, setIsShowAddBook] = useState (false);

    function onButtonClick() {
        setBooks(getBooks());
    }

    function showAddBook() {
        console.log('show!', isShowAddBook)
        setIsShowAddBook(!isShowAddBook);

    }

    return (
        <main className={styles.main}>
            <Button label="Add a book" onClick={showAddBook}/>
            <Form isOpen={isShowAddBook}/>
            <div className={styles.collection}>
                <Button label="Show collection" onClick={onButtonClick} />
                <h2>COLLECTION</h2>
                <div className={styles.booklist}>
                    <BookList books={books} />
                </div>
            </div>
        </main>
    );
}
