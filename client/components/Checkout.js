import React from 'react'
import { connect } from 'react-redux';
import { Box, Text, Banner, Flex, Icon, Heading, Hug, Card } from 'pcln-design-system'
import styled from 'styled-components'

import NavBar from './NavBar'

const StyledHug = styled(Hug)`
    width: 833px;
    margin: 38px 285px 0 285px
`

const formatPlace = place => place.split(',')[0]

class Checkout extends React.Component {
    render () {
        const { arrival } = this.props.flight
        let city = formatPlace(arrival)

        return (
            <div>
                <NavBar />
                <Box m={-2} p={3} color='darkGreen' bg='#cec'>
                    <Text  bold>You picked a great flight! If your plans change, cancel online for free in the next 24 hours!</Text>
                </Box>
                <Banner
                    showIcon={false}
                    bg='lightBlue'
                    my={30}
                    mx={-2}
                    p={3}>
                    <Flex>
                        <Icon name='CityView' />
                        <Box pl={2}>
                        <Heading fontSize={2} bold>Top {city} Attractions</Heading>
                        <Text>
                            Make sure to explore these suggested places for things to do!
                        </Text>
                        </Box>
                    </Flex>
                </Banner>
                <StyledHug
                    bg='darkBlue'
                    text={<Text.span fontSize={2} bold>See what this city has to offer:</Text.span>}>
                    <Card p={4}>
                        {
                            this.props.places.length 
                            ? this.props.places.map(place => (
                                <div>
                                    <Icon
                                        name='ChevronRight'
                                        color='orange'
                                        />
                                    <Text.span color='darkGray'>{place.name}</Text.span>
                                </div>
                            ))
                            : this.props.loading ? 
                                <Heading.h2 color='darkOrange' textAlign='center'>Loading attractions...</Heading.h2>
                                : <Heading.h2 color='darkOrange' textAlign='center'>No attractions found</Heading.h2>
                        }
                    </Card>
                </StyledHug>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    flight: state.flightDetails,
    loading: state.loading,
    places: state.pointsOfInterest
})

export default connect(mapStateToProps)(Checkout)