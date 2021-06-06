// with additional ds
const isUnique = (str) => {
  let map = {};
  for (let char in str) {
    if (!map[str[char]]) map[str[char]] = 1;
    else return false;
  }
  return true;
}

// without data structure
const isUniqueSecondApproach = (str) => {
  let sorted = str.split('').sort((a, b) => {
    return a.localeCompare(b)
  });
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) return false;
  }
  return true;
}


const t1 = 'asdasdasdadsad';
const t2 = 'asdfghjk';
const t3 = 'mkasmdkamdak';
const t4 = '1q234';
const t5 = '';

console.log(isUnique(t1))
console.log(isUniqueSecondApproach(t1))
console.log('---')
console.log(isUnique(t2))
console.log(isUniqueSecondApproach(t2))
console.log('---')
console.log(isUnique(t3))
console.log(isUniqueSecondApproach(t3))
console.log('---')
console.log(isUnique(t4))
console.log(isUniqueSecondApproach(t4))
console.log('---')
console.log(isUnique(t5))
console.log(isUniqueSecondApproach(t5))