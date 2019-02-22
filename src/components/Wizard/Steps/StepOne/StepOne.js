import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StepOne extends Component {
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
        return(
            <div>
                <h1>
                    Step One
                </h1>
                <input 
                    name="name" 
                    onChange={this.handleUserInput} 
                    value={this.state.name} 
                    type="text"
                    placeholder="Property name"/>
                <input 
                    name="address" 
                    onChange={this.handleUserInput} 
                    value={this.state.address} 
                    type="text"
                    placeholder="Address"/>
                <input 
                    name="city" 
                    onChange={this.handleUserInput} 
                    value={this.state.city} 
                    type="text"
                    placeholder="City"/>
                <input 
                    name="state" 
                    onChange={this.handleUserInput} 
                    value={this.state.state} 
                    type="text"
                    placeholder="State"/>
                <input 
                    name="zip_code" 
                    onChange={this.handleUserInput} 
                    value={this.state.zip_code} 
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