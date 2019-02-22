import React, { Component } from 'react'

//Route links:
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default class Wizard extends Component {

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
            </div>
        )
    }
}