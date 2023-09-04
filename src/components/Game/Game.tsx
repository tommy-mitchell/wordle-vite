import React from "react";
import GuessInput from "@components/GuessInput";
import { sample } from "@utils";
import { WORDS } from "@helpers/data.ts";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
	return (
		<GuessInput onGuess={guess => console.log({ guess })} />
	);
}