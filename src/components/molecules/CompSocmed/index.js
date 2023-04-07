import { LinkSvg } from "assets/icon/home/compSvg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const CompSocmed = (props) => {
	const [showSocmed, setShowSocmed] = useState(false);

	return (
		<Link href={props.href}>
			<div
				onMouseEnter={() => setShowSocmed(true)}
				onMouseLeave={() => setShowSocmed(false)}
				className="flex flex-row"
			>
				<div className="relative w-10 z-[1] h-10">
					<Image src={props.src} fill alt="" />
				</div>
				<div
					className={`${
						showSocmed ? " pr-3 -ml-6 pl-9 w-40 border border-white/10" : "w-0"
					} flex justify-between py-2 rounded-xl bg-brand/10 backdrop-blur-3xl duration-1000 overflow-hidden`}
				>
					{showSocmed && (
						<>
							<span className="text-sm font-medium text-white-1">
								{props.name}
							</span>
							<LinkSvg className="w-5 h-5 fill-white" />
						</>
					)}
				</div>
			</div>
		</Link>
	);
};
