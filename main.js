let deck = document.getElementById("deck");

// other decks
fetch('./decks/data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

// Figure Out How To Save A File Into Decks Folder

document.getElementById("title").innerHTML = "I Hate Quizlet | Please Upload A Deck";

// Name the button after a file in decks
function fileName(input) {
	let file = input.files[0]; 
    console.log(file.toString());
	document.getElementById("title").innerHTML = "I Hate Quizlet | " + file.name;
}