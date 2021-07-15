import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import './reset.css'
import Products from './pages/products'
import Cart from './pages/cart'
import Container from './containers/main'

function RoutesList() {
    return (
        <Container>
            <Switch>
                <Route exact path="/products">
                    <Products />
                </Route>

                <Route exact path="/cart">
                    <Cart />
                </Route>

                <Route exact path="*">
                    <Redirect to="/products" />
                </Route>
            </Switch>
        </Container>
    )
}

export default RoutesList