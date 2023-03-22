import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Product } from './Product'
import {SinglePage} from './SinglePage'
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product/>}></Route>
        <Route path='' element={<SinglePage/>}></Route>
      </Routes>
    </div>
  )
}
