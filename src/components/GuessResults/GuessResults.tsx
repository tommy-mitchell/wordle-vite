import React from "react";
import GuessRow from "@components/GuessRow";
import { NUM_OF_GUESSES_ALLOWED } from "@helpers/constants.ts";
import type { GuessResult } from "@helpers/game-helpers";
import { range } from "@utils";

export type Guess = {
	guess: string;
	result: GuessResult[];
};

type GuessResultsProps = Readonly<{
	guesses: Guess[];
}>;

export default function GuessResults({ guesses }: GuessResultsProps) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map(index => (
				<GuessRow key={index} letters={guesses[index]?.result} />
			))}
		</div>
	);
}
