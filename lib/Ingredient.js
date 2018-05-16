const unitTypes = [
    'cup',
    'cups',
    'tbsp',
    'tsp'
];

const ensurePlural = val => {
    if (val === 'cup') return 'cups';
    return val;
}

const isNumber = val => {
    return !isNaN(val - parseFloat(val));
}

class Ingredient {
    constructor(value) {
        if (!value) throw new Error('Must provide a value to Ingredient');

        this.value = value;
        this.unit = this.parseUnit(value);
        this.amount = this.parseAmount(value);
    }

    parseUnit(value) {
        return value
            .split(' ')
            .map(ensurePlural)
            .find(val => unitTypes.includes(val));
    }

    parseAmount(value) {
        const num = value.split(' ')[0];
        
        if (isNumber(num)) return parseFloat(num);

        const fractions = num.split('/');
        const isFraction = fractions.length > 1;
        if (isFraction) return fractions[0] / fractions[1];

        return 0;
    }
}

module.exports = Ingredient;
