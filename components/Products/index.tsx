import Image from "next/image";
import FreeShepping from "../../assets/ic_shipping@2x.png"
import { useRouter } from "next/router";
import { useState } from "react";
import { Product, Item } from "@/interfaces/types";

type Props = {
  product: Product[];
}

const Products: React.FC<Props> = ({ product }: Props) => {
  const router = useRouter();
  const [productDetail, setProductDetail] = useState<Product | null>(null);

  const handleProductClick = (item: Product) => {
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
    <div className="bg-white drop-shadow-md w-full">
      { product && product.map((item: Product, index: number) => {
          const free_shipping = (item.free_shipping === true) ? 
          <span className="pl-2 pt-1">
            <Image src={FreeShepping} width={20} height={20} />
          </span> : "";

          return (
            <div key={index} className="w-100 w-full px-4 cursor-pointer grid-products-custom" onClick={ ()=> handleProductClick(item)}>
              <div className="col-span-3 flex justify-center items-center">
                <a className="flex justify-center items-center" >
                  <img src={item.picture} alt="Picture of the author" width={200} height={200} className="flex items-center mt-2" />
                </a>
              </div>
              { item.items.map((item: Item) => {
                  return (
                    <div key={item.id} className="grid grid-column px-4 py-4 col-span-7 w-full h-28	">
                      <span className="font-sans text-xl font-medium flex justify-start items-center pt-2">
                        { item.price.currency === 'USD' ? 
                            <span className="">USD</span> : 
                            <span className="pr-1">$ </span> }
                        { formatPrice(item.price.amount)} 
                        { free_shipping }
                      </span>
                      <span className="font-normal text-sm md:text-xl">{formatTitle(item.title)}</span>
                    </div>
                  )
                })
              }
              <div className="flex px-2 col-span-2 w-100 justify-center item-center relative top-11">
                <span className="text-gray-500 text-center text-xs">{item.location.state}</span>
              </div>
              <hr className="border-gray-200 w-100 w-full col-span-12 my-4 "/>
            </div>
          )
        }) || 
        <div>Products Empy</div>
      }
    </div>
  );
}

export default Products;