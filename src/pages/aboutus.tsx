import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContatForm from '@/components/ContactForm'
import Cta from '@/components/Cta'

const aboutus = () => {
  return (
    <div>
      <Navbar />
      <Cta />
      <ContatForm />
      <Footer />
    </div>
  )
}

export default aboutus