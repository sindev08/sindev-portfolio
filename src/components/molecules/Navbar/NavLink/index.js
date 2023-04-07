import Link from "next/link";
import React from "react";

export const NavLink = ({ name, href }) => {
	return (
		<li>
			<Link href={href}>
				<span className="relative text-sm hover:text-gray-200">{name}</span>
			</Link>
		</li>
	);
};
