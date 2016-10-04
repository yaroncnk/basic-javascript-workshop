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

//Function 6 - input - two numbers and an operator , output - based on the operator and the string
function doit(num1,num2,operator) {
    var output = 0;
    switch (operator) {
        case 'add':
            output = num1 + num2;
            break;
        case 'subtract':
            output = num1 - num2;
            break;
        case 'mult':
            output = num1*num2;
            break;
        case 'div':
            output = num1/num2;
            break;
    }
        return output;
}

//Function 7 - input - a string and a number , output - the string copied X amount of times (depends on the number)
function copyme(word,counter) {
    var newString = '';
    for (var i=0; i<counter; i++) {
        newString = newString + word;
    }
    return newString;
}

//Function 8 - input - a string , output - a reversed string
function reverseme(string){
    var arr = string.split("");
    var newArr = [];
    for (var i = arr.length; i>=0 ; i--) {
        newArr.push(arr[i]);
    }
    var newString = newArr.join(""); 
    return newString;
    
}

//Function 9 - input - a number , output - factorial (I'm doing it "manually")
function factorial(number){
    var counter = 1;
    if (number === 0) {
        counter = 1;
    } else {
    while (number >= 1) {
        counter = counter * number;
        number -- ;
    }
    return counter; 
 }
}

//Function 10 - input - array of words, output - longest word in the array
function findLongestWord(string) {
    var arr = string.split(" ");
    var longestString = 0;
    var location = 0;
    for (var i= 0; i < arr.length; i++) {
        if (arr[i].length > longestString) {
            longestString = arr[i].length;
            location = i;
        }
    }
    return arr[location];
}

//Function 11 - input - a string, output - the same string with every letter capitalized
function capitalizeMe(string) {
    var arr = string.split(" ");
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLocaleLowerCase());
    }
    var newString = newArr.join(" ");
    return newString;
}

//Function 12 - input - an array of numbers , output - the largest number
var arr = [1,2,44,56,23, -3, 100];
function findBiggestNumber(numbers) {
    var biggestNumber = 0;
    for (var i = 0 ; i < numbers.length; i++) {
        if(numbers[i] > biggestNumber) {
            biggestNumber = numbers[i];
        }
 }
  return biggestNumber;
}
        }
    }
}