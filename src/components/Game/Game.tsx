import React from "react";
import Banner from "@components/Banner";
import GuessResults, { type Guess } from "@components/GuessResults";
import GuessInput from "@components/GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "@helpers/constants";
import { checkGuess, formatNumberOfGuesses } from "@helpers/game-helpers";
import { sample } from "@utils";
import { WORDS } from "@helpers/data.ts";

// Pick a random word on every pageload.
const answer = sample(WORDS);

type GameState = "playing" | "won" | "lost";

export default function Game() {
	const [guesses, setGuesses] = React.useState<Guess[]>([]);
	const [gameState, setGameState] = React.useState<GameState>("playing");

	const handleGuess = (guess: string) => {
		console.log({ guess });

		const nextGuess: Guess = { guess, result: checkGuess(guess, answer) };
		const nextGuesses = [...guesses, nextGuess];
		setGuesses(nextGuesses);

		const hasWon = nextGuess.result.every(({ status }) => status === "correct");

		if (hasWon) {
			setGameState("won");
		} else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
			setGameState("lost");
		}
	};

	return (
		<>
			<GuessResults guesses={guesses} />
			{gameState !== "playing" && (
				gameState === "won"
					? (
						<Banner type="happy">
							<p><strong>Congrats!</strong> You got the answer in <strong>{formatNumberOfGuesses(guesses.length)}</strong>!</p>
						</Banner>
					) : (
						<Banner type="sad">
							{/* eslint-disable-next-line react/jsx-curly-brace-presence */}
							<p>Sorry {":("} The answer was <strong>{answer}</strong>.</p>
						</Banner>
					)
			)}
			<GuessInput isDisabled={gameState !== "playing"} onGuess={handleGuess} />
		</>
	);
}
