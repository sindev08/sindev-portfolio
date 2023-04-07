import { Layout } from "components";
import React from "react";
import Image from "next/image";
import { ImageExample } from "assets/image";

export default function ImageBlurScroll() {
	const Article = (props) => {
		return (
			<div className=" h-80 w-80 bg-gray-600 overflow-hidden mb-5">
				{props.image ? (
					<div className="relative w-full h-full object-cover">
						<Image fill placeholder="blur" src={ImageExample} alt="sindev" />
					</div>
				) : null}
			</div>
		);
	};
	return (
		<Layout>
			<div className="container mx-auto">
				<Article></Article>
				<Article></Article>
				<Article></Article>
				<Article></Article>
				<Article></Article>
				<Article image></Article>
			</div>
		</Layout>
	);
}
