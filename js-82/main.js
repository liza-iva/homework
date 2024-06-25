// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]

// const checkForCopyItem = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return `There is no such item in the array`
// }

// console.log(checkForCopyItem(numbers, 5))

// --------------------------------DZ------------------------------
// --------------------------------1------------------------------

const users = 'John'

function person(item) {
    return `Hello, ${item}`
}

console.log(person(users))

// --------------------------------2------------------------------

const numbers = [1, 11, 3, 30, 5, 10, 50]

function checkForCopyItem(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}
checkForCopyItem(numbers)


// --------------------------------3------------------------------

const calc = (first, second, sign) => {
    if (sign === 'minus') {
        return result = first - second
    } else if (sign === 'plus') {
        return result = first + second
    } else if (sign === 'multiply') {
        return result = first * second
    } else if (sign === 'divide') {
        return result = first / second
    }
}

console.log(calc(2, 3, 'minus'))