import React from "react";
import Game from "@components/Game";
import Header from "@components/Header";

export default function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="game-wrapper">
				<Game />
			</div>
		</div>
	);
}
