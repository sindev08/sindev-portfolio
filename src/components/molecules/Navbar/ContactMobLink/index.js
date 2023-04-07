import { LinkSvg } from "assets/icon/home/compSvg";
import { ImageWrap } from "components/atoms";
import Link from "next/link";
import React from "react";

export const ContactMobLink = ({ src, href, name }) => {
	return (
		<div className="flex flex-row items-center justify-between sm:justify-center sm:space-x-4">
			<ImageWrap src={src} className="w-10 h-10" alt="contact sindev" />
			<Link href={href}>
				<div className="flex justify-between w-10/12 px-8 py-2 sm:w-96 rounded-xl bg-brand/30">
					<span className="text-sm font-medium text-white-1">{name}</span>
					<LinkSvg className="w-6 h-6 fill-brand" />
				</div>
			</Link>
		</div>
	);
};
