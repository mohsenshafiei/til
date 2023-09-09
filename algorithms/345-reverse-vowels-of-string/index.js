const isVowel = (char) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  return vowels.has(char);
};

const reverseVowels = (value) => {
  let arr = value.split('');
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (isVowel(arr[i]) && isVowel(arr[j])) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j--;
    }
    if (!isVowel(arr[i])) {
      i++;
    }
    if (!isVowel(arr[j])) {
      j--;
    }
  }
  return arr.join('');
};

const res = reverseVowels("leetcode");
console.log(res);
