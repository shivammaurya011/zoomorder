import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Filter from '../pages/Filter'
import Details from '../pages/Details'

function AppRoute() {
  return (
    <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/filter' Component={Filter}/>
        <Route path='/filter/:id' Component={Filter}/>
        <Route path='/details' Component={Details}/>
        <Route path='/details/:id' Component={Details}/>
    </Routes>
  )
}

export default AppRoute
