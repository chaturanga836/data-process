/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rapidapi-prod-fe-static.s3.amazonaws.com',
            port: '',
            pathname: '/theming/**',
          },
        ],
      },
};

export default nextConfig;
