const createCounter = (initValue) => {
  let value = initValue;
  const res = {
    increment: () => {
      return value += 1
    },
    decrement: () => {
      return value -= 1
    },
    reset: () => {
      return value = initValue
    }
  }
  return res;
}


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4