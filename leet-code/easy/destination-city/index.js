const destinationCity = (arr) => {
  const map = {};
  for (let i = 0 ; i < arr.length; i++) {
    if (!map[arr[i] [0]]) {
      map[arr[i][0]] = 1;
    }
    else map[arr[i][0]] += 1;
    if (!map[arr[i][1]]) map[arr[i][1]] = null;
  }
  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] === null) return keys[i];
  }
}

console.log(destinationCity([["B","C"],["D","B"],["C","A"]]))
console.log(destinationCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))