
const person = {
    name: 'Muzdalfa',
    age: 20,
    occupation :"React JS developer"
};

//Easy: Write a function to check if a given object is empty.
function checkEmpty(object){
    let keys = Object.keys(object)
    return keys.length==0
}

// console.log(checkEmpty(person))
//---------------------------------------------------------------------------

// Create an object with property name, age, and occupation, and write a function to
//  print each property and its value.

// object is defined above

function displayObject(object)
{
    for (const key in object) {
        console.log(key + " : "+ object[key] )
    }
}
// displayObject(person)
//----------------------------------------------------------------------


// Easy: Write a function to clone an object.
function cloneOfObject(object)
{
    let newClonedObject = Object.assign( object);
    // the first parameter is optional removing or adding it will have same result
    // let newClonedObject = Object.assign({}, object);
    return newClonedObject
}
// console.log(cloneOfObject(person))
//----------------------------------------------------------------------


// Easy: Write a function to merge two objects.
let muzdalfaUniversity = {
    uniName : "COMSATS",
    campus : "ISB"
}
const objFinal = Object.assign(person,muzdalfaUniversity);
// console.log(objFinal)
//----------------------------------------------------------------------


// Medium: Write a function that takes an object and returns an array of its keys.
function giveObjectKeys(object){
    let newKeyArray = [];
    index = 0;
    for (const key in object) {
        newKeyArray[index] = key;
        index ++ ;
    }

    return newKeyArray
}

// console.log(giveObjectKeys(person))
//----------------------------------------------------------------------

//Medium: Write a function that takes an object and returns an array of its values.
function giveObjectValues(object){
    let newValueArray = [];
    index = 0;
    for (const key in object) {
        newValueArray[index] = object[key];
        index ++ ;
    }

    return newValueArray
}
// console.log(giveObjectValues(person))
//----------------------------------------------------------------------


//Medium: Write a function that takes an object and returns an array of key-value pairs.
function givekeyValuePair(object){
    let newValueArray = [];
    index = 0;
    for (const key in object) {
        newValueArray[index] = key + " : " + object[key];
        index ++ ;
    }

    return newValueArray
}

// console.log(givekeyValuePair(person))
//----------------------------------------------------------------------

// Medium: Write a function to deeply merge two nested objects.

function deepMerge(obj1, obj2) {
    // Create a new object to hold the merged results
    const result = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key]) 
                && typeof result[key] === 'object' && result[key] !== null) {
                result[key] = deepMerge(result[key], obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }

    return result;
}

const obj1 = {
    name: 'Muzdalfa',
    address: {
        city: 'Sialkot',
        postalCode: '12345'
    },
    hobbies: ['reading']
};

const obj2 = {
    age: 20,
    address: {
        street: 'Main St',
        city: 'New Sialkot'
    },
    hobbies: ['writing', 'reading']
};

const merged = deepMerge(obj1, obj2);
// console.log(merged);
//----------------------------------------------------------------------

// Medium: Write a function to update the properties of an object using another object.
function updateObject(object1, object2){
    for (const key in object2) {
        // checking if that property from object2 exist in object 1 then update the value of the object 1 
        // otherwise skipping that property
        if(object1.hasOwnProperty(key)){
            object1[key] = object2[key];
        }
    }

    return object1
}

// person 1 is defined above
const person2 = {
    name: 'asma',
    age: 10,
    occupation :"React JS developer"
};
// console.log(updateObject(person, person2))
//----------------------------------------------------------------------



// Medium: Write a function that takes an array of objects and returns an object where the keys are 
// the values of a specified property from each object, and the values are arrays of the remaining properties.
function groupByProperty(array, key) {
    // Initialize an empty result object
    const result = {};

    // Loop through each object in the array
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        
        // Extract the key value
        const keyValue = item[key];

        // Initialize the array for this key if it doesn't exist
        if (!result[keyValue]) {
            result[keyValue] = [];
        }

        // Create a new object with all properties except the key property
        const rest = {};
        for (const prop in item) {
            if (prop !== key) {
                rest[prop] = item[prop];
            }
        }

        // Add the remaining properties to the array for this key
        result[keyValue].push(rest);
    }

    return result;
}

const data = [
    { id: 1, name: 'Muzdalfa', age: 20, city: 'daska' },
    { id: 2, name: 'ali', age: 17, city: 'New daska' },
    { id: 1, name: 'asma', age: 22, city: 'daska' }
];

const grouped = groupByProperty(data, 'id');
// console.log(grouped);
