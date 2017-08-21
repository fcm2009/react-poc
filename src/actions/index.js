import axios from 'axios'


export const receiveUser = userProfile => {
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

export const tick = () => {
    return {
        type: TICK
    }
}

export const startCounter = () => {
    return {
        type: START_COUNTER
    }
}

export const stopCounter = () => {
    return {
        type: STOP_COUNTER
    }
}

export const activateUserProfileEditor = () => {
    return {
        type: ACTIVATE_USER_PROFILE_EDITOR
    }
}

export const deactivateUserProfileEditor = () => {
    return {
        type: DEACTIVATE_USER_PROFILE_EDITOR
    }
}

export const fetchUser = () => (dispatch, getState) => {
    axios.get(`http://localhost:3000/user/0`, { headers: { Authorization: `Bearer ${getState().token}` }})
        .then(response => response.data)
        .then(userProfile => dispatch(receiveUser(userProfile)))
}

export const updateProfile = () => (dispatch, getState) => {
    axios.post('http://localhost:3000/user/0', getState().userProfile.toJS(), { headers: { Authorization: `Bearer ${getState().token}` }})
        .then(response => response.data)
        .then(userProfile => dispatch(receiveUser(userProfile)))
}

export const login = (username, password) => dispatch => {
    axios.post('http://localhost:3000/login', { username, password })
        .then(response => response.data)
        .then(response => dispatch(loggedIn(response.token)))
}


export const RECEIVE_USER = 'RECEIVE_USER'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_AGE = 'UPDATE_AGE'
export const LOGGEDIN = 'LOGGEDIN'
export const LOGOUT = 'LOGOUT'
export const TICK = 'TICK'
export const START_COUNTER = 'START_COUNTER'
export const STOP_COUNTER = 'STOP_COUNTER'
export const ACTIVATE_USER_PROFILE_EDITOR = 'ACTIVATE_USER_PROFILE_EDITOR'
export const DEACTIVATE_USER_PROFILE_EDITOR = 'DEACTIVATE_USER_PROFILE_EDITOR'
