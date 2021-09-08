import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import './config/i18n'
import reportWebVitals from './reportWebVitals'

// Routes
import AppRoutes from './routes'

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
