import React from 'react'
import { BackgroundImage, Text, Box, Heading } from 'pcln-design-system'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getFlight } from '../store'

import FlightForm from './FlightForm'
import Flights from './Flights'

const StyledHeading = styled(Heading)`
    width: auto;
    text-shadow: #000000 0px 0px 5px;
    margin: 35px 70px 70px 70px
`

const StyledBackground = styled(BackgroundImage)`
    margin: -8px
`

const StyledText = styled(Text)`
    width: auto;
    margin: -70px 0 0px 72px;
    text-shadow: #000000 0px 0px 5px
`

class Main extends React.Component {
    constructor() {
        super()

        this.state = {
            departure: '',
            arrival: '',
            leaving: '',
            returning: '',
            passengers: 1,
            seat: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    async handleSubmit(evt) {
        evt.preventDefault()
        // dispatch a thunk to redux
        await this.props.sendFlightDetails(this.state)

        this.setState({
            departure: '',
            arrival: '',
            leaving: '',
            returning: '',
            seat: ''
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.loading
                    ? <Flights state={this.state}/>
                    : <StyledBackground
                        image='https://tce-live2.s3.amazonaws.com/media/media/be7a97e5-19d2-4df5-b348-a549dd5b3fe7.jpg'
                        height='600px'>
                        <Box p={4}>
                            <StyledHeading
                                fontSize={5}
                                align='center'
                                color='white'>
                                Looking for top things to do at your destination?
                            </StyledHeading>
                            <StyledText fontSize={4} color='white' normal>We compare thousands of deals to get you there</StyledText>
                        </Box>
                        <FlightForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>                        
                    </StyledBackground>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading
})

const mapDispatchToProps = dispatch => ({
    sendFlightDetails: (flight) => dispatch(getFlight(flight))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)