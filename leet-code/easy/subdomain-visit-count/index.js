const subdomainVisitCount = (arr) => {
  let map = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const splited = arr[i].split(' ');
    const domainSplited = splited[1].split('.');
    
    const domain1 = domainSplited.slice(0, 3).join('.');
    if (!map[domain1]) map[domain1] = parseInt(splited[0], 10);
    else map[domain1] += parseInt(splited[0], 10);

    const domain2 = domainSplited.slice(1, 3).join('.');
    if (!map[domain2]) map[domain2] = parseInt(splited[0], 10);
    else map[domain2] += parseInt(splited[0], 10);

    const domain3 = domainSplited.slice(2, 3)[0];
    if (domain3) {
      if (!map[domain3]) map[domain3] = parseInt(splited[0], 10);
      else map[domain3] += parseInt(splited[0], 10);
    }
  }
  for (const [key, value] of Object.entries(map)) {
    res.push(`${value} ${key}`);
  }
  return res;
}

console.log(subdomainVisitCount(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));