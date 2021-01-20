
const { DataTypes, Model, Sequelize } = require('sequelize');
const { Tambahan } = require('../tambahan');
const { TambahanRouter } = require('../tambahan_router');
const { database} = require('../db');
const { Kelamin } = require('./kelamin');
const sequelize = database[0];

class User extends Tambahan{
    static fake = {
        name: Math.random().toString(26).substring(7),
        email: Math.random().toString(26).substring(7),
        password: Math.random().toString(26).substring(7)
    }
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    }
},{ sequelize,underscored: true, timestamps: false})


class Users extends TambahanRouter(User){}
module.exports = { User, Users }