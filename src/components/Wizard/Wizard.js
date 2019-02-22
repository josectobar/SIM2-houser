import React, { Component } from 'react'

//Route links:
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default class Wizard extends Component {
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

    //axios new house request:
    handleNewHouse = () => {
        Axios.post('/api/house', this.state).then(() => {
            this.props.history.push('/')
        })
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
                    Wizard
                </h1>
                <Link
                    to="/">
                    Cancel
                </Link>
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
                <button
                    onClick={this.handleNewHouse}>
                    Complete
                </button>
            </div>
        )
    }
}