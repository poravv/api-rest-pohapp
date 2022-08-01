const { DataTypes } = require('sequelize')
const database = require('../database')

const dolencias_poha = database.define('dolencias_poha', {
    iddolencias: {
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
    tableName:"Dolencias_poha",
    timestamps:false
});


module.exports = dolencias_poha