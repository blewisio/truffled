class Ingredient {
    constructor(value) {
        if (!value) throw new Error('Must provide a value to Ingredient');

        this.value = value;
    } 
}

module.exports = Ingredient;
