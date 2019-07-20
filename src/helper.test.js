import { getType, TYPES } from './helper';

test('input special symbols', () => {
    const testTable = [
        {
            input: '+',
            expected: TYPES.NOT_NUMBER,
        },
        {
            input: '-',
            expected: TYPES.NOT_NUMBER,
        },
        {
            input: '(',
            expected: TYPES.NOT_NUMBER,
        },
        {
            input: ')',
            expected: TYPES.NOT_NUMBER,
        },
        {
            input: '*',
            expected: TYPES.DOT,
        },
        {
            input: 'I',
            expected: TYPES.INPUT,
        },
        {
            input: 'X',
            expected: TYPES.X,
        },
    ];
    
    testTable.forEach(test => {
        expect(getType(test.input)).toEqual(test.expected);
    });
})

test('input numbers', () => {   
    for (let i = 0; i < 10; i++){
        expect(getType(String(i))).toEqual(TYPES.NUMBER);        
    } 
})

test('incorrect input values', () => {
    const symbols = [' ', 'a', 'B', '~', '=', ',', '.']
    
    symbols.forEach(symbol => {
        expect(getType(symbol)).toBe(null);
    });
})