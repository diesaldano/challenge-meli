import Image from "next/image";
import FreeShepping from "../../assets/ic_shipping@2x.png"

const Product: React.FC = ({ product }: any) => {

  return (
    <div className="bg-white mt-10  drop-shadow-md">
        {
        product ? product.map((item: any) => {
          const free_shipping = (item.free_shipping === true) ? 
          <span className="pl-2 pt-1">
            <Image src={FreeShepping} width={20} height={20} />
          </span> : "";
          return (
          <div key={item.id} className="grid grid grid-cols-12 w-100 w-full px-4">
            <div className="col-span-3 flex justify-center items-center">
              <a className="flex justify-center items-center" href="/">
                <img src={item.picture} alt="Picture of the author" width={200} height={200} className="flex items-center mt-2" />
              </a>
            </div>
            {
              item.items.map((item: any) => {
                return (
                  <div key={item.id} className="grid grid-column px-4 py-4 col-span-7 w-full h-28	">
                    <span className="font-sans text-xl font-medium flex justify-start items-center pt-2">
                      { item.price.currency === 'USD' ? 
                          <span className="">USD</span> : 
                          <span className="pr-1">$ </span> }
                      { item.price.amount.toFixed(2)  } 
                      { free_shipping }
                    </span>
                    <span className="text-xl font-normal">{item.title}</span>
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
        }
        ) : 
        <div>loading</div>}
    </div>
  );
}

export default Product;