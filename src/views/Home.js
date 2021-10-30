import {Link} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import React from 'react';
import Books from './Books'
import Input from './Input'
import {useTodo} from "../context/ToDoContext";


export default function Home() {
    const titleRef = useRef()
    const idRef = useRef()
    const {way, books} = useTodo();
console.log(books);
    // const [books, setBooks] = useState([
    //     {id:1, title: "Simobi goes to School"},
    //     {id:2, title: "Kokubaboni"},
    //     {id:3, title: "SugarGirl"},
    // ])

    // useEffect(() => {
    //    console.log(books);
    // }, [books])

    // function handleDelete(params){
    //     setBooks(
    //         books.filter((item)=>item !=params)
    //     )
    // }
    // function handleInput(){
    //     console.log(titleRef.current.value);
    //     console.log(idRef.current.value);
    //     const userData={
    //         email : titleRef.current.value,
    //         pass : idRef.current.value
    //     }
    // }
    // function addBook(newvalue){
    //     setBooks([...books, newvalue])
    // }
    return (
        <div>
            <Input  />
            <ul>
                {
                    books.map((book)=>{
                        return <Books 
                        book={book} 
                        key={book.id}
                        
                         />

                        
                    })
                }
            </ul>
            


            <input type="text" ref={titleRef}/>
            <input type="text" ref={idRef}/>
            {/* <button onClick={handleInput}>Click Me</button>
            
            <button onClick={()=>{console.log(way)}}> Display</button> */}
            {/* <div>
                <h3>{email}</h3>
                <h3>{pass}</h3>
            </div> */}
        </div>
    )
}