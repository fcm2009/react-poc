import { fromJS } from 'immutable'
import { TICK, START_COUNTER, STOP_COUNTER } from '../actions'


const initalState = fromJS({
    remainingTime: 30,
    started: false
})


export default (state = initalState, action) => {
    switch (action.type) {
        case START_COUNTER:
            return state.set('started', true)
        case STOP_COUNTER:
            return state.set('started', false)
        case TICK:
            return state.update('remainingTime', remainingTime => remainingTime - 1)
        default:
            return state
    }
}