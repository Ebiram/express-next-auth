import 'tailwindcss/tailwind.css'
import Layout from '../components/layout/Layout'
import Notiflix from 'notiflix'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Notiflix.Notify.init({
      width: '350px',
      distance: '20px',
      timeout: 5000,
      fontSize: '12px',
      borderRadius: '100px',
      fontFamily: 'Montserrat',
      success: {
        background: '#10B981',
        notiflixIconColor: 'rgba(255,255,255,0.5)',
      },
      failure: {
        background: '#F43F5E',
        notiflixIconColor: 'rgba(255,255,255,0.5)',
      },
      warning: {
        background: '#F59E0B',
        notiflixIconColor: 'rgba(255,255,255,0.5)',
      },
      info: {
        background: '#3B82F6',
        notiflixIconColor: 'rgba(255,255,255,0.5)',
      }
    })
  })

  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
