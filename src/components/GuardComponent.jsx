import React from 'react'
import {Route, Redirect} from 'react-router-dom'
const GuardComponent = ({token, path, component}) => {
    if(token) {
        console.log(component)
        return <Route path={path} component={component}/>
    }
    else 
        return <Route path={path} component={() => <Redirect to='/login'/>}/>
}



export default GuardComponent