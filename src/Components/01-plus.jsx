import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOneToValue } from '../02-actions/index'

class Plus extends React.Component{
    render(){

        const plusExe = () => {
            console.log("Add One Clicked...")
            this.props.addOneToValue()
        }

        return(
            <div>
                <button onClick={plusExe}>Plus-1</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addOneToValue }, dispatch)
}


export default connect(null, mapDispatchToProps)(Plus)