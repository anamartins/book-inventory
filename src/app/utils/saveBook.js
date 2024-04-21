export default function saveBook(book) {
    const localStorageItem = 'bookInventory';
    const isLocalStorage = localStorage.getItem(localStorageItem);
    if (!isLocalStorage) {
        localStorage.setItem(localStorageItem, JSON.stringify(book));
    } else {
        let storage = JSON.parse(localStorage.getItem(localStorageItem));
        storage = [...storage, book];

        localStorage.setItem(localStorageItem, JSON.stringify(storage));
    }
}
