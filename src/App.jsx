import React from 'react'
import { RouterProvider,
  Route,
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import ProductPage from './pages/ProductPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<ProductPage />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
