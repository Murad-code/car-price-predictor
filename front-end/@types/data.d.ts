export interface ICarData {
  annualMileage: string;
  colourId: string;
  engineSize: string;
  fuelType: string;
  manufacturer: string;
  mileage: string;
  model: string;
  transmission: string;
  year: string;
}
export interface IDataContextType {
  data: ICarData[] | undefined;
  chartData: Serie[] | undefined;
  setData: Dispatch<SetStateAction<ICarData[] | undefined>>;
  setChartData: Dispatch<SetStateAction<Serie[] | undefined>>;
  removeData: (modalInfo: ICarData) => void;
}
