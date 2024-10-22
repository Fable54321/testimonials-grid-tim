import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App/App'
import './general styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
