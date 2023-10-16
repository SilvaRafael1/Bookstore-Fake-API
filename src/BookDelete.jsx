import { useState } from "react";
import client from "./api/api";

function BookDeleteButton({ id }) {
    const [mensagem, setMensagem] = useState("")
    
    const handleDelete = async () => {
        try {
            await client.delete(`/${id}`)
            setMensagem(`Livro com o ID ${id} deletado com sucesso!`)
        } catch (err) {
            console.error('Erro ao deletar livro: ', err)
            setMensagem(`Erro ao deletar livro: ${err}`)
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Deletar</button>
            <div className="mensagem">{mensagem}</div>
        </div>
    )
}

export default BookDeleteButton;