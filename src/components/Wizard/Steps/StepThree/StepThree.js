import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

//Redux
import { connect } from 'react-redux'
import { updateMortgage, updateRent } from '../../../../ducks/reducer'

class StepThree extends Component {
    //axios new house request:
    handleNewHouse = () => {
        Axios.post('/api/house', this.state).then(() => {
            this.props.history.push('/')
        })
    }

    handleUserInput =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const { mortgage_amount, desire_rent } = this.props

        return(
            <div>
                <h1>
                    Step Three
                </h1>
                <h4>
                    Recommended Rent: 
                </h4>
                <input 
                    onChange={(e) => this.props.updateMortgage(e.target.value)} 
                    value={mortgage_amount} 
                    type="number"
                    placeholder="0"/>
                <input 
                    onChange={(e) => this.props.updateRent(e.target.value)} 
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
    const { mortgage_amount, desire_rent } = state
    return {
        mortgage_amount,
        desire_rent
    }
}

export default connect(mapStateToProps, { updateMortgage, updateRent } )(StepThree)