//import {postProduct} from '../../Api/components/contactApi';
class GestorActivos extends HTMLElement {
    constructor () {
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html*/`
        <form id="taskform"class="container-tasks"> 
                <h2>Registro estudiantes</h2>
                <div class="container-task_name">
                    <h3>Numero de Documento</h3>
                    <input class="imputs" name="id" placeholder="Escribir...">
                </div>
                <div class="container-task_dates">
                    <div class="dates-begin">
                        <h3>Ingrese el Nombre del estudiante</h3>
                        <input class="imputs" name="nombre" placeholder="Escribir...">
                    </div>
                    <div class="dates-end">
                        <h3>Ingrese los Apellidos</h3>
                        <input name="Apellido" placeholder="Escribir...">
                    </div>
                    <div class="address">
                        <h3>Ingrese la Dirección</h3>
                        <input name="Address" placeholder="Escribir...">
                    </div>
                    <div class="pareents">
                        <h3>Nombre del acudiente</h3>
                        <input name="Acudiente" placeholder="Escribir...">
                    </div>
                </div>
                <div class="container-task_dates">
                    <div class="dates-begin">
                        <h3>Telefono Celular</h3>
                        <input id="Celular" placeholder="Escribir...">
                    </div>
                    <div class="dates-phone">
                        <h3>Telefono Fijo</h3>
                        <input id="Fijo" placeholder="Escribir...">
                    </div>
                </div>
                <div class="container-task_priority">
                    <h3>Estado</h3>
                    <select id="Estado">
                        <option value="empty">seleccionar...</option>
                        <option value="En Proceso de ingreso">En Proceso de ingreso</option>
                        <option value="Inscrito">Inscrito</option>
                        <option value="Aprobado">Aprobado</option>
                        <option value="Cursando">Cursando</option>
                        <option value="Graduado">Expulsado</option>
                        <option value="Retirado">Retirado</option>
                    </select>
                </div>
                <div class="container-task_priority">
                    <h3>Rutas</h3>
                    <select id="Rutas">
                        <option value="empty">seleccionar...</option>
                        <option value="NodeJS">Ruta NodeJS</option>
                        <option value="Java">Ruta Java</option>
                        <option value="NetCore">Ruta Netcore</option>
                    </select>
                    <h3>Riesgo</h3>
                    <select id="Riesgo">
                        <option value="empty">seleccionar...</option>
                        <option value="Bajo">Bajo</option>
                        <option value="Medio">Medio</option>
                        <option value="Alto">Alto</option>
                    </select>
                </div>
                <input type="submit" value="Guardar"></input>
                </form>`;
                /* addEventListener() Registra un evento a un objeto en específico.*/
                /*El DOMContentLoadedevento se activa cuando el documento HTML se ha analizado por completo y todos los scripts diferidos*/ 
                document.addEventListener("DOMContentLoaded", function() {
                    let formContainer = document.getElementById("taskform");
                    formContainer.style.display = "none"; // Oculta el formulario inicialmente
                
                    /* preventDefault Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.*/
                    document.getElementById("guardarbtn").addEventListener("click", function(event) {
                        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
                        formContainer.style.display = "block"; // Muestra el formulario al hacer clic en el enlace
                });
            });
    }
}
customElements.define('gestor-activos',GestorActivos)

const taskform = document.querySelector('#taskform')

const getData = () => {
    const datos = new FormData(taskform);
    const datosProcesados = Object.fromEntries(datos.entries());

    // Se añaden los valores a los elementos seleccionados
    datosProcesados.IdCelular = taskform.querySelector('#Celular').value;
    datosProcesados.IdFIjo = taskform.querySelector('#Fijo').value;
    datosProcesados.IdEstado = taskform.querySelector('#Estado').value; 
    datosProcesados.IdRutas = taskform.querySelector('#Rutas').value; 
    datosProcesados.IdRiesgo = taskform.querySelector('#Riesgo').value;
    
    taskform.reset();
    return datosProcesados;
}
const postData = async () =>{
    const newUser = getData();
    console.log('Enviando:',newUser);

    try {
        const response = await fetch ('http://localhost:3001/Estudiante',{
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
        });
        if (response.ok){
            const jsonResponse = await response.json();
            console.log('Respuesta recibida:', jsonResponse);
            const{Id,nombre,Apellido,Address,Acudiente} = jsonResponse;
            console.log(`Registro consedido: ${Id}, ${nombre}, ${Apellido}, ${Address}, ${Acudiente}`);
        }
    }catch (error){
        console.log(error); 
    }
}

const BuscarDatosPorDocumento = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/Estudiante/${id}`);
        if (response.ok){
            const jsonResponse = await response.json();
            mostrarDatos(jsonResponse);
            // Muestra los datos en la pagina 
        } else {
            console.log('Error al buscar datos:', response.status);
        }
    }catch (error){
        console.log('Error de red:', error);
    }
}

const mostrarDatos = (datos) => {
    const container = document.getElementById('resultados');
    container.innerHTML = ''; // Limpia los datos anteriores
    const elemento = document.createElement('div');
    elemento.textContent = `Numero de documento: ${datos.id}, Nombre del Estudiante: ${datos.nombre}, 
    Apellidos del Estudiante: ${datos.Apellido}, Direccion: ${datos.Address}, 
    Acudiente: ${datos.Acudiente}, Numero de Celular: ${datos.IdCelular}, Numero Fijo: ${datos.IdFIjo}, Estado: ${datos.IdEstado}, Riesgo: ${datos.IdRiesgo}, Rutas: ${datos.IdRutas}`;
    container.appendChild(elemento);
}

//Esta Funcion es para crear un evento al click al boton de busqueda
document.querySelector("#btnbuscar").addEventListener("click", function(event){
    event.preventDefault(); //Evitar el comportamiento predeterminado del enlace

    //Mostrar el cuadro de dialogo
    document.getElementById("dialogoBuscar").style.display = "block";
});

//Agregar evento de click al boton Aceptar del cuadro de dialogo
document.getElementById("btnAceptar").addEventListener("click", async function(event){
    event.preventDefault(); //Evita el comportamiento predeterminado del boton

    //Obtener el Numero de Documento ingresado por el usuario
    const id = document.getElementById("idBuscar").value.trim();
    // El codigo Trim sirve para Quita los espacios iniciales, finales y repetidos del texto

    if (id) {
        //Realizar la busqueda de datos por Id
        await BuscarDatosPorDocumento(id);

        //Evento para olcultar el cuadro de dialogo despues de buscar los datos
        document.getElementById("dialogoBuscar").style.display = "none";
    } else {
        console.log('Numero de Documento no valido.');
    }
});

// Agregar evento click al boton Cancelar
document.getElementById("btnCancelar").addEventListener("click", function(event) {
    event.preventDefault(); //Evita el comportamiento del boton

    //Oculta el cuadro de dialogo sin realizar ninguna accion
    document.getElementById("dialogoBuscar").style.display = "none";
});

// Función para Eliminar datos por Numero de Documento en el sercivio
const EliminarDatos = async (id) => {
    try {
        const response = await fetch (`http://localhost:3001/Estudiante/${id}`,{
            method: 'DELETE'
        });
    if (response.ok) {
        console.log('Datos eliminados exitosamente.');
        alert('Los datos se han eliminaron Exitosamente.');
    } else{
        console.log ('Error al eliminar datos:', response.status);
        alert('Hubo un error al eliminar los datos.');
        }
    } catch(error){
        console.log('Error de red:', error);
        alert('Hubo un error de red al eliminar los datos.');
    }
}

// Agregar evento click al boton de eliminar
document.querySelector(".btonEliminar").addEventListener("click", function(event){
    event.preventDefault();

    //Mostrar el cuadro de dialogo
    document.getElementById("dialogoEliminar").style.display = "block";
});

document.getElementById("btnAceptar1").addEventListener("click", async function(event){
    event.preventDefault();

    const id = document.getElementById("idEliminar").value.trim();

    if (id) {
        // Confirmar si el usuario esta deacuerdo 
        const confirmacion = confirm('¿Estas seguro de eliminar los datos?');
        if (confirmacion){
            // Realizar la eliminacion de los datos 
            await EliminarDatos(id);

            //Ocultar la ventana de dialogo despues de eliminar los datos 
            document.getElementById("dialogoEliminar").style.display = "none";

            // Eliminar los datos de la pantalla
            const container = document.getElementById('resultados');
            container.innerHTML = '';
        } 
    } else {
        console.log('Numero no Documento no es valido')
    }
});

// Creacon el evento para el boton de cancelar 
document.getElementById("btnCancelar1").addEventListener("click", function(event){
    event.preventDefault();

    document.getElementById("dialogoEliminar").style.display = "none"
});

// Funcion para obetenr datos por el numero de documento desde el servidor 
const obtenerDatos = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/Estudiante/${id}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            console.log ('Error al buscar datos:', response.status);
            return null;
        }
    } catch (error) {
        console.log('Error de red:', error);
        return null;
    }
};

//Agregar evento de click al elemento .btnEditar
document.querySelector(".btnEditar").addEventListener("click", function(event) {
    event.preventDefault(); 

    document.getElementById("dialogoEditar").style.display = "block";
});

document.getElementById("btnAceptar2").addEventListener("click",async function(event){
    event.preventDefault();

    const id = document.getElementById("idEditar").value.trim();

    if (id) {
        const datos = await obtenerDatos(id);
        if (datos) {
            document.querySelector('input[name="id"]').value = datos.id;
            document.querySelector('input[name="nombre"]').value = datos.nombre;

            // Muestra el formulario en pantalla
            document.getElementById("taskform").style.display = "block";

            document.getElementById("dialogoEditar").style.display = "none";
        } else {
            console.log('No se encontraron datos con el Numero de Documento.');
        }
    } else {
        console.log('Numero de Documento no valido.')
    }
});

// Agregar evento de clic al botón de guardar del formulario
taskform.addEventListener('submit', async (event) => {
    event.preventDefault();
    const datosGuardados = await postData();
    mostrarDatos(datosGuardados);
});