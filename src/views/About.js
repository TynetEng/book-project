
import React from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export default function About() {
    const {id} = useParams();
    const local = useLocation()
    const history = useHistory()
    const match = useRouteMatch()
    console.log(match);
    console.log(history);

    let message;

    function handleRoute(){
        history.goBack()
    }

    if(match.params.id == 1){
        message = "You are right"
    }
    return (
        <div>
            <h1>This is about</h1>
            <h3>Hi - {id}</h3>
            <button onClick={handleRoute}> Click Me</button>

            <div>{message}</div>
        </div>
    )
}
