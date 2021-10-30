import React, { useRef } from 'react'
import { useState } from 'react/cjs/react.development';
import { useTodo } from '../context/ToDoContext';

export default function Input() {
    const {addBook} = useTodo()
    const userTitle = useRef()
    const [id, addId] = useState(3)
    const ref = useRef(id)
    function sendData(){
        // addId(id + 1);
        const userData ={
            title: userTitle.current.value,
            id : ref.current + 1
        }  
        addBook(userData)      
    }

    
    return (
        <div>
            <input type="text" ref={userTitle}/>
            <button onClick={sendData}>Add</button>
        </div>
    )
}
