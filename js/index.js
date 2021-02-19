/*
 * @author lotik
 * 02/2021
 *
 * ironHack course first lab
 * Each iterations is a function that return a string,
 * then concatenate with another function and console log this last.
 */
"use strict";
console.log("I'm ready");
console.log(`///////////////// START LAB ////////////////
//////////////// IT'S ITERATIONS TIME///////////////////`);

//////// utils variable for all process

const possibleCase = [
  { hacker1: "Ploti", hacker2: "Ploti" },
  { hacker1: "Ploti", hacker2: "ClopPLOP" },
  { hacker1: "ClopPLOP", hacker2: "Ploti" },
];
/**
 * find hacker1 and hacker2 by objectCase object value
 * objectCase = { hacker1: string, hacker2: string }
 *
 * @param {object} objectCase
 * @returns
 */
function iteration1(objectCase) {
  // Iteration 1: Names and Input
  // iteration 1.1 driver is hacker1 value of objectCase
  let iteration1_1 = `1.1:\n hacker1 = ${objectCase.hacker1}\n`;
  // iteration 1.2 print driver name
  let iteration1_2 = `1.2:\n The driver's name is ${objectCase.hacker1}\n`;
  // iteration 1.3 navigator is hacker2 value of objectCase
  let iteration1_3 = `1.3:\n hacker1 = ${objectCase.hacker2}\n`;
  // iteration 1.4 print navigator name
  let iteration1_4 = `1.4:\n The navigator's name is ${objectCase.hacker2}\n`;
  return iteration1_1 + iteration1_2 + iteration1_3 + iteration1_4;
}

// Iteration 2: Conditionals
////////////////////////////////////////////
// The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
////////////////////////////////////////////////
/**
 * compare driver and navigator name and return the correct answer according to
 *
 * @param {string} driver
 * @param {string} navigator
 * @returns
 */
function iteration2(driver, navigator) {
  // insert length in const to reuse with a readable name
  const lengthDriver = driver.length;
  const lengthNavigator = navigator.length;

  // compare with if to choose the message
  if (lengthDriver === lengthNavigator) {
    return `2.1:\n Wow, you both have equally long names, ${lengthDriver} characters!.`;
  }
  if (lengthDriver < lengthNavigator) {
    return `2.1:\n It seems that the navigator has the longest name, it has ${lengthNavigator} characters.`;
  }
  if (lengthDriver > lengthNavigator) {
    return `2.1:\n The driver has the longest name, it has ${lengthDriver} characters.`;
  }
}

// Iteration 3: Loops
/**
 * Print all the characters of the driver's name, separated by a space and in capitals.
 *
 * @param {string} driver
 * @param {string} navigator
 * @returns
 */
function iteration3(driverName, navigatorName) {
  // iteration 3.1 make array of driverName letters touppercase  with forof loop on driverName
  let upperCaseDriverArray = [];
  for (const letterDriver of driverName) {
    upperCaseDriverArray.push(letterDriver.toUpperCase());
  }
  // iteration 3.2 rewrite the navigator name upside down with while loop and decrement index
  let indent = navigatorName.length - 1;
  let reverseNavigatorName = "";
  while (indent >= 0) {
    reverseNavigatorName = reverseNavigatorName + navigatorName[indent];
    indent--;
  }
  // iteration 3.3 compare lexicographic order of driver and navigator name then set answerLexicographicOrder with good value
  let driverVsNavigatorOrder = driverName.localeCompare(navigatorName);
  let resultOrderNames;
  switch (driverVsNavigatorOrder) {
    case -1:
      resultOrderNames = "The driver's name goes first.";
      break;
    case 1:
      resultOrderNames = "Yo, the navigator goes first definitely.";
      break;
    case 0:
      resultOrderNames = "What?! You both have the same name?";
      break;
    default:
      break;
  }
  // return string with all iteration 3
  // 3.1 join with space the array of driverName letters touppercase
  // 3.2 the navigator name upside down
  // 3.3 the correct answer of lexicographic order
  return `
3.1:\n ${upperCaseDriverArray.join(" ")}
3.2:\n ${reverseNavigatorName}
3.3:\n ${resultOrderNames}`;
}

/**
 * return string that's represent, each case for each iterations ;o)
 *
 * @returns {string}
 */
function myLab() {
  let labConsole = "";
  // Here we send the different cases in iterations with a loop for and and returns the concatenated result (labConsole)
  for (let indent = 0; indent < possibleCase.length; indent++) {
    let nbCase = indent + 1;
    const driver = possibleCase[indent].hacker1;
    const navigator = possibleCase[indent].hacker2;
    labConsole += `
//////////// Case ${nbCase}///////////
${iteration1(possibleCase[indent])}
${iteration2(driver, navigator)}
${iteration3(driver, navigator)}
//////////// end Case ${nbCase} //////`;
  }
  return labConsole;
}

console.log(myLab());
console.log("/////////////// END ITERATIONS ///////////////////\n");

/////////////////// Bonus Time!!!! ///////////////////////
console.log("/////////////////// IT'S BONUS TIME /////////////////");
const loremIpsums = `Vestibulum vitae nisi non nisi laoreet malesuada in at dolor. Proin justo purus, viverra sed vestibulum non, venenatis eu nulla. Sed efficitur
lorem vel urna dapibus tincidunt. Nam eu auctor mi. Morbi porta lacinia est quis vulputate. Curabitur scelerisque dolor sit amet finibus
egestas. Aenean hendrerit massa nec ex congue, at pellentesque elit blandit. Etiam eu quam diam. Vivamus consequat aliquet quam vel
pharetra. In efficitur vehicula sem. Pellentesque commodo nibh non augue commodo ultrices. Ut placerat vel sem sed auctor. Nunc id nisl
vitae quam rhoncus fringilla. Vivamus in rhoncus ex, sit amet scelerisque nunc. Suspendisse nec pellentesque velit.

Nunc tempus faucibus massa ac mattis. Suspendisse in posuere nunc. Mauris turpis risus, efficitur sed ante in, dictum suscipit sapien.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin et bibendum purus, eget rutrum eros.
Suspendisse potenti. Duis justo lectus, hendrerit rhoncus pulvinar in, condimentum vel lorem. Ut consequat ex commodo tellus vulputate consequat.
Nulla consectetur tortor maximus, sodales ligula sed, pulvinar dolor. In mauris nisi, tempor et porta vitae, eleifend at risus. Phasellus
vehicula turpis lorem, non euismod leo lacinia a. Pellentesque eget eros vitae sapien viverra pellentesque quis eget neque.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque molestie est eget commodo interdum. Aenean
at interdum est. Aenean imperdiet sem id vulputate commodo. Nam egestas velit sapien, id fringilla mauris auctor eu. Donec dignissim consectetur
rat ut accumsan. Nullam convallis commodo mauris sollicitudin molestie. Pellentesque ultricies condimentum diam, id bibendum sem. Nunc rhoncus
rutrum tellus vel semper.`;

/////////// BONUS 1 ///////////
/// here count the number of word in loremipsums he must have 259 word copy past on http://compteur-de-mots.net/ to check
/// and count the number of word "et" the result on http://compteur-de-mots.net/ is 5
let nbWord = 0; // number of words in loremIpsums const
let nbEt = 0;
/**
 * Check if a string with length 4 is a "et" word and not a part of other word
 * @param {string} str
 */
function isEt(str) {
  if (str.match(/\Wet\W/)) {
    return true;
  }
  return false;
}
//here i start to 1 because i check the character before
for (let i = 1; i < loremIpsums.length; i++) {
  let currentCharacter = loremIpsums[i];
  let beforeCharacter = loremIpsums[i - 1];
  if (
    // check if current character is space, new line or ponctuation, if true and letter before is word character, it's a word
    (currentCharacter === " " ||
      currentCharacter === "." ||
      currentCharacter === "," ||
      currentCharacter === "\n") &&
    beforeCharacter.match(/\w/) !== null
  ) {
    // console.log(currentCharacter, beforeCharacter);
    nbWord++;
  }
  if (i < loremIpsums.length - 3) {
    /// here limit fot the end of the string to remove condition that check if afterCharacter exist
    if (currentCharacter === "e") {
      if (
        isEt(
          beforeCharacter +
            currentCharacter +
            loremIpsums[i + 1] +
            loremIpsums[i + 2]
        )
      ) {
        nbEt++;
      }
    }
  }
}
let resultBonus1 = `
///////////////BONUS 1/////////////////////
const loremipsums = ${loremIpsums}

loremipsums has ${nbWord} words.
loremipsums contains ${nbEt} times the word "et".
////////////////////END BONUS 1////////////
`;
console.log(resultBonus1);
/////////////////////BONUS 2///////////////
console.log("///////////////BONUS 2/////////////////////");
/// create array const with 9 first value are palindrome and the 2 last not
const phrasesToCheck = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
  "ceci par contre non",
  "Et celui la! Non plus ;o)",
];
// loop on phrasesToCheck and check if it's a palindrome
for (const phrase of phrasesToCheck) {
  let onlyCharactersOfPhrase = phrase.replace(/\W/gm, ""); // remove all non character of the string
  let middleOfStr;
  if (onlyCharactersOfPhrase.length % 2 === 0) {
    // here find number of letters to compare
    middleOfStr = onlyCharactersOfPhrase.length / 2;
  } else {
    middleOfStr = Math.floor(onlyCharactersOfPhrase.length / 2);
  }
  console.log(middleOfStr);
  let i = 0;
  let isPalindrome = true;
  while (i <= middleOfStr) {
    let re = new RegExp( // here make a regexp to have the case insensitive match
      `${onlyCharactersOfPhrase[onlyCharactersOfPhrase.length - (1 + i)]}`,
      "i"
    );
    if (onlyCharactersOfPhrase[i].match(re) === null) {
      // checks if the symmetrical letters are identical if false console.log the answer and break loop
      console.log(`The phrase:
${phrase}

is not a palindrome.`);
      isPalindrome = false;
      break;
    } else {
      i++;
    }
  }
  if (!!isPalindrome) {
    // if isPalindrome is always true after the while it's a palindrome
    console.log(`The phrase:
${phrase}

is a palindrome.`);
  } else {
    continue;
  }
}
console.log(
  "///////////////END BONUS2 AND END LAB/////////////////////\n     HAVE A NICE DAY!!!!!o)"
);
