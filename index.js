const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const handlebars = require('express-handlebars');
const db = require('./config/db');
const Usuario = require('./models/usuario');

//db.authenticate().then(()=>console.log("Conectado ao Banco de Dados")).catch(err=>console.log(err));

var obj = {
    nome:"Higor",
    email:"higor.rabelo@gmail.com",
    senha:"12345"
};
//Usuario.create(obj).then((data)=>console.log("Salvo com sucesso: \n"+data)).catch(err=>console.log(err));


//Usuario.findAll().then(busca => console.log(busca)).catch(err=>console.log(err));

app.use(express.static("public"))
app.engine('html',handlebars.engine({
    defaultLayout:'main',
    partialsDir:'/views/partials/',
    layoutsDir:'/views/layouts/',
    extname:'html',
}))
app.set("view engine","html")
io.on('connection',function(socket){
    console.log("Cliente Conectado: "+socket.id);
    socket.on("ouvindo",(data)=>{
        console.log(data);
    })
    socket.on("receber",(mensagem)=>{
        console.log(mensagem)
        socket.emit("escrever", mensagem)
    })
    
    
})
app.get('/',(req,resp)=>{
    resp.render('primeiro');
})

app.post("/enviar",(req,resp)=>{
    
})

server.listen(3030, function(){
    console.log("Ouvindo!!!!");
})

