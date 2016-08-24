var wordLib = ["cat", "dog", "horse", "bees"];




var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("");
console.log(split);
console.log("split: "+split.length);
console.log("cL:" +compChoice.length)

// Board set-up=================================================
var gameBoard = [];
for(var i=0, n=compChoice.length; i<n; i++){
	gameBoard.push('_ ');
}
//one board plays one board displays
var viewBoard=gameBoard.join("");
console.log(viewBoard);

var html = "<p>"+ viewBoard + "</p>";
document.querySelector('#board').innerHTML = html;

//Check for winner Function=======================================
function endGame (arr1, arr2){
	arr1=arr1
	for(var i=0, n=arr1.length; i<n; i++){
		if(arr1[i] !== arr2[i]){
			return false;
		}
	}
	return true;
}

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
				var html = "<p >"+ split + "</p>";
				document.querySelector('#board').innerHTML = html;
				document.onkeyup = function() {
						location.reload(true);
					};
	}
}

// Main game==================================================
var incorrect= 8;
var guesses = [];

document.onkeyup = function() {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Guess: " +userGuess)

	//if the letter has been guessed do nothing
	if(guesses.indexOf(userGuess)>-1){
	}
	//otherwise go to town
	else{
			if(compChoice.indexOf(userGuess)>-1){
				guesses.push(userGuess);
				//check to see where in the arryay the guess is and replace board
				for(var i=0, n=split.length;i<n; i++){
					if(userGuess === split[i]){
						viewBoard=viewBoard.split(" ");
						viewBoard[i]=userGuess;
						//loaded display in viewable board
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
				imageChange(incorrect);
				// if(incorrect < 1){ //display you lost an show answer
				// 	var html = "<p>Sorry you lost :(</p>"+"<p>Press again key to play again!</p>";
				// 	document.querySelector('.winner').innerHTML = html;
					
				// 	var html = "<p >"+ split + "</p>";
				// 	document.querySelector('#board').innerHTML = html;

				// 		document.onkeyup = function() {
				// 		location.reload(true);
				// 		}
				//}
			}

		var html =		"<div class="+"'panel panel-default'"+">"+
						  "<div class="+"'panel-heading'"+">"+"Chances Left</div>"+
						  "<div class="+"'panel-body'"+">"+
						    incorrect+
						  "</div>"+
						"</div>"
							+
						"<div class="+"'panel panel-default'"+">"+
						  "<div class="+"'panel-heading'"+">"+"Letters Guessed</div>"+
						  "<div class="+"'panel-body'"+">"+
						    guesses+
						  "</div>"+
						"</div>"

			document.querySelector('#score').innerHTML = html;

			if(endGame(gameBoard, split)===true){
				var html = "<h3>Congrats!</h3>"+
				"<img class="+"'center-block' " + "src="+"'assets/images/big_winner.jpg'" + "alt="+"'hangman1'>"+
				"<p>Press any key to play again!</p>";
				document.querySelector('#hang').innerHTML = html;

				document.onkeyup = function() {
				location.reload(true);
				}

			}
		}
}


