import React, { Component } from 'react'
// import React, {useState} from 'react'
import './App.css';
import {BrowserRouter, Switch, Route, useParams} from "react-router-dom"
import User from './views/User'
import Contact from './views/Contact';
import NotFound from './views/NotFound'
import Nav from './components/Nav';
import About from './views/About';
import Home from './views/Home';
import StickyNote from './views/StickyNote';
import './bootstrap.css';


  const APP=()=>{
    return(
      <>
        <BrowserRouter>
          <Nav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user" component={User}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/sticky" component={StickyNote}></Route>
            <Route path="/:id" component={About}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
  export default APP

  
  // export default class App extends Component {
  //   constructor(){
  //     super()
  //     this.state={
  //       loggedIn: false,
  //       name: "Toyin"
  //     }
  //   }
    
  //   render() {
  //     return (
  //       <div>
  //           <h1>Hello {this.state.name}</h1>
  //           <button onClick={()=>{this.setState({name:"Seun"})}}>Click Me</button>
  //       </div>
  //     )
  //   }
  //   shouldComponentUpdate(){
  //     return true
  //   }
  // }
  

// function App(){
//   let name= "Toyin"
//   let display= true
//   let h2 = <h1>Hello world</h1>
//   let users = [{name:'Seun', age: 10, email: "seun@yahoo.com"},
//   {name:'Tobi', age: 8, email: "tobi@yahoo.com"},
//   {name:'Ife', age: 12, email: "ife@yahoo.com"}
//   ]
//   let user = users.map((el)=>{
//     return <tr>
//       <td key={el.name}>{el.name}</td>
//       <td key={el.age}>{el.age}</td>
//       <td key={el.email}>{el.email}</td>
//     </tr>
//   })
//   return(
//     <>
//       <h1 style={{color:'blue'}}>Hello {name}</h1>
//       <div>{display && h2}</div>
//       <table>{user}</table>
//     </>
//   );
// }



// import React, { useState } from 'react'

// export default function App() {

//   const [todo, setTodo] = useState([{ name: "Pray", status: false }])
//   const [input, setInput] = useState('')

//   function handleInput(params){
//     setInput(params.target.value)
//     console.log(params.target.value);
//   }

//   function handleClick(params){
//     setTodo([...todo, {name:input, status:false}])
    
//   }

//   function handleDelete(params){
//     console.log(params);
//     const allTodo = [...todo]
//     setTodo(
//       allTodo.filter((item) => item !== params)
//     )
//   }

//   function handleUpdate(params){
//     const allTodo = [...todo]
//     const newTodo = allTodo.find((item) => item === params)
//     newTodo.status = !newTodo.status
//     setTodo(allTodo)
//   }
//   return (
//     <div>
//       <div>
//         <input type="text" onChange={handleInput} />
//         <button onClick={handleClick}>Submit</button>
//       </div>
//       <div>
//         <ul>
//           <h2>TO DO LIST</h2>

//           {
//             todo.map((params, i) =>{
//               return <li style={params.status? {borderLeft: "5px solid green"} : {border: "none"}
//               }
//               key={i}
//               onDoubleClick={()=>{handleDelete(params)}}
//               onClick={()=>{handleUpdate(params)}}>{params.name}
//               </li>
//             })
//           }
//         </ul>
//       </div>
//     </div>
//   )
// }



// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h3>{this.state.count}</h3>

//         <div>
//           <button className="box-btn" onClick={()=>{this.setState({count: this.state.count + 1})}}>+</button>
//           <button className="box-btn" onClick={()=>{this.setState({count:this.state.count - 1})}}>-</button>
//         </div>
//       </div>
//     )
//   }
// }

// const Btn=(props)=>{
//   let {mycolor, label, clr} = props;
//   return(
//     <>
//       <button style={{backgroundColor:mycolor, color: "white" , color:clr, padding:"10px", margin:"10px"}}>{label || "Empty"}</button>
//     </>
//   )
// }
// function App(){ 
//   return(
//     <>
//       <Btn mycolor="blue" label="LOGIN"/>
//       <Btn mycolor="green" label="SIGN UP"/>
//       <Btn clr=""/>
//     </>
//   );
// }



// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       title: "Welcome To Tynet",
//       message: 'Hello World',
//       count: 0,
//       display: false
//     }
//   }
//   increase=()=>{

//     this.setState({display:!this.state.display})
//   }
//   render(){
//     return(
//       <>
//         <div className="App">
//           <h1>{this.state.title}</h1>
//           <h2>{this.state.message}</h2>
//           <h2>{this.state.count}</h2>

//           {
//             this.state.display ? <div className="box"> </div> : <div>Tic Toc</div>
//           }
//         </div>
//         <p>
//           {/* <button onClick={ ()=> {this.setState({message: " Hi Toyin"})}}>Submit</button> */}
//           <button onClick={this.increase}>Increase Number</button>
//         </p>
//       </>
//     )
//   }
// }

// function App (){
//   const [message, setMessage] = useState("Hello from Tynet");
//   const [title, setTitle] = useState("Welcome");
//   const [count, setCount] = useState(0);
//   const [display, setDisplay] = useState(false);

//   function toggle(){
//     setDisplay(!display)
//   }
//   return(
//     <div>
//       <h1 onClick={()=>{ setTitle("To Tynet")}}>{title}</h1>
//       <h3>{message}</h3>

//       <button onClick={toggle}> Count: {count}</button>

//       <div className="box" style={ display? {display:"none"} : {display: "block"}}> </div>
//     </div>
//   )
// }




// class App extends Component{
//   name="Seun"

//   render(){
//     return(
//       <div>
//         <nav className="back">
//           <li>HOME</li>
//           <li>MENU</li>
//           <li>ABOUT</li>
//           <li>CONTACT US</li>
//         </nav>
//         <First/>
//         <h1 className= "day">Hello {this.name}</h1>
//       </div>
//     )
//   }
// // }
// export default App;
