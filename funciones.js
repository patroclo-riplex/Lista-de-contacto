const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/' /*Para que recargue la pagina y borre datos forzadamente */
}

const cargarContacto = (db, parentNode) => {
    let claves = Object.keys(db)
    for(clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('h3')
    let telefonoContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    telefonoContacto.innerHTML = contacto.telefono
    direccionContacto.innerHTML = contacto.direccion
    ciudadContacto.innerHTML = contacto.ciudad
    iconoBorrar.innerHTML = 'delete'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href ='/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}

/*Ahora mi meta es refactorizar el codigo para que quede mas limpio usando test para que no vaya a fallar */