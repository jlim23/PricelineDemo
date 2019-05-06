import React from 'react'
import { Route } from 'react-router-dom'

import Main from './Main'
import Flights from './Flights'
import Checkout from './Checkout'

const Root = () => {
    return (
        <div>
            <Route exact path='/' component={Main} />
            <Route path='/flights' component={Flights} />
            <Route path='/checkout' component={Checkout} />
        </div>
    )
}

export default Root