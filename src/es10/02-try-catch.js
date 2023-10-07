try {
  hello()
} catch (error) {
  console.log(error)
}

// Ahora se puede evitar el error mostrando solo el mensaje
try {
  anotherFn()
} catch {
  console.log('Esto es un error')
}