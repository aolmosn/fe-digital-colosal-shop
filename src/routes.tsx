// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from './App'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/product/" component={ProductList} exact />
      <Route path="/product/:productId" component={ProductDetail} exact />
    </Switch>
  </App>
)

export default AppRoutes
