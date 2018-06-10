class Recipe {
    constructor(options = {}) {
        this.title = options.title || 'My Recipe';
        this.description = options.description || 'a tasty recipe';
        this.url = options.url || '';
        this.photos = options.photos || [];
        this.equipment = options.equipment || [];
        this.ingredients = options.ingredients || [];
        this.instructions = options.instructions || [];
        this.style = options.style || '';
        this.tags = optios.tags || [];
    }
}

module.exports = Recipe;
