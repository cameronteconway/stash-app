import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	// experimental: {
	// 	esmExternals: "loose",
	// },
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
			},
			{
				protocol: "https",
				hostname: "d1muf25xaso8hp",
			},
		],
	},
};

export default nextConfig;
