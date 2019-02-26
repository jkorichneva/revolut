'use strict';

import React from 'react';
import {connect} from "react-redux";
import '../scss/pocket_dropdown.scss';

class PocketDropDown extends React.Component {
    render() {
        return (
            <div className='pocket__dropdown'>
                <h3>Choose currency:</h3>
                {this.props.pockets.map((item, index) => {
                    return <div key={index} onClick={() => this.props.slideTo(index)}>{item.currency}</div>
                })}
            </div>
        )
    }
}

export default connect(
    state => ({
        pockets: state.revolut.pockets,
    }),
    (dispatch, ownProps) => ({
        slideTo: (index) => {
            let newSwiper = document.querySelector(`.${ownProps.swiperClass}`).swiper;
           newSwiper.slideTo(index)
        },
    })
)(PocketDropDown)
