// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from './App'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import User from './pages/User'

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/product/" component={ProductList} exact />
      <Route path="/user" component={User} exact />
      <Route path="/product/:productId" component={ProductDetail} exact />
    </Switch>
  </App>
)

export default AppRoutes
