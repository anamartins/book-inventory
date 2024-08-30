import { localStorageItem } from './constants';

export default function getBooks() {
    return JSON.parse(localStorage.getItem(localStorageItem));
}
