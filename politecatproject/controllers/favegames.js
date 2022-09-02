//Sets Todo as a var for models/FaveGame
const Favegame = require("../models/Favegame.js");

// All the different operations you can do in the todo list
module.exports = {
  getFaves: async (req, res) => {
    console.log(req.user);
    try {
      const faveGameItem = await Favegame.find({ userId: req.user.id });
      res.render("favorites.ejs", { todos: faveGameItem, user: req.user });
    } catch (err) {
      console.log(err);
    }
  }, // create a todo task
  createFave: async (req, res) => {
    try {
      await Favegame.create({
        faveGames: req.body.faveGameItems,
        //To be completed: add Game Booleans and conditional
        //boardGame, videoGame, cardGame
        // Original code// completed: false,
        userId: req.user.id,
      });
      console.log("Game has been added!");
      res.redirect("/favorites");
    } catch (err) {
      console.log(err);
    }
  },
  deleteFave: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Favegame.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  }

};
// delete a todo on the list
// deleteFave: async (req, res) => {
//   console.log(req.body.todoIdFromJSFile);
//   try {
//     await Favegame.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
//     console.log("Deleted Todo");
//     res.json("Deleted It");
//   } catch (err) {
//     console.log(err);
//   }
// };

