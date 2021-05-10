
// This is not working
const increasingDecreasingString = (s) => {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  let scores = {
    '-': -1,
  }
  for (let i = 0; i< alph.length; i++) {
    scores[alph[i]] = i;
  }
  let res = '-';
  let ss = [...s];
  let ok = false;
  while (ss.length) {
    for (let i = 0; i < ss.length; i++) {
      if (scores[ss[i]] > scores[res[res.length - 1]] && ok === false) {
        res += ss[i];
        ss.splice(i, 1);
      }
      if (scores[ss[i]] <= scores[res[res.length - 1]] && ok === true) {
        res += ss[i];
        ss.splice(i, 1);
      }
    }
    ok = !ok;
  }
  return res.slice(1, res.length);
}


const solvedSolution = (s) => {
  let str = s.split('');
  let result = '';
  str.sort();
  let backwards = false;
  while(str.length) {
    if(backwards) { 
      for(let i = str.length-1; i >= 0; i--) {
        if(str[i] != str[i-1]) {
          result+= str[i];
          str.splice(i,1)
        }
      }
    } else {
      for(let i = 0; i < str.length; i++) {
        if(str[i] != str[i+1]) {
          result += str[i];
          str.splice(i, 1)
          i--;
        }
      }
    }
    backwards = !backwards
  }
  return result;
}

console.log(solvedSolution('aaaabbbbcccc') === 'abccbaabccba');
console.log(solvedSolution('leetcode') === 'cdelotee');
console.log(solvedSolution('ggggggg') === 'ggggggg');
console.log(solvedSolution('spo') === 'ops');
