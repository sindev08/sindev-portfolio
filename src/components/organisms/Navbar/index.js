import React from "react";
import { Logo, LogoWhite } from "../../../assets";
import Image from "next/image";
import Link from "next/link";

export const Navbar = (props) => {
	console.log(props);
	return (
		<nav className="fixed top-0 w-full bg-main-dark/10 backdrop-blur-sm border-brand/30 border-b z-10">
			<div className="px-5 mx-auto max-w-7xl xl:px-12 py-2 flex justify-between w-full items-center">
				<a className="text-3xl font-bold font-heading" href="#">
					<div className="relative h-10 w-28">
						<Image src={Logo} layout="fill" alt="logo sindev white" />
					</div>
				</a>
				{/* <!-- Nav Links --> */}
				<ul className="hidden lg:flex px-4 space-x-16 text-white">
					<li>
						<Link className="hover:text-gray-200" href="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="hover:text-gray-200" href="/about">
							About
						</Link>
					</li>
					{/* <li>
						<Link className="hover:text-gray-200" href="/slicing/the-malaka">
							Slicing
						</Link>
					</li> */}
					<li>
						<Link className="hover:text-gray-200" href="/project">
							Projects
						</Link>
					</li>
					<li>
						<Link className="hover:text-gray-200" href="/contact">
							Contact
						</Link>
					</li>
				</ul>
				<a className="lg:hidden" href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-200"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</a>
			</div>
		</nav>
	);
};
