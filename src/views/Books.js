import React from 'react'
import { useTodo } from '../context/ToDoContext'
import './Books.css'

export default function Books({book}) {
    const {handleDelete, handleUpdate} = useTodo();

   
    return (

        <div className="bob"
            style={
                book.status ? {border: "4px double green"} : {border: "4px double yellow"}
            }
        >
            <h2>{book.title}</h2>
            <p>{book.id}</p>
            <button className="box1" onClick={()=> handleDelete(book)}>DELETE</button>
            <button className="box2" onClick={()=> handleUpdate(book)}>UPDATE</button>
        </div>
    )
}
