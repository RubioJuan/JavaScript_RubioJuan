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


document.addEventListener("DOMContentLoaded", function() {
  const cancelarBtn = document.querySelector(".btn-danger");

  cancelarBtn.addEventListener("click", function() {
      console.log("Operación cancelada");

      // Obtener el ID del héroe que deseas eliminar usando su nombre
      obtenerIdHeroe().then(idHeroe => {
          // Llamar a la función para eliminar el héroe del JSON Server
          eliminarHeroeJsonServer(idHeroe);
      });
  });
});

// Función para obtener el ID del héroe basado en el nombre del personaje
function obtenerIdHeroe() {
  const nombrePersonaje = prompt('Ingrese el nombre del personaje que desea eliminar');
  // Realizar una solicitud GET al servidor JSON para obtener el ID del héroe basado en el nombre
  return fetch(`http://localhost:3001/SuperHero?nombrePersonaje=${nombrePersonaje}`)
      .then(response => response.json())
      .then(data => {
          if (data.length > 0) {
              return data[0].id; // Devolver el ID del primer héroe encontrado con ese nombre
          } else {
              throw new Error('No se encontró ningún héroe con ese nombre.');
          }
      })
      .catch(error => {
          console.error('Error al obtener el ID del héroe:', error);
      });
}

// Función para eliminar el héroe del servidor JSON basado en su ID
function eliminarHeroeJsonServer(idHeroe) {
  fetch(`http://localhost:3001/SuperHero/${idHeroe}`, {
          method: 'DELETE',
      })
      .then(response => {
          if (response.ok) {
              alert('Héroe eliminado exitosamente');
          } else {
              alert('Heroe no encontrado...');
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

      // Muestra los trajes de héroes al hacer clic en "Nuevo"
      mostrarTrajes();
  });
});
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
  
  // Agregar event listener al botón "-" para eliminar el traje
  var btnEliminarTraje = nuevoTraje.querySelector(".btnEliminarTraje");
  btnEliminarTraje.addEventListener("click", function() {
      trajesContainer.removeChild(nuevoTraje);
  });
});
