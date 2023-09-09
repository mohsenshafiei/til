const isIsomorphic = function (s, t) {
	if (s.length !== t.length) return false;

	let mapS = {};
	let mapT = {};

	for (let i = 0; i < s.length; i++) {
		if (!mapS[s[i]]) {
			mapS[s[i]] = t[i];
		} else if (mapS[s[i]] !== t[i]) {
			return false;
		}

		if (!mapT[t[i]]) {
			mapT[t[i]] = s[i];
		} else if (mapT[t[i]] !== s[i]) {
			return false;
		}
	}
	return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
