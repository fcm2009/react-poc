import { fromJS } from 'immutable'
import { RECEIVE_USER, UPDATE_NAME, UPDATE_AGE } from '../actions'


const initalState = fromJS({
    id: 0, 
    name: '',
    age: ''
})


export default (state = initalState, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return fromJS(action.userProfile)
        case UPDATE_NAME:
            return state.set('name', action.name)
        case UPDATE_AGE:
            return state.set('age', action.age)
        default:
            return state
    }
}