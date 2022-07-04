import { Layout } from "components";
import Link from "next/link";
import React from "react";

export default function StudyCase() {
	return (
		<Layout>
			<div className="grid grid-cols-4 gap-8">
				<Link href="/study-case/infinite-scroll">
					<a>
						<div className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
							Infinite Scroll
						</div>
					</a>
				</Link>
				<Link href="/study-case/image-blur-scroll">
					<a>
						<div className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
							Image Blur Scroll
						</div>
					</a>
				</Link>
			</div>
		</Layout>
	);
}
