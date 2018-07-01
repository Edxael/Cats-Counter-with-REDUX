import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { minusOneToValue } from '../02-actions/index'

class Plus extends React.Component{
    render(){

        const minusExe = () => {
            console.log("Add One Clicked...")
            this.props.minusOneToValue()
        }

        return(
            <div>
                <button onClick={minusExe}>Minus-1</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ minusOneToValue }, dispatch)
}


export default connect(null, mapDispatchToProps)(Plus)

