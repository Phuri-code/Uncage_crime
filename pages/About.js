import React from 'react';
import TopNavigation from '../Components/container/topNavigation'
import styles from '../styles/About.module.css'
import Contact from './ImgMedia/Contact'
import ImgMediaCard from './ImgMedia/imgmedai';



export default function About() {
    return (
            <div className={styles.page}>
            <section>
             <TopNavigation/>
            <div className={styles.box}>
            <div className={styles.div}> 
            <h1>about us</h1>
            <p>Along the way, MailChimp continued to share photos of its executives and other 
            key team members, effectively humanizing its brand by putting several faces to its name.
            The email company also did a great job of building trust by incorporating elements of social proof
            (i.e. media and user testimonials, partner logos, etc.).Along the way, MailChimp continued to share photos of its executives and other 
            key team members, effectively humanizing its brand by putting several faces to its name.
            The email company also did a great job of building trust by incorporating elements of social proof
            (i.e. media and user testimonials, partner logos, etc.).Along the way, MailChimp continued to share photos of its executives and other 
            key team members, effectively humanizing its brand by putting several faces to its name.
            The email company also did a great job of building trust by incorporating elements of social proof
            (i.e. media and user testimonials, partner logos, etc.). </p>
            </div>
        </div>
        <h1></h1>
        
        <div>
            <div className={styles.formC}>
            <div className={styles.formB}> 
         <Contact/>
            </div>
            <div className={styles.formA}> 
         <Contact/>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.333211759683!2d104.88317921408886!3d11.599576146633353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109522e1adbf683%3A0x3f4395cd35ec9617!2sAEON%20Mall%20Sen%20Sok%20City!5e0!3m2!1sen!2skh!4v1634441069974!5m2!1sen!2skh" style={{width:'100%', height:298}}></iframe> */}
            </div>
        </div>
        </div>
        {/* <ImgMediaCard/> */}
        </section>
                
        </div>
     
    )
}


