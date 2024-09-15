// Deployment to Azure Static Website

// module.exports = {
//   trailingSlash: true,
//   modularizeImports: {
//     '@mui/material': {
//       transform: '@mui/material/{{member}}',
//     },
//     '@mui/lab': {
//       transform: '@mui/lab/{{member}}',
//     },
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
//   output:"standalone"
// };

// Deployment to Github Pages

module.exports = {
  output: 'export', // Use static export
  basePath: '',     // Optional, if you're using a custom domain
  images: {
    unoptimized: true // Disable image optimization for GitHub Pages
  },
};

