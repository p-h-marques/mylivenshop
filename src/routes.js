import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Start from './components/start'
import './reset.css'

function RoutesList() {
    return (
        <Switch>
            <Route exact path="/start">
                <Start></Start>
            </Route>

            <Route exact path="*">
                <Redirect to="/start" />
            </Route>
        </Switch>
    )
}

export default RoutesList