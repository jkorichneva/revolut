import { formatValue, formatToFixed } from '../services/model';

test('formats value in input', () => {
    expect(formatValue(10, 20)).toBe(true);
    expect(formatValue(20, 19)).toBe(false);
    expect(formatValue('20dsdss', 30)).toBe(false);
});

test('formats to fixed', () => {
    expect(formatToFixed(10)).toBe('10.00');
});
