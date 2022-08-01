const { DataTypes } = require('sequelize')
const database = require('../database')

const poha_planta = database.define('poha_planta', {
    idplanta: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    idpoha: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    idusuario: {
        primaryKey: true,
        type: DataTypes.STRING,
    }
},{
    tableName:"Poha_planta",
    timestamps:false
});

module.exports = poha_planta