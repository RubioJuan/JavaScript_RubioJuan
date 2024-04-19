/*Se necita Posicionar una reina en un tablero de ajedrez
con esa reina que se ubique en el tablero se obtendran las otras 7 reinas 
para un total de 8 reinas, con el objetivo de que ninguna de las 8 reinas se amenacen entre ellas  
*/


// Primero definiremos el tamaño del tablero
const N = 8;

// Se inicializa el tablero
let board = new Array(N).fill().map(() => new Array(N).fill(0));
/*new Array(N): Esto crea un nuevo array con una longitud de N, donde N es el tamaño del tablero.

.fill(): Esto llena cada elemento del array con el valor undefined.

.map(() => new Array(N).fill(0)): Esto mapea cada elemento del array a un nuevo array creado con new Array(N).fill(0).

new Array(N): Crea un nuevo array con una longitud de N.

.fill(0): Rellena cada elemento del array con el valor 0. */

// Función sobre lo que se va imprimir 
function impresionSolucion(board) {
    for (let i = 0; i < N; i++){
        let row = '';
        for (let j = 0; j < N; j++){
            // Representaremos a las Reinas con 'R' y los espacios vacíos con '.'
            row += board[i][j] ? 'R' : '.';
        }
        console.log(row);
    }
}

// row = Fila
// col = Columna
// board = Tablero

function inicio(board, row, col) {
    let i, j;

    for (i = 0; i < col; i++){
        if (board[row][i]) return false;
    }
    // Comprueba la diagonal superior a la izquierda
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--){
        if (board[i][j]) return false;
    }
    // Comprueba la diagonal inferior a la izquierda
    for (i = row, j = col; i < N && j >= 0; i++, j--){
        if (board[i][j]) return false;
    }
    // Aseguramos la posición de la Reina
    return true;
}

function problema(board, col) {
    // Cuando se ingresen las reinas devuelve true
    if (col >= N) 
        return true;

    // Hace que se ingresen las Reinas automáticamente
    for (let i = 0; i < N; i++){
        if (inicio(board, i, col)){

            // Se ingresa la Reina en el tablero
            board[i][col] = 1;
            //[i]: Se refiere a la fila en la que queremos colocar la reina.

            // Corre y hace que ingrese reina por reina
            if (problema(board, col + 1)){
                return true;
            }
            board[i][col] = 0;
        }
    }
    // Si no se puede ingresar ninguna Reina, devuelve false
    return false;
}
function amenaza(board, row, col) {
    // Verificar si alguna reina en columnas anteriores amenaza a esta reina
    for (let i = 0; i < col; i++) {
        if (board[row][i] === 1) return true; // Verificar si esta en la misma fila
        if (board[i][col] === 1) return true; // Verificar si esta  en la misma columna
        if (board[i][col - i + row] === 1) return true; // Verificar si esta  en la misma diagonal superior
        if (board[i][col + i - row] === 1) return true; // Verificar si esta  en la misma diagonal inferior
    }
    return false;
}

function solucion(row, col) {
    board = new Array(N).fill().map(() => new Array(N).fill(0));
    if (!problema(board, 0)){
        console.log("No se encontro solucion para los datos ingresados");
        return false;
    }
    if (amenaza(board, row, col)) {
        console.log("Esta solucion es incorrecta ya que hay una Reina que esta siendo amenazada");
        return false;
    }
    impresionSolucion(board);
    return true;
}

// Pedir al usuario la posición de la columna y la fila
let colInput = prompt('Ingrese la posición donde quiera ubicar a la reina en la columna');
let rowInput = prompt('Ingrese la posición donde quiera ubicar a la reina en la fila');

// Convertir las entradas de texto en números enteros
let col = parseInt(colInput);
let row = parseInt(rowInput);

// Verificar si las entradas son válidas
if (isNaN(col) || isNaN(row) || col < 0 || col >= N || row < 0 || row >= N) {
    alert('Datos incorrectos, verifique si los numeros ingresados estan entre 0 y 7 para la fila y la columna.');
} else {
    // Ejemplo de uso: solucion(0, 0) para colocar la primera reina en la fila 0, columna 0
    solucion(row, col);
    alert('Presione la tecla F12 y vaya a la parte superior en la consola, para verificar si está correcto');
}


/*El algoritmo de backtracking es una técnica poderosa para resolver problemas combinatorios y de búsqueda exhaustiva. */