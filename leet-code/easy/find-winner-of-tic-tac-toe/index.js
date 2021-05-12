var tictactoe = (moves) => {
	const grid = [['', '', ''], ['', '', ''], ['', '', '']]
	moves.forEach(([x, y], index) => {
		grid[x][y] = index % 2 ? 'B' : 'A'
	})
	const [[a, b, c], [d, e, f], [g, h, i]] = grid
	const gridColumn = [[a, d, g], [b, e, h], [c, f, i]]
	if (a === e && a === i && a) return a
	if (c === e && c === g && c) return c
	for (let [a, b, c] of grid) if (a === b && a === c && a) return a
	for (let [a, b, c] of gridColumn) if (a === b && a === c && a) return a
	return moves.length === 9 ? 'Draw' : 'Pending'
};