import React from 'react'
import {Box, Container, Flex, FormField, Icon, Input, Label, Button} from 'pcln-design-system'
import styled, {css} from 'styled-components'

const Tabs = styled(Container)`
    display: flex;
    margin-left: 110px
`
const StyledBox = styled(Box)`
    width: 57%;
    height: 300px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    letter-spacing: 0.025em;

    ${props => props.primary && css`
        width: 100%;
        height: 52px;
        font-size: 14px;
        display: inline-block;
        font-weight: bold
    `}
`

const StyledButton = styled(Button)`
    background-color: #0a0;
    cursor: pointer;

    &:hover {
        background-color: #060
    }
`
const StyledInput = styled(Input)`
    width: 371px;
    padding: 10px
`

const StyledLabel = styled(Label)`
    padding-top: 13px;

    ${props => props.primary && css`
        font-size: 12px;
        font-weight: normal;
        display: inline-block;
        letter-spacing: 0.025em;
        margin-top: -16px
    `}
`

const FlightForm = props => {
    return (
        <div>
            <Tabs maxWidth={800} >
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
            </Tabs>
            <StyledBox p={30} ml={106} width={0.6} bg='white'>
                <StyledLabel primary color='darkGray'>
                    <Icon name='RadioChecked' size='20' color='blue'/>
                    {' '}
                    Round-trip
                </StyledLabel>
                <Flex>
                    <FormField>
                        <StyledLabel htmlFor='departure'>Departing from?</StyledLabel>
                        <Icon name='Departure' size='20' color='blue'/>
                        <StyledInput
                            id='departure'
                            name='departure'
                            defaultValue=''
                            placeholder='New York City, NY (JFK)'
                            m={2}
                        />
                    </FormField>
                    <FormField>
                        <StyledLabel htmlFor='arrival'>Going to?</StyledLabel>
                        <Icon name='Arrival' size='20' color='blue'/>
                        <StyledInput
                            id='arrival'
                            name='arrival'
                            defaultValue=''
                            placeholder='New Haven, CT (HVN)'
                            m={2}
                        />
                    </FormField>
                </Flex>
                <StyledButton size='large' width={1}>Find your flight</StyledButton>
            </StyledBox>
        </div>
    )
}

export default FlightForm;