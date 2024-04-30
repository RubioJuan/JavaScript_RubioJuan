const totalCards = 12;
let cards = []; //  Una matriz vacía que contendrá las tarjetas del juego.
let selectedCards = []; // Una matriz vacía que contendrá las tarjetas seleccionadas por el jugador.
let currentMove = 0; // Un contador que realiza un seguimiento del número de movimientos actuales del jugador.
let currentAttempts = 0; // Contador de numero total de intentos

let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';
/*Una cadena que representa el HTML de una tarjeta, 
con una parte trasera y una cara. */

async function randomValue() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=6');
        const data = await response.json();
        const cardImages = data.cards.map(card => card.image);

        // Duplica las imágenes de las cartas para tener 6 cartas iguales
        const duplicatedCardImages = [...cardImages, ...cardImages];

        // Mezcla las imágenes de cartas duplicadas para aleatorizar su orden
        shuffle(duplicatedCardImages);

        // Asigna las imágenes de cartas duplicadas a los elementos de las cartas correspondientes
        cards.forEach((card, index) => {
            card.querySelector('.face').style.backgroundImage = `url('${duplicatedCardImages[index]}')`;
        });
    } catch (error) {
        console.error('Error fetching card images:', error);
    }
}


// Función para mezclar una matriz
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function activate(e) {
    if (currentMove < 2){
        if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active')){
            e.target.classList.add('active');
            selectedCards.push(e.target);

            if(++currentMove ==2){
                currentAttempts++;
                document.querySelector('#starts').innerHTML = currentAttempts + ' intentos';
                updateClass(); // Llamar a la función para actualizar la clase de acuerdo al número de intentos

                if (selectedCards[0].querySelectorAll('.face')[0].style.backgroundImage == selectedCards[1].querySelectorAll('.face')[0].style.backgroundImage) {
                    selectedCards = [];
                    currentMove = 0;
                }
                else {
                    setTimeout(() =>{
                        selectedCards[0].classList.remove('active');
                        selectedCards[1].classList.remove('active');
                        selectedCards = [];
                        currentMove = 0;
                    }, 600);
                }
            }
        }
    }
}

for ( let i=0; i < totalCards; i++){
    let div = document.createElement('div');
    div.innerHTML = cardTemplate;
    cards.push(div);
    document.querySelector('#game').append(cards[i]);
    cards[i].querySelectorAll('.card')[0].addEventListener('click', activate)
}

randomValue();


// Obtener el elemento por su id
const startsElement = document.getElementById('starts');

// Función para verificar el número de dígitos y aplicar el color rojo al número si hay dos dígitos
function updateClass() {
    const startsElement = document.getElementById('starts');
    const attemptsText = startsElement.innerText.split(' '); // Dividimos el texto en dos partes: el número y la palabra "Intentos"
    const attemptsNumber = parseInt(attemptsText[0]); // Extraemos el número de intentos como un entero
    if (attemptsNumber >= 10) {
        startsElement.style.color = 'red'; // Cambia el color del texto a rojo si hay dos dígitos o más
    } else {
        startsElement.style.color = ''; // Restaura el color predeterminado del texto
    }
}

// Llamar a la función inicialmente para establecer el color correcto
updateClass();
