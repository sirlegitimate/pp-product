// Defines these variables as the buttons on the level selection screen.
const level1 = document.getElementById('level_1');
const level2 = document.getElementById('level_2');
const level3 = document.getElementById('level_3');
const level4 = document.getElementById('level_4');
const level5 = document.getElementById('level_5');
const level6 = document.getElementById('level_6');
const level7 = document.getElementById('level_7');
const level8 = document.getElementById('level_8');
const level9 = document.getElementById('level_9');
const level10 = document.getElementById('level_10');
const level11 = document.getElementById('level_11');
const level12 = document.getElementById('level_12');
// Lays the groundwork for the score displayed on each button, making it possible to make dynamic variables later (which shortens the code by a lot).
let levelStats = {
	level1stats: null,
	level2stats: null,
	level3stats: null,
	level4stats: null,
	level5stats: null,
	level6stats: null,
	level7stats: null,
	level8stats: null,
	level9stats: null,
	level10stats: null,
	level11stats: null,
	level12stats: null,
}
// Automatically assigns each of the properties above to the score displayed on each level button.
for (let j = 1; ; j++) {
	levelStats[`level${j}stats`] = document.getElementById(`level_${j}_stats`)
	if (j >= 13) {
		break;
	}
}
// Allows JavaScript to respond when one of the buttons mentioned is clicked.
level1.addEventListener('click', () => setLevel(1));
level2.addEventListener('click', () => setLevel(2));
level3.addEventListener('click', () => setLevel(3));
level4.addEventListener('click', () => setLevel(4));
level5.addEventListener('click', () => setLevel(5));
level6.addEventListener('click', () => setLevel(6));
level7.addEventListener('click', () => setLevel(7));
level8.addEventListener('click', () => setLevel(8));
level9.addEventListener('click', () => setLevel(9));
level10.addEventListener('click', () => setLevel(10));
level11.addEventListener('click', () => setLevel(11));
level12.addEventListener('click', () => setLevel(12));
// An object whill will be sent into sessional storage, letting the game window know which level did the user choose.
var levelSend = {
		number: 0,
		className: "math"
};
// A function which checks whether the user has completed the chosen level, initiating it if they did.
function setLevel(num) {
	let numCheck = num - 1;
	let levelCheck = localStorage.getItem(`math${numCheck}state`);
	if (num == 1 || levelCheck == 'win') {
		levelSend.number = num;
		sessionStorage.setItem('level', JSON.stringify(levelSend));
		window.location.href = `game.html?class=math&level=${num}`;
	} else {
		console.log("You haven't completed the last level.");
	}
};
// Updates the high score displayed on each level button + prints out the user's stats in the console (for debugging purposes).
console.log("LOCAL DATA FOR ALL UNLOCKED LEVELS: \n-------------------------------------------")
for (let i = 1; ; i++) {
	// Checks if the previous level was won and if the current level isn't level 1 (which is unlocked from the beginning).
	if (localStorage.getItem(`math${i - 1}state`) != 'win' && i != 1) {
		console.log('-------------------------------------------')
		break;
	}
	// Updates the high score displayed on the corresponding level + checks whether the current level was won or not and changes the color accordingly.
	levelStats[`level${i}stats`].innerText = `HS: ${localStorage.getItem(`math${i}score`)}`
	if (localStorage.getItem(`math${i}state`) == 'win') {
		levelStats[`level${i}stats`].style.backgroundColor = 'green'
	} else {
		levelStats[`level${i}stats`].style.backgroundColor = '#ff9c33'
	}
	// If the level is unlocked but the user didn't try it, it'll display the high score as N/A.
	if (localStorage.getItem(`math${i}score`) == null || localStorage.getItem(`math${i}score`) == undefined) {
		levelStats[`level${i}stats`].innerText = `HS: N/A`
	}
	console.log(`LEVEL ${i} - ` + localStorage.getItem(`math${i}state`) + '; SCORE: ' + parseInt(localStorage.getItem(`math${i}score`)));	
};