import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { updateImgUrl } from '../../../../ducks/reducer'

class StepTwo extends Component {
    render(){
        return(
            <div>
                <h1>
                    Step Two
                </h1>
                <input 
                    onChange={(e) => this.props.updateImgUrl(e.target.value)} 
                    value={this.props.img_url} 
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
function mapStateToProps( state ) {
    const { img_url } = state
    return {
        img_url
    }
}

export default connect(mapStateToProps, { updateImgUrl } )(StepTwo)