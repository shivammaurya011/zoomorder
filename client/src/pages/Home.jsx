import React from 'react'
import HeroSection from '../components/home/HeroSection'
import LocationSection from '../components/home/LocationSection'
import Layout from '../layout/Index'
import QuickSearch from '../components/home/QuickSearch'

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <QuickSearch/>
      <LocationSection/>
    </Layout>
  )
}

export default Home
