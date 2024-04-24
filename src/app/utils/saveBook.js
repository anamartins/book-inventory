import { localStorageItem } from './constants';

export default function saveBook(book) {
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
