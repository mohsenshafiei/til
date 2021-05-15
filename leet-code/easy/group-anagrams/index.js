const groupAnagrams = (arr) => {
  let map = {};
  for (let i = 0 ; i < arr.length; i++) {
    const sorted = [...arr[i]].sort().join('');
    if (!map[sorted]) map[sorted] = [arr[i]];
    else map[sorted].push(arr[i]);
  }
  return Object.values(map);
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);