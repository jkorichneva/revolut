'use strict';

import React from 'react';
import {connect} from "react-redux";

class ExchangeScene extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='exchange__scene'>
            </div>
        )
    }
}
export default connect (
    state => ({
    }), null
)(ExchangeScene)
