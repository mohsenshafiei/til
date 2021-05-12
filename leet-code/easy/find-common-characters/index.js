const findCommon = arr => {
  const res = []
  const first = arr[0]
  const chrMaps = arr.slice(1).map(s => {
      const map = new Map()
      for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1)
      }
      return map
    }
  )
  for (let ch of first) {
    let flag = true
    for (let map of chrMaps) {
      if (map.get(ch) > 0) map.set(ch, map.get(ch) - 1)
      else {
        flag = false
        break
      }
    }
    if (flag) res.push(ch)
  }
  return res
}

console.log(findCommon(["bella","label","roller"]))