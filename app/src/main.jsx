import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import {Provider} from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Users } from './futures/users/users.jsx'
import { AddBook } from './futures/users/addBook.jsx'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Users/>
  },
  {
    path:"/add",
    element:<AddBook/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router={routes}></RouterProvider>
    </Provider>
  </StrictMode>,
)
