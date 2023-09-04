import React from "react";

export type Guess = {
	guess: string;
	id: string;
};

type GuessResultsProps = Readonly<{
	guesses: Guess[];
}>;

export default function GuessResults({ guesses }: GuessResultsProps) {
	return (
		<div className="guess-results">
			{guesses.map(({ guess, id }) => (
				<p key={id} className="guess">{guess}</p>
			))}
		</div>
	);
}
