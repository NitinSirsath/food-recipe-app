import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GlobalProvider } from './context/globalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
 <GlobalProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </GlobalProvider>
)
