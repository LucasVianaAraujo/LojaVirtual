import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Navigation from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
