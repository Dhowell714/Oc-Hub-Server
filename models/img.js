const { DataTypes } = require('sequelize');
const db = require('../db');

const Image = db.define("img", {
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})

module.exports = Image;