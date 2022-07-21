import React from "react";
import { Product, Categories } from "@/interfaces/types";

type Props = {
  breadcrumb: Product[];
}

const Breadcrum = ({ breadcrumb }: Props) => {
  let categories = breadcrumb.reduce((acc: any, item: Product, index: number) => {
    if (index === 0) {
      return acc.concat(item.categories);
    }
    return acc;
  }, []);

  return (
    <div className="w-full pl-4 flex justify-start items-center my-4">
      {
        categories.map((item: string, index: number) => {
            return (
              <span className="text-gray-400 text-sm" key={index}>
                {item} { index !== categories.length - 1 ? <span className="text-gray-400"> {" > "} </span> : null }
              </span>
            )
        })
      }
    </div>
  );
}

export default Breadcrum;