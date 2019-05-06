import React from 'react'
import { getPointsOfInterest } from '../store'
import { connect } from 'react-redux';

import NavBar from './NavBar'

class Checkout extends React.Component {
    render () {
        console.log('CHECKOUT', this.props.flight)
        return (
            <div>
                <NavBar />
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    flight: state.flightDetails
})

const mapDispatchToProps = dispatch => ({
    getPointsOfInterest: (place) => dispatch(getPointsOfInterest(place))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)