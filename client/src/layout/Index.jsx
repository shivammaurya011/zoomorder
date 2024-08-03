import React from 'react'
import Header from '../components/Header/Index'
import Footer from '../components/Footer/Index'
function Index({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Index
