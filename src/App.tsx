import React, { FC, Suspense } from 'react'

import './App.css'
import Layout from './pages'

const App: FC = ({ children }) => {
  return (
    <Suspense fallback="cargando...">
      <Layout>{children}</Layout>
    </Suspense>
  )
}

export default App
