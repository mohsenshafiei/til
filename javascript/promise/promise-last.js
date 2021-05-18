const pause = (ms) => new Promise(resolve => setTimeout(() => resolve(ms), ms));

const p1 = pause(2000);
const p4 = pause(6000);
const p2 = pause(3000);
const p3 = pause(4000);


const last = (arr) => {
  let count = 0;
  return new Promise((res, rej) => {
    arr.forEach(item => {
      item.then((data) => {
        count++;
        if (count === arr.length) res(data)
      }).catch(() => {
        count++;
        if (count === arr.length) rej(data);
      })
    })
  })
}

const race = (arr) => {
  return new Promise((res, rej) => {
    arr.forEach(item => {
      item.then(res).catch(rej)
    })
  })
}

race([p1, p4, p2, p3]).then(console.log);
last([p1, p4, p2, p3]).then(console.log);


