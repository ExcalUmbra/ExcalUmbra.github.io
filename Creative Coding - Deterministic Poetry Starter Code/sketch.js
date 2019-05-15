// Deterministic Poetry: Acrositc and Diastic
// Inspired by the work by poet Jackson Mac Low

// **** Fill out the remainder of the comment header!!! ****
// Allan & Aitazaz
// DATE

let srcText;
let words;
let seedWord;
let characterSeed;
let curLetter;
function preload() {
  //use preLoad to bring in source text from file. 
  srcText = loadStrings("sourceText.txt");
}

function setup() {
  createCanvas(500, 500);
  noLoop();
  //Prepare the text. Since loaded Strings have each line from file as a separate element in the array, 
  //first, join() all the array elements together into one large string, separated by spaces.
  //second, split up that large string back into an array, using spaces and punctuation as the delimiters,
  //which yeilds and array where each element is an individual word from the source text.
  srcText = join(srcText, ' ');
  words = splitTokens(srcText, ' .,?!()');

  //UI Elements. A title, text field, and button.
  greeting = createElement('h2', 'Poetry Generator');
  greeting.position(20, 5);

  input = createInput();
  input.size(250, 15);
  input.position(20, 65);

  //When the Acrostic Button is pressed, the generateAcrostic() function will be called
  buttonAcrostic = createButton('Poem (Acrostic)');
  buttonAcrostic.position(input.x + input.width, 65);
  buttonAcrostic.mousePressed(generateAcrostic);

  //When the Acrostic Button is pressed, the generateDiastic() function will be called
  buttonDiastic = createButton('Poem (Diastic)');
  buttonDiastic.position(input.x + input.width + buttonAcrostic.width, 65);
  buttonDiastic.mousePressed(generateDiastic);

  //Border for textbook that encloses resulting poem
  rect(20, 100, 470, 370);

}

function drawBorder() {
  //small function to clear any previous poems from the screen, set up the text properties, and draw the border
  background(255);
  textSize(12);
  textAlign(LEFT);
  rect(20, 100, 470, 370);
}

function generateAcrostic() {
  seedWord = input.value();
  //Clear any old poem on the screen, and redraw border
  drawBorder();
  let poem = "";   //poem starts as an empty string. Use loop(s) to add to this!
  let lastWord = "";
  for (let i = 0; i < seedWord.length; i++) {
    curLetter = seedWord.charAt(i);
    print(curLetter);
    for (let j = 0; j < words.length; j++) {
      let currentArrayWord = words[j];
      if (currentArrayWord.charAt(0) === curLetter) {
        if (lastWord !== currentArrayWord) {
          poem = poem + " " + currentArrayWord;
          lastWord = currentArrayWord;
          words.splice(j, 1);
          break;
        }
      }
    }
  }

  text(poem, 25, 105, 430, 360);
  print(poem);
}

let curLetterPlace;

function generateDiastic() {
  seedWord = input.value();

  drawBorder();
  let poem = "";
  let lastWord = "";
  for (let i = 0; i < seedWord.length; i++) {
    curLetterPlace = seedWord.charAt(i);
    print(curLetterPlace);
    for (let j = 0; j < words.length; j++) {
      let currentArrayWord = words[j];

      if (currentArrayWord.charAt(i) === curLetterPlace) {
        if (lastWord !== currentArrayWord) {
          poem = poem + " " + currentArrayWord;
          lastWord = currentArrayWord;
          words.splice(j, 1);
          break;
        }
      }
    }

    text(poem, 25, 105, 430, 360);
    print(poem);
  }
}