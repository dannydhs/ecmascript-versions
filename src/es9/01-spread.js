const user = { username: 'dannyhs', age: 30, country: 'PE'}
const {username, ...values} = user
console.log(username)
console.log(values)
/*
dannyhs
{ age: 30, country: 'PE' }
*/