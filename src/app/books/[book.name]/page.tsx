import { localStorageItem } from "@/app/utils/constants"

// export async function generateStaticParams() {
//     // const isLocalStorage = localStorage.getItem(localStorageItem);
//     // console.log('is?',isLocalStorage)

   
//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }

export default function BookPage({params:book}) {
    return (

        <div>
            <h1>hi, {book.name}</h1>
            <p>
                {book.authorName}
            </p>
        </div>
    )
    
}