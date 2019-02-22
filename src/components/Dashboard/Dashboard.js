import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//Components
import House from '../House/House'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        this.getHouses()
    }
    
    //AXIOS requests:
    getHouses = () => {
        axios.get('/api/houses').then(res => {
            const houses = res.data
            this.setState({
                houses:houses
            })
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then(() => {
            this.getHouses()
        })
    }
    
    render(){
        const houseDisplay = this.state.houses.map(house => {
            return(
                <div key ={house.id}>
                    <House house={house} deleteHouseFn={this.deleteHouse} />
                </div>
            )
        })
        return(
            <div>
                <h1>
                    Dashboard
                    <Link
                        to="/wizard/Step1">
                        Add New Property
                    </Link>
                    {houseDisplay}
                </h1>
            </div>
        )
    }
}