/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/skilltest', 
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
