const maximumNumber = (str) => {
  const map = {};
  const map2 = {};
  const ball = 'balloon'.split('');
  for (let i = 0; i < ball.length; i++) {
    map[ball[i]] = 0;
    map2[ball[i]] ? map2[ball[i]]++ : map2[ball[i]] = 1
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] in map) map[str[i]]++
  }
  let min = 1000000;
  for (let k in map) {
    if (map[k] / map2[k] < min) min = Math.floor(map[k] / map2[k]);
  }
  return min
}

console.log(maximumNumber("nlaebolko"));