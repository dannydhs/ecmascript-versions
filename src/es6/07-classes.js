class User {
  // constructor
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // methods
  speak() {
    return 'Hello'
  }

  greeting() {
    return `${this.speak()} ${this.name}`
  }

  // getters and setters
  get uAge() {
    return this.age
  }

  set uAge(n) {
    this.age = n
  }
}

const newUser = new User("Danny", 30)
console.log(newUser.greeting())
console.log(newUser.uAge) // get
console.log(newUser.uAge = 20) // set

