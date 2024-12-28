// Write a function that checks if a given number is prime ?

// method 1

// function chechprime(num){
//     if(num <= 1 ){
//         return false
//     }

//     for(let i = 2 ; i * i<= num ; i++){
//         if(num % i === 0){
//             return true
//         }
//     }

// }
// // method 2
// function two(num){
//     if(num % 2 === 0){
//         return true
//     }

//     else{
//       return  false
//     }
// }


// Create a JavaScript program to find the factorial of a number using a recursive function.

// function factorial(n){
//     if(n===1 || n===0){
//         return 1
//     }
//     else{
//         return n *  factorial (n-1);
//     }
// }

// console.log(factorial(5));


// Write a function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.

// function sumofpositivenum(number){
//     let sum = 0;

//     for(let i=0 ; i<number.length; i++){
//         if(number [i] > 0){
//             sum += number[i]
//         }
//     }

//     return sum
// }

// let a = [7,8,9,-7,-4]

// console.log(sumofpositivenum(a));


// Implement a function that reverses a string without using the built-in reverse() method.

// function reversestr(str){
//     let reversed = '';
//         for(let i = str.length - 1; i>=0 ; i-- ){
//             reversed += str[i]
//         }
//         return reversed
// }

// console.log(reversestr('meet is a good boy'));

// Create a program that generates a random password of a specified length. The password should contain a mix of letters (both uppercase and lowercase), numbers, and special characters.

// function randompassword(length){
//     let password = '';
//     let char = 'asdfghjklzxcvbnmqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP12304557796';
//     for(let i = 0 ; i<length ; i++){
//         let randomindex = char[Math.floor(Math.random() * char.length)]

//         password += randomindex
//     }

//     return password

// }


// let arr = [1,4,7,8,9,1,4,1,4,7,9,7,4,5,1,1,4,9]

// let newarr = new Set(arr)

// console.log(newarr);



// remove duplicate from array
let arr = ['A', 'B', 'C', 'A', 'D', 'B']


// methods

// function duplicate(arr){
//     let newarray = [...new Set(arr)]

//     return newarray
// }

// 

//  let newarr =   arr.filter((c,index)=>{
//     return arr.indexOf(c) === index
// })

// console.log(newarr);

// let unichar = []

// arr.forEach((e)=>{
//     if(!unichar.includes(e)){
//         unichar.push(e)
//     }
// })

// console.log(unichar);

// duoble element of array if duplicate in it then double one of them ? 

let arr2 = [1,7,8,4,1,9,4,7]

arr2.forEach((val,index)=>{
    if(arr.indexOf(val,index + 1) === -1){
        arr[index] = val * 2
    }
})


let obj = [
    { name: 'meet', id: 12 },
    { name: 'vedick', id: 17 },
    { name: 'harsh', id: 13 },
    { name: 'meet', id: 12 },
];


let objnew = [...new Map(obj.map((m) => [m.id, m])).values()]
let onemore = (arr, prop) => {
    return [...new map(obj.map((m) => [m[prop], m])).value()]

}
// console.log(onemore());
// console.log(objnew);
// console.log(obj);


// find the word come how many time .

let str = "me hu don no one tum ho don no two"

function find(str) {
    let ovj = {}
    for (x of str) {
        if (ovj[x]) {
            ovj[x] += 1
        }
        else {
            ovj[x] = 1
        }
    }

    return ovj
}


// console.log(find(str));

// find the most coming number in array

let array = [1, 4, 7, 8, 9, 1, 2, 4, 0, 3, 21, 41, 2, 4, 2, 0, 4]

function frequent(arr) {
    let frequent = {};

    arr.forEach(element => {
        if (frequent.hasOwnProperty(element)) {
            frequent[element]++
        }
        else {
            frequent[element] = 1
        }

    });

    let ans = Object.keys(frequent).reduce((acc, num) => {
        return frequent[acc] > frequent[num] ? acc : num
    })

    return ans
}

// console.log(frequent(array));


// find the largest length of string.
let string = 'me hu donm mjdudhd hu tum kha tum kushagra '

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// find the word which come most time in a string
let check = "first second first first second third fourth five first second third"
function mostcome(str) {
    let word = {}
    word = str.split(' ')
    word.forEach((element) => {
        if (word.hasOwnProperty(element)) {
            word[element]++
        }
        else {
            word[element] = 1
        }
    })
    let ans = Object.keys(word).reduce((acc, num) => {
        return word[acc] > word[num] ? acc : num
    })
    return ans
}
// loop an array to find original value
let array1 = [1, 4, 57, 4, 58, 8]

Array.prototype.extravalue = 'meet'

for (let i in array1) {
    if (array1.hasOwnProperty(i)) {
        // console.log(i);
    }
}
// how to accesss one object value in other object ? 
let obj1 = {
    name: 'meet',
    age: 19,
    realname: function () {
        console.log(this.name);
    }
}

let obj2 = {
    name: 'harsh',
    flatno: 12,
    rent: 18000
}

// method 1
// obj1.__proto__ = obj2
// method 2
// Object.setPrototypeOf(obj1,obj2)

obj2.__proto__ = obj1

// console.log(obj1.flatno);

// loop an array


Array.prototype.customforeach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}


// fing the largest number in array 

let arraylar = [18, 4, 7, 8, 1, 4, 578, 1, 5, 4, 19, 8]

function findlargestnum(arr) {
    if (arr.length === 0) {
        return null
    }

    let largest = arr[0]

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i]
        }

    }

    return largest

}
// Write a function to check if a given string is a palindrome (reads the same forwards and backward).

let parstr = 'loo8l'

function checkpalindrome(str) {

    let newstr = str.split('').reverse().join('')

    if (str === newstr) {
        return true
    }
    else {
        return false
    }
}



// console.log(checkpalindrome(parstr));



// Create an object representing a person with properties like name, age, and gender. Write a function to print out their information.


let person = {
    name: 'person',
    age: 18,
    gender: 'male/female'
}

function printobjproperty(obj) {
    return Object.entries(obj)
}

// console.log(printobjproperty(person));



// Write a function to generate a random integer between a given range.

function generatenumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    let random = Math.floor(Math.random() * (max - min + 1) + min)

    return random

}

// console.log(generatenumber(10,40));


// Implement a function to reverse a string without using the built-in reverse() method.

function reversestring(str) {
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

// console.log(reversestring('loopp'));

// Create an array of numbers and write a function to calculate the sum of all even numbers in the array.

function calculatesumofarray(arr) {
    let sum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num
        }
    }
    return sum
}


// Implement a function that removes duplicate elements from an array.



let arjndi = [2, 2, 4, 4];

arjndi.filter((item, index) => {
    return arjndi.indexOf(item) == index
});



let trui = ''


    // find the sum of array .

    let sum = (array)=>{

        let sum = 0;

        array.forEach((element)=>{
            sum += element
        })

        return sum
    }

    // console.log(sum([4,5,4,5]));

    // write a function to find the length of word in a given string .

    function findstringlength(str){
        let string = str.split(' ').length - 1
    
        return string
    }

    // write  a program to find duplicates element in array ? 
    

function logDuplicate(arr){
    let countelement = {}

    arr.forEach(element => {
        if(countelement.hasOwnProperty(element)){
            countelement[element]++
        }
        else{
            countelement[element] = 1
        }
        
    });

    for(let element in countelement){
        if(countelement.hasOwnProperty(element) && countelement[element] > 1){
            console.log(`Duplicates are ${element}`);
        }
      
    }
    
}

// find the longest common prifix among all string present in an array ? 
function longestCommenPrifix(strs){
    if(strs.length == 0) return ''

    return strs.reduce((prefix,currentStrs)=>{
        let i=0;
        while(i < prefix.length && currentStrs.length && prefix[i] === currentStrs[i]){
            i++
        }
        return prefix.substring(0,i)
    },strs[0]);
}

// write a code to find automorphic number 

function isautoMorphic(number){
    let square = number * number
    let numberString = number.toString();
    let squareString = square.toString();
    
    return squareString.endsWith(numberString)
}   

function findAutoMorphic(limit){
    let autoMorphicNumber = []
    for(let i=1; i<limit; i++){
        if(isautoMorphic(i)){
            autoMorphicNumber.push(i)
        }
    }
    return autoMorphicNumber
}

let limit = 100
const result = findAutoMorphic(limit)
console.log(`autoMorphicNumber upto ${limit} : ${result}`);

// check anagram 

function checkAnaGram(string1,string2){
    let str1 = string1.split('').sort().join('');
    let str2 = string2.split('').sort().join('');

    if(str1 === str2){
        return true
    }
}

// find the largest number in array 

let arraytindlargest = [1, 4, 7, 8, 9, 1, 2, 4, 0, 3, 21, 41, 2, 4, 2, 0, 4]

function findlargestnum(arr){
    let largest = 0;

    for (let i = 0; i < arr.length; i++) {
        if(largest < arr[i]){
            largest = arr[i]
        }
        
    }
    return largest
}
// write a function that take n number of argument and sum of them.
function sum(...number){
    return number.reduce((acc,num)=>{
        return acc + num
    },0)
}

// write a function to swap vowel in a given word.
function reverseVowel(str){
    function isVowel(char){
      return ['a','e','i','o','u','A','E','I','O','U'].includes(char);
    }
    let char = str.split('');
    let i = 0;
    let j = char.length-1;
    while(i < j){
      while (i < j && !isVowel(char[i])) {
        i++;
      }
      while (i < j && !isVowel(char[j])) {
        j--;
      } 
      if(i < j){
        let temp = char[i];
        char[i] = char[j];
        char[j] = temp;
        i++;
        j--;
      }
    }
    return char.join('');
}