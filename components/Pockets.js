'use strict';

import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Pocket from './Pocket';
import Button from './Button';
import '../scss/pocket_scene.scss';

class Pockets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pockets = this.props.pockets;
        return (
            <div className='pockets'>
                <div className='pockets__carousel'>
                {Object.keys(pockets).map(function(key, index) {
                    return <Pocket pocket={pockets[key]} key={index} currency={key}/>
                })}
                </div>
                <Link to="/exchange">Exchange</Link>
            </div>
        )
    }
}
export default connect (
    state => ({
        pockets: state.revolut.pockets,
    }), null
)(Pockets)
