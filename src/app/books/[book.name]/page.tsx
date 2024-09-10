export default function BookPage({params:book}) {
    return (

        <div>
            <h1>hi, {book.name}</h1>
            <p>
                {book.authorName}
            </p>
        </div>
    )
    
}