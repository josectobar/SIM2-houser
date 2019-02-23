import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { updateStepOne } from '../../../../ducks/reducer'

class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            name: ``,
            address: ``,
            city: ``,
            uState: ``,
            zip_code: ``
        }
    }

    componentDidMount(){
        const { name, address, city, uState, zip_code } = this.props
        this.setState({
            name,
            address,
            city,
            uState,
            zip_code
        })
    }

    handleUserInput =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNext = () => {
        this.props.updateStepOne(this.state)
        this.props.history.push('/wizard/Step2')
    }

    render(){
        const { name, address, city, uState, zip_code } = this.state
        return(
            <div>
                <h1>
                    Step One
                </h1>
                <input
                    name="name"
                    onChange={this.handleUserInput} 
                    value={name} 
                    type="text"
                    placeholder="Property name"/>
                <input 
                    name="address"
                    onChange={this.handleUserInput} 
                    value={address} 
                    type="text"
                    placeholder="Address"/>
                <input 
                    name="city"
                    onChange={this.handleUserInput} 
                    value={city} 
                    type="text"
                    placeholder="City"/>
                <input 
                    name="uState"
                    onChange={this.handleUserInput} 
                    value={uState} 
                    type="text"
                    placeholder="State"/>
                <input 
                    name="zip_code"
                    onChange={this.handleUserInput} 
                    value={zip_code} 
                    type="number"
                    placeholder="Zip Code"/>
                <button
                    onClick={() => this.handleNext()}>
                    Next
                </button>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { name, address, uState, city, zip_code } = state
    return {
        name,
        address,
        city,
        uState,
        zip_code
    }
}

export default connect(mapStateToProps, { updateStepOne } )(StepOne)