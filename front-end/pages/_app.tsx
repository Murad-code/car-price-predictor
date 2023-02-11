import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext, useContext, useEffect } from "react";
import DataProvider from "../context/dataContext";
import Header from "../components/header";
import Form from "../components/form";
import Result from "../components/result";
import PriceChart from "../components/priceChart";
import { DataContext } from "../context/dataContext";
import { IDataContextType } from "../@types/data";
export const CarDataContext = createContext(false);

export default function App({ Component, pageProps }: AppProps) {
  const [price, setPrice] = useState(0);
  const { chartData } = useContext(DataContext) as IDataContextType;
  useEffect(() => {}, [chartData]);
  return (
    <DataProvider>
      <Header />
      <Form setPrice={setPrice} />
      <Result price={price} />
      <PriceChart />
    </DataProvider>
  );
}
