import React from 'react';
import Button from '@material-ui/core/Button'
// import './ModelManagement.css'

import { BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";

function ModelManagement() {
    return (
        <div className='model_management'>
            <div class="framemodel">
                <div class="element">
                    MODEL MANAGEMENT
                    
                </div>
                <div className='button'>
                    <Button><Link to="/model-configuration" style={{ color:'white' }}>ADD NEW MODEL</Link></Button>
                </div>
                <div class="element">
                <table>
                    <tr>
                        <th>Model ID</th>
                        <th>Model name</th>
                        <th>Actions</th>
                        <th>Created date</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td height="20"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>    
                </div>
            </div>
            
        </div>
    ) 
}

export default ModelManagement;