import { useState } from 'react';
import { useEffect } from "react";
import Loading from './Loading';

function LibraryBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            let data = []
            // data = await getCurrentUser()

            setBooks(data)
            setLoading(false)
        }

        fetchData();
    }, [])

    return (
        <div id="books" className="flex flex-wrap items-center justify-center">
            {loading ? <Loading /> : <p>No books to display</p>}
        </div>
    )
}

export default LibraryBooks;