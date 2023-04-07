import React, { useState, useRef } from "react";
import { Logo } from "../../../assets";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import {
	AboutSvg,
	ContactSvg,
	HomeSvg,
	LinkSvg,
	ProjectSvg,
} from "assets/icon/home/compSvg";
import { BottomSheet } from "react-spring-bottom-sheet";
import {
	AnimationSvg,
	GlassEmail,
	GlassGithub,
	GlassInstragram,
	GlassLinkedIn,
} from "assets/icon/home";
import { Ahref } from "config";
import { NavLink, NavMobLink } from "components/molecules";

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const NavLinks = [
		{ id: "hero", name: "Hero", offset: -500 },
		{ id: "about", name: "About", offset: -500 },
		{ id: "experience", name: "Experience", offset: -500 },
		{ id: "contact", name: "Contact", offset: -500 },
	];
	const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
	return (
		<>
			<nav className="fixed top-0 z-10 w-full border-b bg-main-dark/30 backdrop-blur-sm border-brand/30">
				<div className="relative flex items-center justify-between w-full max-w-6xl px-4 py-2 mx-auto xl:px-0">
					<Link href="/">
						<div className="relative h-10 w-28">
							<Image src={Logo} fill alt="logo sindev white" />
						</div>
					</Link>
					{/* <!-- Nav Links --> */}
					<ul className="hidden px-4 space-x-16 text-white lg:flex">
						{NavLinks.map(({ id, name, offset }, i) => (
							<li key={i} className="list-none">
								<ScrollLink
									activeClass="active"
									className="relative text-sm cursor-pointer hover:text-gray-200"
									to={id}
									spy
									smooth={true}
									offset={offset}
									duration={100}
								>
									{name}
								</ScrollLink>
							</li>
						))}
					</ul>
					<div className="mo-fire lg:hidden">
						<AnimationSvg.Fire />
					</div>
				</div>
			</nav>
			<div className="fixed bottom-0 z-10 w-full px-6 py-2 border-t bg-white/10 backdrop-blur-sm lg:hidden border-brand/30">
				<ul className="flex flex-row flex-wrap justify-between max-w-md mx-auto">
					<li>
						<ScrollLink
							activeClass="active"
							to="hero"
							className="flex flex-col items-center justify-center"
							spy
							smooth={true}
							offset={-700}
							duration={100}
						>
							<HomeSvg className="w-6 h-6 stroke-brand navmob" />
							<span className="text-xs font-medium text-white-1">Hero</span>
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							activeClass="active"
							to="about"
							className="flex flex-col items-center justify-center"
							spy
							smooth={true}
							offset={-700}
							duration={100}
						>
							<AboutSvg className="w-6 h-6 stroke-brand navmob" />
							<span className="text-xs font-medium text-white-1">About</span>
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							activeClass="active"
							to="experience"
							className="flex flex-col items-center justify-center"
							spy
							smooth={true}
							offset={-700}
							duration={100}
						>
							<ProjectSvg className="w-6 h-6 stroke-brand navmob" />
							<span className="text-xs font-medium text-white-1">
								Experience
							</span>
						</ScrollLink>
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
							<div className="flex flex-col items-center px-4 py-8 space-y-5">
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative flex-shrink-0 w-10 h-10">
										<Image src={GlassInstragram} fill alt="" />
									</div>
									<Link className="w-full" href={Ahref.instragramLink}>
										<div className="flex justify-between px-8 py-2 ml-4 sm:w-96 rounded-xl bg-brand/30">
											<span className="text-sm font-medium text-white-1">
												Instragram
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</div>
									</Link>
								</div>
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative flex-shrink-0 w-10 h-10">
										<Image src={GlassEmail} fill alt="" />
									</div>
									<Link className="w-full" href={Ahref.emailLink}>
										<div className="flex justify-between px-8 py-2 ml-4 sm:w-96 rounded-xl bg-brand/30">
											<span className="text-sm font-medium text-white-1">
												Email
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</div>
									</Link>
								</div>
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative flex-shrink-0 w-10 h-10">
										<Image src={GlassLinkedIn} fill alt="" />
									</div>
									<Link className="w-full" href={Ahref.linkedInLink}>
										<div className="flex justify-between px-8 py-2 ml-4 sm:w-96 rounded-xl bg-brand/30">
											<span className="text-sm font-medium text-white-1">
												LinkedIn
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</div>
									</Link>
								</div>
								<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
									<div className="relative flex-shrink-0 w-10 h-10">
										<Image src={GlassGithub} fill alt="" />
									</div>
									<Link className="w-full" href={Ahref.githubLink}>
										<div className="flex justify-between px-8 py-2 ml-4 sm:w-96 rounded-xl bg-brand/30">
											<span className="text-sm font-medium text-white-1">
												Githhub
											</span>
											<LinkSvg className="w-6 h-6 fill-brand" />
										</div>
									</Link>
								</div>
							</div>
						</BottomSheet>
					</>
				</ul>
			</div>
		</>
	);
};
