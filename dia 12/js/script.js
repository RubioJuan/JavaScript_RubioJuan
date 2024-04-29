const totalCards = 12;
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;

let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

function activate(e) {
    if (currentMove < 2){

        if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active')){
            e.target.classList.add('active');
            selectedCards.push(e.target);

            if(++currentMove ==2){

                currentAttempts++;
                document.querySelector('#starts').innerHTML = currentAttempts + 'intentos';

            if (selectedCards[0].querySelectorAll('.face')[0].innerHTML == selectedCards[1].querySelectorAll('.face')[0].innerHTML) {
                selectedCards = [];
                currentMove = 0;
            }
            else{
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

function randomValue() {
    let rnd = Math.floor(Math.random() * totalCards * 0.5);
    let values = valuesUsed.filter(value => value === rnd);
    if (values.length < 2){
        valuesUsed.push(rnd);
    } else {
        randomValue();
    }
}


for ( let i=0; i < totalCards; i++){
    let div = document.createElement('div');
    div.innerHTML = cardTemplate;
    cards.push(div);
    document.querySelector('#game').append(cards[i]);
    randomValue();
    cards[i].querySelectorAll('.face')[0].innerHTML = valuesUsed[i];
    cards[i].querySelectorAll('.card')[0].addEventListener('click', activate)
}
/*
async function randomValue() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
        const data = await response.json();
        const cardImage = data.cards[0].image;
        let rnd = Math.floor(Math.random() * totalCards * 0.5);
        let values = valuesUsed.filter(value => value === rnd);
        if (values.length < 2){
            valuesUsed.push(rnd);
        } else {
            randomValue();
        }
        // Assign card image to the corresponding card element
        cards[rnd].querySelector('.face').style.backgroundImage = `url('${cardImage}')`;
    } catch (error) {
        console.error('Error fetching card image:', error);
    }
}*/
