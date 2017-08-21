import React from 'react'
import { BrowserRouter, Route, HashRouter  } from 'react-router-dom'
import UserProfileContainer from './UserProfileContainer.jsx'
import Counter from './Counter.jsx'
import Login from './Login.jsx'
import Home from '../components/Home.jsx'
import Navigation from '../components/Navigation.jsx'
import PrivateRoute from '../utils/PrivateRoute.jsx'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'


const App = props => {
    return (
        <HashRouter>
            <div>
                <AppBar />
                <Navigation />
                <Counter />
                <Route exact path='/' component={ Home } />
                <PrivateRoute path='/profile' token={ props.token } component={ UserProfileContainer } />
                <Route path='/login' component={ Login } />
            </div>
        </HashRouter>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}


export default connect(mapStateToProps)(App)
