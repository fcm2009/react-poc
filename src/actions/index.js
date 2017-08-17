import axios from 'axios'


export const receiveUser = (userProfile) => {
    return {
        type: RECEIVE_USER,
        userProfile
    }
}

export const updateName = name => {
    return {
        type: UPDATE_NAME,
        name
    }
}

export const updateAge = age => {
    return {
        type: UPDATE_AGE,
        age
    }
}

export const loggedIn = token => {
    return {
        type: LOGGEDIN,
        token
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const fetchUser = () => dispatch => {
    axios.get(`http://localhost:3000/user/0`)
        .then(response => response.data)
        .then(userProfile => dispatch(receiveUser(userProfile)))
}

export const updateProfile = () => (dispatch, getState) => {
    axios.post('http://localhost:3000/user/0', getState().get('userProfile'))
        .then(response => response.data)
        .then(userProfile => dispatch(receiveUser(userProfile)))
}

export const login = (username, password) => dispatch => {
    axios.post('http://localhost:3000/login', { username, password })
        .then(response => response.data)
        .then(token => dispatch(loggedIn(token)))
}


export const RECEIVE_USER = 'RECEIVE_USER'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_AGE = 'UPDATE_AGE'
export const LOGGEDIN = 'LOGGEDIN'
export const LOGOUT = 'LOGOUT'
