import React from 'react'
import {Box, Container, Flex, FormField, Icon, Input, Label, Button, Select} from 'pcln-design-system'
import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'

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
    width: 100%;
    background-color: #0a0;
    cursor: pointer;

    &:hover {
        background-color: #060
    }
`
const StyledInput = styled(Input)`
    width: 371px;
    padding: 10px;

    ${props => props.primary && css`
        width: 140px
    `}
`

const StyledSelect = styled(Select)`
    width: 300px;
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
            <form onSubmit={props.handleSubmit}>
                <Tabs maxWidth={813} >
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
                                value={props.state.departure}
                                placeholder='New York City, NY (JFK)'
                                m={2}
                                onChange={props.handleChange}
                            />
                        </FormField>
                        <FormField>
                            <StyledLabel htmlFor='arrival'>Going to?</StyledLabel>
                            <Icon name='Arrival' size='20' color='blue'/>
                            <StyledInput
                                id='arrival'
                                name='arrival'
                                value={props.state.arrival}
                                placeholder='New Haven, CT (HVN)'
                                m={2}
                                onChange={props.handleChange}
                            />
                        </FormField>
                    </Flex>
                    <Flex>
                        <FormField>
                            <StyledLabel htmlFor='leaving'>Leaving</StyledLabel>
                            <Icon name='Calendar' size='20' color='blue'/>
                            <StyledInput
                                id='leaving'
                                name='leaving'
                                value={props.state.leaving}
                                placeholder='05/09/2019'
                                m={2}
                                onChange={props.handleChange}
                            />
                        </FormField>
                        <FormField>
                            <StyledLabel htmlFor='returning'>Returning</StyledLabel>
                            <Icon name='Calendar' size='20' color='blue'/>
                            <StyledInput
                                id='returning'
                                name='returning'
                                value={props.state.returning}
                                placeholder='05/16/2019'
                                m={2}
                                onChange={props.handleChange}
                            />
                        </FormField>
                    </Flex>
                    <Flex>
                        <FormField>
                            <StyledLabel htmlFor='passengers'>Passengers</StyledLabel>
                            <Icon name='User' size='25' color='blue'/>
                            <StyledInput primary
                                id='passengers'
                                width={1/4}
                                defaultValue='1 Adult'
                                m={2}
                                disabled
                            />
                        </FormField>
                        <FormField>
                            <StyledLabel htmlFor='seat'>Seat</StyledLabel>
                            <Icon name='SeatEconomy' size='20' color='blue'/>
                            <StyledSelect
                                id='seat'
                                name='seat'
                                m={2}
                                value={props.state.seat}
                                onChange={props.handleChange}
                            >
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business</option>
                                <option>First</option>
                            </StyledSelect>
                        </FormField>
                        <StyledButton m={2} size='large'>Find your flight</StyledButton>
                    </Flex>
                </StyledBox>
            </form>
        </div>
    )
}

export default FlightForm