const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const telefono = document.querySelector('.telefono')
const direccion = document.querySelector('.direccion')
const ciudad = document.querySelector('.ciudad')
const btnAgregar = document.querySelector('.btn-agregar')

const listadoContacto = document.querySelector('.lista-tareas')

const db = window.localStorage

let contador = 0;

btnAgregar.onclick = () => {
  let contacto = {
    id: contador++,
    nombre: nombre.value,
    apellido: apellido.value,
    telefono: telefono.value,
    direccion: direccion.value,
    ciudad: ciudad.value,
  }
  guardarContacto(db, contacto)
}

cargarContacto(db, listadoContacto)