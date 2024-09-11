'use client'
import { useEffect, useState } from 'react';
import { localStorageItem } from './constants';


export default function getBook(slug:string) {
    const [collection, setCollection] = useState([]);
    
    useEffect(() => {
        setCollection(JSON.parse(localStorage.getItem(localStorageItem)))
    }, []);
    
    let book = collection.filter(e => e.slug == slug)

    return book;

}