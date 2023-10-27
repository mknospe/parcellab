import { formatCurrency } from '../currency';

describe('formatCurrency', () => {
    test('should format a number to the German currency representation', () => {
        // strange non breaking space case before the € sign ¯\_(ツ)_/¯
        expect(formatCurrency(1295)).toMatch('1.295,00 €');
        expect(formatCurrency(1295.78)).toMatch('1.295,78 €');
    });

    test('should format a number to the US currency representation', () => {
        expect(formatCurrency(1295, 'en-US')).toBe('€1,295.00');
        expect(formatCurrency(1295.78, 'en-US')).toBe('€1,295.78');
    });
});
