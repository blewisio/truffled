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
