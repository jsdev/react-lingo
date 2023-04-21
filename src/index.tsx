import './index.css'

import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import App from './App'
import { AlertProvider } from './context/AlertContext'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')

// Create a root.
const root = ReactDOMClient.createRoot(container as HTMLElement)
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOMClient, 1000);
}

root.render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
