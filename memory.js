//Inicializamos variables
let flippedCard = 0;
let cardOne;
let cardTwo;
let playerOne;
let playerTwo;
let firstResult;
let secondResult;
let countP1 = 0;
let countP2 = 0;
let showCount1;
let showCount2;
let currentPlayer;
let images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
images = images.sort(() => { return Math.random() - 0.6 });
console.log(images);


//Función de empezar partida:

function startButton() { //de momento esto funciona
    playerOne = document.getElementById("player1Name").value;
    playerTwo = document.getElementById('player2Name').value;
    document.getElementById("player1Name").disabled = true;
    document.getElementById("player2Name").disabled = true;
    let currentPlayer = document.getElementById("player1Name").value;
    console.log(playerOne);
    console.log(playerTwo);
}
//Función de voltear las tarjetas

function flipCard(id) {
    flippedCard++;
    let currentPlayer = playerOne;


    if (flippedCard == 1) {//para guardar el valor de cardOne
        let cardOne = document.getElementById(id);
        //preguntar cómo hacer esto cardOne.innerHTML= images[id];
        firstResult = images[id];
        cardOne.innerHTML = `<img src="./images/${firstResult}.png" alt="">`;
        //Bloquear la primera carta
        cardOne.disabled = true;

    }
    if (flippedCard == 1) { //Para guardar el valor de carTwo
        cardTwo = document.getElementById(id);
        secondResult = images[id];
        cardTwo = `<img src="./images/${secondResult}.png" alt="">`;
        //bloqueamos la segunda carta
        cardTwo.disabled = true;
        flippedCard++;
    }

    if (firstResult == secondResult) {
        //Suma de puntos al jugador 1 si acierta
        if (currentPlayer == playerOne) {
            flippedCard = 0;
            countP1++;
            let showCount1 = document.getElementById('countPlayer1');
            showCount1.innerHTML = `Llevas ${countP1} puntos`;
        }
        //Suma de puntos al jugador 2 si acierta
        if (currentPlayer == playerTwo) {
            flippedCard = 0;
            countP2++;
            showCount2.innerHTML = `Llevas ${countP2} puntos`;
        }
        //Comprobamos los marcadores de ambos para ver en qué momento se acaba el juego
        if (countP1 + countP2 == 10) {
            if (countP1 > countP2) {
                alert(`Fin de la partida, gana ${playerOne} con ${countP1} puntos `)
                showCount1 = `Has ganado con ${countP1}`;
                showCount2 = `Has perdido por ${countP1 - countP2} puntos`;
            } else if (countP1 < countP2) {
                alert(`Fin de la partida, gana ${playerTwo} con ${countP2} `)
                showCount2 = `Has ganado con ${countP2}`;
                showCount1 = `Has perdido por ${countP2 - countP1} puntos`;
            } else {
                alert(`Fin de la partida, habéis empatado`)
                showCount1.innerHTML = 'Empate con el otro jugador';
                showCount2.innerHTML = 'Empate con el otro jugador';
            }
        }

    } else {
        if (currentPlayer == playerOne) {
            setTimeout(() => {//Esta función lo que hace es que muestra durante un tiempo X el contenido
                cardOne.innerHTML = " ";
                cardTwo.innerHTML = " ";
                cardOne.disabled = false;
                cardTwo.disabled = false;
                flippedCard = 0; //Esto hace que se puedan volver a seleccionar las cartas
            }, 800)
            currentPlayer = playerTwo;//Cambio de jugador actual a jugador 2.
        }
        if (currentPlayer == playerTwo) {
            setTimeout(() => {
                cardOne.innerHTML = " ";
                cardTwo.innerHTML = " ";
                cardOne.disabled = false;
                cardTwo.disabled = false;
                flippedCard = 0;
            }, 800)
            currentPlayer = playerOne; //Cambio del jugador actual al jugador 1
        }
    }

}


