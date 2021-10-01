
// import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import Footer from '../Components/container/footer'
import Image from '../Components/container/image'
import TopNavigation from '../Components/container/topNavigation'

export default function switchPage(){
   return ( 
      <div className={styles.contianer}>
          <TopNavigation />            
               {/* <title>create next app</title> */}
               <h1>Hello world This is our home page</h1>
          
          <Footer />
          </div>
   )
}