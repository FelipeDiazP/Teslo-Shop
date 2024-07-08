/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Otras configuraciones opcionales que puedas necesitar

  webpack: (config) => {
    // Configuraciones adicionales de webpack si las necesitas
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { file: /node_modules\/node-fetch\/lib\/index\.js/ },
    ];

    return config;
  },
};

module.exports = nextConfig;
