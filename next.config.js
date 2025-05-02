/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Add custom MDX options here if needed
  },
});

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'next-mdx-remote/loader',
          options: {
            mdxOptions: {
              rehypePlugins: [require('rehype-toc')],
            },
          },
        },
      ],
    });
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

module.exports = withMDX(nextConfig);
