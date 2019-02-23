'use strict';

import React from 'react';
import classNames from 'classnames';
import '../scss/nav_dots.scss';

class NavDots extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.swiper);
        const pockets = this.props.pockets;
        const active  = this.props.active;
        return (
            <div className='nav-dots'>
                {Object.keys(pockets).map(function(key, index) {
                    return   <div key={index} className={classNames({
                            'dot': true,
                            'active': key === active
                    })} />
                })}
            </div>
        )
    }
}
export default NavDots;
