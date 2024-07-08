

import { initialData } from "@/seed/seed"; 
import { notFound } from 'next/navigation'; 
import { titleFont } from "@/config/fonts"; 
import { SizeSelector } from "@/components/product/size-selector/SizeSelector"; 
import { QuantitySelector, SlideShow, SlideShowMobile } from "@/components"; 

interface Props {
  params: {
    slug: string;
  };
}

export default function PageProduct({ params }: Props) {
  const { slug } = params;


  const product = initialData.products.find(product => product.slug === slug);


  if (!product) {
    return notFound(); 
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

      {/* SlideShow para dispositivos móviles */}
      <SlideShowMobile 
        title={product.title}
        images={product.images}
        className="block md:hidden"
      />
      
      {/* SlideShow para escritorio */}

      <div className="col-span-2 md:col-span-1">
        <SlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div> 

      {/* Detalles del producto */}
      
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de tallas */}

        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

        {/* Selector de cantidad */}

        <QuantitySelector quantity={2} />

        {/* Botón para agregar al carrito */}
        
        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

        {/* Descripción del producto */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  );
}
