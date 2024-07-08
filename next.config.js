/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Configuraciones opcionales que puedas necesitar

  // Función para generar rutas estáticas dinámicas
  async generateStaticParams() {
    // Importa los datos iniciales necesarios
    const { initialData } = require('./path/to/your/seed');

    // Asegúrate de que initialData.orders esté definido y contiene datos válidos
    const orders = initialData.orders || [];

    // Genera las rutas estáticas para cada orden
    const paths = orders.map((order) => ({
      params: { id: order.id.toString() },
    }));

    return paths;
  },

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
