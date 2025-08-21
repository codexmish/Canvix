import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>

    </Route>


  ))





  return (
    <>
    
    </>
  )
}

export default App