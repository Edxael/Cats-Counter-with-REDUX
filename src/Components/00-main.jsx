import React from 'react'

import { connect } from 'react-redux'
import { addOneToValue } from '../02-actions/index'

import Plus from './01-plus'
import Minus from './02-minus'


class Main extends React.Component{
    state = { totalToShow: 0 }

    componentWillReceiveProps(nextProps){
        console.log("Update State with NEXT-PROPS: ", nextProps)
        this.setState({ totalToShow: nextProps.myPropsTotal })
    }


    render(){
        console.log("The Redux-Props: ", this.props.myPropsTotal, "\n ======== \n" )

        return(
            <div>
                <h2>Cats Counter with: REDUX.</h2>
                <hr/>

                <h3>Total Cats: {this.state.totalToShow}</h3>

                <Plus/>
                <Minus/>

                <hr/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("The STATE in MapStateToProps(): ", state)
    return { myPropsTotal: state }
}

export default connect(mapStateToProps, { addOneToValue })(Main)
