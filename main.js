
// other decks
async function populate() {
  const requestURL = './data.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const decks = await response.json();

  console.log(decks);
}

populate();

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