const { Recipe } = require('../');

test('Recipe should not be null', () => {
    if (!Recipe) {
        throw new Error('Recipe should not be null or undefined');
    }
});

test('Recipe initializes without error given empty options argument', () => {
    const recipe = new Recipe({});
});

test('Recipe photos property should be initialized', () => {
    const recipe = new Recipe();
    if (recipe.photos === undefined || recipe.photos.length !== 0) {
        throw new Error('photos should be initialized as an empty array on Recipe');
    }
});

test('Recipe equipment property should be initialized', () => {
    const recipe = new Recipe();
    if (recipe.equipment === undefined || recipe.equipment.length !== 0) {
        throw new Error('equipment should be initialized as an empty array on Recipe');
    }
});

test('Recipe ingredients property should be initialized', () => {
    const recipe = new Recipe();
    if (recipe.ingredients === undefined || recipe.ingredients.length !== 0) {
        throw new Error('ingredients should be initialized as an empty array on Recipe');
    }
});

test('Recipe instructions property should be initialized', () => {
    const recipe = new Recipe();
    if (recipe.instructions === undefined || recipe.instructions.length !== 0) {
        throw new Error('instructions should be initialized as an empty array on Recipe');
    }
});

test('Recipe created with default title of \'My Recipe\'', () => {
    if (new Recipe().title !== 'My Recipe') {
        throw new Error('Recipe should have a default title of \'My Recipe\'');
    }
});

test('Recipe created with default description of \'a tasty recipe\'', () => {
    if (new Recipe().description !== 'a tasty recipe') {
        throw new Error('Recipe should have a default description of \'a tasty recipe\'');
    }
});
