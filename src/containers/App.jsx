import React from 'react'
import { BrowserRouter, Route, HashRouter, withRouter  } from 'react-router-dom'
import UserProfileContainer from './UserProfileContainer.jsx'
import Counter from './Counter.jsx'
import Login from './Login.jsx'
import Home from '../components/Home.jsx'
import Navigation from '../components/Navigation.jsx'
import PrivateRoute from '../utils/PrivateRoute.jsx'
import { connect } from 'react-redux'

import AppBar from 'react-toolbox/lib/app_bar'
import { Layout, NavDrawer, Panel } from 'react-toolbox'

class App extends React.Component {

    constructor() {
        super()
        this.state = { active: false }
        this.toggleDrawerActive = this.toggleDrawerActive.bind(this)
    }

    toggleDrawerActive() {
        this.setState({ active: !this.state.active })
    }

    render() {
        return (
            <div>
                <AppBar title='E-Sales' leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive }>
                                
                </AppBar>
                <Layout>
                    <HashRouter>
                        <div>
                            <NavDrawer 
                                active={ this.state.active }
                                onOverlayClick={ this.toggleDrawerActive }>
                                    <Navigation />
                            </NavDrawer>
                            <Panel style={{ padding: 10 }}>
                                <Route exact path='/' component={ Home } />
                                <PrivateRoute path='/profile' token={ this.props.token } component={ UserProfileContainer } />
                                <Route path='/login' component={ Login } />
                                <Counter />
                            </Panel>
                        </div>
                    </HashRouter>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}


export default connect(mapStateToProps)(App)
