const Users = require("../models/Users");
const Roles = require("../models/Roles");
const Langues = require("../models/Langues");
const UsersLangues = require("../models/UsersLangues");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const storage = require("local-storage");

const addLanguesToUser = async (user, langueArray) => {
  return new Promise(function (myResolve, myReject) {
    try {
      langueArray.forEach(async (langue) => {
        let langueId = await Langues.findOne({ name: langue }, "_id");

        UsersLangues.create({
          user_id: user,
          langue_id: langueId,
        });
      });
      myResolve();
    } catch (e) {
      myReject("Problem to affect language");
    }
  });
};

const register = async (req, res) => {
  const { body } = req;

  if (
    !body.email ||
    !body.password ||
    !body.first_name ||
    !body.last_name ||
    !body.cin ||
    !body.role ||
    !body.langue
  )
    throw Error("Fill All Inputs");

  const userExist = await Users.findOne({ email: body.email });
  if (userExist) {
    throw Error("Adresse email already have an account");
  }

  const role = await Roles.findOne({ name: body.role });
  body.role_id = role._id;

  const langueArray = (await Array.isArray(body.langue))
    ? body.langue
    : [body.langue];

  body.password = await bcrypt.hash(body.password, 10);

  const newUser = await Users.create({ ...body });
  if (!newUser) throw Error("Regstration failed");

  const newUserId = await Users.findOne({ email: newUser.email }, "_id");
  addLanguesToUser(newUserId, langueArray)
    .then(() => {
      res.send("Added Succesfuly");
    })
    .catch((error) => {
      throw Error(error);
    });
};

const login = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password) throw Error("Fill All Input");

  const userExist = await Users.findOne({ email: body.email });
  if (!userExist) throw Error("Any user with this email found");

  const rightPassword = await bcrypt.compare(body.password, userExist.password);
  if (!rightPassword) throw Error("Wrong Password");

  const role = await Roles.findOne({ _id: userExist.role_id });

  const token = await jwt.sign(
    {
      id: userExist._id,
      role: role.name,
    },
    process.env.TOKEN_SECRET
  );

  storage("token", token);

  res.status(200).send({
    role: role.name,
    name: userExist.first_name + " " + userExist.last_name,
    email: userExist.email,
    token,
  });
};

const logout = async () => {
  await storage.clear();
};

module.exports = { register, login, logout };
