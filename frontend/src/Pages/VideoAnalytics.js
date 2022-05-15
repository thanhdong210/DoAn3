import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/BuildRounded';
import Rotate from '@material-ui/icons/RotateLeftTwoTone';
import Delete from '@material-ui/icons/Delete';
import DeleteForever from '@material-ui/icons/DeleteForever';
import PauseIcon from '@material-ui/icons/Pause';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
}));

function VideoAnalytics(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='video_analytics'>
            <div>
                VIDEO MANAGEMENT
                <Paper style={{ height:400, width:1200 }}>
                    Drag or drop your file here
                    <div>
                        <Button style={{color:'white', backgroundColor:'blue' }}>Browse file</Button>
                        <Button>Enter input URLs/Files</Button>
                    </div>
                    <div>
                        <Button style={{ marginLeft:117}}>Enter input video name</Button>
                    </div>
                    <div>
                        <Checkbox>Schedule</Checkbox>
                        Schedule
                        <TextField type="date" style={{ marginLeft:80}}></TextField>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Model</InputLabel>
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
                            <InputLabel id="demo-simple-select-label">Context</InputLabel>
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
                            <InputLabel id="demo-simple-select-label">Config</InputLabel>
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
                        <Grid container spacing={2}>
                            <Grid item>
                                <Paper style={{ height:30, width:150, textAlign:'center' }}>
                                    Model movie
                                </Paper>
                            </Grid>
                            
                            <Grid item>
                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                        Schedule
                                </Paper>
                            </Grid>

                            <Grid item>
                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                        C1
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>

                    <div>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Paper style={{ height:30, width:150, textAlign:'center' }}>
                                    Model soccer
                                </Paper>
                            </Grid>
                            
                            <Grid item>
                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                        Running
                                </Paper>
                            </Grid>

                            <Grid item>
                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                        WC
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>  
                    <div>
                        <Button style={{color:'white', backgroundColor:'blue', marginTop:20 }}>ADD VIDEO</Button>
                    </div>
                </Paper>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">From day</InputLabel>
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
                        <InputLabel id="demo-simple-select-label">To day</InputLabel>
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
                        <InputLabel id="demo-simple-select-label">Model</InputLabel>
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
                        <InputLabel id="demo-simple-select-label">Config</InputLabel>
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
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
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
                    <table>
                        <tr>
                            <th></th>
                            <th>Scheldule</th>
                            <th>Video name</th>
                            <th>Model</th>
                            <th>Context</th>
                            <th>Status</th>
                            <th>Config</th>
                            <th></th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th> 
                                <Link to="/result">RESULTS</Link>
                            </th>
                            <th>
                                <Rotate clickable="True"></Rotate>
                                <Delete></Delete>
                                <BuildIcon onClick={handleClickOpen}></BuildIcon>
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>RESULTS</th>
                            <th>
                                <PauseIcon clickable="True"></PauseIcon>
                                <DeleteForever></DeleteForever>
                                <BuildIcon onClick={handleClickOpen}>
                                </BuildIcon>
                            </th>
                        </tr>
                    </table>    
                </div>
                <div>
                    <Link to="/generate-dashboard"><Button>Generate dashboard</Button></Link>
                </div>
                <Dialog open={open} maxWidth='800px'>
                        <DialogContent>
                            <Paper style={{ height:400, width:600 }}>
                                <h3 style={{ marginLeft:180 }}>Drag or drop your file here</h3>
                                <div>
                                    <Button style={{color:'white', backgroundColor:'blue', marginLeft:230 }}>Browse file</Button>
                                </div>
                                <div>
                                    <Button style={{ color:'white', backgroundColor:'blue', marginTop:20, marginLeft:190}}>Enter input URLs/Files</Button>
                                </div>
                                <div>
                                    <Button style={{ marginLeft:50}}>Enter input video name</Button>
                                    <Checkbox>Schedule</Checkbox>
                                    Schedule
                                    <TextField type="date" style={{ marginLeft:20}}></TextField>
                                </div>
                                <div style={{ marginLeft:40}}>
                                    <div>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-label">Model</InputLabel>
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
                                            <InputLabel id="demo-simple-select-label">Context</InputLabel>
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
                                            <InputLabel id="demo-simple-select-label">Config</InputLabel>
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
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Paper style={{ height:30, width:150, textAlign:'center' }}>
                                                    Model movie
                                                </Paper>
                                            </Grid>
                                            
                                            <Grid item>
                                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                                        Schedule
                                                </Paper>
                                            </Grid>

                                            <Grid item>
                                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                                        C1
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Paper style={{ height:30, width:150, textAlign:'center' }}>
                                                    Model soccer
                                                </Paper>
                                            </Grid>
                                            
                                            <Grid item>
                                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                                        Running
                                                </Paper>
                                            </Grid>

                                            <Grid item>
                                                <Paper style={{ height:30, width:160, textAlign:'center' }}>
                                                    <Checkbox style={{ marginBottom:3 }}></Checkbox>
                                                        WC
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>  
                                    <div>
                                        <Button style={{color:'white', backgroundColor:'blue', marginTop:20 }}>UPDATE</Button>
                                    </div>
                                </div>
                                
                            </Paper>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
            </div>
        </div>
    );
}

export default VideoAnalytics;