import React from 'react'
import {Box, Container, Text} from 'pcln-design-system'

const Header = () => {
    return (
        <div>
            <Container maxWidth={1440} >
                <Box p={3} m={-2} color='white' bg='blue'>
                    <Text fontSize={14} bold>Find the best flight deals. Book your trip with us today!</Text>
                </Box>
            </Container>
        </div>
    )
}

export default Header