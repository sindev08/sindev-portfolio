import React from "react";

export const Layout = ({ children }) => {
	return (
		<div className="w-full min-h-screen bg-gray-800">
			<div className="max-w-6xl px-4 py-20 mx-auto lg:px-0">{children}</div>
		</div>
	);
};
