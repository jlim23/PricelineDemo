import React from 'react'
import { connect } from 'react-redux'

const Flights = () => {
    return (
        <div>

        </div>
    )
}

const mapStateToProps = dispatch => ({
    flight: state.flightDetails
})

export default connect(mapStateToProps)(Flights)