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
    maxWidth: 270,
    margin: '60px 21px 0px 21px'

  },
  // form: {
  //   border: '10px solid black'
  // }

});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid 
    className={classes.form}
    container
    >
      <Grid item xs>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYz_yN68eGjMSQ5pbum94YUpIPPvJOp4XTg&usqp=CAU'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <Link href="/About"><FacebookIcon/> </Link>
        </Button>
        <Button size="small" color="primary">
          know More
        </Button>
      </CardActions>
    </Card>
    </Grid>
      <Grid item xs>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYz_yN68eGjMSQ5pbum94YUpIPPvJOp4XTg&usqp=CAU'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctic
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <Link href="/About"><FacebookIcon/> </Link>
        </Button>
        <Button size="small" color="primary">
          know More
        </Button>
      </CardActions>
    </Card></Grid>
      <Grid item xs>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYz_yN68eGjMSQ5pbum94YUpIPPvJOp4XTg&usqp=CAU'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <Link href="/About"><FacebookIcon/> </Link>
        </Button>
        <Button size="small" color="primary">
          know More
        </Button>
      </CardActions>
    </Card></Grid>
      <Grid item xs>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYz_yN68eGjMSQ5pbum94YUpIPPvJOp4XTg&usqp=CAU'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <Link href="/About"><FacebookIcon/> </Link>
        </Button>
        <Button size="small" color="primary">
          know More
        </Button>
      </CardActions>
    </Card></Grid>
    </Grid>
  );
}
