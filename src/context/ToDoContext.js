import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react/cjs/react.development";

const TodoContext = createContext()

export function useTodo() {
    return useContext(TodoContext)
}

export function TodoProvider({ children }) {
    const [way, setWay] = useState('hello')
    const [books, setBooks] = useState([
        { id: 1, title: "Simobi goes to School" },
        { id: 2, title: "Kokubaboni"},
        { id: 3, title: "SugarGirl" },
    ])

    function addBook(newvalue) {
        setBooks([...books, newvalue])
    }

    function handleDelete(book) {
        setBooks(
            books.filter((item) => item !== book)
        )
    }
    function handleUpdate(book){
        const allBooks = [...books]
        const newBook = allBooks.find((item) => item === book)
        newBook.status = !newBook.status
        setBooks(allBooks)
    }
    const data = {
        way, books, addBook, handleDelete, handleUpdate
    }


    return <TodoContext.Provider value={data}>
        {children}
    </TodoContext.Provider>
}
