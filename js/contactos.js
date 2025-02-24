import { PostForm } from "./service.js";
 //código para enviar datos del usuario para pedir servicio

 const formContacto = document.getElementById('formContacto')

 formContacto.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(formContacto);
   const data = Object.fromEntries(formData.entries());
   console.log(data);
 PostForm({
  Nombre: data.Nombre,
  Negocio: data.Negocio,
  Telefono: data.codigo + data.NumeroTelefonico,
  Email: data.Email,
  Motivo: data.Motivo
 })
 })