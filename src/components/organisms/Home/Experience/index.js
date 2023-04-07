import { ArrowRightIcon } from "assets/icon/home";
import { ImageWrap } from "components/atoms";
import { Ahref } from "config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ExperienceHome = () => {
	const DescExperience = ({ desc }) => {
		return (
			<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
				{desc}
			</p>
		);
	};
	const ListExperience = ({ time, title, children }) => {
		return (
			<li className="mb-10 ml-4">
				<div className="absolute w-3 h-3 bg-brand rounded-full -left-1.5 border border-brand "></div>
				<time className="mb-1 text-sm text-gray-400 dark:text-gray-500">
					{time}
				</time>
				<h3 className="mb-6 text-lg font-semibold text-brand">{title}</h3>
				{children[0]}
				{children[1]}
			</li>
		);
	};
	const data = [
		{
			time: "Juli 2021 - April 2023",
			title: "Litedex Protocol",
			link: "https://litedex.io",
			descriptions: [
				{
					desc: "✅ Translate UI/UX design into code that is suitable and accessible to users.",
				},
				{
					desc: "✅ Ensuring the appearance and function of the website is consistent across various devices and browsers.",
				},
				{
					desc: "✅ Implement security and privacy standards on the website.",
				},
				{
					desc: "✅ Ensuring the website is responsive and user-friendly.",
				},
				{
					desc: "✅ Ensuring the website has optimal performance and minimizes load time.",
				},
				{
					desc: "✅ Implement integration with required API and data.",
				},
				{
					desc: "✅ Keep code clean, organized, and easy to maintain.",
				},
				{
					desc: "✅ Doing testing and debugging to ensure the website functions properly.",
				},
				{
					desc: "✅ Follow the latest trends in web technology and ensure websites are kept relevant and up-to-date.",
				},
				{
					desc: "✅ Communicate with related teams and follow the work processes that have been set.",
				},
			],
		},
	];
	return (
		<section id="experience" className="max-w-2xl mx-auto">
			<ol className="relative border-l border-gray-500 dark:border-gray-700">
				{data.map((item, i) => (
					<ListExperience key={i} title={item.title} time={item.time}>
						<div className="flex flex-col items-start space-y-4">
							{item.descriptions.map((datas, i) => (
								<DescExperience key={i} desc={datas.desc} />
							))}
						</div>
						<Link
							href={item.link}
							className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white rounded-lg bg-brand hover:bg-brand/90"
						>
							Go to Website
						</Link>
					</ListExperience>
				))}
			</ol>
		</section>
	);
};