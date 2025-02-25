
export function PostForm () {
  
    try{
    
    fetch('https://globalia-tech.netlify.app/api/send-data',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {Nombre: 'Yhordi Choque',
             Negocio: 'JackCode',
             Telefono: '+916565892316',
             Email: 'jackcode@gmail.com',
             Motivo: 'Desarrollo web'
            }
        )
    })
    .then( e => {
        if(e.ok){
            console.log(e.status)
            console.log( 'Datos enviados correctamente',e.json())
        } else{
            console.error('datos no enviados')
            console.error(e.status)
        }

    })
}catch{
    throw new Error("Error al hacer la solicitud")
}}