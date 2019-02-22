import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            mortgage_amount:``,
            desire_rent: ``
        }
    }

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
                    value={this.state.mortgage_amount} 
                    type="number"
                    placeholder="0"/>
                <input 
                    name="desire_rent" 
                    onChange={this.handleUserInput} 
                    value={this.state.desire_rent} 
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