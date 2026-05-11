import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContexProvider from './contexts/ContexProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContexProvider>
    <App />
    </ContexProvider>
  </StrictMode>,
)
