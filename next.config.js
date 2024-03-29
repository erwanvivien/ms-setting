/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['thispersondoesnotexist.com'],
  },
  eslint: {
    dirs: ['pages', 'src', 'components'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=604800',
          },
        ],
      },
    ]
  },
}
