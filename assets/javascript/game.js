var wordLib = ["cat", "dog", "horse"];
var dash = "_";

var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("")

console.log(split);


for(var i =0, n=compChoice.length; i<n; i++){
 	console.log("_");
 }


var html = "<p>x</p>";
document.querySelector('#word').innerHTML = html;


console.log(compChoice);

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
			// 	for(var q=0, x=compChoice[i].length; i<x; i++){
 		// 			if(userGuess=== compChoice.charAt(q)){
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
}




