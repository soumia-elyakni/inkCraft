const dbConnect = require("./db-connexion");
const Users = require("../models/Users");
const Roles = require("../models/Roles");
const Langues = require("../models/Langues");
const bcrypt = require("bcrypt");

const rolesArray = ["admin", "writter", "translator"];
const langueArray = ["arabe", "english", "frensh"];
const admin = {
    first_name: process.env.ADMIN_F_NAME,
    last_name: process.env.ADMIN_L_NAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASS,
    role: "admin",
  };

  const initDb = async () => {
    await dbConnect();
    await creatRoles();
    await creatLangues();
    await creatAdmin();
  };

  const creatRoles = async () => {
    try {
      const count = await Roles.estimatedDocumentCount();
      if (count < 3) {
        for (let i = 0; i < rolesArray.length; i++) {
          let exist = await Roles.findOne({ name: rolesArray[i] });
          if (!exist) await Roles.create({ name: rolesArray[i] });
        }
        console.log("role collection created");
      } else {
        console.error("role collection is not empty");
      }
    } catch (err) {
      console.error(`Error checking if collection roles is empty: ${err}`);
    }
  };
  

  const creatLangues = async () => {
    try {
      const count = await Langues.estimatedDocumentCount();
      if (count < 3) {
        for (let i = 0; i < langueArray.length; i++) {
          let exist = await Langues.findOne({ name: langueArray[i] });
          if (!exist) await Langues.create({ name: langueArray[i] });
        }
        console.log("langues collection created");
      } else {
        console.error("langues collection is not empty");
      }
    } catch (err) {
      console.error(`Error checking if collection langues is empty: ${err}`);
    }
  };
  

  
const creatAdmin = async () => {
    const user = await Users.findOne({ email: admin.email });
  
    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      admin.password = await bcrypt.hash(admin.password, salt);
  
      const adminRole = await Roles.findOne({ name: admin.role });
      admin.role_id = adminRole._id;
  
      Users.create({ ...admin })
        .then(() => {
          console.log("admin added to Users collection");
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      console.log("Admin existed");
    }
  };





module.exports = initDb
