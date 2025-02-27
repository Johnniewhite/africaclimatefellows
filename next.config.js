// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true },
// }

// module.exports = nextConfig 

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the static export
  // output: 'export',
  images: { 
    domains: ['images.unsplash.com', 'blog.africaclimatefellows.com', 'gallery.africaclimatefellows.com'],
    unoptimized: true 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;