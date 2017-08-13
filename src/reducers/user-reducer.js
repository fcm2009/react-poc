import {GET_USER_PROFILE} from '../actions/constants'; 

const initState = {
    user: {}
}
const userReducer = function(state =initState, action) {
    switch(action.type) {
        case GET_USER_PROFILE:
            return Object.assign({}, state, {user: action.user})
    }
    return state
}
export default userReducer; 