import React from 'react';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//dialog
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


import TextField from '@material-ui/core/TextField'

import {useState, useEffect} from 'react';

import { BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";


function NewActionLabeling(props) {

    const [openPopup, setOpenPopup] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [newAction, setNewAction] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const[data, setData] = useState({
        name: "",
        description: ""
    });
    console.log("1")
    useEffect(()=>{
        console.log("2");
    },[]);

    function handleNewAction(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const handleSubmitNewAction = (e) => {
        fetch('/new-action', {
            method: 'POST',
            body: JSON.stringify({
                content: data
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then(message => {
            console.log(message)
        })
        console.log("dfdnf")
    }

    return (
        <div className='new_action_labeling'>
            <div class="framemodel">
                <Button><Link to="/test-call-api">Test Call API</Link></Button>
                <div>
                    ACTIONS MANAGEMENT
                    <Button onClick={handleClickOpen} className='button'>ADD NEW ACTIONS</Button>
                    
                    <form onSubmit={ handleSubmitNewAction }>
                        <Dialog open={open} onClose={handleClose} maxWidth='800px'>
                            <DialogTitle>ADD NEW ACTIONS</DialogTitle>
                            <DialogContent>
                                    <Paper style={{ height:250, width:800, border: "none", marginTop: 20}} >
                                        <Grid container spacing={10}>
                                            <Grid item>
                                                <div class='element'>
                                                    Name 
                                                </div>
                                                <div class='element'>
                                                    <TextField variant='outlined' size="small" onChange={ handleNewAction } value={data.name} id="name"></TextField>
                                                </div>

                                                <div class='element'>
                                                    Description 
                                                </div>
                                                <div class='element'>
                                                    <TextField variant='outlined' size="small" onChange={ handleNewAction } value={data.description} id="description"></TextField>
                                                </div>
                                            </Grid>
                                            <Grid item>
                                                <div class='element'>
                                                    Name 
                                                </div>
                                                <div class='element'>
                                                    <TextField variant='outlined' size="small"></TextField>
                                                </div>

                                                <div class='element'>
                                                    Description 
                                                </div>
                                                <div class='element'>
                                                    <TextField variant='outlined' size="small"></TextField>
                                                </div>
                                            </Grid>
                                            <Grid>
                                                <div class='element'>
                                                    <Button onClick={handleClose}><Link to="/actions-labeling" style={{ textDecoration: 'none' }} type="submit">Add Actions</Link></Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}><Link to="/actions-labeling" style={{ textDecoration: 'none' }}>START LABELING</Link></Button>
                                <button type="submit">Submit</button>
                            </DialogActions>
                        </Dialog>
                    </form>
                </div>
                
                <div>
                    <Grid container spacing={10}>
                        <Grid item>
                            <Paper style={{ height:120, width:250, border: "1px solid black" }}>
                                RUNNING
                                <br/>
                                Description
                                <br />
                                Created date
                                <br />
                                Status
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper style={{ height:120, width:250, border: "1px solid black" }}>
                                RUNNING
                                <br/>
                                Description
                                <br />
                                Created date
                                <br />
                                Status
                            </Paper>
                        </Grid>
                    </Grid>
                    <div>
                        {/* <Paper style={{ height:120, width:250, border: "1px solid black", marginTop: 20}} >
                            <Grid container spacing={10}>

                            </Grid>
                        </Paper> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default NewActionLabeling;