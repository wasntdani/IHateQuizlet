let deck = document.getElementById("deck");

// other decks
fetch('./decks/data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

// Figure Out How To Save A File Into Decks Folder

document.getElementById("title").innerHTML = "I Hate Quizlet | Please Upload A Deck";

// This is where i'm going to test reading from data.json
// COLM WORK ON THIS PART OF THE CODE!!!

// This just displays the text in a txt file; it's not that special.
function previewFile() {
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        content.innerText = reader.result;
        console.log(reader.result);
      },
      false
    );
  
    if (file) {
      reader.readAsText(file);
    }
  }