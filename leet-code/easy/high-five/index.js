const highFive = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i][0]]) map[arr[i][0]] = [arr[i][1]];
    else {
      let j = 0;
      while (j < map[arr[i][0]].length) {
        if (map[arr[i][0]][j] <= arr[i][1]) {
          map[arr[i][0]].splice(j, 0, arr[i][1]);
          break;
        }
        j++
      }
      if (j === map[arr[i][0]].length) {
        map[arr[i][0]].splice(j, 0, arr[i][1]);
      }
    }
  }
  const students = Object.keys(map);
  let averages = [];
  for (let i = 0; i < students.length; i++) {
    let j = 0;
    let sum = 0;
    while (j < 5) {
      sum += map[students[i]][j]
      j++;
    }
    averages.push([parseInt(students[i], 10), Math.floor(sum / 5)]);
  }
  return averages
}

highFive([[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]])
highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])