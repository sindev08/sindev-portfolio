import Image from "next/image";
import React from "react";

export const ImageWrap = ({ alt, src, className }) => {
	return (
		<div className={`${className} relative`}>
			<Image src={src} fill alt={alt ?? "sindev"} />
		</div>
	);
};
