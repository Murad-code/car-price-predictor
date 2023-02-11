import { Serie } from "@nivo/line";
import { useState, createContext } from "react";
import { ICarData, IDataContextType } from "../@types/data";

export const DataContext = createContext<IDataContextType | {}>({});

const DataProvider = ({ children }) => {
  const [data, setData] = useState<ICarData[]>();
  const [chartData, setChartData] = useState<Serie[]>();

  const removeData = (modalInfo: ICarData) => {
    setData((currentData) =>
      currentData?.filter((e) => e.colourId !== modalInfo.colourId)
    );
    setChartData((currentData) =>
      currentData?.filter((e) => e.color !== modalInfo.colourId)
    );
  };

  return (
    <DataContext.Provider
      value={{ data, setData, chartData, setChartData, removeData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
