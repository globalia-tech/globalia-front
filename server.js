const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: "https://globalia-tech.netlify.app",
    methods:'GET,HEAD,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}))
app.use(express.json());
app.post("/api/send-data", async (req, res) => {
   
    try{
    
        fetch('https://script.google.com/macros/s/AKfycbxduCLmtJXsyNmeZgu6uA27zBykzc9K7zDyP8nb1XFdQz1x2sIKzN4tJKHhSYmcS_OuFw/exec',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                req.body
            )
        })
        .then( e => {
            if(e.ok){
                console.log( 'Datos enviados correctamente')
                 res.json( e.json())

            } else{
                console.error('Datos no Enviados', e.status)
                
            }

        })
    }catch{
        throw new Error("Error al hacer la solicitud")
    }
})
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.listen(PORT, () => console.log('Servidor en http://localhost:3000'))