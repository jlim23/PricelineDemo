import React from 'react'
import { Hug, Card, Stamp, Icon, Text, Divider, Button, Container, GreenButton } from 'pcln-design-system'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from './NavBar'

const StyledHug = styled(Hug)`
    width: 833px;
    margin: 38px 285px 0 285px
`

const StyledCard = styled(Card)`
    width: 833px;
    margin: 38px 285px 40px 285px
`

const StyledButton = styled(Button)`
    margin: 5px 0 5px 693px
`

const StyledText = styled(Text)`
    margin: -26px 0px 0 717px
`

const StyledContainer = styled(Container)`
    margin: -25px 0 -51px 0
`

const StyledIcon = styled(Icon)`
    display: inline-block
`

const formatAirport = airport => airport.split('(')[1].slice(0, -1)
const formatDate = date => date.slice(0, 5)
const formatPlace = place => place.split(',')[0]

class Flights extends React.Component {
    constructor() {
        super()

        this.state = {
            departure: 'New York City, NY (JFK)',
            arrival: 'Seattle, WA (SEA)',
            leaving: '05/09/2019',
            returning: '05/13/2019',
            passengers: 1,
            seat: 'First'
        }
    }

    render () {
        const { departure, arrival, leaving, returning } = this.props.flight
        let departFrom = formatAirport(departure || this.state.departure) || 'New York'
        let arriveAt = formatAirport(arrival || this.state.arrival)
        let leavingOn = formatDate(leaving || this.state.leaving)
        let returningOn = formatDate(returning || this.state.returning)
        let city = formatPlace(arrival || this.state.arrival)

        return (
            <div>
                <Divider />
                <StyledHug
                    m={15}
                    bg='blue'
                    text={
                        <div>
                            <Text.span mr={415} bold>EXPRESS DEAL</Text.span>
                            <Text.span ml={1} mr={1} bold>Save $111!</Text.span>
                            <Text.span mr={1}>That's 24% off the retail price.</Text.span>
                        </div>
                    }>
                    <Card p={3}>
                        <Stamp color='green'>
                            <Icon name='Discount' size={16} mr={1} /> budget friendly
                        </Stamp>
                        <Text.span color='green' fontSize={1} mx={12}>Watching your wallet? Express Deals are your best way to save.</Text.span>
                        <Text mt={3} fontSize={1} bold>Thurs</Text>
                        <Text.span fontSize={1} bold>{leavingOn}</Text.span>
                        <Text.span mx={4} fontSize={1} bold>{departFrom} - {arriveAt}</Text.span>
                        <Text.span mr={1} fontSize={1} bold>Morning</Text.span>
                        <Text.span mr={1} fontSize={1}>takeoff</Text.span>
                        <StyledContainer>
                            <Text ml={706} fontSize={1} color='blue' bold>$</Text>
                            <StyledText fontSize={4} color='blue' bold>357</StyledText>
                            <Text mt={-31} ml={759} fontSize={1} color='blue'>.99</Text>
                            <Text mt={9} ml={716} fontSize={1} color='gray' normal>per person</Text>
                            <Link to='/checkout'><StyledButton px={2} onClick={() => this.props.getCity(city)}>View Details</StyledButton></Link>
                        </StyledContainer>
    
                        <Divider width={3/4}/>
    
                        <Text mt={3} fontSize={1} bold>Mon</Text> 
                        <Text.span fontSize={1} bold>{returningOn}</Text.span>
                        <Text.span mx={4} fontSize={1} bold>{arriveAt} - {departFrom}</Text.span>
                        <Text.span mr={1} fontSize={1} bold>Night</Text.span>
                        <Text.span mr={1} fontSize={1}>takeoff</Text.span>
                        <Icon name='Overnight' size={16}/>
                        
                    </Card>
                </StyledHug>
    
                <StyledCard
                    boxShadowSize='sm'
                    borderWidth={0}
                    borderRadius={6}
                    p={4}>
    
                    <Stamp color='red'>
                            <Icon name='TrendingUp' size={16} mr={1} /> Hurry! Only 1 seat left at this price
                    </Stamp>
                    <Card mt={1} borderWidth={0}>
                        <StyledIcon name='BoxEmpty' size={16} mr={1} color='borderGray'/>
                        <Text.span mx={25} mt={3} fontSize={1} bold>Thurs</Text.span>
                        <Text.span ml={23} fontSize={1} normal>American</Text.span>
                        <Text.span ml={35} mr={1} fontSize={1} bold>8:10a</Text.span>
                        <Text.span mr={1} fontSize={1}>----------------</Text.span>
                        <Text.span mr={1} fontSize={1} bold>4:27p</Text.span>
                        <Text.span ml={102} fontSize={1} normal>1 Stop</Text.span>
                    </Card>
                    <Card borderWidth={0}>
                        <Text.span mx={45} fontSize={1} bold>{leavingOn}</Text.span>
                        <Text.span ml={116} fontSize={1} normal>{departFrom}</Text.span>
                        <Text.span ml={94} fontSize={1} normal>{arriveAt}</Text.span>
                        <Text.span ml={117} fontSize={1} color='darkGray' normal>11h 17m</Text.span>
                    </Card>
                    <StyledContainer>
                        <Text ml={675} fontSize={1} color='green' bold>$</Text>
                        <Text mt={-26} ml={686} fontSize={4} color='green' bold>457</Text>
                        <Text mt={-31} ml={732} fontSize={1} color='green'>.20</Text>
                        <Text mt={9} ml={685} fontSize={1} color='gray' normal>per person</Text>
                        <Link to='/checkout'><GreenButton mt={1} ml={663} px={2} onClick={() => this.props.getCity(city)}>View Details</GreenButton></Link>
                    </StyledContainer>
    
                    <Divider width={3/4}/>
                    
                    <Card mt={1} borderWidth={0}>
                        <StyledIcon name='BoxEmpty' size={16} mr={1} color='borderGray'/>
                        <Text.span mx={25} mt={3} fontSize={1} bold>Mon</Text.span>
                        <Text.span mx={4} fontSize={1} normal>American</Text.span>
                        <Text.span ml={2} mr={1} fontSize={1} bold>11:41p</Text.span>
                        <Text.span mr={1} fontSize={1}>----------------</Text.span>
                        <Text.span mr={1} fontSize={1} bold>1:10p</Text.span>
                        <Text.span ml={99} fontSize={1} normal>2 Stops</Text.span>
                    </Card>
                    <Card borderWidth={0}>
                        <Text.span mx={45} fontSize={1} bold>{returningOn}</Text.span>
                        <Text.span ml={123} fontSize={1} normal>{arriveAt}</Text.span>
                        <Text.span ml={93} fontSize={1} normal>{departFrom}</Text.span>
                        <Text.span ml={107} fontSize={1} color='darkGray' normal>10h 29m</Text.span>
                    </Card>
                </StyledCard>
    
                <StyledCard
                    boxShadowSize='sm'
                    borderWidth={0}
                    borderRadius={6}
                    p={4}>
    
                    <Stamp color='purple'>
                            <Icon name='TrendingUp' size={16} mr={1} /> 529 people are looking at this right now
                    </Stamp>
                    <Card mt={1} borderWidth={0}>
                        <StyledIcon name='BoxEmpty' size={16} mr={1} color='borderGray'/>
                        <Text.span mx={25} mt={3} fontSize={1} bold>Thurs</Text.span>
                        <Text.span ml={23} fontSize={1} normal>Delta</Text.span>
                        <Text.span ml={66} mr={1} fontSize={1} bold>11:30a</Text.span>
                        <Text.span mr={1} fontSize={1}>----------------</Text.span>
                        <Text.span mr={1} fontSize={1} bold>2:32p</Text.span>
                        <Text.span ml={97} fontSize={1} normal>Nonstop</Text.span>
                    </Card>
                    <Card borderWidth={0}>
                        <Text.span mx={45} fontSize={1} bold>{leavingOn}</Text.span>
                        <Text.span ml={121} fontSize={1} normal>{departFrom}</Text.span>
                        <Text.span ml={93} fontSize={1} normal>{arriveAt}</Text.span>
                        <Text.span ml={115} fontSize={1} color='darkGray' normal>6h 2m</Text.span>
                    </Card>
                    <StyledContainer>
                        <Text ml={675} fontSize={1} color='green' bold>$</Text>
                        <Text mt={-26} ml={686} fontSize={4} color='green' bold>424</Text>
                        <Text mt={-31} ml={736} fontSize={1} color='green'>.97</Text>
                        <Text mt={9} ml={685} fontSize={1} color='gray' normal>per person</Text>
                        <Link to='/checkout'><GreenButton mt={1} ml={663} px={2} onClick={() => this.props.getCity(city)}>View Details</GreenButton></Link>
                    </StyledContainer>
    
                    <Divider width={3/4}/>
                    
                    <Card mt={1} borderWidth={0}>
                        <StyledIcon name='BoxEmpty' size={16} mr={1} color='borderGray'/>
                        <Text.span mx={25} mt={3} fontSize={1} bold>Mon</Text.span>
                        <Text.span mx={4} fontSize={1} normal>American</Text.span>
                        <Text.span ml={7} mr={1} fontSize={1} bold>11:41p</Text.span>
                        <Text.span mr={1} fontSize={1}>----------------</Text.span>
                        <Text.span mr={1} fontSize={1} bold>1:10p</Text.span>
                        <Text.span ml={108} fontSize={1} normal>2 Stops</Text.span>
                    </Card>
                    <Card borderWidth={0}>
                        <Text.span mx={45} fontSize={1} bold>{returningOn}</Text.span>
                        <Text.span ml={123} fontSize={1} normal>{arriveAt}</Text.span>
                        <Text.span ml={94} fontSize={1} normal>{departFrom}</Text.span>
                        <Text.span ml={113} fontSize={1} color='darkGray' normal>10h 29m</Text.span>
                    </Card>
                </StyledCard>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    flight: state.flightDetails
})

export default connect(mapStateToProps)(Flights)