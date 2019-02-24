'use strict';

import React from 'react';
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Pocket from './Pocket';
import '../scss/pocket_scene.scss';

class Pockets extends React.Component {

    render() {
        return (
            <div className='pockets'>
                <div className='pockets__carousel'>
                    {this.props.pockets.map(function (key, index) {
                        return <Pocket pocket={key.sum} key={index} currency={key.currency}/>
                    })}
                </div>
                <Link to="/exchange" className='pockets__exchange__btn'>Exchange</Link>
            </div>
        )
    }
}

Pockets.propTypes = {
    pockets: propTypes.array,
};
export default connect(
    state => ({
        pockets: state.revolut.pockets,
    }), null
)(Pockets)
