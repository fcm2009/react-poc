import {getUserProfileAction} from '../actions/user-actions.js'
import {store} from '../index'
export function getUserProfile() {
    return fetch(`http://localhost:3000/user/0`)
        .then(result=>result.json())
        .then(response => store.dispatch(getUserProfileAction(response))); 
}

export function postUserProfile(user) { 
    return fetch(`http://localhost:3000/user/0`, {
        method: 'POST', body: JSON.stringify(user), headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(result => store.dispatch(getUserProfileAction(result))); 
}