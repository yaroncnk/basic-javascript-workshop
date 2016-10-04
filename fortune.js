//The fortune teller! Random quotes

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var array = ["Just do it!" , "No pain, no gain" , "Life is simple, but we insist on making it complicated" , "Yes we can!" , "I have a dream" , "Fake it until you make it"];
function tellMe(array) {
    var winner = getRandomInt(0 , array.length);
    return array[winner];
}
