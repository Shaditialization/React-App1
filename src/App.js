import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Startframework from './Components/Startframework/Startframework'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'



let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index:true, element: <Startframework /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound/> }

      
  ]}
])




export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

