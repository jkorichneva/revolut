'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExchangeScene from '../components/ExchangeScene';
import PocketScene from '../components/PocketScene';

class RevolutApp extends React.Component {
    render() {
        return (
            <div className='revolut__root'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={PocketScene}/>
                        <Route path='/exchange/' component={ExchangeScene} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default connect (
    state => ({
    }), null
)(RevolutApp)
