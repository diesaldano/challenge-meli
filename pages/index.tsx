import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import api from "./api";
import Product from "@/components/Product";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
    </div>
  )};

  export const getServerSideProps = async ({query}: any) => {
    const data = await api.search(`${query.query}`);
  
    return {
      props: {
        data
      },
    }
  }
export default Home;

