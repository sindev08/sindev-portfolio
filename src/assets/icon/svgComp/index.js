import React from "react";

export function HeroBg(props) {
	return (
		<svg
			// width={1440}
			// height={1075}
			{...props}
			viewBox="0 0 1440 1075"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 0H1440V780.847C1440 830.579 1403.45 872.753 1354.23 879.83L0 1074.5V0Z"
				fill="url(#paint0_linear_0_4)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_0_4"
					x1={720}
					y1={0}
					x2={720}
					y2={916}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#2F364B" />
					<stop offset={1} stopColor="#262B3D" />
				</linearGradient>
			</defs>
		</svg>
	);
}
