// Jika infinite scroll nya ingin dibuat otomatis, maka menggunakan event detect scroll

// import Image from "next/image";
import { Layout } from "components";
import Link from "next/link";
import { useState } from "react";

// Step 2 tangkap ke parameter study case
export default function InfiniteScroll({ posts: initialPosts }) {
	// console.log(posts);
	const [start, setStart] = useState(5);
	const [posts, setPosts] = useState(initialPosts);
	// Step 3 dan jalankan loadmore (client side), pengulangan "+"
	async function loadMore() {
		const req = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`
		);
		const newPosts = await req.json();
		// console.log(posts);
		setPosts([...posts, ...newPosts]);
		setStart(start + 5);
	}
	return (
		<Layout>
			<div className="flex flex-col items-center justify-center space-y-10">
				<span className="text-5xl font-bold text-brand">Case Study</span>
				<div className="flex flex-col items-center justify-center space-y-10">
					<div className="flex flex-col space-y-12">
						{posts.map((content, index) => (
							<div
								key={index}
								className="max-w-md mx-auto overflow-hidden bg-gray-900 shadow-md rounded-xl md:max-w-2xl"
							>
								<div className="md:flex">
									<div className="p-4">
										<div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
											Case study
										</div>
										<Link
											href="#"
											className="block mt-1 text-lg font-medium leading-tight text-gray-100 hover:underline"
										>
											{content.title}
										</Link>
										<p className="mt-2 text-gray-300">{content.body}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<button
						type="button"
						onClick={loadMore}
						className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm w-32 py-2.5 text-center mr-2 mb-2"
					>
						Load More
					</button>
				</div>
			</div>
		</Layout>
	);
}

// Step 1 Request Server side rendering (ssr)
export async function getServerSideProps() {
	const req = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5`
	);
	const posts = await req.json();

	return {
		props: {
			posts,
		},
	};
}
