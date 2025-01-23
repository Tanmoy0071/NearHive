import React from 'react'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Introduction from '@/sections/Introduction'
import Features from '@/sections/Features'
import Integrations from '@/sections/Integrations'
import Faqs from '@/sections/Faqs'
import Footer from '@/sections/Footer'
import LogoTicker from '@/sections/LogoTicker'
import CallToAction from '@/sections/CallToAction'


export default function page() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Introduction/>
      <Features/>
      <Integrations/>
      <LogoTicker/>
      <Faqs/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

