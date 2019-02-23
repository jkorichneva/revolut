'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ExchangeScene from '../components/ExchangeScene';
import PocketScene from '../components/PocketScene';

class RevolutApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='revolut__root'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={ExchangeScene}/>
                        <Route path='/exchange' component={PocketScene} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default connect (
    state => ({
        number: state.number,
    }), null
)(RevolutApp)
