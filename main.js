document.body.onload = populate;


// load json
async function populate() {
  const requestURL = './data.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const decks = await response.json();

  console.log(decks.deck);
  console.log(decks.deck[0]);

  addButtons(decks);
}

// infinite buttons
function addButtons(decks) {
  console.log(decks);
  const section = document.querrySelector("section")
  for (const deck in decks) {
    console.log(decks.deck[0].name);
    const buttonBuilder = document.createElement("button");
    buttonBuilder.textContent = decks.deck[0].name;
    section.appendChild(buttonBuilder)
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