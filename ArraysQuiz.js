// Write a function to find the maximum element in an array.

let array = [1,2,3,5,1,3,4];

function maxElement(array){
    array.sort();
    let max = array[array.length-1];
    return max;
}
// console.log(maxElement(array));
//----------------------------------------------------------------------


// Easy: Write a function to reverse an array without using the built-in reverse method.
function reverse(array){
    let reversedArray = [];
    let newIndex = 0;
    for (let index = array.length-1; index>=0; index--) {
        const element = array[index];
        reversedArray[newIndex] = element;
        newIndex++;
    }
    return reversedArray
}
// console.log(reverse(array))
//----------------------------------------------------------------------


// Easy: Use the map method to create a new array that contains the square of each element in the original array.
function squaredArray(array){
    let newArray = array.map((element)=>{
        return element*element;
    })
    return newArray;
}
// console.log(squaredArray(array))
//----------------------------------------------------------------------


// Easy: Write a function that uses the filter method to remove all even numbers from an array.
function filterEvenNumbers(array){
    let newArray =  array.filter((element)=>{
        return element%2 == 1
    })
    return newArray
}
// console.log(filterEvenNumbers(array))
//----------------------------------------------------------------------


//Easy: Use the reduce method to calculate the sum of all elements in an array.
function calSum(array){
    // 0 here is the value of accumulator
    let sum = array.reduce((accumulator, currentVal)=>
        {
            
            return accumulator + currentVal
        },
        
        0)

    return sum;
}
// console.log(calSum(array))
//----------------------------------------------------------------------


// Medium: Write a function that uses map to extract the names of all users from an array 
// of user objects (each user object contains name and age properties).
let userArray = [
    {
        name: "muzdalfa",
        age : 20
    },{
        name: "ali",
        age : 17
    },{
        name: "asma",
        age : 31
    }
]

function mapUserArrayToGetNames(userArray){
    let newArrayOfNames = userArray.map((user)=>{
        return user.name;
    })

    return newArrayOfNames
}
// console.log(mapUserArrayToGetNames(userArray))
//----------------------------------------------------------------------


// Medium: Write a function that uses filter to get all the users older than 30 from an array of user objects.
function filterOlderPeople(userArray){
    let newArrayOfAges = userArray.filter((user)=>{
        return user.age > 30;
    })
    return newArrayOfAges
}

// console.log(filterOlderPeople(userArray))

//----------------------------------------------------------------------


// Medium: Use reduce to create an object that contains the counts of each unique element in an array.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
function occurence(fruits){
    let occurenceArray = fruits.reduce((accumulator, currentVal)=>
        {
            
            if (accumulator[currentVal]) {
                accumulator[currentVal] += 1;
            } else {
                accumulator[currentVal] = 1;
            }
            return accumulator;
        },
        
        {})

        return occurenceArray
}

// console.log(occurence(fruits))
//----------------------------------------------------------------------

// Medium: Write a function to flatten a nested array using the reduce method.
function flattenArray(array) {
    return array.reduce((flat, item) => {
        if (Array.isArray(item)) {
            return flat.concat(flattenArray(item));
        } else {
            //  add it to the flat array if item is not array
            return flat.concat(item);
        }
    }, []);
}

const nestedArray = [1, [2, [3, [4, 5]]], 6];
const flattened = flattenArray(nestedArray);
// console.log(flattened); 
//----------------------------------------------------------------------


// Medium: Use filter and map together to get an array of names of users older than 30 from an array of user objects.
// userArray is defined above
function filterAndMapOlderOnes(userArray){
    
    let filteredArray =  userArray.filter((userFilter)=>{
            return userFilter.age > 30;
        })
    let newArray = filteredArray.map((user)=>{
        return user.name;
    })

    return newArray
}
console.log(filterAndMapOlderOnes(userArray))