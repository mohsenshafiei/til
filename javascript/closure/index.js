const greetings = (message) => {
  return (name) => {
    console.log(message, name)
  }
}

const myFunc = greetings("Hello");
myFunc("Mohsen");