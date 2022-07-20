import api from "../api";
import Product from "@/components/ProductDetail";
import { GetServerSideProps } from "next";
import { NextPage } from "next";

const ProductDetail: NextPage = ({ product }: any) => {
  return(
    <div className="w-full bg-white mt-10  drop-shadow-md">
      { product ? <Product product={product}/> : <div>loading</div> }
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}: any) => {
  const product = await api.details(`${query.id}`);

  return {
    props: {
      product
    },
  }
};

export default ProductDetail;