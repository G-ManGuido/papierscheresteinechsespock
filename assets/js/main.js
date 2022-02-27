
let maxRounds = 5;
const rightBox = document.querySelector('.rightBox');

let numberOfRounds = document.querySelectorAll('input[type=radio][name=rounds]');
numberOfRounds.forEach(radio => radio.addEventListener('change', () => {

    if (numberOfRounds.item(0).checked == true) {
        maxRounds = 5;
    } else if (numberOfRounds.item(1).checked == true) {
        maxRounds = 10;
    } else if (numberOfRounds.item(2).checked == true) {
        maxRounds = 25;
    } else if (numberOfRounds.item(3).checked == true) {
        maxRounds = 50;
    }

    // event.preventDefault();
    // window.open("game.html", "_self");
}));

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    console.log(maxRounds)


    const playGame = () => {
        const schereBtn = document.querySelector('.Schere');
        console.log(schereBtn)
        const steinBtn = document.querySelector('.Stein');
        console.log(steinBtn)
        const papierBtn = document.querySelector('.Papier');
        const echseBtn = document.querySelector('.Echse');
        const spockBtn = document.querySelector('.Spock');
        console.log(spockBtn)
        const playerOptions = [schereBtn, steinBtn, papierBtn, echseBtn, spockBtn];
        console.log(playerOptions)
        const computerOptions = ['Schere', 'Stein', 'Papier', 'Echse', 'Spock']
        console.log(computerOptions)

        const movesLeft = document.querySelector('.movesleft');


        playerOptions.forEach(option => {

            option.addEventListener('click', function () {

                let count = maxRounds;
                console.log(movesLeft)
                console.log(maxRounds)
                moves++;
                count -= moves;
                movesLeft.innerText = `Verbleibende Runden: ${count}`;

                console.log(movesLeft.innerText)
                console.log(count)
                const choiceNumber = Math.floor(Math.random() * 5);
                // const choiceNumber = 2;
                const computerChoice = computerOptions[choiceNumber];


                winner(this.className, computerChoice)

                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (moves == maxRounds) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }


    const winner = (player, computer) => {

        const result = document.querySelector('.result');
        console.log(result)
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        console.log(player)
        if (player === computer) {
            result.innerHTML = '<img src="../img/win' + player + '.png" alt="-"> :  <img src="../img/win' + computer + '.png" alt="-">';
        }
        else if (player == 'Schere') {
            if (computer == 'Stein') {
                result.innerHTML = '<img src="../img/lose' + player + '.png" alt="-"> :  <img src="../img/win' + computer + '.png" alt="-">';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.innerHTML = '<img src="../img/win' + player + '.png" alt="-"> :  <img src="../img/lose' + computer + '.png" alt="-">';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'Stein') {
            if (computer == 'Papier') {
                result.innerHTML = '<img src="../img/lose' + player + '.png" alt="-"> :  <img src="../img/win' + computer + '.png" alt="-">';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.innerHTML = '<img src="../img/win' + player + '.png" alt="-"> :  <img src="../img/lose' + computer + '.png" alt="-">';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'Papier') {
            if (computer == 'Schere') {
                result.innerHTML = '<img src="../img/lose' + player + '.png" alt="-"> :  <img src="../img/win' + computer + '.png" alt="-">';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.innerHTML = '<img src="../img/win' + player + '.png" alt="-"> :  <img src="../img/lose' + computer + '.png" alt="-">';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'Echse') {
            if (computer == 'Stein') {
                result.innerHTML = '<img src="../img/lose' + player + '.png" alt="-"> :  <img src="../img/win' + computer + '.png" alt="-">';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.innerHTML = '<img src="../img/win' + player + '.png" alt="-"> :  <img src="../img/lose' + computer + '.png" alt="-">';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'Spock') {
            if (computer == 'Echse') {
                result.innerHTML = '<img src="../img/lose' + player + '.png" alt="-"> :  <img src="../img/win' + computer + '.png" alt="-">';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.innerHTML = '<img src="../img/win' + player + '.png" alt="-"> :  <img src="../img/lose' + computer + '.png" alt="-">';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        rightBox.style.display = 'none';
    }


    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const restartBtn = document.querySelector('.restart');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        // chooseMove.style.display = 'none';

        movesLeft.style.display = 'none';


        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.style.fontweight = 'bold';
            result.innerText = 'Glückwunsch! Du hast gewonnen!'
            result.style.color = '#fff';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'Du hast leider verloren!';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = '--Unentschieden--';
            result.style.color = 'grey'
        }
        restartBtn.innerText = 'Restart';
        restartBtn.style.display = 'flex'
        restartBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    playGame();
}


game();
