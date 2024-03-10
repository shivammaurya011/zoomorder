import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

function AppRoute() {
  return (
    <Routes>
        <Route path='/' exact Component={Home}/>
    </Routes>
  )
}

export default AppRoute
