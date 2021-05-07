import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import ProductsPage from '../pages/ProductsPage';
import ClientProfile from '../pages/ClientProfile';
import ClientOrdersPage from '../pages/ClientOrdersPage';
import AdminOrdersPage from '../pages/AdminOrdersPage';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ RegisterPage } />
    <Route exact path="/products" component={ ProductsPage } />
    <Route exact path="/profile" component={ ClientProfile } />
    <Route exact path="/orders" component={ ClientOrdersPage } />
    <Route exact path="/admin/orders" component={ AdminOrdersPage } />
  </BrowserRouter>
);

export default Routes;
