/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  pageExtensions: ['js', 'jsx'],
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/sobre-nosotros': { page: '/about' },
      '/especialidades': { page: '/speciality', query: { title: 'Especialidades' } },
      '/registro': { page: '/signup', query: { title: 'Nuevo usuario' } },
    }
  },
  async rewrites() {
    return [
      {
        source: '/specialities',
        destination: '/main/specialities'
      },
      {
        source: '/about',
        destination: '/main/about'
      },
      {
        source: '/contact',
        destination: '/main/contact'
      },
      {
        source: '/profile',
        destination: '/main/profile'
      },
    ]
  }
};

export default nextConfig;
