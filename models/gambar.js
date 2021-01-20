const { DataTypes } = require("sequelize");
const { Tambahan } = require("../tambahan");
const { TambahanRouter } = require("../tambahan_router");
const {  database } = require('./../db');
const sequelize = database[1];

class Gambar extends Tambahan{}
Gambar.init({
    name: {
        type: DataTypes,
        allowNull: false
    },
    user_id: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    data: {
        type:DataTypes.BLOB,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.BLOB,
        allowNull: false
    }
},{ sequelize , underscored: true, timestamps: false})

class Gambars extends TambahanRouter(Gambar){}

module.exports = { Gambar, Gambars }