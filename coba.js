const { Model } = require("sequelize");

class Coba extends Model{
    static lihat = async x => this.findAll();
}

module.exports = { Coba };