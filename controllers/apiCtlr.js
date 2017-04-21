var Recipies = require('../models/recipeModel');
var bodyParser = require('body-parser');

module.exports = function(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/recipes/:name', function(req, res){
    Recipies.find({recipeName: req.params.name }, function(err, recipes){
      if(err) throw err;

      res.send(recipes);
    })
  });

  app.get('/api/recipeType/:type', function(req, res){
    Recipies.find({recipeType: req.params.type }, function(err, recipes){
      if(err) throw err;

      res.send(recipes);
    })
  });

  app.get('/api/recipeID/:id', function(req, res){
    Recipies.findById({_id: req.params.id}, function(err, recipe) {
      if(err) throw err;

      res.send(recipe);
    })
  });

  app.post('/api/recipe', function(req, res) {
    if(req.body.id){
      Recipies.findByIdAndUpdate(req.body.id,
        {
          recipeName: req.body.recipeName,
          recipeType: req.body.recipeType,
          cookTime: req.body.cookTime,
          prepTime: req.body.prepTime,
          mainIngr: req.body.mainIngr
        }, function(err, recipe){
          if(err) throw err;

          res.send('Update Success');
      })
    }
    else {
      var newRecipe = Recipies({
        recipeName: req.body.recipeName,
        recipeType: req.body.recipeType,
        cookTime: req.body.cookTime,
        prepTime: req.body.prepTime,
        mainIngr: req.body.mainIngr
      });
      newRecipe.save(function(err){
        res.send('New Entry Success');
      })
    }
  });

  app.delete('/api/recipe', function(req,res){
    Recipies.findByIdAndRemove(req.body.id, function(err){
      if(err) throw err;
      res.send('Delete Success');
    })
  });
}
