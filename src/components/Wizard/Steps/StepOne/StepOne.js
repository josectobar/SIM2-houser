import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { updateName, updateAddress, updateCity, updateState, updateZipCode } from '../../../../ducks/reducer'

class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            name: ``,
            address: ``,
            city: ``,
            state: ``,
            zip_code: ``
        }
    }



    handleClearInput = () => {
        this.setState({
            name: ``,
            address: ``,
            city: ``,
            state: ``,
            zip_code: ``
        })
    }

    handleUserInput =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const { name, address, city, uState, zip_code } = this.props
        return(
            <div>
                <h1>
                    Step One
                </h1>
                <input 
                    onChange={(e) => this.props.updateName(e.target.value)} 
                    value={name} 
                    type="text"
                    placeholder="Property name"/>
                <input 
                    onChange={(e) => this.props.updateAddress(e.target.value)} 
                    value={address} 
                    type="text"
                    placeholder="Address"/>
                <input 
                    onChange={(e) => this.props.updateCity(e.target.value)} 
                    value={city} 
                    type="text"
                    placeholder="City"/>
                <input 
                    onChange={(e) => this.props.updateState(e.target.value)} 
                    value={uState} 
                    type="text"
                    placeholder="State"/>
                <input 
                    onChange={(e) => this.props.updateZipCode(e.target.value)} 
                    value={zip_code} 
                    type="number"
                    placeholder="Zip Code"/>
                <Link
                    to="/wizard/Step2">
                    Next
                </Link>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { name, address, city, zip_code } = state
    const uState = state.state
    return {
        name,
        address,
        city,
        uState,
        zip_code
    }
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZipCode } )(StepOne)