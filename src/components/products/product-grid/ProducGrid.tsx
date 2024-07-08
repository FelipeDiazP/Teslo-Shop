import { Product } from "@/interfaces";
import { ProducGridItems } from './ProducGridItems';


interface Props{
    products: Product[];
}



export const ProductGrid = ({products}: Props ) =>{
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">

            {
                products.map(product => (
                    <ProducGridItems 
                    key={product.slug}
                    product={product}
                    />
                ))
            }

        </div>
    )
} 