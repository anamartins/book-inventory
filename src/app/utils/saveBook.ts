// const atributes = [
//   'title',
//   {
//     author:[
//       'name',
//       'gender',
//       {nationality: ['country', 'province/state', 'city', 'continent']},
//       'birthdate'
//     ]
//   },
//   'publisher',
//   'year',
//   'edition',
//   'genre',
//   'photo',
//   {dedication: ['isSigned', 'isSignedToMe']},
//   {lent: ['isLent', 'lendTo', 'lendDate', 'lendHistory']}
// ];

// const book = {
//   title: 'Notes on \'Camp\'',
//   author:{
//     name: 'Susan Sontag',
//     gender: 'woman',
//     nationality: {country:'United States', provinceState:'New York', city: 'New York', continent:'North America'},
//     birthdate: '1933-01-16',
//   },
//   publisher: 'Penguin Modern',
//   year: 2018,
//   edition: 1,
//   genre: 'Essay',
//   photo: '',
//   details: {
//     isSigned: true,
//     isSignedToMe: false,
//     otherDetails: ''
//   },
//   lent: {isLent: false, lendto: '', lendDate:'', lendHistory: ''}
// };

export type Book = {
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

export default function saveBook(book:Book) {
    const localStorageItem = 'bookInventory';
    const isLocalStorage = localStorage.getItem(localStorageItem);
    if (!isLocalStorage) {
        localStorage.setItem(localStorageItem, JSON.stringify([book]));
    } else {
        let storage = JSON.parse(localStorage.getItem(localStorageItem));
        storage = [...storage, book];

        localStorage.setItem(localStorageItem, JSON.stringify(storage));
    }
}
