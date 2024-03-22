/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jasonwatmore.com',
        port: '',
        pathname: '/_content/**',
      },
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        port: '',
        pathname: '/badges/**',
      },
    ],
  },
};

export default nextConfig;

//(https://jasonwatmore.com/_content/images/jason.jpg)
//(https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png)