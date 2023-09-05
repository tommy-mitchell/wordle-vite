import React from "react";
import clsx from "clsx";
import { NUM_OF_LETTERS_PER_WORD } from "@helpers/constants.ts";
import type { GuessResult } from "@helpers/game-helpers";
import { range } from "@utils";

type GuessRowProps = Readonly<{
	letters?: GuessResult[];
}>;

export default function GuessRow({ letters }: GuessRowProps) {
	return (
		<p className="guess">
			{range(NUM_OF_LETTERS_PER_WORD).map(index => {
				const letter = letters?.at(index);

				return (
					<span key={index} className={clsx("cell", letter?.status)}>
						{letter?.letter}
					</span>
				);
			})}
		</p>
	);
}
