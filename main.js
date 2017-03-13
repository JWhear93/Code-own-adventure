// Console logging

window.console = {
  log: function(str){
	var node = document.createElement("div");
	node.appendChild(document.createTextNode(str));
	document.getElementById("myLog").appendChild(node);
  }
}

// Check if user is ready to play.

confirm("I'm ready to begin.");

// Age prompt.

var age=prompt("Confirm your age.");

if (age<13) {
	console.log("You may continue but the creator takes no responsibility")
}
else {
	console.log("Great, then let's continue!")
}

// Story start.

console.log("You awake in a dark corridor, blinking flouresent lighting and the hard floor suggest some kind of hospital...");

confirm("Look around");

console.log("Suddenly a shadowy figure emerges into the corridor, seemingly from out of nowhere. He asks...'What are you doing here?'");

var userAnswer=prompt("Run from them?");

if (userAnswer==="yes") {
	console.log("You turn and begin to sprint as fast as you can...")
}
else {
	console.log("The figure turns and begins to slowly walk away, weakly beckoning you to follow.")
}

confirm("Continue...");

if (userAnswer==="yes") {
	console.log("You reach the end of the corridor and make a sharp right, smashing through an emergency exit that had already been used and into the desolate parking lot.")
}
else {
	console.log("You look around for a moment as the strange figure rounds a corner, you follow around the corner but they are gone.")
}

// Feedback.

var feedback=prompt("Please rate our little adventure out of 10.");

if (feedback>8) {
	console.log("Thank you! See you at the next adventure!")
}
else {
	console.log("I'll keep practicing :)");
}