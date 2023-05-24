import '@styles/globals.css'
import Home from 'pages'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import React, {useState, useEffect} from 'react'

function Application({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchResults' element={<searchResults/>} />
        <Route path='/jobDetails' element={<jobDetails/>} />
        <Route path='/searchError' element={<searchError/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default Application
