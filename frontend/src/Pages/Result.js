import React from 'react';
import Button from '@material-ui/core/Button'

import { Link
} from "react-router-dom";
import { Box, Grid, Paper, TextField } from '@material-ui/core';
import Share from '@material-ui/icons/Share';



function Result(props) {

    return (
        <div className='result'>
            <div>
                <span style={{ marginRight:20 }}>RESULT </span>
                <span style={{ marginRight:20 }}>DONE </span>
                <span>RUNNING </span>
            </div>
            <div>
                <Grid container spacing={2} style={{ maxWidth:'1000' }}>
                    <Grid item>
                        <video
                            width="100%"
                            height="100%"
                            controls
                        />
                    </Grid>
                    <Grid item>
                        <Box style={{ height:'400px', width:'700px' }}>
                            <Paper >
                                <div>
                                    <TextField placeholder='Time threshold (slider + input)' style={{ width:'250px' }} variant='outlined'></TextField>
                                </div>
                                <div>
                                    <TextField placeholder='Score threshold (slider + input)' style={{ width:'250px' }} variant='outlined'></TextField>
                                    <Button style={{ backgroundColor:'blue', color:'white', marginLeft:30 }}>Filter</Button>
                                </div>
                                <div>
                                    <table style={{ marginTop:'20px' }}>
                                        <tr>
                                            <th>Action</th>
                                            <th>Start</th>
                                            <th>End</th>
                                            <th>Duration</th>
                                            <th>Select</th>
                                            <th>Share</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <Share></Share>
                                            </td>
                                        </tr>
                                    </table>    
                                </div>
                                <div style={{ marginRight:"50px" }}>
                                    <Button style={{ backgroundColor:'blue', color:'white', marginLeft:30, marginTop:20 }}>Download result</Button>
                                    <Button style={{ backgroundColor:'blue', color:'white', marginLeft:30, marginTop:20 }}>Download selected</Button>
                                </div>
                                <div style={{ marginRight:"50px" }}>
                                    <Link to="/video-editor"><Button style={{ backgroundColor:'blue', color:'white', marginLeft:30, marginTop:20 }}>Video editor</Button></Link>
                                    <Link to="/summary"><Button style={{ backgroundColor:'blue', color:'white', marginLeft:70, marginTop:20 }}>Summary</Button></Link>
                                </div>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    );
}

export default Result;