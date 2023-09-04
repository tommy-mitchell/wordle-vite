import React from "react";
import GuessResults, { type Guess } from "@components/GuessResults";
import GuessInput from "@components/GuessInput";
import { sample, generateUniqueId } from "@utils";
import { WORDS } from "@helpers/data.ts";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
	const [guesses, setGuesses] = React.useState<Guess[]>([]);

	const handleGuess = (guess: string) => {
		console.log({ guess });

		const nextGuesses = [...guesses, { guess, id: generateUniqueId() }];
		setGuesses(nextGuesses);
	};

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput onGuess={handleGuess} />
		</>
	);
}
