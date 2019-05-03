import React from 'react'
import {BackgroundImage, Text, Box, Heading, Container, Label, Radio, GreenButton} from 'pcln-design-system'
import styled, {css} from 'styled-components'

const StyledHeading = styled(Heading)`
    width: auto;
    text-shadow: #000000 0px 0px 5px;
    margin: 70px
`
const StyledBackground = styled(BackgroundImage)`
    margin: -8px
`
const StyledContainer = styled(Container)`
    display: flex;
    margin-left: 110px
`
const StyledBox = styled(Box)`
    width: 57%;
    height: 300px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px

    ${props => props.primary && css`
        width: 100%;
        height: 52px;
        font-size: 14px;
        display: inline-block;
        font-weight: bold
    `}
`
const StyledText = styled(Text)`
    width: auto;
    margin: -70px 0 0px 72px;
    text-shadow: #000000 0px 0px 5px
`
const Flight = () => {
    return (
        <div>
            <StyledBackground
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
                <StyledContainer maxWidth={800} >
                    <StyledBox primary p={3} mx={1} textAlign='center' color='blue' bg='lightBlue'>
                        HOTELS
                    </StyledBox>
                    <StyledBox primary p={3} mx={1} textAlign='center' color='blue' bg='white' bold>
                        FLIGHTS
                    </StyledBox>
                    <StyledBox primary p={3} mx={1} textAlign='center' color='blue' bg='lightBlue'>
                        HOTEL + FLIGHT
                    </StyledBox>
                    <StyledBox primary p={3} mx={1} textAlign='center' color='blue' bg='lightBlue'>
                        CARS
                    </StyledBox>
                    <StyledBox primary p={3} mx={1} textAlign='center' color='blue' bg='lightBlue'>
                        CRUISES
                    </StyledBox>
                </StyledContainer>
                <StyledBox p={30} ml={106} width={0.6} bg='white'>
                    <Label fontSize={1} color='borderGray'>
                        <Radio
                            defaultChecked
                        />
                        {' '}
                        Round-trip
                    </Label>
                    <GreenButton>Find your flight</GreenButton>
                </StyledBox>
            </StyledBackground>
        </div>
    )
}

export default Flight;