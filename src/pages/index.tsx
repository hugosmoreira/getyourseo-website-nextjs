import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Team from  '@/components/Team'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Head from 'next/head';
import Testimonials from '@/components/Testimonials';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>GetYourSEO</title>
        {/* Add your favicon link here, if not already included in _document.js */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  )
}
