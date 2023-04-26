import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleBook from '../SingleBook/SingleBook';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {

    const navigation = useNavigation()
    console.log(navigation.state);
if (navigation.state==='loading') {
    return <LoadingSpinner> </LoadingSpinner>
    
}

    const {books} = useLoaderData()
    console.log(books);
    // const booksDAta = useLoaderData();
    // console.log(booksDAta.books);

    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">

                {
                    books.map(book => <SingleBook
                        key = {book.id}
                        book = {book}> </SingleBook> )
                }




            </div>
           
        </div>
    );
};

export default Books;