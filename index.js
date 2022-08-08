function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(shout(string));
}
function logWhisper(string) {
  console.log(whisper(string));
}
function sayHiToHeadphonedRoommate(string) {
  switch (string) {
    case string.toUpperCase():
      return "YES INDEED!";
      break;
    case string.toLowerCase():
      return "I can't hear you!";
      break;
    case "Let's have dinner together!":
      return "I would love to!";
      break;
    default: 
      return "Please write in either all upper case or all lower case.";
  }
}
/*function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase())
    {
        return "YES INDEED!";
    }
    if (string === string.toLowerCase())
    {
        return "I can't hear you"
    }
}
  }
*/
console.log(sayHiToHeadphonedRoommate("Hello!"));