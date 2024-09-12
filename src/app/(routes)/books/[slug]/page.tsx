'use client'
import {getBook} from "@/app/utils/bookStorage";

export default function BookPage({params}) {
    const book = getBook(params.slug);

    if (book) return (
        <div>
            <h1>{book.name}</h1>
            <h2>{book.authorName}</h2>
            <p>{book.slug}</p>
        </div>
    )
    return (
        <div>
            hi, this book doesn't exist
        </div> 
    );
}