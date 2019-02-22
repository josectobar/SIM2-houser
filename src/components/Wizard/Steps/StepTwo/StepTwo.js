import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            img_url:``
        }
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
                    Step Two
                </h1>
                <input 
                    name="img_url" 
                    onChange={this.handleUserInput} 
                    value={this.state.img_url} 
                    type="text"
                    placeholder="Image URL"/>
                <Link
                    to="/wizard/Step3">
                    Next
                </Link>
                <Link
                    to="/wizard/Step1">
                    Previous step
                </Link>
            </div>
        )
    }

}