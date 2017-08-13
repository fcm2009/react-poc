import {GET_USER_PROFILE} from './constants'
export function getUserProfileAction(user) {
    return {
        type:  GET_USER_PROFILE,
        user
    };
}