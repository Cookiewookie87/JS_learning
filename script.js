/*
--------------------------------------------------------------------------------------------------

freeCodeCamp
BASIC ALGORYTHM SCRIPTING

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
    //put words in seperate variable in lower case and creates array of characters
    var word = arr[0].toLowerCase().split('');
    var searchWord = arr[1].toLowerCase().split('');
    //Go through first word with first letter of second word to check if first word contains that letter. If not, returns false
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
    /loops through arguments (the first is parameter)
    for(var i = 1; i < arguments.length; i++) {  
        //loops and check if argument is in array, if it is it deletes it (leaving index and undefined value in array)
        for (var j = 0; j < arr.length; j++) {
            if (arguments[i] === arr[j]) {
                delete arr[j];
            }
        }
    }
    //Filters all deleted items from array (index is still there, value is undefined, which is false)
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
    //Sorts numbers in ascending order
    arr.sort(function(a, b) {return a-b});
    //var for tracking index position, does not reset because it is global
    var counter = 0;
    //loops through array and checks where number should be
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
/*
function rot13(str) {
    var arr = [];
    
    for (var i = 0; i < str.length; i++) {
        //gets ASCII number of character
        var char = str.charCodeAt(i);
        //from ASCII code it than checks if its specific number (,.!?)
        if (char === 32 || char === 33 || char === 46 || char === 63) {
            //if it is ,.?! than just push it to array
            arr.push(String.fromCharCode(char));
        //if it is not .,!? than add 13 by ROT13 principle
        } else {
            char += 13;
            //By ASCII, chars starts with A on 65 and ends with Z on 90. Than there are 6 non alphabetical chars. If we get Z, we must add 6 in //rder to advance to other low chars.
            if (char > 90) {
                char += 6;
            }
            //push character to array and transform it to upper case
            arr.push(String.fromCharCode(char).toUpperCase());
        } 
    }
    return arr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
*/


/*
--------------------------------------------------------------------------------------------------

w3resource
ARRAY EXERCISE

--------------------------------------------------------------------------------------------------
1. Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/
/*
function is_array (input) {
    return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
*/
/*
--------------------------------------------------------------------------------------------------
2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/
/*
function array_Clone (input) {
    return input.slice(0, input.length + 1);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
*/
/*
--------------------------------------------------------------------------------------------------
3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/
/*
function first (arr, n) {
    if (n === undefined) {
        return arr[0];
    } else if (arr.length === 0 || n < 0) {
        return [];
    } else {
        return arr.slice(0, n);
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
*/
/*
--------------------------------------------------------------------------------------------------
4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/
/*
function last (arr, n) {
    if (n === undefined) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(-n, arr.length);
    }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
*/
/*
--------------------------------------------------------------------------------------------------
5. Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
/*
function joinArr (arr) {
    return arr.toString() + "\n" + arr.join(",") + "\n" + arr.join("+");
}
var myColor = ["Red", "Green", "White", "Black"];

console.log(joinArr(myColor))
*/
/*
--------------------------------------------------------------------------------------------------
6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
*/
/*
function numSeperator (num) {
    var result = [];
    var numStr = num.toString();
    for (var i = 0; i < numStr.length; i++) {
        if (numStr[i] % 2 === 0) {
            result.push(numStr[i]);
            result.push("-");
        } else {
            result.push(numStr[i]);
        }
    }
    if (result[numStr.length] === "-"){
        result.pop();
    }
    return result;
}

console.log(numSeperator(prompt()));
*/
/*
--------------------------------------------------------------------------------------------------
7. Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
/*
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort();

console.log(arr1);
*/
/*
--------------------------------------------------------------------------------------------------
8. Write a JavaScript program to find the most frequent item of an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/
/*
function freq (arr) {
    var mostFrequent = 0, counter = 0, word, tempWord;

    for (var i = 0; i < arr.length; i++) {
        tempWord = arr[i];
        counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === tempWord) {
                counter += 1;
            }
        }
        if (counter > mostFrequent) {
            mostFrequent = counter;
            word = tempWord;
        }
    }
    return word + " " + "(" + mostFrequent + " times)";
}

console.log(freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
*/
/*
--------------------------------------------------------------------------------------------------
9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
*/
/*
function swap (str) {
    var result = [];
    var strArr = str.split("");
     for (var i = 0; i < strArr.length; i++) {
         if (strArr[i] === strArr[i].toLowerCase()) {
             result.push(strArr[i].toUpperCase());
         } else {
             result.push(strArr[i].toLowerCase());
         }
     }
    return result.join("");
}

console.log(swap("The Quick Brown Fox"));
*/
/*
--------------------------------------------------------------------------------------------------
10. Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
*/
/*
function print (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Row " + [i] + "\n");
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j] + "\n");
        }
    }
}

console.log(print([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));
*/
/*
--------------------------------------------------------------------------------------------------
11. Write a JavaScript program to find the sum of squares of a numeric vector.
Input: [0,1,2,3,4]
Output: 30
*/
/*
function square (arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i] * arr[i];
        result += temp;
    }
    return result;
}

console.log(square([0,1,2,3,4]));
*/
/*
--------------------------------------------------------------------------------------------------
12. Write a JavaScript program to compute the sum (+) and product (*) of an array of integers.
Input: [1, 2, 3, 4, 5, 6]
Output: Sum : 21 Product :  720
*/
/*
function sumProd (arr) {
    var sum = 0,
        pro = 1;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        pro *= arr[i];
    }
    return "Sum: " + sum + " " + "Product: " + pro;
}

console.log(sumProd([1, 2, 3, 4, 5, 6]));
*/
/*
--------------------------------------------------------------------------------------------------
13. Write a JavaScript program to add items in an blank array and display the items.
*/
/*
//gloval variable for array index and array
var i = 0;
var arr = [];
//event listener for add button
document.querySelector('#addBtn').addEventListener('click', function () {
    //gets value from input
    var inputValue = document.getElementById('itemInput').value;
    //if value is not empty
    if (inputValue !== '') {
        //set first value to array index
        arr[i] = inputValue;
        //increment index
        i++;
        document.getElementById('itemInput').value = '';
        console.log(arr);
    } else {
        alert('Input should not be empty');
    }
    document.getElementById('itemInput').focus();
});

document.querySelector('#displayBtn').addEventListener('click', function () {

    for (var j = 0; j < arr.length ; j++) {
        //set content of array to variable
        var result = result + arr[j] + '<br/>';
    }
    //display content to HTML element
    document.getElementById('result').innerHTML = result;
});

document.querySelector('#resetBtn').addEventListener('click', function () {
    //resets array and array index
    arr = [];
    i = 0;
    document.getElementById('itemInput').value = '';
});
*/
/*
--------------------------------------------------------------------------------------------------
14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
Input: [1,2,2,4,5,4,7,8,7,3,6]
Output: ["1","2","3","4","5","6","7","8"]
*/
/*
function duplicates (arr) {
    var newArr = [];
    var arrLength = arr.length; //if in loop, the lenght gets shorter every time because shift()
    //goes through array
    for (var i = 0; i < arrLength; i++) {
        //gets first element of array and move it to temp variable
        var temp = arr.shift();

        //if element exist in new arraw ignore it, else put temp element to new array
        if (newArr.indexOf(temp) === -1) {
            newArr.push(temp);
        }
    }
    return newArr;
}

console.log(duplicates([1,2,2,4,5,4,7,8,7,3,6]));
*/
/*
--------------------------------------------------------------------------------------------------
15. We have the following arrays : Go to the editor
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
"4th choice is Orange."
"5th choice is Violet."
"6th choice is indigo."
"7th choice is Yellow."
*/
/*
function color (arr, suffix) {
    for (var i = 0; i < arr.length; i++) {
        if (i >= 3){
            console.log(i+1 + suffix[0] + " choice is " + arr[i]);
        } else {
            console.log(i+1 + suffix[i + 1] + " choice is " + arr[i]);
        }
    }
}

console.log(color(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"], ["th","st","nd","rd"]));
*/
/*
--------------------------------------------------------------------------------------------------
16. Find the leap years in a given range of years.
Input: (2000,2012)
Output: [2000,2004,2008,2012]
*/
/*
function leapYear (rangeStart, rangeEnd) {
    var arr = [];
    for (var i = rangeStart; i <= rangeEnd; i++) {
        if (i%4 === 0 && i%100 !== 0 || i%400 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(leapYear(1590, 2012));
*/
/*
--------------------------------------------------------------------------------------------------
17. Write a JavaScript program to shuffle an array.
Input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Output: [5,3,0,9,8,2,1,4,7,6]
*/

function shuffle (arr) {
    var newArr = [];
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        var random = Math.floor((Math.random() * arr.length) + 0);
        newArr[random] = arr.shift();
    }

    return newArr;
}

console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));









































































