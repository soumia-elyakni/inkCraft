const Stories = require("../models/writter/Stories")
const Categories = require("../models/writter/Categories")
const Langues = require("../models/Langues")
const Users = require("../models/Users")

const jwt = require('jsonwebtoken');


const addStorie = async (req, res) => {
  const { body } = req;
  const id = req.user.id
  console.log(id)

  if (
    !body.title ||
    !body.description ||
    !body.langue
  ) {
    return res.status(400).send({ message: "Please fill all input fields" });
  }

  try {
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const langue = await Langues.findOne({ name: body.langue });
    if (!langue) {
      return res.status(404).send({ message: "Language not found" });
    }

    const newStorie = await Stories.create({ ...body, user_id: id, langue_id: langue._id });

    res.status(200).send({ message: "Storie added successfully", data: newStorie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};



const getStoriesByUserId = async (req, res) => {
  const userId = req.user.id;
  try {
    const stories = await Stories.find({ user_id: userId }).lean();
    if (stories.length === 0) {
      return res.status(404).json({ message: 'No stories found.' });
    }

    const storiesWithLanguesAndCategories = [];

    for (let i = 0; i < stories.length; i++) {
      const story = stories[i];

      const langue = await Langues.findById(story.langue_id).lean();
      // const categorie = await Categories.findById(story.categorie_id).lean();

      storiesWithLanguesAndCategories.push({
        ...story,
        langue: langue?.name || '',
        // categorie: categorie?.name || '',
      });
    }

    res.status(200).send(storiesWithLanguesAndCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};







const updateStorie = (req, res) => {

}


module.exports = { addStorie, getStoriesByUserId };