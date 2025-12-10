/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	output: 'export',
	images: {
		unoptimized: true,
	},
	generateEtags: false, // prevents Github from thinking nothing has changed
}

/* I clearly have to do something just so GitHub will fucking work */
module.exports = nextConfig
