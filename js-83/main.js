// const users = {
//     alex: {
//         age: 23, 
//         isAdmin: false
//     },
//     john: {
//         age: 20, 
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello, ${name}`)
//         }
//     }
// }

// console.log(users.john)

// users.john.sayHello('Tom')

// ------------------------------------------------------

// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'john',
//         age: 30,
//         isAdmin: true
//     },
// ]

// users.push({
//     name: 'ivan',
//     age: 30,
//     isAdmin: true
// })

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase())

// ----------------------DZ----------------------
// ----------------------1----------------------

const user = {
    name: 'Elizabeth',
    surname: 'Ivanova',
    age: 23,
    city: 'Moscow'
}

console.log(user)

// ----------------------2----------------------

const welcome = {
    sayHello(name) {
        console.log(`Hello, ${name}`)
    }
}

welcome.sayHello('Tom')

// ----------------------3----------------------

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
    {
        name: 'tom',
        age: 20,
        isAdmin: false
    },
]

let person = 0

for (let i=0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        person = person + 1
    }
}

console.log(person)