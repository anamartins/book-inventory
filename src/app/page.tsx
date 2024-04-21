import styles from './page.module.css'
import Form from './components/Form'

export default function Home() {
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
    return (
        <main className={styles.main}>
            <Form />
        </main>
    )
}
