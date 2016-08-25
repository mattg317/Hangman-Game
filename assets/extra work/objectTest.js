var wordLib= ["cat", "dog", "horse", "bees"];
var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("");
console.log(split);
var wins=0;
var turns = 0;
var correct = 0;
var incorrect= 5;
var guesses = [];
var gameBoard= [];
var	viewBoard=[];

var hangman={
	wins:0,
	gameSetup: function(){
		var html = "<p> Score </p>" +

					"<p> correct: " + correct +"</p>"
					+
					"<p> incorrect: "+ incorrect +"</p>"
					+

					"<p>turns: " +turns +"</p>"
					+
					"<p>guesses: "+guesses+"</p>";

			document.querySelector('#score').innerHTML = html;
	},

	boardSetup: function(){
		for(var i=0, n=compChoice.length; i<n; i++){
			gameBoard.push('_ ');
		}
		viewBoard=gameBoard.join("");
		console.log(viewBoard);

		var html = "<p>"+ viewBoard + "</p>";
		document.querySelector('#board').innerHTML = html;

		this.gameSetup();
	},
	
	endGame: function(arr1, arr2){
		for(var i=0, n=arr1.length; i<n; i++){
		if(arr1[i] !== arr2[i]){
				return false;
				}
			}
			return true;
		
		},
	
	// newGame: function(){
	// 	this.gameSetup();
	// 	this.boardSetup();
	// 	},

	
	playGame: function(){
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess)
		console.log(this.gameBoard);
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
					this.newGame();
				}
			}
			// this.gameSetup();

			if(this.endGame(gameBoard, split)===true){
				var html = "<p>You Win!</p>"+"<p>Press again key to play again!</p>";
				document.querySelector('.winner').innerHTML = html;
				wins++;
				console.log(wins);
				var html= "<p>Wins:"+wins+"<p>";
				document.querySelector('#record').innerHTML = html;
				document.onkeyup=function(){
				this.boardSetup();
				this.playGame();
			}
			}
		}

	},

	

};//end of object

hangman.boardSetup();
document.onkeyup = function() {
	hangman.playGame();
};