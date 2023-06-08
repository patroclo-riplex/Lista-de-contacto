const guardarContacto = (db, contacto) => {
    let contactos = obtenerContactos(db); // Obtener la lista de contactos existentes
  
    contactos.push(contacto); // Agregar el nuevo contacto a la lista
  
    db.setItem('contactos', JSON.stringify(contactos)); // Almacenar la lista actualizada en localStorage
  
    window.location.href = '/';
  };
  
  const obtenerContactos = (db) => {
    let contactos = db.getItem('contactos');
  
    if (contactos) {
      return JSON.parse(contactos); // Si existen contactos almacenados, devolver la lista como un array
    } else {
      return []; // Si no hay contactos almacenados, devolver un array vacío
    }
  };
  
  const cargarContacto = (db, parentNode) => {
    let contactos = obtenerContactos(db); // Obtener la lista de contactos existentes
  
    for (contacto of contactos) {
      crearContacto(parentNode, contacto, db);
    }
  };
  
/*
const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/' 
}

const cargarContacto = (db, parentNode) => {
    let claves = Object.keys(db)
    for(clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
} */


const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('h3')
    let telefonoContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')
    let botonActualizar = document.createElement('button');

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    telefonoContacto.innerHTML = contacto.telefono
    direccionContacto.innerHTML = contacto.direccion
    ciudadContacto.innerHTML = contacto.ciudad
    iconoBorrar.innerHTML = 'delete'
    botonActualizar.innerHTML = 'Actualizar'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')
    botonActualizar.classList.add('boton-actualizar');

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href ='/'
    }

    botonActualizar.addEventListener('click', function() {
        mostrarFormularioActualizacion(contacto, db, parentNode);
    })

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(iconoBorrar)
    divContacto.appendChild(botonActualizar);

    parentNode.appendChild(divContacto)
}
function mostrarFormularioActualizacion(contacto, db, parentNode) {
    let formulario = document.createElement('form');
    let nombreInput = document.createElement('input');
    let telefonoInput = document.createElement('input');
  
    nombreInput.value = contacto.nombre;
    telefonoInput.value = contacto.telefono;
  
    formulario.appendChild(nombreInput);
    formulario.appendChild(telefonoInput);
  
    let botonGuardar = document.createElement('button');
    botonGuardar.innerHTML = 'Guardar';
    formulario.appendChild(botonGuardar);
  
    botonGuardar.addEventListener('click', function (event) {
        event.preventDefault();
        actualizarContacto(contacto.id, nombreInput.value, telefonoInput.value, db, parentNode);
      });
  
    parentNode.innerHTML = '';
    parentNode.appendChild(formulario);
  }
  
  function actualizarContacto(id, nuevoNombre, nuevoTelefono, db, parentNode) {
    let contacto = JSON.parse(db.getItem(id));

    contacto.nombre = nuevoNombre;
    contacto.telefono = nuevoTelefono;

    db.setItem(id, JSON.stringify(contacto));

    cargarContacto(db, parentNode);
  }
  


/*Ahora mi meta es refactorizar el codigo para que quede mas limpio usando test para que no vaya a fallar */