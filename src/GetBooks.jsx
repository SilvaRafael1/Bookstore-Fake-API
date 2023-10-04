import React, { useEffect, useState } from "react";
import axios from "axios";

function GetBooks() {
    const [books, setBooks] = useState();

    // axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    //     .then(res => 
    //             // console.log(res.data.length)
    //             setBooks(res.data.json())
    //         )
    //     .catch(err => {
    //         console.error("ops! ocorreu um erro: " + err);
    //     })

    // this.books.map(book => {
    //     console.log(`${book.title}`);
    //     return null;
    // })

    useEffect(() => {
        const listBooks = async () => {
            try {
                const res = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
                console.log("Recebido resposta")
                setBooks(res.data)
            } catch (err) {
                console.error(err)
            }
        }

        listBooks()
    }, [])

    return (
        <ul>
            {books.map(book => {
                return <li key={book.id}>{book.title}</li>
            })}
        </ul>
    )
}

export default GetBooks;