import React from "react";
import clsx from "clsx";

type BannerProps = Readonly<{
	type: "happy" | "sad";
	children?: React.ReactNode;
}>;

export default function Banner({ type, children }: BannerProps) {
	return (
		<div className={clsx("banner", type)}>
			<div className="wavy-border top" />
			{children}
			<div className="wavy-border bottom" />
		</div>
	);
}
