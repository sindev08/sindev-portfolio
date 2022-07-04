// import { Navbar } from "components";
// import { useEffect, useState } from "react";
if (process.env.NODE_ENV !== "production") {
	require("../assets/styles/globals.css");
} else {
	require("../assets/styles/build.css");
}

function MyApp({ Component, pageProps }) {
	// const [user, setUser] = useState({});
	// useEffect(() => {
	// 	const user = {
	// 		name: "John Doe",
	// 		avatar: "https://randomuser.me/api/portraits/med/men/75.jpg",
	// 	};
	// 	setUser(user);
	// }, []);
	return <Component {...pageProps} />;
}

export default MyApp;
