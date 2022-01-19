import { DefaultSeo } from 'next-seo'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        defaultTitle='TACK BLOG'
        canonical='https://tack-blog.vercel.app/'
        description='TACK BLOG サラリーマンエンジニアのブログ'
        twitter={{
          handle: 'wasakiT',
          site: 'wasakiT',
          cardType: 'summary',
        }}
        openGraph={{
          type: 'Blog',
          title: 'TACK BLOG',
          description: 'TACK BLOG サラリーマンエンジニアのブログ',
          site_name: 'TACK BLOG',
          url: 'https://tack-blog.vercel.app/',
          images: [
            {
              url: 'https://images.microcms-assets.io/assets/c7f638adc3f64d9192bd4907efc2835a/8364714ee36d49e8a119d8489d494080/IMG_98C696D2B7E0-1.png',
              width: 512,
              height: 512,
              alt: 'TACK BLOG'
            }
          ]
        }}
      />
      <div className="w-full min-h-screen">
        <div className='flex-grow'>
          <Header />
          <Component {...pageProps} />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default MyApp
