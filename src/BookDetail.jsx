import { NavLink, useParams } from "react-router-dom";
import BookDetailHooks from "./hooks/BookDetailHooks";
import BookDelete from "./BookDelete";

function BookDetail() {
    const { id } = useParams()
    const { book, loading, error } = BookDetailHooks(id);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div className="book">
                <p className="titulo">Título: {book.title} <br /></p>
                <p className="descricao">Descrição: {book.description} <br /></p>
                <p className="resumo">Excerto: {book.excerpt} <br /> </p>
                <p className="num">Número de Páginas: {book.pageCount}</p>
            </div>
            <div className="btns">
                <button><NavLink to={"/updateBook/" + book.id}>Atualizar</NavLink></button>
                <BookDelete id={book.id} />
            </div>
        </div>
    )
}

export default BookDetail;