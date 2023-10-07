// arrays destructuring
let fruits = ['Apple', 'Banana']
let [a, b] = fruits
console.log(a, fruits[1])

// object destructuring
let user = {username: 'Danny', age: 30}
let { age, username } = user
console.log(username, user.age)

// spread operator
let person = {name: 'Danny', age: 30}
let country = 'MX'

let data = {...person, country}
console.log(data)

// rest
function sum(num, ...values) {
  console.log(values)
  console.log(num + values[0])
  return num + values[0]
}

sum(1, 1, 2, 3)