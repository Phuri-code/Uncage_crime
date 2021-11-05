import  Container  from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


export default function Footer1(){
    return(
        <footer>
            <Box 
               style={{backgroundColor:'black',color: 'red'}}
            >
                <Container>
                    <Grid container spacing ={3} justifyContent="center">
                        <Grid item xs={12} sm={3}>
                            <Box 
                           
                                 style={{ 
                                 color:"white"}}
                                 >
                                <h3>USEFUL-LINKS </h3>
                            </Box>
                             <Box  style={{ 
                                paddingLeft: '30px'}}>
                                <Link href="./index" color="inherit">
                                    Homepage
                                </Link>
                             </Box>
                             <Box  style={{ 
                                 color:"white"}}>
                                <Link href="./contact" color="inherit">
                                    Storepage
                                </Link>
                             </Box>
                             <Box >
                                <Link href="./About" color="inherit">
                                    AboutUs
                                </Link>
                             </Box>
                             <Box paddingLeft='30px'>
                                <Link href="./sign" color="inherit">
                                    SignUp
                                </Link>
                             </Box>
                        </Grid>
                        
                        <Grid item xs={12} sm={3}>
                             <Box style={{ 
                                 color:"white"}}>
                                <h3>SPONSERS</h3></Box>
                             <Box paddingLeft="350px">
                                <Link href="https://elpspda.com/" color="inherit">
                                    Private Dectective Agency
                                </Link>
                             </Box>
                             <Box paddingLeft="350px">
                                <Link href="https://www.fbi.gov/" color="inherit">
                                    FBI American
                                </Link>
                             </Box>
                             <Box paddingLeft='350px'>
                                <Link href="https://laws-lois.justice.gc.ca/eng/" color="inherit">
                                    Justice Laws
                                </Link>
                             </Box>
                             <Box paddingLeft="350px">
                                <Link href="https://www.victimsupport.org.uk/crime-info/types-crime/" color="inherit">
                                Victim Support
                                </Link>
                             </Box>
                             </Grid>
                        
                       
                        <Grid item xs={12} sm={3}>
                             <Box paddingLeft="400px"
                                  style={{ 
                                    color:"white",
                                    paddingLeft:"400px"}}>
                                 <h3>FOLLOW US</h3></Box>

                             <Box paddingLeft='400px'>
                                <Link href="https://km-kh.facebook.com/" color="inherit">
                                    Facebook
                                </Link>
                             </Box>
                             <Box paddingLeft='400px'>
                                <Link href="https://www.google.com/gmail/" color="inherit">
                                    Gmail
                                </Link>
                             </Box>
                             <Box paddingLeft='400px'>
                                <Link href="https://twitter.com/" color="inherit">
                                    Twitter
                                </Link>
                             </Box>
                             <Box paddingLeft='400px'>
                                <Link href="https://www.instagram.com/" color="inherit">
                                    Instagram
                                </Link>
                             </Box>
                             </Grid>
                        </Grid>    
                   
                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}} color="white">
                        UNCAGED CRIMES &reg; {new Date().getFullYear};
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}