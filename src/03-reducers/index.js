import { ADD_ONE, MINUS_ONE } from '../01-constants/index'

const theValueX = (state = 0, action) => {
    let gralTotal = null

    switch(action.type){
        case ADD_ONE:
            gralTotal =  state + 1
            console.log("Inside Reducer (+): ", gralTotal)
            return gralTotal
        
        case MINUS_ONE:
            gralTotal =  state - 1
            console.log("Inside Reducer (-): ", gralTotal)
            return gralTotal

        default: 
            return state
    }
}

export default theValueX   // <--- Exporting the reducer.
