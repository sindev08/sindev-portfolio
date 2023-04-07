import Head from "next/head";
import { AboutHome, ExperienceHome, HeroHome, Navbar } from "../components";
import "react-spring-bottom-sheet/dist/style.css";
import { ContactHome } from "components/organisms/Home/Contact";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Sindev - Portfolio</title>
				<meta
					name="description"
					content="I am Singgih, a front-end developer. I am skilled in PHP, Javascript, Typescript, UI/UX, and familiar with tools and technologies such as Git, ReactJs, React Native, NextJs, and Laravel. My goal is to help society through innovative technology."
				/>
			</Head>
			<Navbar />
			<div className="relative overflow-hidden bg-main-dark">
				<HeroHome />
				<AboutHome />
				<ExperienceHome />
				{/* <ProjectHome /> */}
				<ContactHome />
				<div className="absolute bottom-16 lg:bottom-0 z-[1] w-full border-t bg-main-dark/10 backdrop-blur-sm border-brand/30">
					<div className="flex items-center justify-center w-full py-6">
						<span className="text-sm font-medium text-center text-white ">
							© 2022 by Sindev. All Right Reserved.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
