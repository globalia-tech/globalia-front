const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
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
app.use(express.static(__dirname))
app.listen(3000, () => console.log('Servidor en http://localhost:3000'))