import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Video from "../mp4/video.mp4"
import api from './api/newaction'
import GetActionTest from './GetActionTest';

import { BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";
// import './Table.css'



function ActionsLabeling(props) {

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        const url = URL.createObjectURL(file);
        console.log(url);
        
        setSource(url);
    };

    function handleDuration() {
        let num1 = document.getElementById("start").value;
        let num2 = document.getElementById("end").value;
        document.getElementById("duration").innerHTML = num2 - num1;
    }

    const [newAction, setNewAction] = useState([]) 

    const createNewAction = () => {
        setNewAction(newAction)
        console.log(newAction)
        let res = api.post('/new-action', {name: newAction, description: "none"})
        console.log(res.data)
    }

    const handleChange = (event) => {
        setNewAction(event.target.value)
        console.log(newAction)
    }

    const[modelName, setModelName] = useState([])

    const handleModelChange = (event) => {
        setModelName(event.target.value)
        console.log(modelName)
    }

    const handleAddModel = () => {
        try {
            let res = api.post('/models', {name: modelName, action: ["62665d3ad3899862b893ca12","626252ecded8dc5a154747ce"]})
            console.log(res.data)
        } catch(e) {
            console.log(e.message)
        }
    }

    return (
        <div className='new_action_labeling'>
            <div class="framemodel">
                <div class="element">
                    <div className="VideoInput"  style={{ marginLeft: 40 }}>
                        <input
                            ref={inputRef}
                            className="VideoInput_input"
                            type="file"
                            onChange={handleFileChange}
                            accept=".mov,.mp4"
                        />
                        <div>
                            {source && (
                                <video
                                className="VideoInput_video"
                                width="700px"
                                height="400px"
                                controls
                                src={source}
                                />
                            )}
                            {/* <div className="VideoInput_footer">{source || "Nothing selectd"}</div> */}
                        </div>
                    
                    </div>
                    <Button style={{ backgroundColor:'blue', color:'white' }}>ADD TO START</Button>
                    <Button style={{ backgroundColor:'blue', color:'white', marginLeft:20 }}>ADD TO END</Button>
                </div>
                <div style={{ marginTop:30 }}>
                <table>
                    <tr>
                        <th>Start</th>
                        <th>End</th>
                        <th>Duration</th>
                        <th>Label</th>
                    </tr>
                    
                    <tr height="40">
                        <td><input type="number" style={{width: 50, height: 40}} id="start" onChange={handleDuration}/></td>
                        <td><input type="number" style={{width: 50, height: 40}} id="end" onChange={handleDuration}/></td>
                        <td><h4 id="duration"></h4></td>
                        <td><input type="text" style={{width: 60, height: 40}} onChange={handleChange} value={newAction}/></td>
                        <td><button onClick={createNewAction}>ADD</button></td>
                    </tr>
                    
                </table>    
                </div>
                <div>
                    <Button className='button'><Link to="/model-management">CREATE MODELS</Link></Button>
                </div>
                <div>
                    <span style={{ marginLeft:40 }}>Model name</span>
                    <input type="text" style={{ height:25, marginLeft:10 }} onChange={handleModelChange} value={modelName}/>
                    <button onClick={handleAddModel}>ADD</button>
                </div>
            </div>
        </div>
    );
}

export default ActionsLabeling;