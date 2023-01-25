import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "../components/form";

export default function App({ Component, pageProps }: AppProps) {
  const [price, setPrice] = useState(0);
  
  // useEffect(async () => {
  //   const res: any = await axios.post(
  //     "http://127.0.0.1:5000/api/price-prediction",
  //     {
  //       manufacturer: "Volkswagen",
  //       year: 2013,
  //       mileage: 100000,
  //       engineSize: 1.4,
  //       model: "Polo",
  //       transmission: "Automatic",
  //       fuelType: "Petrol",
  //     }
  //   );
  //   console.log(res.data.data);
  // }, [price]);

  return (
    <>
      <Header />
      <h1>Price is {price}</h1>
      <Form />
    </>
  );
}
