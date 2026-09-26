import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ManyNavigation } from './components/MAnyNavigation'
import Home from './pages/Home'
import axios from 'axios'

const gellAllRecipes = async () =>  {
  let allRecipes =[]
  await axios.get('http://localhost:5000/recipe').then(res => {
    allRecipes = res.data;
  })
  return allRecipes;
}

const router = createBrowserRouter([
  {path:"/", element:<ManyNavigation/>, 
    children:[
       {path:"/", element:<Home/>, loader:gellAllRecipes}
  ]
}
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
