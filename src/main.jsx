import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import About from './components/About';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import BookDetails from './components/BookDetails/BookDetails';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorPage from './components/ErrorPage/ErrorPage';
  const router =  createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Home />
            },{
                path:'books',
                element: <Books />,
                loader:()=>fetch('https://api.itbook.store/1.0/new')
            },{
              path:'book/:id',
                element:<BookDetails />,
                loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
                
               
            }
            ,
            {
                path: 'about',
                element: <About />
            }, {
              path: 'loader',
              element: <LoadingSpinner> </LoadingSpinner>
            }
        
        
        ]
    
    }
    



  ])



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

