// Funcion de Guardar heroe en el json
document.addEventListener("DOMContentLoaded", function() {
    const guardarHeroeBtn = document.querySelector(".btn-primary");
  
    guardarHeroeBtn.addEventListener("click", function() {
      // Obtener los valores de los campos de entrada
      const nombrePersonaje = document.getElementById("inputEmail4").value;
      const nombreActor = document.getElementById("inputPassword4").value;
      const edadActor = document.getElementById("inputEmail4").value;
      const ubicacion = document.getElementById("inputPassword4").value;
      const poster = document.getElementById("inputEmail4").value;
      const fecha = document.getElementById("inputPassword4").value;
      const productora = document.getElementById("autoSizingSelect").value;
  
      // Crear un objeto con los datos del héroe
      const heroeData = {
        nombrePersonaje: nombrePersonaje,
        nombreActor: nombreActor,
        edadActor: edadActor,
        ubicacion: ubicacion,
        poster: poster,
        fecha: fecha,
        productora: productora
      };
  
      // Enviar los datos al servidor JSON
      fetch('http://localhost:3001/SuperHero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(heroeData),
        // JSON.stringify => convierte un objeto o valor de JavaScript en una cadena de texto JSON
      })
      .then(response => {
        if (response.ok) {
          console.log('Heroe guardado exitosamente');
        } else {
          console.error('Error al guardar el héroe');
        }
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
      });
    });
  });

  

// Funcion de eliminar el Heroe del json 
document.addEventListener("DOMContentLoaded", function() {
    const cancelarBtn = document.querySelector(".btn-danger");
  
    cancelarBtn.addEventListener("click", function() {
      console.log("Operación cancelada");
  
      // Obtener la ID del héroe que deseas eliminar (puedes obtenerla de algún lugar en tu aplicación)
      const idHeroe = obtenerIdHeroe();
  
      // Llamar a la función para eliminar el héroe del JSON Server
      eliminarHeroeJsonServer(idHeroe); 
      });
  });
  
  function obtenerIdHeroe() {
    prompt('Ingrese el nombre de Personaje que desea eliminar')
    return 1;
  }
  
  // Hacer la solicitud DELETE al servidor JSON
  function eliminarHeroeJsonServer(idHeroe) {
    fetch(`http://localhost:3001/SuperHero/${idHeroe}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        console.log('Heroe eliminado exitosamente');
      } else {
        console.error('Error al eliminar el héroe');
      }
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const btnNuevo = document.getElementById("btnNuevo");
    const registroTrajes = document.getElementById("registroTrajes");

    btnNuevo.addEventListener("click", function() {
      registroTrajes.style.display = "block";
    });
  });



// Funcion para que cuando se le de click a boton de + me proyecte la informacion de los nombres de lo trajes 
  document.getElementById("btnMostrarFuncion").addEventListener("click", function() {
    var trajesContainer = document.getElementById("trajesContainer");
    var nuevoTraje = document.createElement("div");
    nuevoTraje.classList.add("traje");
    nuevoTraje.innerHTML = `
        <div class="row align-items-center">
            <div>
                <label for="formGroupExampleInput" class="text-primary">Nombre del traje</label>
            </div>
            <div class="col-8">
                <input type="text" class="form-control" id="formGroupExampleInput">
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-danger circle-btn btnEliminarTraje">-</button>
            </div>
        </div>
    `;
    trajesContainer.appendChild(nuevoTraje);
    nuevoTraje.style.display = "block"; // Mostrar el nuevo traje
    
    // Agregar event listener al botón  -  para eliminar el traje
    var btnEliminarTraje = nuevoTraje.querySelector(".btnEliminarTraje");
    btnEliminarTraje.addEventListener("click", function() {
        trajesContainer.removeChild(nuevoTraje);
    });
});