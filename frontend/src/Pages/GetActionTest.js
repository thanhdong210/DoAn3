
import { MenuItem, Select } from "@material-ui/core";
import {useState} from "react";
import api from './api/newaction'



function GetActionTest(props) {

    const [newAction, setNewAction] = useState([]) 

    const getNewAction = () => {
        api.get('/new-action').then(res => {
            console.log(res.data)
            setNewAction(res.data)
            console.log(newAction)
        })
    }

    return (
        <div className='summary'>
            
            <button onClick={ getNewAction }>get action</button>
            {newAction.map(newaction => <h2 key={newaction.id}>{newaction.name}<br></br>{newaction.description}</h2>)}

            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                label="Age" 
                onClick={getNewAction}
            >
                {newAction.map(newaction => <MenuItem value={newaction.id} id>{newaction.name}</MenuItem>)}
            </Select>
            
        </div>
    );
}
export default GetActionTest;