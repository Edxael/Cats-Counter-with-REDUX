import { ADD_ONE, MINUS_ONE } from '../01-constants/index'

export const addOneToValue = () => {
    const action = {
        type: ADD_ONE
    }

    console.log("Fire Action (+): ", action)
    return action
}


export const minusOneToValue = () => {
    const action = {
        type: MINUS_ONE
    }

    console.log("Fire Action (-): ", action)
    return action
}
