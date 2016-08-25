var wordLib = ["cat", "dog", "horse", "bees"];
var wins=0;
var losses =0;
var turns = 0;
var correct = 0;
var incorrect= 9;
var guesses = [];
var contGame = false;

//Set up computer choices
var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("");
console.log(split);

var html= "<p>Wins: "+wins+"</p>"+
		"<p>Losses: "+losses+"</p>";
document.querySelector('#record').innerHTML = html;

//Game board=========================================================================
function gameSetup(){
var html = "<p> Score </p>" +

					"<p> correct: " + correct +"</p>"
					+
					"<p> incorrect: "+ incorrect +"</p>"
					+

					"<p>turns: " +turns +"</p>"
					+
					"<p>guesses: "+guesses+"</p>";

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
//New Game============================================================
function newGame(){

	contGame = false;
	turns = 0;
	correct = 0;
	incorrect= 9;
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
//Image================================================================
function imageChange(incor){
	switch (incor){
		case 7:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman2.png'"+" alt="+"hangman2"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 6:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman3.png'"+" alt="+"hangman3"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 5:
			var html ="<img class="+"'center-block' "+"src="+"'assets/images/hangman4.png'"+" alt="+"hangman4"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 4:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman5.png'"+" alt="+"hangman5"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 3:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman6.png'"+" alt="+"hangman6"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 2:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman7.png'"+" alt="+"hangman7"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 1:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman8.png'"+" alt="+"hangman8"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		default:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman9.png'"+" alt="+"hangman9"+">"+
			"<p>Sorry you lost :(</p>" + "<p>Hit any key to play again!</p>";
			document.querySelector('#hang').innerHTML = html;

			if(incorrect < 1){
				losses++;
				console.log(wins);
				var html= "<p>Wins: "+wins+"</p>"+
						"<p>Losses: "+losses+"</p>";
				document.querySelector('#record').innerHTML = html;

				document.addEventListener("keydown",function(){
					contGame=true;
				});

				if(incorrect<1 && contGame===true){
					newGame();
					document.addEventListener("keydown",function(){
					contGame=false;
					});

				}
				}
		}
	};

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
					var html = "<p>You Lose!</p>"+"<p>Press space to play again!</p>";
				document.querySelector('.winner').innerHTML = html;
				losses++;
				console.log(wins);
				var html= "<p>Wins: "+wins+"</p>"+
						"<p>Losses: "+losses+"</p>";
				document.querySelector('#record').innerHTML = html;

				document.addEventListener("keydown",function(){
					contGame=true;
				});

				if(incorrect<1 && contGame===true){
					newGame();
					document.addEventListener("keydown",function(){
					contGame=false;
					});

				}
				}
			}//
			gameSetup();

			if(endGame(gameBoard, split)===true){
				var html = "<h3>Congrats!</h3>"+
				"<img class="+"'center-block' " + "src="+"'assets/images/big_winner.jpg'" + "alt="+"'hangman1'>"+
				"<p>Press any key to play again!</p>";
				document.querySelector('.winner').innerHTML = html;
				console.log(wins);
				var html= "<p>Wins: "+wins+"</p>"+
						"<p>Losses: "+losses+"</p>";
				document.querySelector('#record').innerHTML = html;

				document.addEventListener("keydown",function(){
					contGame=true;
				});

				if(endGame(gameBoard, split)===true && contGame===true){
					newGame();
					document.addEventListener("keydown",function(){
					contGame=false;
					});

				}
			 	
			}
		}
};

// document.onkeyup = function() {
// 	// game();
// 	var html= "<p>Wins:"+wins+"<p>";
// 		document.querySelector('#record').innerHTML = html;
	

// };

///===Fucntoin for later


// contGame.addEventListener("keydown",function(){
// 	contGame=true;
// });

// if(endGame()===true && contGame===true){
// 	newGame();
// }