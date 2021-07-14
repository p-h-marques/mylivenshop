import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import RoutesList from './routes'

import Provider from './state/Provider'

function App() {
    return (
        <Provider>
            <Router>
                <RoutesList></RoutesList>
            </Router>
        </Provider>
    )
}

export default App