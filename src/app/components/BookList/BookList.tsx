'use client';
import './BookList.scss';

const BookList = ({books}) => {
    const bookList = books.length ? books.map( (book, index:number) => {
        const slug = "/books/" + book.slug
        return <li className="book-list-item" key={book.name}>
            <h2>{index + 1}. <a href={slug}>{book.name}</a>, {book.authorName}</h2>
            <p>Publisher: {book.publisher}, {book.year}. {book.edition} edition.</p> 
            
        </li>;
    }) : 0
    return (
        <ul className="book-list">
            {bookList}
        </ul>
    )
}

export default BookList;