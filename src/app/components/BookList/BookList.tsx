const BookList = ({books}) => {
    return (
        books.length ? books.map( (book) => {
            return <ul key={book.id}>
                <li>{book.name}, {book.authorName}</li> 
                
            </ul>;
        }) : 0

    )
}

export default BookList;