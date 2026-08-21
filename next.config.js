module.exports = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "i.ibb.co" },
			{ protocol: "https", hostname: "images.pexels.com" },
			{ protocol: "https", hostname: "images.unsplash.com" },
		],
	},
};
