/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess: string, answer: string) {
	// This constant is a placeholder that indicates we've successfully
	// dealt with this character (it's correct, or misplaced).
	const SOLVED_CHAR = "✓"; // eslint-disable-line @typescript-eslint/naming-convention

	if (!guess) {
		return null;
	}

	const guessChars = [...guess.toUpperCase()];
	const answerChars = [...answer];

	const result = [];

	// Step 1: Look for correct letters.
	for (let i = 0; i < guessChars.length; i++) {
		if (guessChars[i] === answerChars[i]) {
			result[i] = {
				letter: guessChars[i],
				status: "correct",
			};
			answerChars[i] = SOLVED_CHAR;
			guessChars[i] = SOLVED_CHAR;
		}
	}

	// Step 2: look for misplaced letters. If it's not misplaced,
	// it must be incorrect.
	for (const [i, guessChar] of guessChars.entries()) {
		if (guessChar === SOLVED_CHAR) {
			continue;
		}

		let status = "incorrect";
		const misplacedIndex = answerChars.indexOf(
			guessChar,
		);
		if (misplacedIndex >= 0) {
			status = "misplaced";
			answerChars[misplacedIndex] = SOLVED_CHAR;
		}

		result[i] = {
			letter: guessChar,
			status,
		};
	}

	return result;
}
