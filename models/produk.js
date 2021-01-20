const { DataTypes, Model } = require('sequelize');
const { Tambahan } = require('../tambahan');
const { TambahanRouter } = require('../tambahan_router');
const { database} = require('./../db');
const sequelize = database[0];

class Produk extends Tambahan{}
Produk.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jenis_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    katagori_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag_id: {
        type: DataTypes.STRING
    },
    modal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jual: {
        type: DataTypes.INTEGER
    },
    distributor_id: {

    }
}, {sequelize , underscored: true, timestamps: false})