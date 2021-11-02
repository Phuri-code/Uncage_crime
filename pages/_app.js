
import Footer1 from '../Components/Layout/Footer';
import TopNavigation from '../Components/container/topNavigation';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TopNavigation />
      <Component {...pageProps} />
      <Footer1 />

    </div>);

}

export default MyApp
