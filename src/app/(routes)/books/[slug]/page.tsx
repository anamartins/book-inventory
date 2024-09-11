'use client'
import getBook from "@/app/utils/getBook";

export default function BookPage({params}) {
    const book = getBook(params.slug)[0];

    return (
        <div>
            <h1>{book?.name}</h1>
            <h2>{book?.authorName}</h2>
            <p>{book?.slug}</p>
        </div>
    )
}