// Jika infinite scroll nya ingin dibuat otomatis, maka menggunakan event detect scroll

// import Image from "next/image";
import { Layout } from "components";
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
			<div className="flex flex-col space-y-10 justify-center items-center">
				<span className="text-5xl font-bold text-brand">Case Study</span>
				<div className="flex flex-col space-y-10 justify-center items-center">
					<div className="flex flex-col space-y-12">
						{posts.map((content, index) => (
							<div
								key={index}
								className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
							>
								<div className="md:flex">
									<div className="p-4">
										<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
											Case study
										</div>
										<a
											href="#"
											className="block mt-1 text-lg leading-tight font-medium text-gray-100 hover:underline"
										>
											{content.title}
										</a>
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
