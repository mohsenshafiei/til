const minimumWindowSubstring = function(s, t) {
  if (t.length ===0 || s.length<t.length) return ""
  
  let substr = '';
  let matchLetters = 0 
  let mapt = {}
  let currMap = {}
  
  for (let ch of t){
    if (mapt[ch]) {
      mapt[ch]=1  
      currMap[ch] = 0
    }
    else mapt[ch]++
  }
  
  let targetMatchedLetters = Object.keys(mapt).length
  let start = 0
  let end = -1
  while (end < s.length) {
    if (matchLetters === targetMatchedLetters) {
      if(substr===null || end-start+1 < substr.length) substr = s.slice(start,end+1)
      let startChar = s[start]   
      if (currMap[startChar] !== undefined){
        currMap[startChar]--
        if (currMap[startChar] < mapt[startChar]) matchLetters--
      }
      start++
    }
    else {
      end++
      if (end < s.length) {
        let endChar = s[end]
        if (currMap[endChar] !== undefined){
          currMap[endChar]++
          if (currMap[endChar] === mapt[endChar])
            matchLetters++
        }
      }
    }
  }
  return substr || ""
}

minimumWindowSubstring("ADOBECODEBANC", "ABC");