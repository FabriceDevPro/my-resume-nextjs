/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/myresume',
    assetPrefix: '/myresume/',
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.symlinks = false;
      }
      return config;
    },
  };
  
  export default nextConfig;
  