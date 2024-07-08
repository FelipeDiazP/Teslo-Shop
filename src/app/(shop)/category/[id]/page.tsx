import { initialData } from "@/seed/seed";
import { Title } from '../../../../components/ui/title/Title';
import { ProductGrid } from "@/components";
import { Category } from "@/interfaces/products.interfaces";

// Datos iniciales de productos
const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

// Componente de la página de categoría
export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'men': 'para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'para todos',
  };

  return (
    <>
      <Title
        title={`Articulo ${(labels)[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid
        products={products}
      />
    </>
  );
}

// Función para generar parámetros estáticos
export const generateStaticParams = async () => {
  // Aquí definimos las categorías estáticas que queremos generar
  const categories: Category[] = ['men', 'women', 'kid', 'unisex'];

  return categories.map(category => ({
    id: category,
  }));
};
