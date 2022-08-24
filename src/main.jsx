import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './pages/Home'
import ListOfClients from './pages/ListOfClients'
import RegisterNewClients from './pages/RegisterNewClients'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <App />
            
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lista-de-clientes' element={<ListOfClients />} />
        <Route path='/cadastrar-novo-cliente' element={<RegisterNewClients />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
