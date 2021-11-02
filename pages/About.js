import React from 'react';
/*import Footer from '../Components/container/footer'*/
import TopNavigation from '../Components/container/topNavigation'
import styles from '../styles/About.module.css'
import Contact from './ImgMedia/Contact';
import ImgMediaCard from './ImgMedia/imgmedai';
import Footer1 from "../Components/Layout/Footer";

export default function About() {
    return (
            <div className={styles.page}>
            <section>
             <TopNavigation/>
            <div className={styles.box} >
            <div className={styles.div}> 
            <h1>About Us</h1>
            <p>We created our website to share the true crimes around the world to all the users with the independent and variety .<br/>
            Our website is the best website that relevant for all who interesting on crime cases .
            Because our website is contain many type of cases that useful and helpful for user to entertained. You also can buy many books about criminals and laws that you love with a reasonable price and the easiest way. </p>
            </div>
        </div>
                
        <div>
            <div className={styles.formA}>
            <div className={styles.formB}> 
            <Contact/>
            </div>
            </div>
            <div className={styles.formA}>
            <div className={styles.formC}> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.333211759683!2d104.88317921408886!3d11.599576146633353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109522e1adbf683%3A0x3f4395cd35ec9617!2sAEON%20Mall%20Sen%20Sok%20City!5e0!3m2!1sen!2skh!4v1634441069974!5m2!1sen!2skh" style={{width:'100%' ,height:'20rem', borderRadius:'5px'}}></iframe>
           </div>
           </div>
        </div>
        </section>
        <ImgMediaCard/>
            {/* <Footer1/> */}
        </div>
     
    )
}


