const { Recipe } = require('../');

test('Recipe should not be null', () => {
    expect(Recipe).toBeDefined();
});

test('Recipe initializes without error given empty options argument', () => {
    expect(() => new Recipe({})).not.toThrow();
});

test('Recipe photos property should be initialized', () => {
    const recipe = new Recipe();
    expect(recipe.photos).toEqual([]);
});

test('Recipe equipment property should be initialized', () => {
    const recipe = new Recipe();
    expect(recipe.equipment).toEqual([]);
});

test('Recipe ingredients property should be initialized', () => {
    const recipe = new Recipe();
    expect(recipe.ingredients).toEqual([]);
});

test('Recipe instructions property should be initialized', () => {
    const recipe = new Recipe();
    expect(recipe.instructions).toEqual([]);
});

test('Recipe created with default title of \'My Recipe\'', () => {
    const recipe = new Recipe();
    expect(recipe.title).toEqual('My Recipe');
});

test('Recipe created with default description of \'a tasty recipe\'', () => {
    const recipe = new Recipe();
    expect(recipe.description).toEqual('a tasty recipe');
});
