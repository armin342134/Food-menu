const express = require("express");
const cors = require("cors");
const model = require("./model/model");
require("./config/db");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  try {
    const foods = await model.find();

    res.send(foods);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/Recipe/:id", async (req, res) => {
  try {
    const recipeID = req.params.id;
    const recipe = await model.findById(recipeID);
    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }

    res.send(recipe);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newRecipe = await model.create({ ...data });
    res.status(200).send(newRecipe);
    console.log(newRecipe);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ messaege: error.message });
  }
});

app.get("/Recipe/", async (req, res) => {
  const query = req.query.q;
  const recipes = await model.find({
    title: { $regex: query, $options: "i" },
  });
  res.json(recipes);
});

app.listen(5000, () => {
  console.log("run server to port 5000");
});
