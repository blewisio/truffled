# truffled

cooking and recipe organization library

```
const { Recipe } = require('truffled');

const recipe = new Recipe({
    title: 'Award-winning Chili',
    description: 'Ultra-spicy chili that won the 2018 Golden Chili Pepper Award',
    equipment: [
        'slow cooker',
        'cutting board',
        'chefs knife',
        'can opener'
    ],
    ingredients: [
        '3 ancho chili peppers',
        '4 cascabel chili peppers',
        '1 habanero pepper',
        '2 jalapeno peppers',
        '1 green bell pepper',
        '8 oz tomato paste',
        '1 bottle stout beer',
        '32 oz crushed tomatoes',
        '1 lb 85% ground beef',
        '1 sausage link',
        '1 can kidney beans (optional)'
    ],
    steps: [
        'Turn on slow cooker to low',
        'Open crushed tomatoes and pour into slow cooker',
        // etc.
    ]
});
```

## Installation

If using `yarn`:
```
yarn add truffled
```

Otherwise:
```
npm install truffled --save
```

## License

ISC