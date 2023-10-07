// enhanced object literal
function newUser(user, age, country, uId) {
  return {
    user, // se abrevia si si la variable tiene el mismo nombre que la llave
    age,
    country,
    id: uId
  }
}

console.log(newUser("gndx", 34, "MX", 1))