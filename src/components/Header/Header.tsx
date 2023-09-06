import React from "react";
import { animated } from "react-spring";
import useBoop from "use-boop";

// eslint-disable-next-line @typescript-eslint/naming-convention
type _IconProps = Readonly<{
	title: string;
	boopStyle: ReturnType<typeof useBoop>[0];
	boopTrigger: ReturnType<typeof useBoop>[1];
	onClick: () => void;
	children: JSX.IntrinsicElements["path"] & React.ReactNode;
} & Partial<React.SVGProps<SVGSVGElement>>>;

function Icon({ title, onClick, boopStyle, boopTrigger, children: path, ...svgProps }: _IconProps) {
	const handleClick = () => {
		boopTrigger();
		onClick();
	};

	return (
		<animated.button type="button" title={title} style={boopStyle} onMouseEnter={boopTrigger} onClick={handleClick}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.5rem", height: "1.5rem" }} {...svgProps}>
				{path}
			</svg>
		</animated.button>
	);
}

type IconProps = Pick<_IconProps, "onClick">;

type InfoIconProps = Readonly<{
	answer: string;
}>;

function InfoIcon({ answer }: InfoIconProps) {
	const [style, trigger] = useBoop({ rotation: 20 });

	return (
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		<Icon title={`Answer: ${answer}`} fill="transparent" strokeWidth={1.5} stroke="currentColor" boopStyle={style} boopTrigger={trigger} onClick={() => {}}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
		</Icon>
	);
}

function RestartIcon({ onClick }: IconProps) {
	const [style, trigger] = useBoop({ rotation: 35 });

	return (
		<Icon title="Restart" boopStyle={style} boopTrigger={trigger} onClick={onClick} >
			<path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
		</Icon>
	);
}

function DarkModeIcon({ onClick }: IconProps) {
	const [style, trigger] = useBoop({ scale: 1.15 });

	return (
		<Icon title="Dark mode" boopStyle={style} boopTrigger={trigger} onClick={onClick}>
			<path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
		</Icon>
	);
}

function LightModeIcon({ onClick }: IconProps) {
	const [style, trigger] = useBoop({ scale: 1.15 });

	return (
		<Icon title="Light mode" boopStyle={style} boopTrigger={trigger} onClick={onClick}>
			<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
		</Icon>
	);
}

type HeaderProps = Readonly<{
	isDarkMode: boolean;
	setIsDarkMode: (isDarkMode: boolean) => void;
	answer: string;
	onRestart: () => void;
}>;

// TODO: use context for answer, dark mode?
export default function Header({ isDarkMode, setIsDarkMode, answer, onRestart }: HeaderProps) {
	return (
		<header>
			<main>
				<h1>Word Game</h1>
			</main>
			<section className="buttons">
				<InfoIcon answer={answer} />
				<RestartIcon onClick={onRestart} />
				{isDarkMode
					? <LightModeIcon onClick={() => setIsDarkMode(false)} />
					: <DarkModeIcon onClick={() => setIsDarkMode(true)} />}
			</section>
		</header>
	);
}
