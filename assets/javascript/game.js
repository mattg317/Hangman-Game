var wordLib = ["cat", "dog", "horse", "bees"];
var compLib ={
	list: ["fish","camels", "chimps"]
}


var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("")
console.log(split);


// Board set-up=================================================
var board = [];
for(var i=0, n=compChoice.length; i<n; i++){
	board.push('_ ');
}


var html = "<p>"+ board + "</p>";
document.querySelector('#board').innerHTML = html;

//just a test delete after==========================================
var html = "<p>x</p>";
document.querySelector('#guess').innerHTML = html;


console.log(compChoice);
//==================================================================================
var turns = 0;
var correct = 0;
var incorrect= 5;
var guesses = [];

document.onkeyup = function() {
	// alert('pressed a button');
	if(incorrect>1){
		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(compChoice.length);

		//check to see if letter is in word
		if(guesses.indexOf(userGuess)>-1){
		}

		else{
			if(compChoice.indexOf(userGuess)>-1){
				guesses.push(userGuess);
				correct ++;
				turns ++;

				for(var i=0, n=split.length;i<n; i++){
					if(userGuess === split[i]){
						board[i]=userGuess;
					}
					else{
						i++;
					}

				}
			}
				}
			else{
				guesses.push(userGuess);
				incorrect --;
				turns ++;
			}
			console.log(guesses);

			var html = "<p> Score </p>" +

					"<p> correct: " 
					+
					correct 
					+
					"</p>" 

					+

					"<p> incorrect: "
					+
					incorrect 
					+
					"</p>"

					+

					"<p>turns: " 
					+
					turns 
					+
					"</p>"

					+

					"<p>guesses: "
					+
					guesses
					+
					"</p>";

					document.querySelector('#score').innerHTML = html;
		}
	}
	
	else{
		alert("You lost")
	}


	if(board === split){
		alert("you won");
	}
}




