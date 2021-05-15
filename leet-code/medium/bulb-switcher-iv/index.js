var minFlips = (target) => {
    let flip = 0;
    let last = '0';
    for (let i=0; i < target.length; i++) {
      if (target[i] !== last) flip++
      last = target[i]
    }
    return flip
};