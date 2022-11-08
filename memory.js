
let flippedCard = 0;
let images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
images = images.sort(() => { return Math.random() - 0.6 });
console.log(images);
let playerOne;
let playerTwo;
let firstResult = null;
let secondResult = null;
let countP1 = 0;
let countP2 = 0;
let currentPlayer;
let showCount1 = document.getElementById("countP1");



function startButton() { //de momento esto funciona

    playerOne = document.getElementById("player1Name").value;
    playerTwo = document.getElementById('player2Name').value;

    currentPlayer = document.getElementById("player1Name").value;

    console.log(playerOne);
    console.log(playerTwo);

    if (playerOne == "" || playerTwo == "") {
        alert("El nombre de los jugadores no puede estar vacío")
        return false;


    }
    playerOne = document.getElementById("player1Name").value;
    playerTwo = document.getElementById('player2Name').value;
    document.getElementById("player1Name").disabled = true;
    document.getElementById("player2Name").disabled = true;
    



}


function flipCard(id) {

    if (flippedCard == 0) {//para guardar el valor de cardOne
        let cardOne = document.getElementById(id);
        firstResult = images[id];
        cardOne.innerHTML = `<img src="./images/${firstResult}.png">`;
        //Bloquear la primera carta
        cardOne.disabled = true;
        flippedCard++

        firstId = id;

    } else if (flippedCard == 1) { //Para guardar el valor de carTwo
        let cardTwo = document.getElementById(id);
        secondResult = images[id];
        cardTwo.innerHTML = `<img src="./images/${secondResult}.png">`;
        //bloqueamos la segunda carta
        cardTwo.disabled = true;
        flippedCard++

        secondId = id;

        if (firstResult == secondResult) {
            flippedCard = 0;
            countP1++;
            showCount1.innerHTML = `Llevas ${countP1} puntos`;

        } else {
            //mostrar durante un rato las cartas
            setTimeout(() => {
                cardOne = document.getElementById(firstId);
                cardTwo = document.getElementById(secondId);
                cardOne.innerHTML = ' ';
                cardTwo.innerHTML = ' ';
                cardOne.disabled = false;
                cardTwo.disabled = false
                flippedCard = 0

            }, 800)
        }
    }

    if (countP1 == 10) {
        alert(`Fin de la partida, has ganado`);

    }

}
//Función de empezar partida:
/*
f
//función validar nombres

*/





/*
 
if (firstResult == secondResult) {
    //Suma de puntos al jugador 1 si acierta
    //if (currentPlayer == playerOne) {
        flippedCard = 0;
        countP1++;
       // let showPoint1 = document.getElementById("countPlayer1").value;
        document.getElementById("countPlayer1").value = `Llevas ${countP1} punto`;
    //}
    //Suma de puntos al jugador 2 si acierta
   /* if (currentPlayer == playerTwo) {
        flippedCard = 0;
        countP2++;
        let showPoint2 = document.getElementById("countPlayer2").value;
        document.getElementById("countPlayer2").value = `Llevas ${countP2} punto`;
 
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
    }*//*
if (firstResult !== secondResult) {


setTimeout(() => {//Esta función lo que hace es que muestra durante un tiempo X el contenido
cardOne.innerHTML = " ";
cardTwo.innerHTML = " ";
cardOne.disabled = false;
cardTwo.disabled = false;
flippedCard = 0; //Esto hace que se puedan volver a seleccionar las cartas
}, 800)
// playerTwo = document.getElementById('player2Name').value;
//currentPlayer = playerTwo;//Cambio de jugador actual a jugador 2.
}/*
if (currentPlayer == playerTwo) {
setTimeout(() => {
cardOne.innerHTML = " ";
cardTwo.innerHTML = " ";
cardOne.disabled = false;
cardTwo.disabled = false;
flippedCard = 0;
}, 800)
currentPlayer = playerOne; //Cambio del jugador actual al jugador 1
}*/

