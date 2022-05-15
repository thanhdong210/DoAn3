import React, { useState } from 'react';
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { Box, Button, FormControl, IconButton, InputLabel, Switch, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import api from './api/newaction'
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

function ModelConfiguration(props) {
    const classes = useStyles();

    const [number, setNumber] = useState(``)

    const handleNumber = (event) => {
        setNumber(event.target.value)
    }

    const [newAction, setNewAction] = useState([]) 

    const getNewAction = () => {
        api.get('/new-action').then(res => {
            console.log(res.data)
            setNewAction(res.data)
            console.log(newAction)
        })
    }

    const[modelName, setModelName] = useState(``)

    const handleModelChange = (event) => {
        // console.log(event.target.value)
        setModelName(event.target.value) 
    }

    const handleAddModel = () => {
        try {
            let res = api.post('/models', {name: modelName, action: select1})
            console.log(res.data)
            console.log(newAction)
        } catch(e) {
            console.log(e.message)
        }
    }

    const [select1, setSelect] = useState([])

    const handleChangeSelect = (event) => {
        console.log(event.target.value)
        setSelect(oldArray => [...oldArray,event.target.value] );

        console.log(select1)
    }
    console.log("hi", select1)
    return (
        <div className='model_configuration'>
            MODEL CONFIGURATION
            <div>
                Select Model
            </div>
            <div>
                <Select fullWidth="50"></Select>
            </div>
            <div className='textfield'>
                <TextField fullWidth="50"></TextField>
            </div>

            <div>
                Number of actions
                <Select className='textfield' fullWidth="20" style={{ width: 80, marginLeft:30 }} value={number} onChange={handleNumber}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
                <span style={{ marginLeft:40 }}>Model name</span>
                <input type="text" style={{ height:25, marginLeft:10 }} onChange={handleModelChange} value={modelName}/>
            </div>  
                <div>
                    <FormControl className={classes.formControl}>
                        <Select
                            id="select1"
                            onClick={getNewAction}
                            value={newAction._id}
                            label="NewAction"
                            onChange={ handleChangeSelect }
                        >
                            
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {newAction.map(newaction => <MenuItem value={newaction._id}>{newaction.name}</MenuItem>)}
                        </Select>
                        

                        <Select
                            id="select2"
                            value={newAction._id}
                            onChange={ handleChangeSelect }
                        >
                                
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {newAction.map(newaction => <MenuItem value={newaction._id}>{newaction.name}</MenuItem>)}
                        </Select>

                        <Select
                            id="select3"
                            value={newAction._id}
                            onChange={ handleChangeSelect }
                        >
                                
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {newAction.map(newaction => <MenuItem value={newaction._id}>{newaction.name}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <Select
                            id="select4"
                            value={newAction._id}
                            onChange={ handleChangeSelect }
                        >
                            
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {newAction.map(newaction => <MenuItem value={newaction._id}>{newaction.name}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <Select
                            id="select5"
                            value={newAction._id}
                            onChange={ handleChangeSelect }
                        >
                            
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {newAction.map(newaction => <MenuItem value={newaction._id}>{newaction.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
            <div>
            
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Number of GPUs</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>

            
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Train batch size</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Test batch size</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div>
                ADVANCED
                <Switch></Switch>
            </div>
            <div>
                TRAIN
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Enable</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Dataset</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Batch size</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Eval period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Checkpoint period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Auto resume</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                DATA
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Enable</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Dataset</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Batch size</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Eval period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Checkpoint period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Auto resume</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                SLOWFAST
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Enable</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Dataset</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Batch size</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Eval period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Checkpoint period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Auto resume</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                NONLOCAL
            </div>
            
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Enable</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Dataset</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Batch size</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Eval period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Checkpoint period</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Auto resume</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div>
                <Button onClick={handleAddModel} style={{ backgroundColor:'blue', color: 'white' }}>TRAIN</Button>
            </div>

            <div className='button' style={{ marginTop:30 }}>
                <Button style={{ backgroundColor:'blue', color: 'white' }}>MODEL MANAGEMENT</Button>
                <Button style={{ backgroundColor:'blue', color: 'white', marginLeft:30 }}><Link to="/video-analytics">VIDEO ANALYTICS</Link></Button>
            </div>
        </div>
    );
}

export default ModelConfiguration;