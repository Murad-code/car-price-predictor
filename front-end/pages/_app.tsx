import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Form from "../components/form";
import Result from "../components/result";
import PriceChart from "@/components/priceChart";

export default function App({ Component, pageProps }: AppProps) {
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);

  return (
    <>
      <Header />
      <Form setPrice={setPrice} setData={setData} data={data} />
      <Result price={price} />
      {data && <PriceChart data={data} />}
    </>
  );
}
