import React from 'react'

//Router dependencies
import { Switch, Route } from 'react-router-dom'

//Routed components:
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'

export default (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/wizard" component={Wizard} />
    </Switch>
)