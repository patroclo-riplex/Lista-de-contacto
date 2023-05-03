let listaContactos = [
    { nombreCompleto: "Juan Perez" },
    { nombreCompleto: "Maria Garcia" },
    { nombreCompleto: "Luisa Gomez" }
  ];
  
  function agregarContacto(nombreCompleto) {
    listaContactos.push({ nombreCompleto: nombreCompleto });
  }
  
  function borrarContacto(nombreCompleto) {
    for (let i = 0; i < listaContactos.length; i++) {
      if (listaContactos[i].nombreCompleto === nombreCompleto) {
        listaContactos.splice(i, 1);
        break;
      }
    }
  }
  
function imprimirContactos() {
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i].nombreCompleto);
  }
}