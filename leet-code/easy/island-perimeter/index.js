const islandPerimeter = (arr) => {
  let perimeter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 1 && (!arr[i][j + 1] || arr[i][j + 1] !== 1)) perimeter++
      if (arr[i][j] === 1 && (!arr[i + 1] || arr[i + 1][j] !== 1)) perimeter++
      if (arr[i][j] === 1 && (!arr[i - 1] || arr[i - 1][j] !== 1)) perimeter++
      if (arr[i][j] === 1 && (!arr[i][j - 1] || arr[i][j - 1] !== 1)) perimeter++
    }
  } 
  return perimeter;
}

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))
console.log(islandPerimeter([[1,0]]))