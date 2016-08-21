var wordLib = ["cat", "dog", "horse", "bees"];
var compLib ={
	list: ["fish","camels", "chimps"]
}


var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("")
console.log(split);
console.log("split: "+split.length);
console.log("cL:" +compChoice.length)

// Board set-up=================================================
var board = [];
for(var i=0, n=compChoice.length; i<n; i++){
	board.push('_ ');
}
console.log("StartHere: "+board+" " + board.length);
// board=board.join("");
console.log("Start: "+board);
console.log(board.length);

var html = "<p>"+ board + "</p>";
document.querySelector('#board').innerHTML = html;

//Check for winner Function=======================================
function endGame (arr1, arr2){
	arr1=arr1
	for(var i=0, n=board.length; i<n; i++){
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
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman8.png'"+" alt="+"hangman9"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		default:
			var html = "<img class="+"'center-block' "+"src="+"'assets/images/hangman9.png'"+" alt="+"hangman9"+">";
				document.querySelector('#hang').innerHTML = html;
	}
}

// Main game==================================================
var turns = 0;
var correct = 0;
var incorrect= 8;
var guesses = [];

document.onkeyup = function() {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Guess: " +userGuess)
	console.log("After Guess: "+board);
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
						// board=board.split(" ");
						console.log("BCorrect: "+board +board.length);
						board[i]=userGuess;
						// board= board.join(" ");
						console.log("ACorrect: "+board + board.length);
						var html = "<p>"+ board + "</p>";
						document.querySelector('#board').innerHTML = html;
					}
				}
			}
			else{
				guesses.push(userGuess);
				incorrect --;
				turns ++;
				imageChange(incorrect);
				if(incorrect < 1){ //display you lost an show answer
					var html = "<p>Sorry you lost :(</p>"+"<p>Press again key to play again!</p>";
					document.querySelector('.winner').innerHTML = html;
					
					var html = "<p>"+ split + "</p>";
					document.querySelector('#board').innerHTML = html;

						document.onkeyup = function() {
						location.reload(true);
						}
				}
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

			if(endGame(board, split)===true){
				var html = "<p>You Win!</p>"+"<p>Press again key to play again!</p>";
				document.querySelector('.winner').innerHTML = html;
				document.onkeyup = function() {
				location.reload(true);
				}

			}
		}
}


