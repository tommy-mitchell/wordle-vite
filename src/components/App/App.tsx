import React from "react";
import Game from "@components/Game";
import Header from "@components/Header";

export default function App() {
	const [isDarkMode, setIsDarkMode] = React.useState(false);

	React.useEffect(() => {
		document.documentElement.toggleAttribute("data-theme-dark");
	}, [isDarkMode]);

	return (
		<div className="wrapper">
			<Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<div className="game-wrapper">
				<Game />
			</div>
		</div>
	);
}
