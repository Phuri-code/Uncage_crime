import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';





const useStyles = makeStyles({
  root: {
    // border: "10px solid red",
    width: '100%',
    margin: '60px 21px 0px 21px'

  },
  // form: {
  //   border: '10px solid black'
  // }

});

export default function ImgMediaCard({image,title,author,date,price}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="350"
        image={image}
        title="The CRIME Book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          By {author} <br/>
          Published on : {date} <br/>
          Prize        : {price}$
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button size="small" color="primary"> 
       <Link href="http://www.amazon.com/">more </Link>
      </Button>
      <Button size="small" color="primary">
        Purchase
      </Button>
    </CardActions>
  </Card>
    
    
  );
}
