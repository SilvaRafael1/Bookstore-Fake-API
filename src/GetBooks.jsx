import GetBooksHooks from "./hooks/GetBooksHooks";
import { NavLink } from "react-router-dom";
import "./css/GetBook.css";

function GetBooks() {
    const { books, loading, error } = GetBooksHooks();

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="grid-area">
            <div className="grid-container">
                {books.map((book) => (
                    <div className="grid-item" key={book.id}>
                        <NavLink to={"/books/" + book.id}>{book.title}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GetBooks;