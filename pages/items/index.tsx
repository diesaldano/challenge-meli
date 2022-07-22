import type { NextPage } from "next";
import api from "../api";
import Products from "@/components/Products";
import Breadcrum from "@/components/Breadcrum";
import { Product } from "@/interfaces/types";

type Props = {
  query: string;
}

type PropsPage = {
  data: Product[];
}

const ProductsPage: NextPage<PropsPage> = ({data}:PropsPage) => {
  return data ? 
    <>
      <Breadcrum breadcrumb={data}/>
      <Products product={data}/> 
    </>
    : <div>loading</div>;
};


export const getServerSideProps = async ({query}: Props ) => {
  const data = await api.search(`${query.search}`);

  return {
    props: {
      data
    },
  }
};



export default ProductsPage;
