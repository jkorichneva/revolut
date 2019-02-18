'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ExchangeScene from '../components/ExchangeScene';

class RevolutApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='revolut__root'>
                <ExchangeScene />
            </div>
        )
    }
}
export default connect (
    state => ({
        number: state.number,
    }), null
)(RevolutApp)
