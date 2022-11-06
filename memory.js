//Inicializamos variables
let flippedCard = 0;
let cardOne;
let cardTwo;
//let images[]
let playerOne = "";
let playerTwo = "";
let currentPlayer = playerOne;
let firstResult;
let secondResult;
let countP1 = 0;
let countP2 = 0;
let showCount1;
let showCount2;

//Función de empezar partida:

function startButton() {
    playerOne = document.getElementById("player1Name").value;
    playerTwo = document.getElementById('player2Name').value;
    document.getElementById("player1Name").disabled=true;
    document.getElementById("player2Name").disabled=true;
    console.log(playerOne);
    console.log(playerTwo);
}
//Función de voltear las tarjetas

function flipCard(id) {
    flippedCard++;
    if (flippedCard == 1) {
        cardOne = document.getElementById(id);
        //preguntar cómo hacer esto cardOne.innerHTML= images[id];
        firstResult = image[id];
        cardOne.innerHTML = firstResult;
        //Bloquear la primera carta
        cardOne.disabled = true;
    }
    if (flippedCard == 2) {
        cardTwo = document.getElementById(id);
        secondResult = images[id];
        cardTwo = secondResult;
        //bloqueamos la segunda carta
        cardTwo.disabled = true;
    }

    if (firstResult == secondResult) {
        //Suma de puntos al jugador 1 si acierta
        if (currentPlayer == playerOne) {
            flippedCard = 0;
            countP1++;
            showCount1.innerHTML = `Llevas ${countP1}`;
        }
        //Suma de puntos al jugador 2 si acierta
        if (currentPlayer == playerTwo) {
            flippedCard = 0;
            countP2++;
            showCount2.innerHTML = `Llevas ${countP2}`;
        }
        //Comprobamos los marcadores de ambos para ver en qué momento se acaba el juego
        if (countP1 + countP2 == 10) {
            if (countP1 > countP2) {
                alert(`Fin de la partida, gana ${playerOne} con ${countP1} `)
                showCount1 = `Has ganado con ${countP1}`;
                showCount2 = `Has perdido por ${countP1 - countP2} aciertos`;
            } else if (countP1 < countP2) {
                alert(`Fin de la partida, gana ${playerTwo} con ${countP2} `)
                showCount2 = `Has ganado con ${countP2}`;
                showCount1 = `Has perdido por ${countP2 - countP1} aciertos`;
            } else {
                showCount1.inn
                alert(`Fin de la partida, habéis empatado`)
                erHTML = 'Empate con el otro jugador';
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


