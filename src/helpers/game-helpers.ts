/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export type GuessResult = {
	letter: string;
	status: "correct" | "misplaced" | "incorrect";
};

export const checkGuess = (guess: string, answer: string): GuessResult[] => {
	// This constant is a placeholder that indicates we've successfully
	// dealt with this character (it's correct, or misplaced).
	const SOLVED_LETTER = "✓"; // eslint-disable-line @typescript-eslint/naming-convention

	if (guess.length !== answer.length) {
		return [];
	}

	const guessLetters = [...guess];
	const answerLetters = [...answer];

	const result: GuessResult[] = [];

	// Step 1: Look for correct letters.
	for (let i = 0; i < guessLetters.length; i++) {
		if (guessLetters[i] === answerLetters[i]) {
			result[i] = {
				letter: guessLetters[i]!,
				status: "correct",
			};

			answerLetters[i] = SOLVED_LETTER;
			guessLetters[i] = SOLVED_LETTER;
		}
	}

	// Step 2: look for misplaced letters. If it's not misplaced,
	// it must be incorrect.
	for (const [i, guessLetter] of guessLetters.entries()) {
		if (guessLetter === SOLVED_LETTER) {
			continue;
		}

		let status: GuessResult["status"] = "incorrect";

		const misplacedIndex = answerLetters.indexOf(guessLetter);

		if (misplacedIndex >= 0) {
			status = "misplaced";
			answerLetters[misplacedIndex] = SOLVED_LETTER;
		}

		result[i] = { letter: guessLetter, status };
	}

	return result;
};

const badCheckGuess = (guess: string, answer: string): GuessResult[] => {
	const guessLetters = [...guess];
	const answerLetters = [...answer];

	return [...answer].map((answerLetter, index) => {
		const guessLetter = guessLetters.at(index)!;

		/* eslint-disable unicorn/no-nested-ternary, operator-linebreak, @typescript-eslint/indent */
		const status = (
			guessLetter === answerLetter ? "correct" :
			answerLetters.includes(guessLetter) ? "misplaced" :
			"incorrect"
		);
		/* eslint-enable unicorn/no-nested-ternary, operator-linebreak, @typescript-eslint/indent */

		if (status === "misplaced") {
			answerLetters.splice(answerLetters.indexOf(guessLetter), 1);
		}

		return {
			letter: guessLetter,
			status,
		};
	});
};

export const formatNumberOfGuesses = <Count extends number>(count: Count) => (
	count === 1 ? "1 guess" : `${count} guesses` as const
);
