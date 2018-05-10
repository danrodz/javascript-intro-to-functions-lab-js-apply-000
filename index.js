// takes string and returns all characters in uppercase
const shout = string => string.toUpperCase();

// takes string and returns all characters in lowercase
const whisper = string => string.toLowerCase();

// logs in the console a string transformed to uppercase
const logShout = string => {
  console.log(string.toUpperCase());
};

// logs in the console a string transformed to lowercase
const logWhisper = string => {
  console.log(string.toLowerCase());
};

// takes a string and uses the function expressions declared
// above to check conditionals and return the correct string
const sayHiToGrandma = string => {
  if (string === whisper(string)) {
    return "I can't hear you!";
  } else if (string === shout(string)) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else {
    return; 
  }
};