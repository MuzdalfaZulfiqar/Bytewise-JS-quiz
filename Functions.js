
// Easy: Write a function to check if a number is prime.
function isPrime(number){
    if (number <= 1) return false;
    for(let i = 2 ; i <=number/2 ; i++ ){
        if(number%i == 0){
            return false
        }
    }

    return true;
}
// console.log(isPrime(4))
//----------------------------------------------------------------------


// Easy: Write a function that returns the factorial of a number.
function factorial(number){
    let fac = 1;
    for(let i = number ; i >= 1 ;i--){
        fac = fac* i;
    }
    return fac;
}
console.log(factorial(4))
//----------------------------------------------------------------------


// Easy: Write a function that takes a string and returns it with the first letter of each word capitalized.
let string = "this is bytewise quiz"
function capitalizeFirstLetter(string){
    // convert to arry of strings
    let stringArray = string.split(" ");
    for (let index = 0; index < stringArray.length; index++) {
        const element = stringArray[index];  // this
        // access the first letter of one string
        let first  = element[0].toUpperCase();

        // this has given the remaining letter
        let rest = element.slice(1);

        // i have concatenated the
        let finalElement = first + rest;

        // replaced them at that indec
        stringArray[index] = finalElement;      
    } 
    // converted the aray to the string
    return stringArray.join(" ")
}
console.log(capitalizeFirstLetter(string))
//----------------------------------------------------------------------


// Medium: Write a function that takes another function as an argument and runs it after a specified delay.
function toBedelayed(){
    console.log("hi boss, I was run after some time")
}

function parentOfDelayed(toBedelayed){
    setTimeout(() => {
        toBedelayed();
    }, 1000);
}

parentOfDelayed(toBedelayed)
//----------------------------------------------------------------------


// Medium: Write a function that takes an array of numbers and 
// returns a new array with each element doubled, but only if the original element was greater than 10.


array = [1,2,45,1,4,5,12,32,34];

function getDoubledHere(array){
    let doubleArray = [];
    let newIndex = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element > 10){
            doubleArray[newIndex] = element* element;
            newIndex++;
        }
    }
    return doubleArray;
}
console.log(getDoubledHere(array))
//----------------------------------------------------------------------