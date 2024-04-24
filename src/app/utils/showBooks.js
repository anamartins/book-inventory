import { localStorageItem } from './constants';

export default function showBooks() {
    return JSON.parse(localStorage.getItem(localStorageItem));
}
