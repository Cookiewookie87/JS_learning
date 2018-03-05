/*
--------------------------------------------------------------------------------------------------
1. Reverse the provided string.

You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Global String Object
String.prototype.split()
Array.prototype.reverse()
Array.prototype.join()
*/
/*
function reverseString(str) {
    //returns array containing each character
    var res = str.split('');
    var reverse = [];
    
    //fill array with reverse word
    for (var i = 0; i < res.length; i++) {
        reverse.unshift(res[i]);
    }
    //transform array to string
    reverse.toString();
    //remove , between elements from toString
    return reverse.join('');
    
}

console.log(reverseString("Greetings from Earth"));
*/

/*
--------------------------------------------------------------------------------------------------
2. Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Arithmetic Operators
*/
/*
function factorialize(num) {
    //set to 1 so it is not 0*X
    var tempNum = 1;
    //go through number and multiply
    for (var i = 1; i <= num; i++){
        tempNum *= i;
    }
    return tempNum;
}

console.log(factorialize(10));
*/

/*
--------------------------------------------------------------------------------------------------
3. Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.replace()
String.prototype.toLowerCase()
*/
/*
function palindrome(str) {
    //replacing all chars in [] with no space and transform to lower case (in short, non numeric chars are also as "\W_")
    var newStr = str.replace(/[-_#,)/.(|/ /]/g, '').toLowerCase();
    var reverse = [];
    
    //reverse word in array
    for (var i = 0; i < newStr.length; i++) {
        reverse.unshift(newStr[i]);
    }
    //zakaj tukaj ne more bit reverse = reverse.toString()?
    reverse = reverse.join('');
     //if it is the same than true
    if (newStr === reverse) {
        return true;
    } else {
        return false;
    }
}

var rezultat = palindrome("r.ac_E car");
console.log(rezultat);
*/

/*
--------------------------------------------------------------------------------------------------
4. Return the length of the longest word in the provided sentence.

Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.split()
String.length
*/
/*
function findLongestWord(str) {
    //Splitting the sentance to seperate words and save it to array
    var splitWord = str.split(' ');
    //global var for counting the longest word so that it does not reset every time in loop, and so that we can return it
    var longestWord = 0;
    //Go through every word and see if it is longer than longestWord (previous)
    for(var i = 0; i < splitWord.length; i++) {
        var temp = splitWord[i].length;
        if (temp > longestWord) {
            longestWord = temp;
        }
    }
    return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
*/

/*
--------------------------------------------------------------------------------------------------
5. Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.split()
*/
/*
function titleCase(str) {
    var res = str.split(' ');
    
    for (var i = 0; i < res.length; i++) {
        //res[i][0] ali .characterAt(0)
        res[i] = res[i][0].toUpperCase() + res[i].slice(1).toLowerCase();
    }
    return res.join(' ');
}

console.log(titleCase("I'm a little tea pOT"));
*/

/*
--------------------------------------------------------------------------------------------------
6. Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Comparison Operators
*/
/*
function largestOfFour(arr) {
    var newArray = [];
    
    //goes through outer array
    for (var i = 0; i < arr.length; i++) {
        //resets variable when inner for is end
        var tempNumber = 0;
        //goes through inner for and compare numbers
        for (var j = 0; j < arr[i].length; j++){
            if (arr[i][j] > tempNumber) {
                tempNumber = arr[i][j];
            }
        }
        newArray.push(tempNumber);
    }
    return console.log(newArray);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/

/*
--------------------------------------------------------------------------------------------------
7. Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.substr()
String.prototype.substring()
*/
/*
function confirmEnding(str, target) {
    var first = str.length;
    var second = target.length;
    //calculates from where to start looking at chars, till end
    var neki = str.substr(first-second);
    
    //if both target and containing word are equal
    if (neki === target) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

confirmEnding("He has to give me a new name", "name");
*/

/*
--------------------------------------------------------------------------------------------------
8. Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Global String Object
*/
/*
function repeatStringNumTimes(str, num) {
    //if number is greater than 0 repeat string n times
    if (num > 0) {
        var neki = str.repeat(num);
        return console.log(neki);
    } else {
        return console.log('');
    }
    
}

repeatStringNumTimes("abc", 3);
*/

/*
--------------------------------------------------------------------------------------------------
9. Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.slice()
*/
/*
function truncateString(str, num) {
    //if number is less than whole length of sentance and number is greater than 3
    if (num < str.length && num > 3) {
        return console.log(str.slice(0, (num-3)) + '...');
    //if number is less than whole length of sentance and number is less than 3 (so that we do not end up with negative)
    } else if (num < str.length && num <= 3){
        return console.log(str.slice(0, num) + '...');
    } else {
        return console.log(str);
    }
}

truncateString("A-", 1);
*/

/*
--------------------------------------------------------------------------------------------------
10. Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Array.prototype.push()
Array.prototype.slice()
*/
/*
function chunkArrayInGroups(arr, size) {
    //temp array so we can store seperate array and than reset it
    var temp = [];
    //final array containing inner arrays
    var result = [];
    
    //we go through whole array
    for (var i = 0; i < arr.length; i++) {
        //and fill temp array with element till we reach n size-1 (ex: if we have size 4, we start counting //array from 0, this means we have actualy 5 elements)
        if (i%size !== size-1) {
            temp.push(arr[i]);
        } else {
            //we reach n size-1, push last element to temp array
            temp.push(arr[i]);
            //push whole temp array to new array
            result.push(temp);
            //and reset temp array
            temp = [];
        }
    }
    //if temp array is larger than 0 than push last array to result if it is 0 than do not
    if (temp.length > 0) {
        result.push(temp);
    }
    
    return console.log(result);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/

/*
--------------------------------------------------------------------------------------------------
11. Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Array.prototype.slice()
Array.prototype.splice()
*/
/*
function slasher(arr, howMany) {
    return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
*/

/*
--------------------------------------------------------------------------------------------------
12. Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
String.prototype.indexOf()
*/
/*
function mutation(arr) {
    //put words in lower case and creates array of characters
    var word = arr[0].toLowerCase().split('');
    var searchWord = arr[1].toLowerCase().split('');
    
    for (var i = 0; i < searchWord.length; i++) {
        if (word.indexOf(searchWord[i], 0) === -1) {
            return console.log(false);
        }
    }
    return console.log(true);
}

mutation(["Mary", "Aarmy"]);
*/

/*
--------------------------------------------------------------------------------------------------
13. Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Boolean Objects
Array.prototype.filter()
*/
/*
function bouncer(arr) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        //if is the same as (arr[i] === true). Every falsy value or statement is automaticaly false
        if (arr[i]) {
            resultArr.push(arr[i]);
        }
    }
    return console.log(resultArr);
}

bouncer([false, null, 0, NaN, undefined, ""]);
*/

/*
--------------------------------------------------------------------------------------------------
14. You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Arguments object
Array.prototype.filter()
*/
/*
function destroyer(arr) { 
    for(var i = 1; i < arguments.length; i++) {  
        for (var j = 0; j < arr.length; j++) {
            if (arguments[i] === arr[j]) {
                delete arr[j];
            }
        }
    }
    return console.log(arr.filter(Boolean));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/

/*
--------------------------------------------------------------------------------------------------
15. Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:
Array.prototype.sort()
*/
/*
function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {return a-b});
    var counter = 0;
    for (var i = 0; i <= arr.length; i++) {
         if (num > arr[i]){
             counter++;
         } else {
             return counter;
         }
    }
}

console.log(getIndexToIns([5, 3, 20, 3], 30));
*/

/*
--------------------------------------------------------------------------------------------------
16. One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()
*/

function rot13(str) { // LBH QVQ VG!
    for (var i = 0; i < str.length; i++) {
        
        var char = str.charCodeAt(i);
        if (char === 32 || char === 33 || char === 46) {
            console.log(char);
        } else if (char !== 32 || char !== 33 || char !== 46) {
            char += 13;
            if (char >= 91 && char <= 96) {
            char += 6;
            }
        } 
        console.log(char + " " + String.fromCharCode(char));
    }
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


















































