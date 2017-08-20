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

export const recieveToken = token => { 
    return {
        type: LOGGED, 
        token
    }
}

export const logoutAction = () => { 
    return {
        type: LOGGOUT
    }
}

export const fetchUser = () => (dispatch, getState) => {
    axios.get(`http://localhost:3000/user/0`, {headers: {'Authorization': 'Bearer ' + getState().get('token') }})
        .then(response => response.data)
        .then(userProfile => dispatch(receiveUser(userProfile)))
}

export const updateProfile = () => (dispatch, getState) => {
    axios.post('http://localhost:3000/user/0', getState().get('userProfile'), {headers: {'Authorization': 'Bearer ' + getState().get('token')}})
        .then(response => response.data)
        .then(userProfile => dispatch(receiveUser(userProfile)))
}

export const login = (user) => (dispatch) => {
    axios.post('http://localhost:3000/login', user )
        .then(response => response.data)
        // .then(token => localStorage.setItem('token', token))
        .then(token => dispatch(recieveToken(token)))
}

export const logout = () => dispatch => {
    localStorage.setItem('token', null);
    dispatch(logout()); 
}


export const RECEIVE_USER = 'RECEIVE_USER'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_AGE = 'UPDATE_AGE'
export const LOGGED = 'LOGGED'
export const LOGGOUT = 'LOGGOUT'