import { Analytics } from "@vercel/analytics/react";
if (process.env.NODE_ENV !== "production") {
	require("../assets/styles/globals.css");
} else {
	require("../assets/styles/build.css");
}

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
