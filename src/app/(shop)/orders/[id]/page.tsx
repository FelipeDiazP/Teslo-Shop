import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";
import { Metadata } from "next";

// Define la interfaz de las props
interface Props {
  params: {
    id: string;
  };
}

// Productos simulados en el carrito
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

// Componente de la página de órdenes
export default function PageOrders({ params }: Props) {
  const { id } = params;

  return (
    <main className="flex justify-center mb-72 px-10 sm:px-0 ">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Pagada</span>
            </div>
            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>$ {product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout */}
          <div className="bg-gray-300 rounded-xl shadow-xl p-7">
            <h2 className="text-2xl font-bold mb-2">Información de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Ivan Prada</p>
              <p>Av. Siempre viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldía Cuauhtémoc</p>
              <p>Ciudad de México</p>
              <p>CP 123123</p>
              <p>123.123.123</p>
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-500 mb-10" />
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>
              <span>Sub Total</span>
              <span className="text-right">$ 100</span>
              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>
              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-500": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Función para generar parámetros estáticos
export async function generateStaticParams() {
  const orders = initialData.orders || []; // Asegúrate de que orders esté definido
  if (!orders) {
    return [];
  }
  const params = orders.map((order: { id: { toString: () => any; }; }) => ({
    id: order.id.toString(),
  }));
  return params;
}

// Función para generar metadata estática
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  return {
    title: `Orden #${id}`,
  };
}
