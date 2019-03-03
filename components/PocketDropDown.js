'use strict';

import React from 'react';
import {connect} from "react-redux";

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
//uncomment when testing
//export default PocketDropDown
//comment when testing
export default connect(
    state => ({
    }),
    (dispatch, ownProps) => ({
        slideTo: (index) => {
            let newSwiper = document.querySelector(`.${ownProps.swiperClass}`).swiper;
           newSwiper.slideTo(index)
        },
    })
)(PocketDropDown)
