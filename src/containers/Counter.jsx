import React from 'react'
import { connect } from 'react-redux'
import { tick, deactivateUserProfileEditor, stopCounter } from '../actions'
import { Snackbar } from 'react-toolbox'


class Counter extends React.Component {
    
    constructor() {
        super()
        this.state = { intervalId: null }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.started && !this.props.started && this.props.remainingTime != 0) {
            const intervalId = setInterval(this.props.tick, 1000)
            this.setState({ intervalId: intervalId })
        } else if(nextProps.remainingTime == 0 && this.props.remainingTime != 0) {
            this.props.stopCounter()
            this.props.deactivateUserProfileEditor()
        } else if(!nextProps.started) {
            clearInterval(this.state.intervalId)
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    render() {
        return (
            <Snackbar active={ this.props.remainingTime > 0 &&  this.props.started } >
                You have 30 Seconds to update Your Profile. Remaning Time: { this.props.remainingTime }
            </Snackbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        remainingTime: state.counter.get('remainingTime'),
        started: state.counter.get('started')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tick: () => dispatch(tick()),
        stopCounter: () => dispatch(stopCounter()),
        deactivateUserProfileEditor: () => dispatch(deactivateUserProfileEditor())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)