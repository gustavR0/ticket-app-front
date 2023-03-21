import React from 'react'
import ReactDOM from 'react-dom/client'
import { TicketApp } from './TicketApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TicketApp />
  </BrowserRouter>
)
