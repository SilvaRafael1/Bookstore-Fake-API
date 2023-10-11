import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GetBooks from './GetBooks.jsx'
import CreateBook from './CreateBook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateBook />
  </React.StrictMode>,
)
