const {Sequelize} = require('sequelize')
const config = [
    {
        dialect: 'sqlite',
        storage: './db.sqlite'
    },
    {
        dialect: 'sqlite',
        storage: './db_gambar.sqlite'
    }
]

const database = config.map( x => new Sequelize(x));
module.exports = { database }
