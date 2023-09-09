/*
Suppose we have an unsorted log file of accesses to web resources. Each log entry consists of an access time, the ID of the user making the access, and the resource ID. 

The access time is represented as seconds since 00:00:00, and all times are assumed to be in the same day.

Example:
logs1 = [
    ["58523", "user_1", "resource_1"],
    ["62314", "user_2", "resource_2"],
    ["54001", "user_1", "resource_3"],
    ["200", "user_6", "resource_5"],    
    ["215", "user_6", "resource_4"],
    ["54060", "user_2", "resource_3"],
    ["53760", "user_3", "resource_3"],
    ["58522", "user_22", "resource_1"],
    ["53651", "user_5", "resource_3"],
    ["2", "user_6", "resource_1"],
    ["100", "user_6", "resource_6"],
    ["400", "user_7", "resource_2"],
    ["100", "user_8", "resource_6"],
    ["54359", "user_1", "resource_3"],
]

Example 2:
logs2 = [
    ["300", "user_1", "resource_3"],
    ["599", "user_1", "resource_3"],
    ["900", "user_1", "resource_3"],
    ["1199", "user_1", "resource_3"],
    ["1200", "user_1", "resource_3"],
    ["1201", "user_1", "resource_3"],
    ["1202", "user_1", "resource_3"]
]



Write a function that takes the logs and returns the resource with the highest number of accesses in any 5 minute window, together with how many accesses it saw.

Expected Output:
most_requested_resource(logs1) # => ('resource_3', 3)
Reason: resource_3 is accessed at 53760, 54001, and 54060

most_requested_resource(logs2) # => ('resource_3', 4)
Reason: resource_3 is accessed at 1199, 1200, 1201, and 1202

Complexity analysis variables:

n: number of logs in the input

*/

const logs1 = [
  ["58523", "user_1", "resource_1"],
  ["62314", "user_2", "resource_2"],
  ["54001", "user_1", "resource_3"],
  ["200", "user_6", "resource_5"],
  ["215", "user_6", "resource_4"],
  ["54060", "user_2", "resource_3"],
  ["53760", "user_3", "resource_3"],
  ["58522", "user_22", "resource_1"],
  ["53651", "user_5", "resource_3"],
  ["2", "user_6", "resource_1"],
  ["100", "user_6", "resource_6"],
  ["400", "user_7", "resource_2"],
  ["100", "user_8", "resource_6"],
  ["54359", "user_1", "resource_3"],
];

const logs2 = [
  ["300", "user_1", "resource_3"],
  ["599", "user_1", "resource_3"],
  ["900", "user_1", "resource_3"],
  ["1199", "user_1", "resource_3"],
  ["1200", "user_1", "resource_3"],
  ["1201", "user_1", "resource_3"],
  ["1202", "user_1", "resource_3"],
];

const getEarliestAndLatestResourceAccess = (logs) => {
  const map = {};
  for (let i = 0; i < logs.length; i++) {
    const [accessTime, id, resource] = logs[i];
    if (map[id]) {
      if (parseInt(map[id][0], 10) >= parseInt(accessTime, 10))
        map[id][0] = accessTime;
      if (parseInt(map[id][1], 10) < parseInt(accessTime, 10))
        map[id][1] = accessTime;
    } else {
      map[id] = [accessTime, accessTime];
    }
  }
  return map;
};

const most_requested_resource = (logs) => {
  const map = {};
  for (let i = 0; i < logs.length; i++) {
    const [accessTime, id, resource] = logs[i];
    if (map[resource]) {
      map[resource].push(accessTime);
    } else {
      map[resource] = [accessTime];
    }
  }
  // O(n) complexity O(n)
  const keys = Object.keys(map);
  let maximum = null;
  let maximumAccessResource = null;
  for (let i = 0; i < keys.length; i++) {
    // O(n)
    const key = keys[i];
    for (let j = 0; j < map[key].length; j++) {
      // O(n)
      const sorted = map[key].sort((a, b) => a - b); // O(nlogn) max
      const start = parseInt(map[key][j], 10);
      const end = parseInt(map[key][j], 10) + 5 * 60;
      const temp = [start];
      for (let k = j + 1; k < sorted.length; k++) {
        // O(n)
        if (sorted[k] >= start && sorted[k] <= end) temp.push(sorted[k]);
      }
      if (temp.length > maximum) {
        maximum = temp.length;
        maximumAccessResource = key;
      }
    }
  }
  // O(n^3logn)

  return [maximumAccessResource, maximum];
};

console.log(most_requested_resource(logs1));
console.log(most_requested_resource(logs2));
