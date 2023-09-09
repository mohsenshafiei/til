let arr = [1, 2, 3, 4, 5, 6];

const x = arr.slice(1, 3);
console.log(arr, x); // [ 1, 2, 3, 4, 5, 6 ] [ 2, 3 ]

const y = arr.splice(2, 3); 
console.log(arr, y); // [ 1, 2, 6 ] [ 3, 4, 5 ]
