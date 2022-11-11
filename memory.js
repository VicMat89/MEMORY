let flippedCard = 0;
let images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
images = images.sort(() => { return Math.random() - 0.6 });
let playerOne = document.getElementById("player1Name").value;
let playerTwo = document.getElementById("player2Name").value;
let currentPlayer;
let firstResult;
let secondResult;
let countP1 = 0;
let countP2 = 0;
let showCount1 = document.getElementById("countP1");
let showCount2 = document.getElementById("countP2");


//Función inicio de la partida

function startButton() {
    playerOne = document.getElementById("player1Name").value;
    playerTwo = document.getElementById('player2Name').value;
    currentPlayer = document.getElementById("player1Name").value;

    //Comprobamos que se han introducido bien el nombre de los jugadores
    if (playerOne == "" || playerTwo == "") {
        alert("El nombre de los jugadores no puede estar vacío")
        return false
    }
    if (playerOne == playerTwo) {
        alert("El nombre de los jugadores no puede ser el mismo");
    }
    else {
        //Bloqueamos los input para que no se puedan cambiar los nombres introducidos y se muestra debajo del título de quién es el turno.
        document.getElementById("player1Name").disabled = true;
        document.getElementById("player2Name").disabled = true;
        document.getElementById("game").style.visibility = "";
        document.getElementById("turn").innerHTML = `Es el turno de ${currentPlayer}`
    }
}

function flipCard(id) {

    //Asignamos la imagen correspondiente a la primera carta pulsada
    if (flippedCard == 0) {
        let cardOne = document.getElementById(id);
        firstResult = images[id];
        cardOne.innerHTML = `<img src="./images/${firstResult}.png">`;
        //Bloquear la primera carta
        cardOne.disabled = true;
        flippedCard++
        firstId = id;

        //Asignamos la imagen correspondiente a la segunda carta pulsada
    } else if (flippedCard == 1) {
        let cardTwo = document.getElementById(id);
        secondResult = images[id];
        cardTwo.innerHTML = `<img src="./images/${secondResult}.png">`;
        //bloqueamos la segunda carta
        cardTwo.disabled = true;
        flippedCard++

        secondId = id;

        //Comprobamos si las cartas son iguales y depende del jugador actual se suman los puntos a uno u otro participante
        if (firstResult == secondResult) {
            flippedCard = 0;
            if (currentPlayer == playerOne) {
                countP1++;
                showCount1.innerHTML = `Llevas ${countP1} puntos`;

            } else if (currentPlayer == playerTwo) {
                countP2++;
                showCount2.innerHTML = `Llevas ${countP2} puntos`;
            }

        } else {
        //En caso de que las cartas no sean iguales, se dejan visibles durante un periodo de tiempo y se realiza un cambio de turno.

            if (currentPlayer == playerOne) {
                setTimeout(() => {
                    cardOne = document.getElementById(firstId);
                    cardTwo = document.getElementById(secondId);
                    cardOne.innerHTML = ' ';
                    cardTwo.innerHTML = ' ';
                    cardOne.disabled = false;
                    cardTwo.disabled = false;
                    flippedCard = 0;

                }, 800)
                currentPlayer = playerTwo;
                document.getElementById("turn").innerHTML = `Es el turno de ${currentPlayer}`


            } else if (currentPlayer == playerTwo) {
                setTimeout(() => {
                    cardOne = document.getElementById(firstId);
                    cardTwo = document.getElementById(secondId);
                    cardOne.innerHTML = ' ';
                    cardTwo.innerHTML = ' ';
                    cardOne.disabled = false;
                    cardTwo.disabled = false;
                    flippedCard = 0;
                }, 800)
                currentPlayer = playerOne;
                document.getElementById("turn").innerHTML = `Es el turno de ${currentPlayer}`
            }
        }
    }
    //Cuando todas las cartas están volteadas indicamos que la partida ha finalizamos y quién ha ganado.
    if (countP1 + countP2 == 10) {
        if (countP1 > countP2) {
            alert(`Fin de la partida, gana ${playerOne} con ${countP1} puntos `);

        } else if (countP1 < countP2) {
            alert(`Fin de la partida, gana ${playerTwo} con ${countP2} puntos `);

        } else {
            alert(`Fin de la partida, habéis empatado`);

        }
    }
}


