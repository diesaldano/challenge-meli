import { NextPage } from "next";
import { ProductDetail } from "@/interfaces/details";
import Image from "next/image";
//declare props
type Props = {
  product: ProductDetail;
};

const ProductDetail= ({ product }: Props) => {
  return (
    <div className="w-full w-100 grid grid-cols-12 my-8">
      <div className="col-span-8 flex justify-center">
        <Image src={product.picture[0].url} alt="Picture of the author" className="flex items-center mt-2" width={200} height={200}
          quality={75} priority objectFit="cover"/>
      </div>
      <div className="col-span-4 mt-4">
        <div className="grid grid-column pr-8">
          <span className="font-sans text-xs text-gray-500 font-ligth flex justify-start items-center pt-">
            { product.condition ? 'Nuevo' : 'Usado'} - {product.sold_quantity} vendidos
          </span>
          <h1 className="font-sans text-xl	font-medium flex justify-start items-center pt-2 leading-6">{product.item.title}</h1>
          <h2 className="font-sans text-2xl font-medium flex justify-start items-center pt-2">$ {product.item.price.amount.toFixed(2)}</h2>
          <button className="w-2/3 drop-shadow mt-6 inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700" >Comprar</button>
        </div>
      </div>
      <div className="col-span-8  my-8 mx-8 ">
        <span className="text-gray-900 font-medium text-xl mt-12 py-4 col-span-12 block
      ">Descriptión del producto</span>
        <p className="text-gray-400  text-base leading-6 col-span-12 overflow-hidden">{product.description}</p>
      </div>
      <div className="col-span-4"></div>
    </div>
  )
}

export default ProductDetail;