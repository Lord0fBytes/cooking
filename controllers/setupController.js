var recipes = require('..//models/recipeModel');

module.exports = function(app) {
  app.get('/api/setupRecipes', function(req, res) {
    var seedData = [
      {
        recipeName: 'Buffalo Chicken',
        recipeType: 'Entree',
        cookTime: 30,
        prepTime: 10,
        mainIngr: 'chicken'
      },
      {
        recipeName: 'Steak Salad',
        recipeType: 'Entree',
        cookTime: 10,
        prepTime: 10,
        mainIngr: 'steak'
      },
      {
        recipeName: 'Lemony Chicken Orzo',
        recipeType: 'Entree',
        cookTime: 30,
        prepTime: 25,
        mainIngr: 'chicken'
      }
    ];
    recipes.create(seedData, function(err, results){
      res.send(results);
    });
  });
}
