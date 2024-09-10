'use client';
import './BookList.scss';

const BookList = ({books}) => {
    return (
        books.length ? books.map( (book, index:number) => {
            return <div className="book-collection" key={book.name}>
                <h2>{index + 1}. {book.name}, {book.authorName}</h2>
                <p>Publisher: {book.publisher}, {book.year}. {book.edition} edition.</p> 
                
            </div>;
        }) : 0
    )
}

export default BookList;