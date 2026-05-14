const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/api/:path*`,
        },
        {
          source: '/uploads/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'}/uploads/:path*`,
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'api.mindframeindia.com' }, // production add karo
    ],
  },
};

export default nextConfig;