const sequelize = require('sequelize');
const connection = new sequelize("chatnode","postgres","Higor120783",{
    host:'localhost',
    dialect:'postgres'
});

module.exports = connection;