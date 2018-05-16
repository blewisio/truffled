const { Ingredient } = require('../');

test('Ingredient should not be undefined', () => {
    expect(Ingredient).toBeDefined();
});

test('Ingredient should throw an error if constructor value is missing', () => {
    expect(() => new Ingredient()).toThrow();
});

test('Ingredient should have a value property', () => {
    const ingredient = new Ingredient('1 cup');
    expect(ingredient.value).toEqual('1 cup');
});

test('Ingredient should parse cup as unit', () => {
    const ingredient = new Ingredient('1 cup');
    expect(ingredient.unit).toEqual('cups');
});

test('Ingredient should parse cups as unit', () => {
    const ingredient = new Ingredient('3 cups');
    expect(ingredient.unit).toEqual('cups');
});

test('Ingredient should parse tbsp as unit', () => {
    const ingredient = new Ingredient('1 tbsp');
    expect(ingredient.unit).toEqual('tbsp');
});

test('Ingredient should parse 1 as amount', () => {
    const ingredient = new Ingredient('1 tbsp');
    expect(ingredient.amount).toEqual(1);
});

test('Ingredient should parse 1/2 as amount', () => {
    const ingredient = new Ingredient('1/2 cup');
    expect(ingredient.amount).toEqual(0.5);
});

test('Ingredient should parse 2 as amount', () => {
    const ingredient = new Ingredient('2 tsp');
    expect(ingredient.amount).toEqual(2);
});

test('Ingredient should parse 4 as amount', () => {
    const ingredient = new Ingredient('4 eggs');
    expect(ingredient.amount).toEqual(4);
});
