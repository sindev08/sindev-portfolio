import React from "react";
import Router from "next/router";

export default function Custom404() {
	return (
		<main className="h-screen w-full flex flex-col justify-center items-center bg-gray-900">
			<h1 className="text-9xl font-extrabold text-white tracking-widest">
				404
			</h1>
			<div className="bg-brand px-2 text-sm rounded rotate-12 absolute">
				Page Not Found
			</div>
			<button
				onClick={() => Router.back()}
				className="relative mt-5 inline-block text-sm font-medium text-brand group active:text-brand/60 focus:outline-none focus:ring"
			>
				<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-brand group-hover:translate-y-0 group-hover:translate-x-0"></span>

				<span className="relative block px-8 py-3 bg-gray-900 border border-current">
					Go Back
				</span>
			</button>
		</main>
	);
}
