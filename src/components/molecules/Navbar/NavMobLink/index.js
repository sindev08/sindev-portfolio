import Link from "next/link";
import React from "react";

export const NavMobLink = ({ name, href, children }) => {
	return (
		<li>
			<Link href={href}>
				<div className="flex flex-col items-center justify-center">
					{children}
					<span className="text-xs font-medium text-white-1">{name}</span>
				</div>
			</Link>
		</li>
	);
};
