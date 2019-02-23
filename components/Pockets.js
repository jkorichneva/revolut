'use strict';

import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Pocket from './Pocket';
import Button from './Button';
import '../scss/pocket_scene.scss';
import ExchangeInputBody from "./ExchangeInput";

class Pockets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='pockets'>
                <div className='pockets__carousel'>
                    {this.props.pockets.map(function(key, index) {
                        return <Pocket pocket={key.sum} key={index} currency={key.currency}/>
                    })}
                </div>
                <Link to="/exchange" className='pockets__exchange__btn'>Exchange</Link>
            </div>
        )
    }
}
export default connect (
    state => ({
        pockets: state.revolut.pockets,
    }), null
)(Pockets)
