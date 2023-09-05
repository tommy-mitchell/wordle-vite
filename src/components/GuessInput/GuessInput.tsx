import React from "react";

type GuessInputProps = Readonly<{
	onGuess: (guess: string) => void;
	isDisabled: boolean;
}>;

export default function GuessInput({ onGuess, isDisabled }: GuessInputProps) {
	const [guess, setGuess] = React.useState("");
	const inputRef = React.useRef<HTMLInputElement>(null);

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={event => {
				event.preventDefault();
				onGuess(guess);
				setGuess("");
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				ref={inputRef}
				disabled={isDisabled}
				id="guess-input"
				type="text"
				pattern={/[A-Z]{5}/.source}
				title="5 letter word"
				value={guess}
				onChange={event => {
					const nextGuess = event.target.value.toUpperCase();

					if (/^[A-Z]{0,5}$/m.test(nextGuess)) {
						setGuess(nextGuess);
					}
				}}
				onKeyDown={event => {
					if (event.key === "Escape") {
						inputRef.current?.blur();
					}
				}}
			/>
		</form>
	);
}
