/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "static.wikia.nocookie.net" },
    ],
  },
  logging: { fetches: { fullUrl: true } },
};

export default nextConfig;
