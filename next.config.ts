import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "edwardtanguay.vercel.app",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
