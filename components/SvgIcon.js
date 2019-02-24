'use strict';

import React from 'react';
import classNames from 'classnames';

const contentHtml = {
    'refresh': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve"><path d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4C426.667,7.641,419.026,0,409.6,0z"/><path d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/></svg>',
};

export default (props) => {
    const externalClass = props.layout ? {[props.layout]: true} : {};
    const componentClass = classNames({
        'c_svg': true,
        [`c_svg_${props.type}`]: true,
    }, externalClass);

    const content = contentHtml[props.type];

    return (
        <div
            className={componentClass}
            dangerouslySetInnerHTML={{__html: content.replace('c_svg_icon', (props.active ? 'c_svg_icon active' : 'c_svg_icon'))}}
            onClick={props.onClick}
        />
    );
}