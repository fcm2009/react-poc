import React from 'react'
import { Route, Redirect, withRouter } from 'react-router'


const PrivateRoute = ({ token, path, component }) => {
    return (
        token ?
            <Route path={ path } component={ component } />: 
            <Route path={ path } render={ () => <Redirect to='/login' /> } />
    )
}


export default PrivateRoute