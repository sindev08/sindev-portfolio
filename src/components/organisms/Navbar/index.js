import React, { useState } from "react";
import { Logo } from "../../../assets";
import Image from "next/image";
import Link from "next/link";
import Scrollspy from "react-scrollspy";
import { useRef } from "react";
import {
	AboutSvg,
	ContactSvg,
	HomeSvg,
	LinkSvg,
	ProjectSvg,
} from "assets/icon/home/compSvg";
import { BottomSheet } from "react-spring-bottom-sheet";
import {
	GlassEmail,
	GlassGithub,
	GlassInstragram,
	GlassLinkedIn,
} from "assets/icon/home";
import { Ahref } from "config";

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className="fixed top-0 z-10 w-full border-b bg-main-dark/10 backdrop-blur-sm border-brand/30">
				<div className="relative flex items-center justify-between w-full max-w-6xl px-4 py-2 mx-auto xl:px-0">
					<a className="text-3xl font-bold font-heading" href="#">
						<div className="relative h-10 w-28">
							<Image src={Logo} layout="fill" alt="logo sindev white" />
						</div>
					</a>
					{/* <!-- Nav Links --> */}
					<Scrollspy
						className="hidden px-4 space-x-16 text-white lg:flex"
						items={["hero", "about", "project", "contact"]}
						currentClassName="is-current"
					>
						<li>
							<Link href="#hero">
								<a className="relative text-sm hover:text-gray-200">Home</a>
							</Link>
						</li>
						<li>
							<Link href="#about">
								<a className="relative text-sm hover:text-gray-200">About</a>
							</Link>
						</li>
						<li>
							<Link href="#project">
								<a className="relative text-sm hover:text-gray-200">Projects</a>
							</Link>
						</li>
						<li>
							<Link href="#contact">
								<a className="relative text-sm hover:text-gray-200">Contact</a>
							</Link>
						</li>
					</Scrollspy>
					<div className="mo-fire lg:hidden">
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							width="125px"
							height="189.864px"
							viewBox="0 0 125 189.864"
							enableBackground="new 0 0 125 189.864"
							xmlSpace="preserve"
						>
							<path
								className="flame-main"
								fill="#F36E21"
								d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465
	c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54
	c6.806,41.899,16.831,45.301,6.088,53.985"
							/>
							<path
								className="flame-main one"
								fill="#F6891F"
								d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123
	c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"
							/>
							<path
								className="flame-main two"
								fill="#FFD04A"
								d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998
	C84.858,184.21,125.705,150.905,81.657,79.192z"
							/>
							<path
								className="flame-main three"
								fill="#FDBA16"
								d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79
	C95.354,106.319,99.92,114.108,99.92,101.754z"
							/>
							<path
								className="flame-main four"
								fill="#F36E21"
								d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041
	S134.387,164.603,103.143,105.917z"
							/>
							<path
								className="flame-main five"
								fill="#FDBA16"
								d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"
							/>
							<path
								className="flame"
								fill="#F36E21"
								d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"
							/>
							<path
								className="flame one"
								fill="#F36E21"
								d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"
							/>
							<path
								className="flame two"
								fill="#F36E21"
								d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"
							/>
						</svg>
					</div>

					{/* <a className="lg:hidden" href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6 text-gray-200"
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
				</a> */}
				</div>
			</nav>
			<div className="fixed bottom-0 z-10 w-full px-6 py-2 border-t bg-white/10 backdrop-blur-sm lg:hidden border-brand/30">
				{/* <div className="flex flex-row flex-wrap justify-between max-w-md mx-auto"> */}
				<Scrollspy
					className="flex flex-row flex-wrap justify-between max-w-md mx-auto"
					items={["hero", "about", "project", "contact"]}
					currentClassName="is-current"
				>
					<li>
						<Link href="#hero">
							<a className="flex flex-col items-center justify-center">
								<HomeSvg className="w-6 h-6 stroke-brand navmob" />
								<span className="text-xs font-medium text-white-1">Home</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#about">
							<a className="flex flex-col items-center justify-center">
								<AboutSvg className="w-6 h-6 stroke-brand navmob" />
								<span className="text-xs font-medium text-white-1">About</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#project">
							<a className="flex flex-col items-center justify-center">
								<ProjectSvg className="w-6 h-6 stroke-brand navmob" />
								<span className="text-xs font-medium text-white-1">
									Projects
								</span>
							</a>
						</Link>
					</li>
					<>
						<button onClick={() => setOpen(true)}>
							<div className="flex flex-col items-center justify-center">
								<ContactSvg className="w-6 h-6 stroke-brand" />
								<span className="text-xs font-medium text-white-1">
									Contact
								</span>
							</div>
						</button>
						<BottomSheet
							open={open}
							onDismiss={() => setOpen(false)}
							// blocking={false}
							snapPoints={({ minHeight }) => minHeight}
						>
							<div className="flex flex-col px-4 py-8 space-y-5">
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative w-10 h-10">
										<Image src={GlassInstragram} layout="fill" alt="" />
									</div>
									<Link href={Ahref.instragramLink}>
										<a
											target="_blank"
											rel="noreferrer"
											className="flex justify-between w-10/12 px-8 py-2 sm:w-96 rounded-xl bg-brand/30"
										>
											<span className="text-sm font-medium text-white-1">
												Instragram
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</a>
									</Link>
								</div>
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative w-10 h-10">
										<Image src={GlassEmail} layout="fill" alt="" />
									</div>
									<Link href={Ahref.emailLink}>
										<a
											target="_blank"
											rel="noreferrer"
											className="flex justify-between w-10/12 px-8 py-2 sm:w-96 rounded-xl bg-brand/30"
										>
											<span className="text-sm font-medium text-white-1">
												Email
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</a>
									</Link>
								</div>
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative w-10 h-10">
										<Image src={GlassLinkedIn} layout="fill" alt="" />
									</div>
									<Link href={Ahref.linkedInLink}>
										<a
											target="_blank"
											rel="noreferrer"
											className="flex justify-between w-10/12 px-8 py-2 sm:w-96 rounded-xl bg-brand/30"
										>
											<span className="text-sm font-medium text-white-1">
												LinkedIn
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</a>
									</Link>
								</div>
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative w-10 h-10">
										<Image src={GlassGithub} layout="fill" alt="" />
									</div>
									<Link href={Ahref.githubLink}>
										<a
											target="_blank"
											rel="noreferrer"
											className="flex justify-between w-10/12 px-8 py-2 sm:w-96 rounded-xl bg-brand/30"
										>
											<span className="text-sm font-medium text-white-1">
												Githhub
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</a>
									</Link>
								</div>
							</div>
						</BottomSheet>
					</>
				</Scrollspy>
				{/* </div> */}
			</div>
		</>
	);
};
