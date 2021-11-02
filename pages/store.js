import React from 'react';

import styles from '../styles/Store.module.css'
import ImgMediaCard from '../Components/presentation/cards/book';
import { Grid } from '@material-ui/core';

const books=[
    {
        image: "my.jpg",
        title:"Title",
        author:"Phuri",
        date:"02/11/2021",
        price:60
    },
    {
        image: "vercel.svg",
        title:"Kimlang",
        author:"Phuri",
        date:"02/11/2021",
        price:100
    }
]
export default function Store() {
    return (
        <div className={styles.page}>
            <section>
            
             <h1>What would u like to buy dear?</h1>
             <h1>What would u like to buy dear?</h1>              
                <div>
            
                </div>
            </section>
        <Grid container justify="center" spacing={2} >
           {
               books.map((item,index)=>{
                   return (
                    <Grid item xs={12} sm={6} md={3}>
                        <ImgMediaCard
                            image={item.image}
                            author={item.author}
                            price={item.price}
                            title={item.title}
                            date={item.date}
                        />
                    </Grid>
                   )
               })
           }
        </Grid>
    
       </div>
     
    )
}


