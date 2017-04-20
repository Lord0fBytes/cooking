var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  recipename: String,
  recipeType: String,
  cookTime: int,
  prepTime: int,
  mainIngr: String
});

var recipes = mongoose.model('recipes', recipeSchema);

model.exports = recipes;
