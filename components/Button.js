'use strict';

import React from 'react';
import classNames from 'classnames';
import '../scss/button.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.disabled) {
            return;
        }
        this.props.onClick(this.props);
    }

    render() {
        return (
            <button className={classNames({
                'r__button': true,
                [`r__button_${this.props.type.toLowerCase()}`]: true,
            })
            } onClick={this.onClick}>
                {this.props.text}
            </button>
        )
    }
}
