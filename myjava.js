
var userChoice = prompt ("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice<=0.33) {
	computerChoice = "rock";
} else if (0.34<=computerChoice<=0.66) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}


var compare = function (player 1, player 2)
	if (player 1 = player 2) {
		return "It's a tie.";
	}
	if (player 1="rock") {
		if (player 2 = "scissors")
			return "player 1 wins";
	} else {
		return "player 2 wins"
	}

	if (player 1="paper") {
		if (player 2 = "rock")
			return "player 1 wins";
	} else {
		return "player 2 wins"
	}

	if (player 1= "scissors") {
		if (player 2= "paper")
			return "player 1 wins";
	} else {
		return "player 2 wins";
	}
}