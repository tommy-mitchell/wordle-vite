export const range = (start: number, end: number, step = 1) => {
	const output = [];
	if (end === undefined) {
		end = start;
		start = 0;
	}

	for (let i = start; i < end; i += step) {
		output.push(i);
	}

	return output;
};

export const rangeOf = (end: number) => range(0, end);
