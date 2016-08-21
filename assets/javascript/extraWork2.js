for(var i=0, n = ch)
	if(user guess = comchoice[i])
		then board[i]=compchoice [i]

	for(var i=0, n=compChoice.length;i<n; i++){
					if(userGuess = compChoice[i]){
						board[i]=userGuess;
					}
					else{
						i++;
					}
					console.log(board);


function endGame (arr1, arr2){
	for(var i=0, n=board.length; i<n; i++){
		if(arr1[i] !== arr2[i]){
			return false;
		}
		return true;
	}
	return true;
}


function imageChange(incor){
	switch (incor){
		case 7:
			var html = "<img src="+"assets/images/hangman2.png"+" alt="+"hangman2"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 6:
			var html = "<img src="+"assets/images/hangman3.png"+" alt="+"hangman3"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 5:
			var html = "<img src="+"assets/images/hangman4.png"+" alt="+"hangman4"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 4:
			var html = "<img src="+"assets/images/hangman5.png"+" alt="+"hangman5"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 3:
			var html = "<img src="+"assets/images/hangman6.png"+" alt="+"hangman6"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 2:
			var html = "<img src="+"assets/images/hangman7.png"+" alt="+"hangman7"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		case 1:
			var html = "<img src="+"assets/images/hangman8.png"+" alt="+"hangman9"+">";
				document.querySelector('#hang').innerHTML = html;
			break;
		default:
			var html = "<img src="+"assets/images/hangman9.png"+" alt="+"hangman9"+">";
				document.querySelector('#hang').innerHTML = html;
	}
}


"<p> Chances left:  "+ incorrect +"</p>"
					+

					"<p>Turns: " +turns +"</p>"
					+
					"<p>Letters guessed: "+guesses+"</p>";