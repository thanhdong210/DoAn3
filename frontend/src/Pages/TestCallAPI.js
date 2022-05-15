import React, { useEffect } from 'react';
import {useState} from "react";
import api from './api/newaction'
import GetActionTest from './GetActionTest';



function TestCallAPI(props) {

    const [newAction, setNewAction] = useState([]) 
    const [newActionDescription, setNewActionDescription] = useState([])

    const createNewAction = () => {
        setNewAction(newAction)
        setNewActionDescription(newActionDescription)
        console.log(newAction)
        let res = api.post('/new-action', {name: newAction, description: newActionDescription})
        console.log(res.data)
    }

    const handleChange = (event) => {
        setNewAction(event.target.value)
        console.log(newAction)
    }

    const handleChangeDescription = (event) => {
        setNewActionDescription(event.target.value)
        console.log(newActionDescription)
    }

    return (
        <div className='summary'>
            
            <GetActionTest></GetActionTest>

            <form onSubmit={createNewAction}>
                <input type="text" onChange={handleChange} value={newAction}/>
                <input type="text" onChange={handleChangeDescription} value={newActionDescription}/>
                <button type='submit'>create action</button>
            </form> 
            
        </div>
    );
}
export default TestCallAPI;