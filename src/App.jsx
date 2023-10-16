import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetBooks from "./GetBooks"
import CreateBook from "./CreateBook"
import BookDetail from "./BookDetail"


function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/books" Component={GetBooks} />
                    <Route path="/books/:id" Component={BookDetail} />
                    <Route path="/createBook" Component={CreateBook} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;