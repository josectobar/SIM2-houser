import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

//Redux
import { connect } from 'react-redux'
import { updateStepThree, cancelWizard } from '../../../../ducks/reducer'

class StepThree extends Component {
    constructor(){
        super()
        this.state = {
            mortgage_amount:``,
            desire_rent: ``
        }
    }

    componentDidMount(){
        const { mortgage_amount, desire_rent } = this.props
        this.setState({
            mortgage_amount,
            desire_rent
        })
    }

    //axios new house request:
    handleNewHouse = () => {
        const { name, address, city, uState, zip_code, img_url } = this.props
        
        const {mortgage_amount, desire_rent } = this.state
        Axios.post('/api/house', {name, address, city, uState, zip_code, mortgage_amount, desire_rent, img_url}).then(() => {
            this.props.cancelWizard()
            this.props.history.push('/')
        })
    }

    handleUserInput =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const { mortgage_amount, desire_rent } = this.state

        return(
            <div>
                <h1>
                    Step Three
                </h1>
                <h4>
                    Recommended Rent: 
                </h4>
                <input 
                    name="mortgage_amount"
                    onChange={this.handleUserInput} 
                    value={mortgage_amount} 
                    type="number"
                    placeholder="0"/>
                <input 
                    name="desire_rent"
                    onChange={this.handleUserInput} 
                    value={desire_rent} 
                    type="number"
                    placeholder="0"/>
                <button
                    onClick={this.handleNewHouse}>
                    Complete
                </button>
                <Link
                    to="/wizard/Step2">
                    Previous step
                </Link>
            </div>
        )
    }
}
function mapStateToProps( state ) {
    const { name, address, city, uState, zip_code, mortgage_amount, desire_rent, img_url } = state

    return {
        name,
        address,
        city,
        uState,
        zip_code,
        mortgage_amount,
        desire_rent,
        img_url
    }
}

export default connect(mapStateToProps, { updateStepThree, cancelWizard } )(StepThree)