const BookList = ({books}) => {
    return (
        books.length ? books.map( (book) => {
            return <div key={book.id}>
                <h3>{book.name}, {book.authorName}</h3> 
                
            </div>;
        }) : 0

    )
}

export default BookList;