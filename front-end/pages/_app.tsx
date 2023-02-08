import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext, useContext } from "react";

import Header from "../components/header";
import Form from "../components/form";
import Result from "../components/result";
import PriceChart from "../components/priceChart";

const CarDataContext = createContext(null);

export default function App({ Component, pageProps }: AppProps) {
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const carData = useContext(data);

  return (
    <CarDataContext.Provider value={carData}>
      <Header />
      <Form setPrice={setPrice} setData={setData} setChartData={setChartData} />
      <Result price={price} />
      {chartData && <PriceChart data={data} chartData={chartData} />}
    </CarDataContext.Provider>
  );
}
