import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 30,
      marginBottom: 30
    }
  },

  palette: {
    primary: {
      main: orange[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root} onClick={() => alert('Button styled!!!')}>Test styled button</Button>
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
          checked={checked}
          icon={<DeleteIcon/>}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
          />}
          label="Testing label"
        >
      </FormControlLabel>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="App">
          <header className="App-header">
            <Typography
              variant='h3'
              component='div'
            >
              Welcome to react
            </Typography>
            <Typography
              variant='h4'
            >
              Learn how to use material
            </Typography>
            <ButtonStyled ></ButtonStyled>

            <Grid container spacing={10} justifyContent="center">
              <Grid item>
                <Paper style={{ height:75, width:50 }}>

                </Paper>
              </Grid>
              <Grid item>
                <Paper style={{ height:75, width:50 }}>

                </Paper>
              </Grid>
            </Grid>

            <TextField 
              placeholder="Type something..."
              variant='outlined'
              color="secondary"
              type='mail'
              label='Texting me!!!'
            >

            </TextField>
            <CheckBoxExample/>
            <ButtonGroup>
              <Button 
                startIcon={<SaveIcon />}
                style={{
                  fontSize: 24
                }}
                size='large' 
                onClick={() => alert('hello')} 
                href='#' 
                variant='contained' 
                color='primary'>
                Save
              </Button>
              <Button 
                startIcon={<DeleteIcon />}
                style={{
                  fontSize: 24
                }}
                size='large' 
                onClick={() => alert('hello')} 
                href='#' 
                variant='contained' 
                color='secondary'>
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
