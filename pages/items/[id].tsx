import api from "../api";
import ProductDetailComponent from "@/components/ProductDetail";
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import { ProductDetail } from "@/interfaces/details";

type Props = {
  product: ProductDetail;
};

type ServerSideProps = {
  query: {
    id: string;
  };
}


const ProductDetail = ({ product }: Props)  => {
  return(
    <div className="w-full bg-white mt-10  drop-shadow-md">
      { product ? <ProductDetailComponent product={product}/> : <div>loading</div> }
    </div>
  )
}

export const getServerSideProps = async ({query}: ServerSideProps) => {
  const product = await api.details(`${query.id}`);

  return {
    props: {
      product
    },
  }
};

export default ProductDetail;