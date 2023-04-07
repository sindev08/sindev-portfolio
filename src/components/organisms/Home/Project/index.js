import { ExampleProject } from "assets/icon/home";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const ProjectHome = () => {
	const [tabProjects, setTabProjects] = useState("tab1");
	return (
		<section
			id="project"
			className="max-w-6xl px-4 pt-20 pb-40 mx-auto space-y-2 lg:py-20 lg:h-screen xl:px-0 sm:space-y-8"
		>
			<h2 className="text-2xl font-bold text-center md:text-4xl text-brand">
				Projects
			</h2>
			<div className="flex flex-col">
				<div className="flex flex-row justify-start mt-2 ml-8 space-x-1">
					<button
						onClick={() => setTabProjects("tab1")}
						className={` ${
							tabProjects === "tab1"
								? "text-white-1 font-bold text-base sm:text-xl bg-brand/10 rounded-t-xl"
								: "text-brand text-sm sm:text-base font-medium underline"
						} px-3 py-2 transition-all`}
					>
						Web Developer
					</button>
					<button
						onClick={() => setTabProjects("tab2")}
						className={` ${
							tabProjects === "tab2"
								? "text-white-1 font-bold text-base sm:text-xl bg-brand/10 rounded-t-xl"
								: "text-brand text-sm sm:text-base font-medium underline"
						} px-3 py-2 transition-all`}
					>
						Web Design
					</button>
				</div>
				<div className="w-full px-4 sm:px-12 lg:px-24 py-10 bg-brand/10 rounded-[36px] overflow-hidden">
					{tabProjects === "tab1" ? (
						<div className="flex justify-center">
							<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
								<div className="flex flex-col space-y-5 w-72">
									<div className="relative w-full overflow-hidden h-52 rounded-3xl">
										<Image fill src={ExampleProject} alt="project litedex" />
									</div>
									<div className="flex flex-col p-1 space-y-3">
										<span className="text-lg font-bold text-brand">
											Litedex Protocol
										</span>
										<span className="text-base text-white-1">
											Pengalaman bekerja pada bagian Front End Developer, UI/UX
											Designer dan Technical Writer.
										</span>
										<Link href="" className="text-right">
											<span className="text-sm font-bold underline text-brand">
												Go to Projects
											</span>
										</Link>
									</div>
								</div>
								<div className="flex flex-col space-y-5 w-72">
									<div className="relative w-full overflow-hidden bg-black h-52 rounded-3xl">
										<Image fill src={ExampleProject} alt="project litedex" />
									</div>
									<div className="flex flex-col p-1 space-y-3">
										<span className="text-lg font-bold text-brand">
											Litedex Protocol
										</span>
										<span className="text-base text-white-1">
											Pengalaman bekerja pada bagian Front End Developer, UI/UX
											Designer dan Technical Writer.
										</span>
										<Link href="" className="text-right">
											<span className="text-sm font-bold underline text-brand">
												Go to Projects
											</span>
										</Link>
									</div>
								</div>
								<div className="flex flex-col space-y-5 w-72">
									<div className="relative w-full overflow-hidden bg-black h-52 rounded-3xl">
										<Image fill src={ExampleProject} alt="project litedex" />
									</div>
									<div className="flex flex-col p-1 space-y-3">
										<span className="text-lg font-bold text-brand">
											Litedex Protocol
										</span>
										<span className="text-base text-white-1">
											Pengalaman bekerja pada bagian Front End Developer, UI/UX
											Designer dan Technical Writer.
										</span>
										<Link href="" className="text-right">
											<span className="text-sm font-bold underline text-brand">
												Go to Projects
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					) : (
						tabProjects === "tab2" && (
							<div className="flex flex-col space-y-40">
								<div className="flex flex-col items-center justify-between space-y-5 lg:space-y-0 lg:flex-row">
									<div className="relative overflow-hidden shadow-2xl h-[13.125rem] w-[17.5rem] sm:h-[22.5rem] sm:w-[30rem] rounded-3xl">
										<Image fill src={ExampleProject} alt="project sindev" />
									</div>
									<div className="flex flex-col space-y-3 lg:space-y-5 lg:w-[45%]">
										<h2 className="text-xl font-bold sm:text-2xl text-brand">
											Litedex Protocol Design
										</h2>
										<p className="text-sm sm:text-base text-white-1">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industrys
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book.
										</p>
										<div className="flex flex-col">
											<span className="text-xs sm:text-sm text-white-1">
												1 Page
											</span>
											<span className="text-xs sm:text-sm text-white-1">
												100+ Words
											</span>
											<span className="text-xs sm:text-sm text-white-1">
												Design System
											</span>
											<span className="text-xs sm:text-sm text-white-1">
												Responsive
											</span>
										</div>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};
