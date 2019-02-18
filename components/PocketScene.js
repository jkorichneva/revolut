'use strict';

import React from 'react';
import {connect} from "react-redux";
import Pockets from './Pockets';
import '../scss/pocket_scene.scss';

class PocketScene extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='pocket__scene'>
                <Pockets />
            </div>
        )
    }
}
export default connect (
    state => ({
    }), null
)(PocketScene)
