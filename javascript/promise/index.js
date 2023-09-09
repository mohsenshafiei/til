let examplePromise = new Promise((resolve, reject) => {
  let condition = true; // You can change this to false to see the promise being rejected

  if(condition) {
      resolve('Promise resolved');
  } else {
      reject('Promise rejected');
  }
});

examplePromise
  .then((message) => {
      console.log(message); // If promise was resolved, this will print: Promise resolved
  })
  .catch((message) => {
      console.log(message); // If promise was rejected, this will print: Promise rejected
  });