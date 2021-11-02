import { TextField, Typography, Button, FormControl, FormControlLabel, Radio, RadioGroup,
FormLabel } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";





const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   overflow: 'hidden',
  //   padding: theme.spacing(0, 55),
  // },
    margin: {
      backgroundColor: '#fefefe',
      position:'relative',
      padding:'0px',
      margin: '3rem',
      
    },
    // position: {
    //     justifyContent:'center',
    //     },
    button:{
          marginTop: 25,
          width: 175,
        }
     
  }));


export default function SignUp(){
    const classes = useStyles();
    return(
        <div className={classes.root}>

<TextField
  label=" TextField"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </InputAdornment>
    )
  }}
/>


    <div className={classes.position}>
 <Grid container direction="column" alignItems="center" justifyContent='center'> 
<Paper>
    <Typography variant="h4" component='h6' pos>
        Sign Up
    </Typography>
    <form className={classes.margin}> 
    <TextField label='First Name ' variant='standard' largewidth />
    <TextField label='Last Name'  variant='standard'   />
 <Grid container
          direction="column"
          justifyContent="space-between"
          alignItems="baseline"> 
    <TextField
  label="Email address"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <AccountCircle color='secondary' />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
<Grid>
 <Grid container spacing={1} alignItems="flex-end">
  <Grid item>
    <AccountCircle />
 </Grid>
 <Grid item>
    <TextField id="input-with-icon-grid" label="Email address"  />
  </Grid>
</Grid>
</Grid>
    <TextField variant='standard' color="secondary" label='password' fullWidth   />
    <TextField variant='standard' color="secondary" label='Confirm password' fullWidth  />
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
</Grid>
 <Button possition='center' color='secondary' variant='contained' className={classes.button} type='submit'>Sign Up </Button>
    </form>
</Paper>
</Grid>
</div>
</div>
)
}
