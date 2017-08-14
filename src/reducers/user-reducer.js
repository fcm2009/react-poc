import {UPDATE_USER_NAME,UPDATE_USER_AGE,GET_USER_PROFILE} from '../actions/constants'; 
const initState = {
    user: {id:0, name:'', age:0}
};
export default function userReducer(state =initState, action) {
    switch(action.type) {
        case GET_USER_PROFILE:
            return Object.assign({}, state, {user: action.user})
        case UPDATE_USER_NAME:
            return {user: {id: state.user.id, name: action.name, age: state.user.age}}
        case UPDATE_USER_AGE: 
            return {user: {id: state.user.id, name: state.user.name, age: action.age}}
        default: 
            return state
    }
}