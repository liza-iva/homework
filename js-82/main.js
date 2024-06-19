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

const numbers = [1, 11, 3, 30]

function checkForCopyItem (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            return array[i]
        }
    }
}

console.log(checkForCopyItem(numbers)) //Почему все числа, которые больше 10 не выводятся?

// --------------------------------3------------------------------

// Сделаю позже