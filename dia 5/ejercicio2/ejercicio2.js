// Función para imprimir el tablero
function ImprimirTablero(board) {
    // Lenght sirve para saber cuantos elementos tiene un Arry
    for (let i = 0; i < board.length; i++) {
        let row = '';
        for (let j = 0; j < board[i].length; j++) {
            row += board[i][j] ? 'Q' : '.';
        }
        console.log(row);
    }
    console.log('\n');
}

// row = Fila
// col = Columna
// board = Tablero

// Función para verificar si una reina puede ser colocada en una posición específica
function canPlace(board, row, col) {
    for (let i = 0; i < col; i++) {
        if (board[row][i]) return false; // Verificar si esta en la misma fila
        if (board[i][col]) return false; // Verificar si esta en la misma columna
        if (board[i][col - i + row]) return false; // Verificar si esta en la misma diagonal superior
        if (board[i][col + i - row]) return false; // Verificar si esta en la misma diagonal inferior
    }
    return true;
}

// Tipos de soluciones
function Finalizacion(board, col, n) {
    // Al finalizar de que se coloquen todas las reinas estas se imprimen en la consola
    if (col === n) {
        ImprimirTablero(board);
        return 1;
    }

    let solucion = 0;

    // Intentar colocar una reina en cada fila de esta columna
    for (let i = 0; i < n; i++) {
        if (canPlace(board, i, col)) {
            board[i][col] = 1;
            solucion += Finalizacion(board, col + 1, n);
            board[i][col] = 0; 
            /*Backtracking:
                El algoritmo utiliza backtracking para explorar todas las posibles combinaciones de 
                ubicaciones de reinas en el tablero. Cuando se encuentra una solución válida, el algoritmo
                retrocede y busca otras posibles combinaciones.*/
        }
    }

    return solucion;
}

// Intentando encontrar número de tableros distintos posibles
function TiposSoluciones(order) {
    let board = new Array(order).fill().map(() => new Array(order).fill(0));
    return Finalizacion(board, 0, order);
}

// Solicitar al usuario que ingrese el orden del tablero 
let orderInput = prompt('Ingrese el orden que desea para el tablero, entre 1 y 15:');
let order = parseInt(orderInput);

// Se verifica si la respuesta del usuario es correcta
if (isNaN(order) || order < 1 || order > 15) {
    alert('Entrada no válida. Por favor vuelva a intentarlo, ingrese un número entre 1 y 15.');
} else {
    // Depende de la respuesta del usuario calcula y mostrar el número de tableros distintos posibles
    let solucion = TiposSoluciones(order);
    console.log(`Tableros distintos posibles: ${solucion}`); // Recursividad
    alert('Presione la tecla F12 y vaya a la parte superior en la consola, para verificar si está correcto');
}