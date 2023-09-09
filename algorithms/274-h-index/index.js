const hIndex = (citations) => {
	citations.sort((a, b) => b - a); // sort in descending order
	let i;
	for (i = 0; i < citations.length; i++) {
		if (citations[i] < i + 1) {
			break;
		}
	}

	return i; // i will be the h-index
};

const citations = [3, 0, 6, 1, 5];
// const citations = [1,3,1]
// const citations = [100]
console.log(hIndex(citations));
