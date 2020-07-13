function CustomJoin(arr, str = ",") {
    // debugger;
    let result = "";
    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] + str;
    }
    result += arr[arr.length - 1];
    return result;
}

// console.log(CustomJoin(["Sunal", "Seynur", "Zahid", "Javidan"], "-"))

function Sum(arr, callback) {
    let result = 0;
    for (const item of arr) {
        if (callback(item) && !isNaN(item)) {
            result += item;
        }
    }
    return result;
}

// function IsOdd(num) {
//     return num % 2 != 0;
// }

let IsOdd = num => num % 2 != 0;

function IsEven(num) {
    return num % 2 == 0;
}

function IsElder(num) {
    return num > 5;
}

// console.log(Sum([1, 2, 9], IsOdd))
// console.log(Sum([1, 2, 9], IsEven))
// console.log(Sum([1, 2, 8, 9], IsElder))
//Anonimous function - only one time work
// console.log(Sum([1, 2, 3, 4, 5, 6], function (num) {
//     return num > 0;
// }))
// console.log(Sum([1, 2, 3, 4, 5, 6], num => num > 0))

function CustomMap(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result;
}

// console.log(CustomMap([1, 2, 3, 4], num => num > 2))


let arr = [2, 3, 4, 5]

console.log(arr.find(n => n == 6));

// console.log(arr.map(n => n == 2))
// arr.forEach((n,i,a) => console.log(`${i}-ci indexin deyeri - ${n}`))
// console.log(arr.filter(n => n < 3))
// console.log(arr.reduce((t, n) => t + n))