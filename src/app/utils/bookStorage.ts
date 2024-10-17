import { localStorageItem } from './constants';
import { useEffect, useState } from 'react';

export type Book = {
    id: number;
    slug: string;
    name: string;
    author: {
        name: string;
        gender: string;
        nationality: {
            country: string;
            proviceState: string;
            city: string;
            continent: string;
        };
        birthdate: string;
    };
    publisher: string;
    year: number;
    edition: number;
    photo?: string;
    details?: {
        isSigned: boolean;
        lendTo: string;
        lendDate: string;
        lendHistory: string;
    };
};

function slugify(name) {
    return name.toLowerCase().replaceAll(' ', '-');
}

export function saveBook(book: Book) {
    const isLocalStorage = localStorage.getItem(localStorageItem);
    book.id = Date.now();
    book.slug = slugify(book.name);
    if (!isLocalStorage) {
        localStorage.setItem(localStorageItem, JSON.stringify([book]));
    } else {
        let storage = JSON.parse(localStorage.getItem(localStorageItem));
        storage = [...storage, book];

        localStorage.setItem(localStorageItem, JSON.stringify(storage));
    }
}

export function getBooks() {
    const storage = localStorage.getItem(localStorageItem);
    const books = JSON.parse(storage);
    if (storage) return books;
}

export function getBook(slug: string) {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setCollection(getBooks());
    }, []);

    let book = collection.find((e) => e.slug == slug);

    return book;
}
