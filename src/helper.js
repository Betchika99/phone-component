const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const SYMBOLS = ['+', '-', '(', ')'];

export const CLASSES = {
    WRAPPER: 'container',
    INPUT: 'container__input',
    X: 'container__symbol-x',
    DOT: 'container__symbol-dot',
    NUMBER: 'container__number',
    SYMBOL: 'container__symbol',
    CONTAINER_ERROR: 'container__error',
}

const TYPES = {
    INPUT: {
        value: 'I',
        type: 'input',
        class: CLASSES.INPUT,
    },
    X: {
        value: 'X',
        type: 'div',
        class: CLASSES.X,
    },
    DOT: {
        value: '*',
        type: 'div',
        class: CLASSES.DOT,
    },
    NUMBER: {
        type: 'div',
        class: CLASSES.NUMBER,
    },
    NOT_NUMBER: {
        type: 'div',
        class: CLASSES.SYMBOL,
    },
};


export function getType(symbol) {
    if (symbol === TYPES.INPUT.value) {
        return TYPES.INPUT;
    }

    if (symbol === TYPES.X.value) {
        return TYPES.X;
    }

    if (symbol === TYPES.DOT.value) {
        return TYPES.DOT;
    }

    if (NUMBERS.includes(symbol)) {
        let type = TYPES.NUMBER;
        type['value'] = symbol;
        return type;
    }

    if (SYMBOLS.includes(symbol)) {
        let type = TYPES.NOT_NUMBER;
        type['value'] = symbol;
        return type;
    }

    return null;
}