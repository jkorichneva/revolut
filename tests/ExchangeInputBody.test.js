import React from 'react';
import ExchangeInputBody from '../components/ExchangeInputBody';
import renderer from 'react-test-renderer';


test('Dropdown shows when clicked', () => {
    const pockets = [
        {currency: 'USD', sum: 200},
        {currency: 'GBP', sum: 100},
        {currency: 'EUR', sum: 80},
    ];
    const currencies =  {
        USD: {symbol: '$', desc: 'USD - American Dollar', pocketIndex: 0},
        GBP: {symbol: '£', desc: 'GBP - British Pound', pocketIndex: 1},
        EUR: {symbol: '€', desc: 'EUR - Euro', pocketIndex: 2},
    };
    const resultSum = '50';
    const initialSum = '30';
    const component = renderer.create(
        <ExchangeInputBody
            autoFocus={false}
            index='1'
            swiperClass={`swiper1`}
            currencyIndex='0'
            pockets={pockets}
            resultSum={resultSum}
            initialSum={initialSum}
            currencies={currencies}
            resultCurrency={false} />,
    );
    const inst = component.getInstance();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // manually trigger the dropdown
    inst.showDropDown();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the closing dropdown
    inst.closeDropDown();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
