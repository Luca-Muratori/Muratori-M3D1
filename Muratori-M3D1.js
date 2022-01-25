// /* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, 
// return triple their sum. */
// const returnSum = function (num1, num2) {
//     return num1 !== num2 ? num1 + num2 :
//         (num1 + num2) * 3;
// }
// console.log(returnSum(1, 1))
// /* 2. Create a function to check two given integers. 
// Return `true` if one of them is 50 or if their sum is 50. */
// const is50 = function (num1, num2) {
//     return num1 === 50 || num2 === 50 || (num1 + num2) === 50 ? true :
//         false
// }
// console.log(is50(50, 1))
// /* 3. Create a function to remove a character at a specified position from a given string:
//  pass the position and the string as parameters, return the new string. */
// function remove_character(str, char_pos) {
//     part1 = str.substring(0, char_pos);
//     part2 = str.substring(char_pos + 1, str.length);
//     return (part1 + part2);
// }
// console.log(remove_character('Hello Strivers', 2))

// /* 4. Create a function to find and return the largest of three given integers. */
// const returnLargest = function (num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }
// console.log(returnLargest(1, 2, 4))

// /* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
//     Return `true` if they do, return `false` if one (or both) don't. */
// const checkRange = function (num1, num2) {
//     return (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) ? true :
//         false
// }
// console.log(checkRange(4, 2))

// /* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
//     Pass the string and the number of copies as parameters. */
// const copies = function (num, str) {
//     return str.repeat(num)
// }
// console.log(copies(3, 'hello'))

// /* 7. Create a function to display the city name if the string begins with "Los" or "New". 
//     Pass the city name as a parameter. Return `false` if they start with a different string. */
// const displayCity = function (str) {
//     return str.startsWith('Los') || str.startsWith('New') ? true : false
// }
// console.log(displayCity('Los Santos'))

// /* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
//     Pass the array as a parameter. */
// const arrSum = function (arr) {
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return `the sum is ${sum}`
// }
// let array = [1, 3, 4]
// console.log(arrSum(array))

// /* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
//     Return `true` is it does, `false` if it doesn't. */
// const arrContain1or3 = function (arr) {
//     return arr.includes(1) || arr.includes(3) ? true : false;
// }
// let array9 = [1, 2];
// console.log(arrContain1or3(array9))

// /* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
//     Return `true` if it doesn't, `false` if it does. */
// const arrNotContain1or3 = function (arr) {
//     return arr.includes(1) || arr.includes(3) ? false : true;
// }
// let array10 = [1, 2];
// console.log(arrNotContain1or3(array10))

// /* 11. Create a function to find the longest string from a given array of strings. 
//     Pass the array as parameter and return the longest string. */
// const findLongest = function (arr) {
//     var max = arr[0].length;
//     //first we see how long is the longest string in the array
//     arr.map(v => max = Math.max(max, v.length));
//     //then we recheck if there is a string long like the longest
//     result = arr.filter(v => v.length == max);
//     return result;
// }
// let arr11 = ['he', 'hello', 'hello strivers']
// console.log(findLongest(arr11))

// /* 12. Create a function to find the types of a given angle:
//   1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
//     2. Right angle ⇒ 90 degree. Return `right`
//     3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
//     4. Straight angle ⇒ 180 degrees. Return `straight`

//     Pass the angle as a parameter.
// */
// const typesAngle = function (angle) {
//     return angle >= 0 && angle < 90 ? 'acute' :
//         angle === 90 ? 'right angle' :
//             angle > 90 && angle < 180 ? 'obtuse angle' :
//                 angle === 180 ? 'straight angle' :
//                     'Value not accepted'
// }
// console.log(typesAngle(23))

// /* 13. Create a function to find and return the index of the greatest
//  element of a given array of integers that you passed as a parameter. */
// const greatestInt = function (arr) {
//     return arr.indexOf(Math.max(...arr))
// }
// let arr13 = [1, 3, 4, 67, 9, 11]
// console.log(greatestInt(arr13))

// /* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
// const greatestEven = function (arr) {
//     let onlyEven = arr.filter(x => x % 2 == 0)
//     return Math.max(...onlyEven)
// }
// let arr14 = [1, 3, 4, 67, 9, 11, 22, 34]
// console.log(greatestEven(arr14))

// /* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
//     Return `true` if that's the case, return `false` if it's not. */
// const checkInteger = function (num1, num2) {
//     return num1 > 0 && num2 < 0 ? true : false
// }
// console.log(checkInteger(1, -2))

// /* 16. Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. 
//     If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
// const toUpperCase = function (str) {
//     if (str.length < 3) {
//         return str.toUpperCase();
//     } else {
//         front_part = (str.substring(0, 3)).toLowerCase();
//         back_part = str.substring(3, str.length).toUpperCase();
//         return front_part + back_part;
//     }

// }
// console.log(toUpperCase('Hello Strivers'))

// /* 17. Create a function to calculate the sum of two integers (passed as parameters). 
//     If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
// const sumIntegers = function (num1, num2) {
//     let sum = num1 + num2
//     return sum >= 50 && sum <= 80 ? 65 : 80
// }
// console.log(sumIntegers(2, 48))

// /* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
//     The number has 3 as a factor ⇒ return `Diego`
//     The number has 5 as a factor ⇒ return `Riccardo`
//     The number has 7 as a factor ⇒ return `Stefano`
//     If the number does not have 3,5, or 7, return the original number. 
//     ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
// Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
// const factorTranslate = function (num) {
//     return num % 3 === 0 && num % 5 !== 0 && num % 7 !== 0 ? 'Diego' :
//         num % 5 === 0 && num % 3 !== 0 && num % 7 !== 0 ? 'Riccardo' :
//             num % 7 === 0 && num % 3 !== 0 && num % 5 !== 0 ? 'Stefano' :
//                 num % 3 === 0 && num % 5 === 0 && num % 7 !== 0 ? 'DiegoRiccardo' :
//                     num % 5 === 0 && num % 7 === 0 && num % 3 !== 0 ? 'RiccardoStefano' :
//                         num % 7 === 0 && num % 3 === 0 && num % 5 !== 0 ? 'StefanoDiego' :
//                             num % 7 === 0 && num % 5 === 0 && num % 3 === 0 ? 'StefanoDiegoRiccardo' :
//                                 num
// }
// console.log(factorTranslate(105))

// /* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
// Ex. British Broadcasting Corporation returns `BBC` */
// const acronymGenerator = function (str) {
//     //create an empty array
//     let newStrArr = [];
//     //split the string, dividing every word in element of array=> [ 'British', 'broadcasting', 'Corporation' ]
//     let splitted = str.split(" ");
//     //for each word we take the first letter of every word, make them upper case, and putting in the newStrArr
//     for (let i = 0; i < splitted.length; i++) {
//         const letter = splitted[i];
//         newStrArr.push(letter.charAt(0).toUpperCase());//newStrArr=['B', 'B', 'C']
//     }
//     //finally we join all the array element, to create a string with just the acronym
//     return newStrArr.join("");
// }

// console.log(acronymGenerator("British broadcasting Corporation"));


// EXTRA
// Given a string(as a parameter), return the character that is most commonly used.
function maxChar(str) {
    let maxLength = 0;
    let maxChar = '';
    let strArr = str.split("")

    for (let i = 0; i < strArr.length; i++) {
        let currChar = strArr[i]
        let currLength = str.split(currChar).length

        if (currLength > maxLength) {
            maxLength = currLength
            maxChar = currChar
        }

    }
    return maxChar
};
console.log(maxChar('Polli'))


// Check if two strings(passed as parameters) are anagrams of each other.Do not consider spaces or punctuation,
//  make the whole word lower case. Return true if the words are anagram, return false if they aren't.

function checkAnagram(a, b) {
    return (
        a.split("").sort().join() === b.split("").sort().join()
    );
};
console.log(checkAnagram('hello?', 'ollhe'))

// Given a word and a list of possible anagrams(both passed as parameters), return the correct list of anagrams: Ex. "listen" 
// is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be["enlist", "inlets"]
function checkAnagramInArray(str, arr) {
    const anagramsFound = []
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        if (checkAnagram(str, word)) {
            anagramsFound.push(word)
        }
    }
    return anagramsFound
}
console.log(checkAnagramInArray('hello', ['llohe', 'lohel', 'pain']))

// Given a string(as parameter), return true if the string is a palindrome or false if it is not.Include spaces and punctuation.
function palindrome(str) {
    let reverseStr = str.toLowerCase().split('').reverse().join('')
    return reverseStr === str
}
console.log(palindrome(" _^cacac^_ "))

// Given an integer(as parameter), return an integer which digits are the same as the original number, but reversed.Ex: 189 ⇒ 981
function reversedInt(int) {
    return (parseFloat(int.toString().split('').reverse().join('')) * Math.sign(int))
}
console.log(reversedInt(-2300000))
console.log(reversedInt(-123456))

//Write a function that takes a positive number X as a parameter. 
//The function should output (as console.log) a step shaped string
// with X level using the # character. Make sure the steps are on the right hand side:
function shapeGenerator(int) {
    for (let i = 0; i < int; i++) {
        let step = ' ';
        for (let j = 0; j < int; j++) {
            if (j <= i) {
                step += '#'
            } else {
                step += ' ';
            }
        }
        console.log(step)
    }
}
shapeGenerator(3)

//Create a function that, given a string as a parameter,
//returns a new string which is the original string, but reversed: "hello" ⇒ “olleh”
function reversedString(str) {
    let reversed = str.split('').reverse().join('')
    return reversed
}

console.log(reversedString('hello'))

// Create a function that takes an array and a "chunk size" as parameters.
// Divide the array into subarrays with the "chunk size" as length:
//  array: [1, 2, 3, 4], chunk size: 2 →[[1, 2], [3, 4]] array: [1, 2, 3, 4, 5],
//   chunk size: 4 →[[1, 2, 3, 4], [5]]
function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(splitArrayIntoChunksOfLen(arr, 5));

// Write a function that accepts a positive number X as parameter.The function should
//  console.log a pyramid shape with N levels built using the # character. 
function pyramid(int) {
    for (i = 1; i <= int; i++) {
        let str = ' '.repeat(int - i);
        let str2 = '*'.repeat(i * 2 - 1)
        console.log(str + str2 + str);
    }
}
pyramid(7)


// Write a function that accepts an integer N and returns a NxN spiral matrix:
function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return result;
}
console.log(matrix(4))