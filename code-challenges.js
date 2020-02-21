// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


const fibonacci = (num) => {
    let endArray = [1, 1]
    for (let i = 0; i < num-1; i++) {
        if (i > 0) {
        let nextNum = endArray[i] + endArray[i-1]
        endArray.push(nextNum)
    }
    }
    return endArray
}
console.log(fibonacci(10));


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


const oddNum = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] % 2 !== 0) {
                newArr.push(arr[i])
            }
        }
    }
    return newArr.sort((a, b) =>  a - b)
}

console.log(oddNum(fullArr1));
console.log(oddNum(fullArr2));

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”


const middleFinder = (str) => {
    str.split("")
    if (str.length % 2 === 0) {
        let finder = str.length/2 - 1
        return str[finder] + str[finder+1]
    } else if (str.length % 2 !== 0) {
        let finder = ((str.length + 1) /2)
        return str[finder-1]
    }
}

console.log(middleFinder(middleLetters2));
console.log(middleFinder(middleLetters1));

// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
class Sphere {
    constructor(num) {
        this.area = num
    }
    areaFinder (num){
        return 4*num*num*Math.PI
    }
}
var sphere = new Sphere

console.log(sphere.areaFinder(7));
console.log(sphere.areaFinder(3));
console.log(sphere.areaFinder(2));

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []



const arrAdder = (arr) => {
    let newArr = []
    if (typeof arr[0] === "number") {
        newArr.push(arr[0])
    }
    for (let i = 0; i < arr.length-1; i++) {
        newArr.push(newArr[i] + arr[i+1])
    }
    return newArr
}

console.log(arrAdder(numbersToAdd1));
console.log(arrAdder(numbersToAdd2));
console.log(arrAdder(numbersToAdd3));
