import React, { Component } from 'react'

//Route links:
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: ``,
            address: ``,
            city: ``,
            state: ``,
            zipCode: ``
        }
    }

    handleUserInput =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
        
    }

    render(){
        return(
            <div>
                <h1>
                    Wizard
                    <Link
                        to="/">
                        Cancel
                    </Link>
                    <input 
                        name="name" 
                        onChange={this.handleUserInput} 
                        value={this.state.name} 
                        type="text"/>
                    <input 
                        name="address" 
                        onChange={this.handleUserInput} 
                        value={this.state.address} 
                        type="text"/>
                    <input 
                        name="city" 
                        onChange={this.handleUserInput} 
                        value={this.state.city} 
                        type="text"/>
                    <input 
                        name="state" 
                        onChange={this.handleUserInput} 
                        value={this.state.state} 
                        type="text"/>
                    <input 
                        name="zipCode" 
                        onChange={this.handleUserInput} 
                        value={this.state.zipCode} 
                        type="number"/>
                </h1>
            </div>
        )
    }
}