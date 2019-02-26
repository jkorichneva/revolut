import React from 'react';
import SvgIcon from '../components/SvgIcon';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
        .create(<SvgIcon type='arrowDown'/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
