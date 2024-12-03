/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
			},
		],
	},
};
const rewrites = async () => [
	{
		source: '/api/:path*',
		destination: process.env.NODE_ENV === 'development'
			? 'http://localhost:8080/api/:path*' // Entwicklungsumgebung
			: 'http://backend:8080/api/:path*' // Produktionsumgebung
	}
];
export {rewrites};
const headers = async () => [
	{
		source: '/api/:path*',
		headers: [
			{key: 'Access-Control-Allow-Credentials', value: 'true'},
			{key: 'Access-Control-Allow-Origin', value: '*'},
			{key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
			{
				key: 'Access-Control-Allow-Headers',
				value: 'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
			},
		]
	}
];
export default {
	...nextConfig,
	rewrites,
	headers
};