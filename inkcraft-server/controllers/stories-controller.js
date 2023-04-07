const Stories = require("../models/writter/Stories")
const Categories = require("../models/writter/Categories")
const Langues = require("../models/Langues")

const jwt = require('jsonwebtoken');


const addStorie = async (req, res) => {
    const { body } = req;

    if (
        !body.title ||
        !body.description ||
        
        !body.langue
      ) return res.status(400).send({ message: "Please Fill All Input" });

    

      const langue = await Langues.findOne({ name : body.langue});
      body.langue_id = langue._id

      const newStorie = await Stories.create({ ...body });
      if (!newStorie) res.status(401).send({ message: "Storie Not Created" });

      res.status(200).send("Added to Storie with success")

}


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