import React from "react";
import type { GameState } from "@components/GameWrapper";
import Banner from "@components/Banner";
import GuessResults, { type Guess } from "@components/GuessResults";
import GuessInput from "@components/GuessInput";
import { formatNumberOfGuesses } from "@helpers/game-helpers";

type GameProps = Readonly<{
	answer: string;
	gameState: GameState;
	guesses: Guess[];
	onGuess: (guess: string) => void;
}>;

export default function Game({ answer, gameState, guesses, onGuess }: GameProps) {
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
			<GuessInput isDisabled={gameState !== "playing"} onGuess={onGuess} />
		</>
	);
}
