//This is my comment git 

//First function - find a string's first letter
function firstLetter(word) {
    return word.substring(0,1);
}

//Second function - find a string's second character
function lastLetter(word) {
    var howLong = word.length;
    return word.substring(howLong-1,howLong);
}

//Third function - input: a string and index ,  output - character in the location (index)
function findChar(word,index){
    return word.charAt(index);
}

//Fourth function - adding two numbers (if we add either num+string or string+string Javstring will merge them) 
function addition(num1, num2) {
    return num1 + num2;
}

//Fifth function - multiplyig two numbers. Input - two numbers , Output - x times y (unless not a number, then NaN)
function multiplication(num1,num2) {
    return num1 * num2;
}
