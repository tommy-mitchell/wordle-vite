import React from "react";
import Header from "@components/Header";
import Game from "@components/GameBoard";
import type { Guess } from "@components/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "@helpers/constants";
import { checkGuess, getWord } from "@helpers/game-helpers.ts";

export type GameState = "playing" | "won" | "lost";

export default function GameWrapper() {
	const [isDarkMode, setIsDarkMode] = React.useState(false);
	const [answer, setAnswer] = React.useState(getWord);
	const [guesses, setGuesses] = React.useState<Guess[]>([]);
	const [gameState, setGameState] = React.useState<GameState>("playing");

	React.useEffect(() => {
		document.documentElement.toggleAttribute("data-theme-dark", isDarkMode);
	}, [isDarkMode]);

	const handleGuess = (guess: string) => {
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

	const handleRestart = () => {
		let nextAnswer = getWord();

		while (nextAnswer === answer) {
			nextAnswer = getWord();
		}

		setAnswer(nextAnswer);

		setGuesses([]);
		setGameState("playing");
	};

	return (
		<>
			<Header
				isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}
				answer={answer}
				onRestart={handleRestart}
			/>
			<div className="game-wrapper">
				<Game
					answer={answer}
					gameState={gameState}
					guesses={guesses}
					onGuess={handleGuess}
				/>
			</div>
		</>
	);
}
