import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";
import { Metadata } from "next";

// Interfaz para representar una orden
interface Order {
  id: string;
  customerName: string;
  products: {
    title: string;
    price: number;
    quantity: number;
  }[];
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  // Puedes agregar más atributos según la estructura real de tus órdenes
}

// Define la interfaz de las props
interface Props {
  params: {
    id: string;
  };
  order: Order;
}

// Productos simulados en el carrito
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

// Componente de la página de órdenes
export default function PageOrders({ params, order }: Props) {
  const { id } = params;
  const { customerName, products, status } = order;

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
              <p className="text-xl">{customerName}</p>
              {/* Aquí puedes mostrar más detalles de la entrega según sea necesario */}
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-500 mb-10" />
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">{products.length} artículos</span>
              {/* Aquí puedes calcular subtotal, impuestos, total, etc. según los productos en la orden */}
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

// Función para generar paths estáticos
export async function getStaticPaths() {
  const orders = initialData.orders || []; // Asegúrate de que orders esté definido
  const paths = orders.map((order: { id: { toString: () => any; }; }) => ({
    params: { id: order.id.toString() },
  }));
  return {
    paths,
    fallback: false, // Puedes ajustar según tus necesidades
  };
}

// Función para obtener datos estáticos
export async function getStaticProps({ params }: { params: { id: string } }) {
  // Aquí puedes obtener los datos específicos de la orden según `params.id`
  const order = initialData.orders.find((order: { id: { toString: () => string; }; }) => order.id.toString() === params.id);
  if (!order) {
    throw new Error(`No se encontró la orden con el ID: ${params.id}`);
  }
  // Devuelve las props necesarias incluyendo `order`
  return {
    props: {
      params,
      order,
    },
  };
}
