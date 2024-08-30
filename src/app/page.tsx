'use client'

import {useState} from 'react';

import styles from './page.module.css';
import getBooks from './utils/getBooks'

import Form from './components/Form';
import Button from './components/Button'
import BookList from './components/BookList'



export default function Home() {
    // const book = {
    //   title: 'Notes on \'Camp\'',
    //   author:{
    //     name: 'Susan Sontag',
    //     gender: 'woman',
    //     nationality: {country:'United States', provinceState:'New York', city: 'New York', continent:'North America'},
    //     birthdate: '1933-01-16',
    //   },
    //   publisher: 'Penguin Modern',
    //   year: 2018,
    //   edition: 1,
    //   genre: 'Essay',
    //   photo: '',
    //   details: {
    //     isSigned: true,
    //     isSignedToMe: false,
    //     otherDetails: ''
    //   },
    //   lent: {isLent: false, lendto: '', lendDate:'', lendHistory: ''}
    // };
    
    const [books, setBooks] = useState('')

    function onButtonClick(){
        setBooks(getBooks());
    }
    
    return (
        <main className={styles.main}>
            <Button label="Show collection" onClick={onButtonClick}/>
            <Form />
        <div>            
            <h2>COLLECTION</h2>
            <BookList books={books} />
        </div>
        </main>
    );
}
