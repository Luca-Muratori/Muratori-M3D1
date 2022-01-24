/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, 
return triple their sum. */

const returnSum = function (num1, num2) {
    num1 !== num2 ? console.log(num1 + num2) :
        console.log((num1 + num2) * 3);
}
returnSum(1, 1)
returnSum(2, 1)

/* 2. Create a function to check two given integers. 
Return `true` if one of them is 50 or if their sum is 50. */
const is50 = function (num1, num2) {
    return num1 === 50 || num2 === 50 || (num1 + num2) === 50 ? console.log(true) :
        console.log(false)
}
is50(50, 1)
is50(2, 3)
/* 3. Create a function to remove a character at a specified position from a given string:
 pass the position and the string as parameters, return the new string. */
function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}
console.log(remove_character('Hello Strivers', 2))

/* 4. Create a function to find and return the largest of three given integers. */
const returnLargest = function (num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
}
returnLargest(1, 2, 4)

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
const checkRange = function (num1, num2) {
    (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) ? console.log(true) :
        console.log(false)
}
checkRange(4, 2)
checkRange(43, 2)
checkRange(1, 99)
checkRange(99, 99)

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
const copies = function (num, str) {
    console.log(str.repeat(num))
}
copies(3, 'hello')

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
const displayCity = function (str) {
    str.startsWith('Los') || str.startsWith('New') ? console.log(true) : console.log(false)
}
displayCity('Los Santos')
displayCity('Rome')

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
const arrSum = function (arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(`the sum is ${sum}`)
}
let array = [1, 3, 4]
arrSum(array)

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
const arrContain1or3 = function (arr) {
    arr.includes(1) || arr.includes(3) ? console.log(true) : console.log(false);
}
let array9 = [1, 2];
arrContain1or3(array9)

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
const arrNotContain1or3 = function (arr) {
    arr.includes(1) || arr.includes(3) ? console.log(false) : console.log(true);
}
let array10 = [1, 2];
arrNotContain1or3(array10)

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */
const findLongest = function (arr) {
    var max = arr[0].length;
    //first we see how long is the longest string in the array
    arr.map(v => max = Math.max(max, v.length));
    //then we recheck if there is a string long like the longest
    result = arr.filter(v => v.length == max);
    console.log(result);
}
let arr11 = ['he', 'hello', 'hello strivers']
findLongest(arr11)

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
const typesAngle = function (angle) {
    angle >= 0 && angle < 90 ? console.log('acute') :
        angle === 90 ? console.log('right angle') :
            angle > 90 && angle < 180 ? console.log('obtuse angle') :
                angle === 180 ? console.log('straight angle') :
                    console.log('Value not accepted')
}
typesAngle(23)
typesAngle(90)
typesAngle(345)

/* 13. Create a function to find and return the index of the greatest
 element of a given array of integers that you passed as a parameter. */
const greatestInt = function (arr) {
    console.log(arr.indexOf(Math.max(...arr)))
}
let arr13 = [1, 3, 4, 67, 9, 11]
greatestInt(arr13)

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
const greatestEven = function (arr) {
    let onlyEven = arr.filter(x => x % 2 == 0)
    console.log(Math.max(...onlyEven))
}
let arr14 = [1, 3, 4, 67, 9, 11, 22, 34]
greatestEven(arr14)

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
const checkInteger = function (num1, num2) {
    num1 > 0 && num2 < 0 ? console.log(true) : console.log(false)
}
checkInteger(1, -2)
checkInteger(-9, 2)
checkInteger(-1, -2)

/* 16. Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
const toUpperCase = function (str) {
    if (str.length <= 3) {
        console.log(str.toUpperCase());
    } else {
        front_part = (str.substring(0, 3)).toLowerCase();
        back_part = str.substring(3, str.length).toUpperCase();
        console.log(front_part + back_part);
    }

}
toUpperCase('jfk')
toUpperCase('Hello Strivers')

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
const sumIntegers = function (num1, num2) {
    let sum = num1 + num2
    sum >= 50 && sum <= 80 ? console.log(65) : console.log(80)
}
sumIntegers(2, 48)
sumIntegers(2, 90)

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
const factorTranslate = function (num) {
    num % 3 === 0 && num % 5 !== 0 && num % 7 !== 0 ? console.log('Diego') :
        num % 5 === 0 && num % 3 !== 0 && num % 7 !== 0 ? console.log('Riccardo') :
            num % 7 === 0 && num % 3 !== 0 && num % 5 !== 0 ? console.log('Stefano') :
                num % 3 === 0 && num % 5 === 0 && num % 7 !== 0 ? console.log('DiegoRiccardo') :
                    num % 5 === 0 && num % 7 === 0 && num % 3 !== 0 ? console.log('RiccardoStefano') :
                        num % 7 === 0 && num % 3 === 0 && num % 5 !== 0 ? console.log('StefanoDiego') :
                            num % 7 === 0 && num % 5 === 0 && num % 3 === 0 ? console.log('StefanoDiegoRiccardo') :
                                console.log(num)
}
factorTranslate(105)

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
const acronymGenerator = function (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            return str[i - 1]
        } else {
            str[i].pop()
        }
    }
    str.concat('')
    console.log(str)
}
acronymGenerator('Hello strivers from another dimension')