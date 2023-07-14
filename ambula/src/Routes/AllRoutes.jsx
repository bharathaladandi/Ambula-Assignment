import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} > </Route>
            <Route path='about' element={<About />} ></Route>
            <Route path='contact' element={<Contact />} ></Route>
        </Routes>
    </div>
  )
}
