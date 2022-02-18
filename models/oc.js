const { DataTypes } = require("sequelize");
const db = require("../db");

const Oc = db.define("oc", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pronouns: {
        type:DataTypes.STRING
    },
    likes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dislikes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING
    }
});

module.exports = Oc;