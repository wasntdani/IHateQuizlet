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

function previewFile() {
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        content.innerText = reader.result;
      },
      false
    );
  
    if (file) {
      reader.readAsText(file);
    }
  }