import React from "react";
import clsx from "clsx";

type BannerProps = Readonly<{
	type: "happy" | "sad";
	children?: React.ReactNode;
}>;

export default function Banner({ type, children }: BannerProps) {
	return (
		<div className={clsx("banner", type)}>
			{children}
		</div>
	);
}
