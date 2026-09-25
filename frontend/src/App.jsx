import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { ManyNavigation } from './components/MAnyNavigation'

const router = createBrowserRouter([
  {path:"/", element:<ManyNavigation/>, children:[
    {path:"/", element:<Home/>}
  ]}
  
])

export const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
