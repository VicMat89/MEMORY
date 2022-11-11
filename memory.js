let flippedCard = 0;
let images = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
//images = images.sort(() => { return Math.random() - 0.6 });
let playerOne = document.getElementById("player1Name").value;
let playerTwo = document.getElementById("player2Name").value;
let currentPlayer;
let firstResult;
let secondResult;
let countP1 = 0;
let countP2 = 0;
let showCount1 = document.getElementById("countP1");
let showCount2 = document.getElementById("countP2");



function startButton() { //de momento esto funciona

    playerOne = document.getElementById("player1Name").value;
    playerTwo = document.getElementById('player2Name').value;
    currentPlayer = document.getElementById("player1Name").value;
    console.log(playerOne);
    console.log(playerTwo);

    if (playerOne == "" || playerTwo == "") {
        alert("El nombre de los jugadores no puede estar vacío")
        return false
    }
    if (playerOne == playerTwo) {
        alert("El nombre de los jugadores no puede ser el mismo");
    }
    else {
        document.getElementById("player1Name").disabled = true;
        document.getElementById("player2Name").disabled = true;
        document.getElementById("game").style.visibility = "";
    }
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
            console.log(currentPlayer, playerOne, playerTwo)
            if (currentPlayer == playerOne) {
                countP1++;
                showCount1.innerHTML = `Llevas ${countP1} puntos`;

            } else if (currentPlayer == playerTwo) {
                countP2++;
                showCount2.innerHTML = `Llevas ${countP2} puntos`;
            }
        } else {
            //mostrar durante un rato las cartas
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
            }


        }
    }

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


