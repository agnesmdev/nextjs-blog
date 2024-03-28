/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/nextjs-blog",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
