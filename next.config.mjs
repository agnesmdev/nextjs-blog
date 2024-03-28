/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: isProd ? "/nextjs-blog" : "",
    assetPrefix: isProd ? "https://agnesmdev.github.io/nextjs-blog/" : undefined,
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
