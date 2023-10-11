import GetBooksHooks from "./hooks/GetBooksHooks";

function GetBooks() {
    const { books, loading, error } = GetBooksHooks();

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {books.map((book) => (
                <p key={book.id}>
                    Título: {book.title} <br /> Descrição: {book.description} <br />{" "}
                    Resumo: {book.excerpt} <br /> Número de Páginas: {book.pageCount}
                </p>
            ))}
        </div>
    );
}

export default GetBooks;