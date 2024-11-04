import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, Routes } from 'react-router-dom'
import router from './Routes/Routes'


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <RouterProvider router={router} /> */}
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
