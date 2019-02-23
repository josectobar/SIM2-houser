import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { updateImgUrl } from '../../../../ducks/reducer'

class StepTwo extends Component {
    constructor(){
        super()
        this.state = {
            img_url:``
        }
    }

    componentDidMount(){
        const { img_url } = this.props
        this.setState({
            img_url
        })
    }

    handleUserInput =(event) => {    
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNext = () => {
        const { img_url } = this.state
        this.props.updateImgUrl(img_url)
        this.props.history.push('/wizard/Step3')
    }
    
    render(){
        const { img_url } = this.state
        return(
            <div>
                <h1>
                    Step Two
                </h1>
                <input 
                    name="img_url"
                    onChange={this.handleUserInput} 
                    value={img_url} 
                    type="text"
                    placeholder="Image URL"/>
                <button onClick={() => this.handleNext()}>
                    Next Step
                </button>
                <Link
                    to="/wizard/Step1">
                    Previous step
                </Link>
            </div>
        )
    }

}

function mapStateToProps( state ) {
    const { img_url } = state
    return {
        img_url
    }
}

export default connect(mapStateToProps, { updateImgUrl } )(StepTwo)