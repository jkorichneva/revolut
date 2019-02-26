import React from 'react';
import Transaction from '../components/Transaction';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const item = {currencyFrom: 'USD', withdraw: '-30.00', currencyTo: 'EUR', add: 'USD'};
    const tree = renderer
        .create(<Transaction item={item}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
