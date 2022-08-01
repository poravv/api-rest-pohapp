const express = require('express')
const app = express()
const database = require('./database')
const rutas = require('./config_rutas')
const port = process.env.PORT||4000;
const fs = require('fs')
const https = require('https')

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


/*https.createServer({
    //cert: fs.readFileSync('cert_pohapp.crt'),
    pfx: fs.readFileSync(`${__dirname}\\certificadoV1.pfx`),
    passphrase:'Andrecito7'
},app).listen(port,()=>{
    console.log("App https corriendo en el puerto: ",port)
})*/

app.get('/',(_req,res)=>{
res.send("Bienvenido a la Api rest ")
})



app.listen(port,()=>{
    console.log("App corriendo en el puerto: ",port)
})