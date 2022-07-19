import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import api from "./api";
import Product from "@/components/Product";

const Home: NextPage = ({data}:any) => {
  return data ? <Product product={data}/> : <div>loading</div>;
};

export const getServerSideProps = async ({query}: any) => {
  console.log('query',query)
  const data = await api.search(`${query.query}`);

  return {
    props: {
      data
    },
  }
};

export default Home;
