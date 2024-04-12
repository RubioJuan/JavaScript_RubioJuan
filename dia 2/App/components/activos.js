import {postProduct} from '../../Api/components/contactApi';
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
                </div>
                <div class="container-task_dates">
                    <div class="dates-begin">
                        <h3>Valor Unitario</h3>
                        <input id="valorUnitario" placeholder="Escribir...">
                    </div>
                <div class="container-task_priority">
                    <h3>EStado</h3>
                    <select id="estado">
                        <option value="empty">seleccionar...</option>
                        <option value="En Proceso de ingreso">En Proceso de ingreso</option>
                        <option value="Inscrito">Inscrito</option>
                        <option value="Aprobado">Aprobado</option>
                        <option value="Cursando">Cursando</option>
                        <option value="Graduado">Expulsado</option>
                        <option value="Retirado">Retirado</option>
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
    datosProcesados.IdvalorUnitario = taskform.querySelector('#valorUnitario').value;
    datosProcesados.IdEstado = taskform.querySelector('#eStado').value;
    
    taskform.reset();
    return datosProcesados;
}
const postData = async () =>{
    const newUser = getData();
    console.log('Enviando:',newUser);


}

// Agregar evento de clic al botón de guardar del formulario
taskform.addEventListener('submit', async (event) => {
    event.preventDefault();
});