export default function saveBook(book){
    const isLocalStorage = localStorage.getItem("bookInventory")
    if (!isLocalStorage){
            localStorage.setItem("bookInventory", JSON.stringify(book))
        } else {
            let storage = JSON.parse(localStorage.getItem("bookInventory"));
            storage = [...storage, ...book]
    
            localStorage.setItem("bookInventory", JSON.stringify(storage))
        }
}