import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Box, Flex, Container, Icon, BlockLink, Banner, Heading, Text} from 'pcln-design-system'

const StyledLink = styled(Link)`
    text-decoration: none
`
const Home = () => {
    return (
        <div>
            <Container maxWidth={1440} >
                <Box p={3} m={-2} color='white' bg='blue'>
                    <Text fontSize={14} bold>Find the best flight deals. Book your trip with us today!</Text>
                </Box>
                {/* <Banner showIcon={false} bg='white' px={3} py={0} my={8}> */}
                    <Flex px={2} px={3} py={2} my={18}>
                        <StyledLink to='/'><Heading fontSize={20} color='blue' bold>priceline</Heading></StyledLink>
                            <Text mt={1} mx={2} fontSize={14} color='gray' bold>Hotels</Text>
                            <Text mt={1} mx={2} fontSize={14} color='gray' bold>Cars</Text>
                            <Text mt={1} mx={2} fontSize={14} color='gray' bold>Flights</Text>
                            <Text mt={1} mx={2} fontSize={14} color='gray' bold>Packages</Text>
                            <Text mt={1} mx={2} fontSize={14} color='gray' bold>Cruises</Text>
                            <Text mt={1} mx={2} fontSize={14} color='gray' bold>Groups</Text>
                            <Text mt={1} ml='auto' mr={2} fontSize={14} color='blue' bold>Sign In</Text>
                            <Icon mr={2} mt={1} name='ChevronDown' color='blue'/>
                            <Icon mr={2} name='Bag' color='blue'/>
                            <Text mt={1} mr={2} fontSize={14} color='blue' bold>My Trips</Text>
                            <Icon mr={2} mt={1} name='ChevronDown' color='blue'/>
                            <Text mt={1} mr={2} fontSize={14} color='blue' bold>Help</Text>
                            <Icon mr={2} mt={1} name='ChevronDown' color='blue'/>
                    </Flex>
                {/* </Banner> */}
            </Container>
        </div>
    )
}

export default Home;