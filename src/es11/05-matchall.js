const regex = /\b()+\b/g

const fruit = 'Apple, Banana Kiwi, Apple, orange, etc. etc. etc.'

for (const match of fruit.matchAll(regex)) {
  console.log(match)
}