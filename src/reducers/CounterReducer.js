import { fromJS } from 'immutable'
import { TICK, TOGGLE_COUNTER } from '../actions'


const initalState = fromJS({
    remainingTime: 30,
    started: false
})


export default (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_COUNTER:
            return state.update('started', started => !started) 
        case TICK:
            return state.update('remainingTime', remainingTime => remainingTime - 1)
        default:
            return state
    }
}