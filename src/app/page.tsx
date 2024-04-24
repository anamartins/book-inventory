'use client'

import {useState} from 'react';

import styles from './page.module.css';
import Form from './components/Form';
import Button from './components/Button'
import showBooks from './utils/showBooks'

export default function Home() {
    // const atributes = [
    //   'title',
    //   {
    //     author:[
    //       'name',
    //       'gender',
    //       {nationality: ['country', 'province/state', 'city', 'continent']},
    //       'birthdate'
    //     ]
    //   },
    //   'publisher',
    //   'year',
    //   'edition',
    //   'genre',
    //   'photo',
    //   {dedication: ['isSigned', 'isSignedToMe']},
    //   {lent: ['isLent', 'lendTo', 'lendDate', 'lendHistory']}
    // ];

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
        setBooks(showBooks());
    }
    
    return (
        <main className={styles.main}>
            <Button label="Show collection" onClick={onButtonClick}/>
            <Form />

        <div>
            <h2>COLLECTION</h2>

            { books.length ? books.map( (book) => {
                return <div key={book.id}>
                    <h3>{book.name}, {book.authorName}</h3> 
                    
                </div>;
            }) : 0}
        </div>
        </main>
    );
}
