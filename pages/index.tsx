import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import api from "./api";
import Product from "@/components/Products";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
    </div>
  )};

export default Home;

