/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/nextjs-blog",
    assetPrefix: "/nextjs-blog/",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
