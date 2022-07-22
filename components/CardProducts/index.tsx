import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  product: any[];
}

const Products: React.FC<Props>= ({ product }: Props) => {
  const router = useRouter();
  const [productDetail, setProductDetail] = useState<any | null>(null);

  const handleProductClick = (item: any) => {
    setProductDetail(item);
    router.push(`/items/${item.id}`);
  }

  const formatPrice = (price: number)=> {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  const formatTitle = (title: string) => {
    if (title.length > 40) {
      return title.substring(0, 40) + "...";
    }
    return title.replace(/\-+/g, ' ').toLowerCase();
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 drop-shadow-md">
      { product && product.map((item: any, index: number) => {
          return (
            <div key={index} className=" w-full bg-white rounded-lg p-6 flex flex-col justify-center items-center items-center cursor-pointer hover:scale-110	hover:duration-500 hover:drop-shadow-xl" onClick={ ()=> handleProductClick(item)}>
              <a className="flex justify-center items-center" >
                <img src={item.picture} alt="Picture of the author" width={200} height={200} className="flex items-center mt-2" />
              </a>
              { 
                item.items.map((item: any) => {
                  return (
                    <div key={item.id} className="grid grid-column px-2 my-2  w-full h-28	">
                      <span className="font-sans text-md font-medium flex justify-start items-center pt-2">
                        { item.price.currency === 'USD' ? 
                          <span className="">USD</span> : 
                          <span className="pr-1">$ </span> }
                        { formatPrice(item.price.amount)} 
                      </span>
                      <span className="text-sm font-normal">{formatTitle(item.title)}</span>
                    </div>
                )})
              }
              <div className="flex px-2 w-full item-center">
                <span className="text-gray-500 text-xs">{item.location.state}</span>
              </div>
            </div>          
          )
        }
        ) || 
        <div>Comics Empy</div>
      }
      </div>
    </div>
  );
}

export default Products;