import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "@helpers/constants.ts";
import { rangeOf } from "@utils";

export type Guess = {
	guess: string;
	id: string;
};

type GuessRowProps = Readonly<{
	letters: string[];
}>;

function GuessRow({ letters }: GuessRowProps) {
	return (
		<p className="guess">
			{[...letters].map((letter, index) => (
				// eslint-disable-next-line react/no-array-index-key
				<span key={index} className="cell">
					{letter}
				</span>
			))}
		</p>
	);
}

type GuessResultsProps = Readonly<{
	guesses: Guess[];
}>;

export default function GuessResults({ guesses }: GuessResultsProps) {
	return (
		<div className="guess-results">
			{rangeOf(NUM_OF_GUESSES_ALLOWED).map(index => (
				guesses[index]
					? <GuessRow key={guesses[index]!.id} letters={[...guesses[index]!.guess]} />
					: <GuessRow key={index} letters={["", "", "", "", ""]} />
			))}
		</div>
	);
}
