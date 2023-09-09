// Assumptions:

/* 

Assumptions:

- We dopn't have any special characters or numbers
- Alphabet only contains these that we have
- words[i] consists of English letters (both lowercase and uppercase). 
- Consist of lower case and upper case
- Consist of English words
- There is not any space or something in word[i]

Time Complexity and Space Complexity:

- How many inputs?
  - 1 <= words.length <= 20
  - 1 <= words[i].length <= 100

Edge Cases:


*/

const getMap = (str) => {
	const map = {};
	for (let i = 0; i < str.length; i++) {
		map[str[i]] = str[i];
	}
	return map;
};

const findWords = (words = []) => {
	if (words.length === 0 || !Array.isArray(words)) return [];
	const row1 = getMap("qwertyuiop");
	const row2 = getMap("asdfghjkl");
	const row3 = getMap("zxcvbnm");
	const result = [];
	for (let i = 0; i < words.length; i++) {
		let score = null;
    const real = words[i]
		const word = words[i].toLowerCase();
		for (let j = 0; j < word.length; j++) {
			const char = word[j];
			if (char in row1) {
				if (score !== null && score !== 1) {
					score = null;
					break;
				}
				score = 1;
        continue
			}
			if (char in row2) {
				if (score !== null && score !== 2) {
					score = null;
					break;
				}
				score = 2;
        continue
			}
			if (char in row3) {
				if (score !== null && score !== 3) {
					score = null;
					break;
				}
				score = 3;
        continue
			}
		}

		if (score === null) continue;
		result.push(real);
	}
  return result;
};

const test = (targetValue, fn, ...args) => {
	const res = fn(...args);
  if (targetValue === res) {
		console.log("Passed", res);
	} else {
		console.log("Failed", res);
	}
};

test(["Alaska", "Dad"], findWords, ["Hello", "Alaska", "Dad", "Peace"]);
