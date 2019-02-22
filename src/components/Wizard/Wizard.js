import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { cancelWizard } from '../../ducks/reducer'

//Route links:
import { Route, Link, Switch } from 'react-router-dom'
import StepOne from './Steps/StepOne/StepOne'
import StepTwo from './Steps/StepTwo/StepTwo'
import StepThree from './Steps/StepThree/StepThree'

class Wizard extends Component {

    handleCancel = () => {
        this.props.cancelWizard()
        this.props.history.push('/')
    }

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
                <button
                    onClick={() => this.handleCancel()}>
                    Cancel
                </button>
            </div>
        )
    }
}

export default connect(null, { cancelWizard })(Wizard)