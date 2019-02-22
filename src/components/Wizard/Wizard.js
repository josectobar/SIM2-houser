import React, { Component } from 'react'

//Route links:
import { Route, Link, Switch } from 'react-router-dom'
import StepOne from './Steps/StepOne/StepOne'
import StepTwo from './Steps/StepTwo/StepTwo'
import StepThree from './Steps/StepThree/StepThree'

export default class Wizard extends Component {

    render(){

        return(
            <div>
                <h1>
                    Wizard
                </h1>
                <Switch>
                    <Route path="/wizard/step1" component={StepOne} />
                    <Route path="/wizard/step2" component={StepTwo} />
                    <Route path="/wizard/step3" component={StepThree} />
                </Switch>
                <Link
                    to="/">
                    Cancel
                </Link>
            </div>
        )
    }
}