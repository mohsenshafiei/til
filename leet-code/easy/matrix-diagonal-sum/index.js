const msum = (m) => {
  let ok = false;
  if (m.length % 2 !== 0) {
    ok = true;
  }
  let firstDiag = 0;
  let secondDiag = 0;
  for (let i = 0, j = 0, k = m.length - 1; i < m.length; i++, j++, k--) {
    firstDiag += m[i][j]
    if (ok === true & i === k) continue;
    else secondDiag += m[i][k];
  }
  return firstDiag + secondDiag
}

console.log(msum([[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]))
console.log(msum([[1,2,3],
              [4,5,6],
              [7,8,9]]))