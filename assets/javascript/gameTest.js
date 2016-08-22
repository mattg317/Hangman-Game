var wordLib = ["cat", "dog", "horse", "bees"];
var wins=0;
var turns = 0;
var correct = 0;
var incorrect= 5;
var guesses = [];

//Set up computer choices
var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("");
console.log(split);

var html= "<p>Wins:"+wins+"<p>";
document.querySelector('#record').innerHTML = html;

//Game board=========================================================================
function gameSetup(){
var html = "<p> Score </p>" +

					
					"<p> Turns Left: "+ incorrect +"</p>"
					+
					"<p>Letters Guessed: "+guesses+"</p>";

			document.querySelector('#score').innerHTML = html;
};
//Check for winner Function=======================================
function endGame (arr1, arr2){
	for(var i=0, n=arr1.length; i<n; i++){
		if(arr1[i] !== arr2[i]){
			return false;
		}
	}
	return true;
}
function newGame(){

	turns= 5;
	correct = 0;
	incorrect= 5;
	guesses = [];
	gameBoard=[];

	compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
	lastWord=compChoice;
	split = compChoice.split("")
	console.log(split);
// Board set-up=================================================
	for(var i=0, n=compChoice.length; i<n; i++){
	gameBoard.push('_ ');
	}
	viewBoard=gameBoard.join("")

	var html = "<p>"+ viewBoard + "</p>";
	document.querySelector('#board').innerHTML = html;
//show and rest stats===========================================
	var html = "<p> Score </p>" +

					"<p> correct: " + correct +"</p>"
					+
					"<p> incorrect: "+ incorrect +"</p>"
					+

					"<p>turns: " +turns +"</p>"
					+
					"<p>guesses: "+guesses+"</p>";

			document.querySelector('#score').innerHTML = html;

		var html = "<p></p>";
			document.querySelector('.winner').innerHTML = html;
	// // game();
};
// Board set-up and scoring set up=================================================
var gameBoard = [];
for(var i=0, n=compChoice.length; i<n; i++){
	gameBoard.push('_ ');
}
var viewBoard=gameBoard.join("");
console.log(viewBoard);

var html = "<p>"+ viewBoard + "</p>";
document.querySelector('#board').innerHTML = html;

gameSetup();
// Main game==================================================

document.onkeyup = function() {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess)
		console.log(board);
	//if the letter has been guess do nothing
	if(guesses.indexOf(userGuess)>-1){
	}
	//otherwise go to town
	else{
			if(compChoice.indexOf(userGuess)>-1){
				guesses.push(userGuess);
				correct ++;
				turns ++;
				//check to see where in the arryay the guess is and replace board
				for(var i=0, n=split.length;i<n; i++){
					if(userGuess === split[i]){
						viewBoard=viewBoard.split(" ");
						viewBoard[i]=userGuess;
						gameBoard[i]=userGuess;
						viewBoard=viewBoard.join(" ");
						console.log(gameBoard);
						var html = "<p>"+ viewBoard + "</p>";
						document.querySelector('#board').innerHTML = html;
					}
				}
			}
			else{
				guesses.push(userGuess);
				incorrect --;
				turns ++;
				if(incorrect < 1){
					alert("You lost!");
				}
			}
			gameSetup();

			if(endGame(gameBoard, split)===true){
				var html = "<p>You Win!</p>"+"<p>Press again key to play again!</p>";
				document.querySelector('.winner').innerHTML = html;
				wins++;
				console.log(wins);
				var html= "<p>Wins:"+wins+"<p>";
				document.querySelector('#record').innerHTML = html;
			 	newGame();
			}
		}
};

// document.onkeyup = function() {
// 	// game();
// 	var html= "<p>Wins:"+wins+"<p>";
// 		document.querySelector('#record').innerHTML = html;
	

// };
