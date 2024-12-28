/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // for static export
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable image optimization for static export
    },
};

module.exports = nextConfig;
