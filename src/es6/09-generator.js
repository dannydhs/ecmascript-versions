function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Danny', 'Zoe', 'Susan', 'Mariel'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
