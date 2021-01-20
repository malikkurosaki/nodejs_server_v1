const { DataTypes } = require("sequelize");
const { Tambahan } = require("../tambahan");
const { TambahanRouter } = require("../tambahan_router");
const {  database } = require('./../db');
const { Akun } = require("./user");
const sequelize = database[0];

class Kelamin extends Tambahan{}
Kelamin.init({
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize, timestamps: false})

class Kelamins extends TambahanRouter(Kelamin){};

module.exports = { Kelamin, Kelamins}