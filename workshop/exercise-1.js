// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

// Q1.1
// How many names does Morty have? (use grandson)
let mortyNamesArray = grandson.split(' ');
let numberOfNames = mortyNamesArray.length;
console.log(`A1) Morty has ${numberOfNames} names`);
// Q1.2
// Convert the alternateRicks string to an array. Console that array.
let alternateRicksArray = alternateRicks.split(', ');
console.log(alternateRicksArray);

// Q1.3
// How many Ricks have been named in alternateRicks?
let numberOfRicks = 0;
for (let rickCounter = 0; rickCounter < alternateRicksArray.length; rickCounter++ ) {
  if (alternateRicksArray[rickCounter].includes('Rick')) {
    numberOfRicks +=1;
  }
} console.log(`There are ${numberOfRicks} in alternateRicks`);

// Q1.4
// How many characters are there in rickSaying (without spaces)?
let rickSayingCollapsed = rickSaying.split("");
let counter = 0;
for (let i = 0; i < rickSayingCollapsed.length; i++) {
  if (rickSayingCollapsed[i] !== ' ') {
      counter += 1;
  }
} console.log(`There are ${counter} characters in rickSaying`)
//mostly found this with solution

// Q1.4
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".
let mortyFirstName = grandson.slice(0, 5);
let mortyLastName = grandson.slice(14);
let mortyFullName = (mortyFirstName.concat(' ').concat(mortyLastName));
console.log(mortyFullName);

// Q1.5
// Decode and console. the secret!
// To do so, you will need to remove all of the notCode words.

let decoded = notCode;
for (let i = 0; i < notCode.length; i++ { 
  decoded = decode.replace(notCode[i], ''));
}
console.log (decoded);
//mostly found this with solution

// Q1.6 (Stretch Goal)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
