import React from "react";

export const Layout = (props) => {
	return (
		<div className="bg-gray-800 min-h-screen w-full">
			<div className="max-w-6xl px-4 lg:px-0 mx-auto py-20">
				{props.children}
			</div>
		</div>
	);
};
