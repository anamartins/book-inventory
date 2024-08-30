import { localStorageItem } from './constants';

export type Book = {
    id: number;
    title: string;
    author: {
        name: string,
        gender: string,
        nationality: {
            country: string,
            proviceState: string,
            city: string,
            continent: string,
        },
        birthdate: string
    },
    publisher: string,
    year: number,
    edition: number, 
    photo?: string,
    details?: {
        isSigned: boolean,
        lendTo: string,
        lendDate: string,
        lendHistory: string
    }
}

export function saveBook(book: Book) {
    const isLocalStorage = localStorage.getItem(localStorageItem);
    if (!isLocalStorage) {
        book.id = 1;
        localStorage.setItem(localStorageItem, JSON.stringify([book]));
    } else {
        let storage = JSON.parse(localStorage.getItem(localStorageItem));

        const length = storage.length;
        book.id = length + 1;

        storage = [...storage, book];

        localStorage.setItem(localStorageItem, JSON.stringify(storage));
    }
}

export default function getBooks() {
    return JSON.parse(localStorage.getItem(localStorageItem));
}
