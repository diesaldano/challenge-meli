import { NextPage } from "next";

const ProductDetail: React.FC = ({ product }: any) => {
  return (
    <div className="w-full w-100 grid grid-cols-12">
      <div className="col-span-8 flex justify-center">
        <img src={product.picture[0].url} alt="Picture of the author" width={300} height={300} className="flex items-center mt-2" />
      </div>
      <div className="col-span-4 mt-4">
        <div className="grid grid-column pr-8">
          <span className="font-sans text-xs text-gray-500 font-ligth flex justify-start items-center pt-4">
            { product.condition ? 'Nuevo' : 'Usado'} - {product.sold_quantity} vendidos
          </span>
          <h1 className="font-sans text-xl	font-medium flex justify-start items-center pt-2 leading-6">{product.item.title}</h1>
          <h2 className="font-sans text-2xl font-medium flex justify-start items-center pt-2">$ {product.item.price.amount.toFixed(2)}</h2>
          <button className="w-2/3 drop-shadow mt-6 inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700" >Comprar</button>
        </div>
      </div>
      <div className="col-span-8 grid grid-column my-8 mx-8 ">
        <span className="text-gray-900 font-medium text-xl mt-12 py-4">Descriptión del producto</span>
        <p className="text-gray-400  text-base leading-6">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail;