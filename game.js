// Loads the data reffering to the level that the user has chosen (chosen in math.html or after clicking the next level button) + displays the data included in it in the console.
let level = JSON.parse(sessionStorage.getItem('level'));
console.log("LEVEL DATA: \n-------------------------------------------")
console.log("LEVEL: " + level.number);
console.log("TYPE: " + level.className);
console.log("-------------------------------------------")
// Loads all of the level data from level-data.js
const questions = JSON.parse(sessionStorage.getItem('levelData'));
// Shows the info screen before starting the level.
function startGame() {
	infoBox.style.display = 'block'
	gameUI.style.display = 'none'
	infoTitle.innerHTML = questions[level.className]['l' + level.number].info.title
	infoContent.innerHTML = questions[level.className]['l' + level.number].info.content
	infoButton.addEventListener('click', () => startButton());
	function startButton () {
		infoBox.style.display = 'none'
		gameUI.style.display = 'initial'
		nextQuestion() // Initiates the quiz.
	}
}
// Declerations necessary for the info screen to work.
const infoBox = document.getElementById('infoBox');
const infoTitle = document.getElementById('infoTitle');
const infoContent = document.getElementById('infoContent');
const infoButton = document.getElementById('infoButton');
const gameUI = document.getElementById('gameUI');
// Defines these variables as the buttons on the NumberPad.
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const number0 = document.getElementById('number0');
const deleteButton = document.getElementById('deleteButton');
const addDecimalSeperator = document.getElementById('addDecimalSeperator');
const changeSign = document.getElementById('changeSign');
const submitButton = document.getElementById('submitButton');
// Defines this variable as the window above the keypad displaying input.
const answerField = document.getElementById('answer');
// Defines this variable as the window above the input field displaying the timer.
const timerField = document.getElementById('timer');
// Defines this variable as the window above the question field displaying the level name.
const levelNameField = document.getElementById('levelName')
// Defines this variable as the window with the Number Pad and Answer Field inside it.
const answerBox = document.getElementById('answerBox')
// Sets the title.
levelNameField.innerText = `${level.className.toUpperCase()}: LEVEL ${level.number}`
// Allows JavaScript to respond when one of the buttons mentioned is clicked.
number1.addEventListener('click', () => answerChange(1));
number2.addEventListener('click', () => answerChange(2));
number3.addEventListener('click', () => answerChange(3));
number4.addEventListener('click', () => answerChange(4));
number5.addEventListener('click', () => answerChange(5));
number6.addEventListener('click', () => answerChange(6));
number7.addEventListener('click', () => answerChange(7));
number8.addEventListener('click', () => answerChange(8));
number9.addEventListener('click', () => answerChange(9));
number0.addEventListener('click', () => answerChange(0));
deleteButton.addEventListener('click', () => answerChange("del"));
addDecimalSeperator.addEventListener('click', () => answerChange("dot"));
changeSign.addEventListener('click', () => answerChange("swap"));
submitButton.addEventListener('click', () => submitAnswer());
// Declares the variable that'll store the answer.
var answer = '';
// A function that adds a "digit" to the answer variable when a respective button is clicked, initiated by the event listeners.
function answerChange(num) {
	if (num == "del") {
		answer = answer.slice(0, -1)
	} else if (num == "dot") {
		answer += ".";
	} else if (num == "swap") {
		answer = -answer;
	} else {
		answer += num;
	}
	answerField.innerText = answer
};
// This variable keeps track of what question is the user on currently.
let questionNo = 0;
// This variable keeps track of the amount of correct answers the user provided.
let score = 0;
// Defines this variable as the score displayed on the website.
const scoreDisplay = document.getElementById('score');
// Defines this variable as the Question Box.
const questionField = document.getElementById('question');

// Moves onto the next question and ends it's timer + ends the level if there are no more questions.
function nextQuestion() {
	answer = '';
	answerField.innerText = '';
	questionNo++;
	if (questions[level.className]['l' + level.number]['q' + questionNo] == undefined) {
		endGame()
	} else {
		questionField.innerText = `QUESTION #${questionNo}: ` + questions[level.className]['l' + level.number]['q' + questionNo].question;
		clearTimeout(timerExecution);
		timer(questions[level.className]['l' + level.number]['q' + questionNo].timer)
		console.log(`QUESTION #${questionNo} DATA:`)
		console.log(questions[level.className]['l' + level.number]['q' + questionNo])
	}
};
// Defines this variable as the popup message.
const result = document.getElementById('result');
// Checks the answer and increments the score.
function submitAnswer() {
	if (answer == questions[level.className]['l' + level.number]['q' + questionNo].answer) {
		score++;
		result.innerText = "Correct! +1 Score.";
		setTimeout(() => {
			result.innerText = "";
		}, 2000);
	} else {
		result.innerText = "Not Correct.";
		setTimeout(() => {
			result.innerText = "";
		}, 2000);
	}
	scoreDisplay.innerText = `Score: ${score}`;
	nextQuestion();
};
// Starts a timer which ends a question when it runs out.
var timerExecution;
function timer(lengthTimer) {
	let i = 0;
	function countdown() {
		if (i <= lengthTimer) {
			timerField.innerText = `Time Left: ${lengthTimer - i}`;
			i++;
			timerExecution = setTimeout(countdown, 1000);
		} else {
			nextQuestion();
		}
	}
	countdown();
};
// Activates after the last question. Saves the high score as a cookie and asseses whether you've won the game as well as restructures the game window into a menu.
function endGame() {
	answerBox.style.display = 'none';
	scoreDisplay.style.display = 'none';
	timerField.style.backgroundColor = 'lightgrey';
	clearTimeout(timerExecution);
	timerField.innerHTML = '<button class="endingButton" id="return"><p><a>Return to the Menu</a></p></button><button class="endingButton" id="restart"><p>Restart the level</p></button>';

	// Checks whether you've won + acts accordingly.
	if (score >= questions[level.className]['l' + level.number].info.minScore) {
		console.log(`YOU WON. FINAL SCORE: ${score}`);
		question.innerText = `You Won! Final Score: ${score}`;
		question.style.backgroundColor = '#37eb00';
		localStorage.setItem(`${level.className}${level.number}state`, 'win');
		timerField.innerHTML += '<button class="endingButton" id="next"><p><a>Go to the next level</a></p></button>';
		const nextButton = document.getElementById('next');
		nextButton.addEventListener('click', () => endButton(3));
	} else {
		console.log(`YOU LOST. FINAL SCORE: ${score}`);
		question.innerText = `You Lost. Final Score: ${score}`;
		question.style.backgroundColor = '#e81717';
	}
	// Saves the high score (it it's lower than last time, it doesn't change it).
	if (localStorage.getItem(`${level.className}${level.number}score`) < score || localStorage.getItem(`${level.className}${level.number}score`) == undefined || localStorage.getItem(`${level.className}${level.number}score`) == null) {
		console.log("SETTING NEW HIGHEST SCORE.");
		localStorage.setItem(`${level.className}${level.number}score`, score);
	}
	// Assignes variables to the return and restart buttons + it adds an event listener to each.
	const returnButton = document.getElementById('return');
	const restartButton = document.getElementById('restart');
	returnButton.addEventListener('click', () => endButton(1));
	restartButton.addEventListener('click', () => endButton(2));
	// Gives the buttons a function.
	function endButton(val) {
		if (val == 1) {
			window.location.href = `menu.html`;
		} else if (val == 2) {
			window.location.href = window.location.href;
		} else {
			level.number += 1
			sessionStorage.setItem('level', JSON.stringify(level));
			window.location.href = window.location.href;
		}
	}
};
// Initiates the whole process.
startGame()