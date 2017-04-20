var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  recipeName: String,
  recipeType: String,
  cookTime: Number,
  prepTime: Number,
  mainIngr: String
});

var recipes = mongoose.model('recipes', recipeSchema);

module.exports = recipes;
