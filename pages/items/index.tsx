import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import api from "../api";
import Product from "@/components/Product";

const Items: NextPage = ({data}:any) => {
  return data ? <Product product={data}/> : <div>loading</div>;
};

export const getServerSideProps = async ({query}: any) => {
  console.log(query.search);
  const data = await api.search(`${query.search}`);

  return {
    props: {
      data
    },
  }
};



export default Items;
