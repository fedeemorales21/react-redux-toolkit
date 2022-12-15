import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import {API} from './api/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={API}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
