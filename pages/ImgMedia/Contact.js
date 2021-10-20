import React, { useState } from "react"
import Typography  from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles ({
     field: {
          marginTop: 20,
          marginBottom: 20,
          display: "block"
     },  
     form: {
          backgroundColor: '#d4d8d9',
          borderRadius: "10px"
     }
    
   
});

export default function Contact(){
     const classes = useStyles()
     const [title, setTitle] = useState('')
     const [details, setDetails] = useState('')
     const [titleError, setTitleError] = useState(false)
     const [detailsError, setDetailsError] = useState(false)
     const handleSubmit = (e) =>{
          e.preventDefault()
          setTitleError(false)
          setDetailsError(false)

          if(title == ''){
               setTitleError(true)
          }
          if(details == ''){
               setDetailsError(true)
          }
          if(title && details) {
               console.log(title, details,)
          }
     }

     return(
         <Container className={classes.form}>
               <Typography
               variant="h6"
               component="h2"
               // align="center"
               color="textSecondary"
               >create next app</Typography>
               <form  noValidate autoComplete="off" onSubmit={ handleSubmit}>
               <TextField
                    onChange = {(e) => setTitle(e.target.value)}
                    className = {classes.field}
                    label=" your Email"
                    variant="outlined"
                    color="secondary"
                    type="status"
                    required
                    fullWidth
                    error={titleError}
                    />
                        <TextField
                    onChange = {(e) => setDetails(e.target.value)}
                    className = {classes.field}
                    label="Text"
                    type="text"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows= {4}
                    required
                    fullWidth
                    error={detailsError}
                    />
                    <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                    endIcon={ <SendIcon/>}
                    >submit</Button>
               </form>
           
          </Container>
     )
}