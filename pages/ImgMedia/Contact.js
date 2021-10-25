import React, { useState } from "react"
import {Typography, Button }from "@material-ui/core"
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from "@material-ui/core"
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles ({
     field: {
          marginTop: 20,
          marginBottom: 20,
          display: "block",
          backgroundColor:'#fefefe',
          borderRadius:'5px 5px 0 0'
     },  
     form: {
          backgroundColor: '#d4d8d9',
          borderRadius: "10px"
     },
     Button: {
          marginBottom: 20,
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
               variant="h4"
               component="h2"

               align="center"
               color="textSecondary"
               >Contact Us</Typography>
               <form  noValidate autoComplete="off" onSubmit={ handleSubmit}>
               <TextField
                   onChange={(e) => setTitle(e.target.value)}  
                   className = {classes.field}             
                   variant='filled'
                   color='secondary'
                   label="Email"
                   type='text'
                   multiline
                   required
                   fullWidth
                   eorror={titleError}
                    />
                    <TextField
                    onChange = {(e) => setDetails(e.target.value)}
                    className = {classes.field}
                    label="Text"
                    type="text"
                    variant="filled"
                    color="secondary"
                    multiline
                    rows= {5}
                    required
                    fullWidth
                    error={detailsError}
                    />
                    <Button
                    className = {classes.Button}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    fullWidth
                    endIcon={<SendIcon/>}
                    >submit</Button>
               </form>
           
          </Container>
     )
}