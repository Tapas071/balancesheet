/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
        MONGO_URI: process.env.MONGO_URI,
    },
};

export default nextConfig;
