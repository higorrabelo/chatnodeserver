const { DataTypes, Sequelize  } = require('sequelize');
const db = require('../config/db');

const Usuario = db.define('usuarios',{
    nome:{ type:DataTypes.STRING,allowNull:false},
    email:{ type:DataTypes.STRING,allowNull:false},
    senha:{ type:DataTypes.STRING,allowNull:false},
});

//Usuario.sync({force:true});

module.exports = Usuario;

