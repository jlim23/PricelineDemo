import React from 'react'
import {Box, Container, Text, Flex} from 'pcln-design-system'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    &:link, &:active, &:visited, &:hover {
        text-decoration: none
    }
`

const Header = () => {
    return (
        <div>
            <Container maxWidth={1440} >
                <Box p={3} m={-2} color='white' bg='blue'>
                    <Flex>
                        <Text fontSize={14} bold>Find the best flight deals. Book your trip with us today!</Text>
                        <StyledLink to='https://github.com/jlim23/PricelineDemo'>
                            <Text ml={710} fontSize={14} color='white' bold>https://github.com/jlim23/PricelineDemo</Text>
                        </StyledLink>
                    </Flex>
                </Box>
            </Container>
        </div>
    )
}

export default Header