import {UPDATE_USER_NAME,UPDATE_USER_AGE,GET_USER_PROFILE} from './constants'
export function getUserProfileAction(user) {
    return {
        type: GET_USER_PROFILE,
        user
    };
}


export function updateName(name) {
    return {
        type: UPDATE_USER_NAME, 
        name
    }
}

export function updateAge(age) { 
    return {
        type: UPDATE_USER_AGE, 
        age
    }
}