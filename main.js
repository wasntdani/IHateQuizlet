document.body.onload = populate;


// load json
async function populate() {
  const requestURL = './data.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const decksOBJ = await response.json();

  console.log(decksOBJ.deck);
  console.log(decksOBJ.deck[0]);

  addButtons(decksOBJ);
}

// infinite buttons
function addButtons(decksOBJ) {
  console.log(decksOBJ);
  const section = document.querySelector('section');
  const specificDeck = decksOBJ.deck;
  for (const deck in specificDeck) {
    console.log(deck);
    const buttonBuilder = document.createElement("button");
    buttonBuilder.textContent = deck.name;
    section.appendChild(buttonBuilder);
  }
}



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