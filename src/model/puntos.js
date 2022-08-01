const { DataTypes } = require('sequelize')
const database = require('../database')
const poha = require('./poha')
const usuario = require('./usuario')

const puntos = database.define('puntos',{
    idpoha:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    idusuario:{
        primaryKey:true,
        type:DataTypes.INTEGER,
    },
    puntos:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    comentario:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    tableName:"Puntos",
    timestamps:false
})

puntos.hasOne(poha,{
    foreignKey:"idpoha",
    primaryKey:"idpoha"
})

puntos.hasOne(usuario,{
    foreignKey:"idusuario",
    primaryKey:"idusuario"
})

module.exports=puntos