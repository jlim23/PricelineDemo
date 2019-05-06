import React from 'react'
import { connect } from 'react-redux';
import { Box, Text, Banner, Flex, Icon, Heading } from 'pcln-design-system'

import NavBar from './NavBar'

const formatPlace = place => place.split(',')[0]

class Checkout extends React.Component {
    render () {
        console.log('CHECKOUT', this.props.flight)
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    flight: state.flightDetails
})

export default connect(mapStateToProps)(Checkout)