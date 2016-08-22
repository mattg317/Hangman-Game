var wordLib= ["cat", "dog", "horse", "bees"];
var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("");
console.log(split);
var wins=0;
var turns = 0;
var correct = 0;
var incorrect= 5;
var guesses = [];

var hangman={
	gameBoard: [],
	viewBoard:[],
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
			this.gameBoard.push('_ ');
		}
		this.viewBoard=this.gameBoard.join("");
		console.log(this.viewBoard);

		var html = "<p>"+ this.viewBoard + "</p>";
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
	
	newGame: function(){
		// for(var i=0, n=compChoice.length; i<n; i++){
		// 	this.gameBoard.push('_ ');
		// }
		// this.viewBoard=this.gameBoard.join("")
		this.boardSetup();

		var html = "<p>"+ this.viewBoard + "</p>";
		document.querySelector('#board').innerHTML = html;
	

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

		},

	
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
						this.viewBoard=this.viewBoard.split(" ");
						this.viewBoard[i]=userGuess;
						this.gameBoard[i]=userGuess;
						this.viewBoard=this.viewBoard.join(" ");
						console.log(this.gameBoard);
						var html = "<p>"+ this.viewBoard + "</p>";
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
					document.onkeyup=function(){
					location.reload();
				}
				}
			}
			this.gameSetup();

			if(this.endGame(this.gameBoard, split)===true){
				var html = "<p>You Win!</p>"+"<p>Press again key to play again!</p>";
				document.querySelector('.winner').innerHTML = html;
				wins++;
				console.log(wins);
				var html= "<p>Wins:"+wins+"<p>";
				document.querySelector('#record').innerHTML = html;
				document.onkeyup=function(){
					location.reload();
				}
			}
		}

	}


};//end of object

hangman.boardSetup();
document.onkeyup = function() {
	hangman.playGame();
};