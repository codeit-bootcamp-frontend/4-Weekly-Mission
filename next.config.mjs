/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['codeit-images.codeit.com', 'codeit-front.s3.ap-northeast-2.amazonaws.com'],
  },
};

export default nextConfig;
