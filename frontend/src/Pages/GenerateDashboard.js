import React from 'react';
import Button from '@material-ui/core/Button'

import { BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";
import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Switch, TextField } from '@material-ui/core';
import Share from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
}));

function GenerateDashboard(props) {
    const classes = useStyles();
    return (
        <div className='summary'>
            <div>
                SUMMARY
            </div>
            <div>
                GENERATE DASHBOARD FOR MULTIPLE VIDEOS
                <Switch></Switch>
            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Videos</InputLabel>
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
                <Button style={{ marginLeft:40, backgroundColor:'blue', color:'white' }}>Generate dashboard</Button>
            </div>
            <div>
                <TextField variant='outlined'></TextField>
            </div>
            <div>
                <TextField variant='outlined'></TextField>
            </div>
        </div>
    );
}
export default GenerateDashboard;