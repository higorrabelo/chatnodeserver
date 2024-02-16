const io = require('socket.io-client');
const socket = io('http://localhost:3030');

var mensagem = "Olá eu estou aqui";

socket.emit('ouvindo',mensagem)