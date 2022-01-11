import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen">
      <div className='flex-grow'>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  )
}

export default MyApp
