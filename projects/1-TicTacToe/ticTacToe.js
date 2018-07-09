var squares = document.getElementById('app');
var save = document.getElementById('save');
var list = document.getElementsByTagName('li');
var button = document.querySelector('.playAgain');
var winMessage = document.querySelector('.winMsg');
var winMessageContainer = document.querySelector('.winMsgCont');

let selectedFields = [];
var end = false;
var humanWins = 0;
// var difficultyHard = false;

var num = 0;
var num1 = 0;
var num2 = 0;

button.hidden = true;

// Making clickable fields
for (let i = 1; i <= 9; i++) {
    createBoard(i);

    // Click on any square
    let square = document.getElementById('square' + i);
    square.addEventListener('click', () => {
        if (selectedFields.includes(i) || selectedFields.includes(i + 'h') || end === true) { }
        else {
            humanChose(square, i);
            botChose();
        }
    });
}

// Save changes
save.addEventListener('click', () => {
    checkIfBotPlaysFirst();
    // checkDifficulty();
})

// Creating tic tac toe board with li elements
function createBoard(i) {
    var li = document.createElement('li');
    li.setAttribute("id", 'square' + i);
    squares.appendChild(li);
}

// Check if bot playing first is set in settings
function checkIfBotPlaysFirst() {
    if (document.getElementById('first').checked === true) {
        botChose();
    } else {
        for (let i = 0; i < 9; i++) {
            list[i].removeAttribute('class');
        }
        selectedFields = [];
    }
}

// Check selected difficulty in settings
// function checkDifficulty() {
//     if (document.getElementById('master').checked === true) {
//         difficultyHard = true;
//     } else {
//         difficultyHard = false;
//         for (let i = 0; i < 9; i++) {
//             list[i].removeAttribute('class');
//         }
//         selectedFields = [];
//     }
// }

// Human chooses field
function humanChose(square, i) {
    square.setAttribute('class', 'clicked');
    selectedFields.push(i + 'h');
    result();
}

// Bot chooses field
function botChose() {
    if (!end && selectedFields.length <= 8) {
        // if (difficultyHard) {
            // hardDifficulty();
        // } else {
        //     easyDifficulty();
        // }
        easyDifficulty();
    } else return
}

// If easyDifficulty is set
function easyDifficulty() {
    let randomNum = Math.floor(Math.random() * 9) + 1;
    let conditions = [randomNum + 'h', randomNum];
    if (conditions.some(el => selectedFields.includes(el))) {
        easyDifficulty();
    } else {
        let botSquare = document.getElementById('square' + randomNum);
        botSquare.setAttribute('class', 'botClicked');
        selectedFields.push(randomNum);
        result();
    }
}

// Check if somebody won
function result() {
    var results = allPossibleResults();

    for (let i = 0; i < 8; i++) {
        let conditions = results[i];
        let conditionsHuman = conditions.map(el => {
            return el = el + 'h';
        })
        if (conditionsHuman.every(el => selectedFields.includes(el))) {
            endGame('Human Wins', 'human');
            break
        } else if (conditions.every(el => selectedFields.includes(el))) {
            endGame('Bot Wins', 'bot');
            break
        } else {
            if (selectedFields.length === 9 && i === 7) {
                endGame(`Draw`, 'draw');
            }
        }
    }
}

// End game with winning message and button for play again
function endGame(textName, name) {
    end = true;
    winMessageContainer.classList.add('opened');
    winMessage.textContent = textName;
    button.hidden = false;

    scoreboard(name);
    playAgain();
}

// Scoreboard counter
function scoreboard(name) {
    switch(name) {
        case 'human':
            num = num + 1;
            document.getElementById(name).innerHTML = num;
            break;
        case 'bot':
            num1 = num1 + 1;
            document.getElementById(name).innerHTML = num1;
            break;
        case 'draw':
            num2 = num2 + 1;
            document.getElementById(name).innerHTML = num2;
            break;
    }
}

// Create button for play again and reset game if pressed
function playAgain() {
    button.addEventListener('click', () => {
        for (let i = 0; i < 9; i++) {
            list[i].removeAttribute('class');
        }
        end = false;
        selectedFields = [];
        button.hidden = true;
        winMessage.innerHTML = '';
        winMessageContainer.classList.remove('opened');
        checkIfBotPlaysFirst();
    })
}

// All possible win fields
function allPossibleResults() {
    return [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]];
}