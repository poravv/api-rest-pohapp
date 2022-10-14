const express = require('express')
const app = express()
const database = require('./database')
const rutas = require('./config_rutas')
const port = process.env.PORT||3001;

const conecta= async()=>{
try {
    database.authenticate()
    console.log("Base de datos conectada");
} catch (error) {
    console.log("Error: ",error)
}
}

conecta()

app.use(express.urlencoded({limit: '50mb',extended:false}));
app.use(express.json({limit: '50mb',extended: true, parameterLimit:500000}));

app.use(rutas)


app.get('/',(_req,res)=>{
res.send("Bienvenido a la Api rest ")
})



app.listen(port,()=>{
    console.log("App corriendo en el puerto: ",port)
})