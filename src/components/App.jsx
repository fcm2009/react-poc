import React from 'react'
import { BrowserRouter, Route, HashRouter  } from 'react-router-dom'
import UserProfileContainer from '../containers/UserProfileContainer.jsx'
import Login from '../containers/Login.jsx'
import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import PrivateRoute from '../utils/PrivateRoute.jsx'
import { connect } from 'react-redux'


const App = props => {
    return (
        <HashRouter>
            <div>
                <Navigation />
                <Route exact path='/' component={ Home } />
                <PrivateRoute path='/profile' token={ props.token } component={ UserProfileContainer } />
                <Route path='/login' component={ Login } />
            </div>
        </HashRouter>
    )
}

const mapStateToProps = state => {
    return {
        token: state.getIn(['token'])
    }
}


export default connect(mapStateToProps)(App)
