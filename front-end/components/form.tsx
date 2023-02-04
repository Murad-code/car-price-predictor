import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import {
  AudiModels,
  BMWModels,
  MercedesModels,
  VolkswagenModels,
} from "../lib/models";

interface IManufacturerToModelList {
  Audi: string[];
  BMW: string[];
  Mercedes: string[];
  Volkswagen: string[];
}

const manufacturerToModelList: IManufacturerToModelList = {
  Audi: AudiModels,
  BMW: BMWModels,
  Mercedes: MercedesModels,
  Volkswagen: VolkswagenModels,
};

interface IFormData {
  manufacturer: string;
  model: string;
  year: number;
  mileage: number;
  engineSize: number;
  fuelType: string;
  transmission: string;
  annualMileage: number;
}

const colours = ["#61cdbb", "#e8a838", "#f1e15b", "#f47560", "e8c1a0"];

function Form({ setPrice, setData, data: existingData }) {
  const [selectedManufacturer, setSelectedManufacturer] = useState("Audi");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const formattedData = JSON.parse(
      JSON.stringify(
        data,
        [
          "manufacturer",
          "year",
          "mileage",
          "engineSize",
          "model",
          "transmission",
          "fuelType",
          "annualMileage",
        ],
        4
      )
    );
    const res = await axios.post("/api/price-prediction", formattedData);
    setData((e) => {
      const { manufacturer, model, year } = formattedData;
      const colour = colours.pop();
      return [
        ...e,
        {
          id: `${manufacturer} ${model}, ${year}`,
          color: colour,
          data: res.data.data,
        },
      ];
    });

    setPrice(res.data.data[0].y);
  };

  const manufacturerList: string[] = ["Audi", "BMW", "Mercedes", "Volkswagen"];
  const today = new Date();

  return (
    <div className="min-h-[50%] p-4 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Find your car's worth
          </h2>
          <p className="text-gray-500 mb-6">
            Fill in your vehicle's details below
          </p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-4">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Vehicle Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label>Manufacturer</label>
                      <select
                        {...register("manufacturer", { required: true })}
                        onChange={(e) =>
                          setSelectedManufacturer(e.target.value)
                        }
                        className="w-full p-2.5 text-gray-500 bg-gray-50 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      >
                        {manufacturerList.map((manufacturer: string) => {
                          return (
                            <>
                              <option value={manufacturer}>
                                {manufacturer}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                    <div className="md:col-span-5">
                      <label>Model</label>
                      <select
                        {...register("model", { required: true })}
                        className="w-full p-2.5 text-gray-500 bg-gray-50 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      >
                        {manufacturerToModelList[
                          selectedManufacturer as keyof IManufacturerToModelList
                        ].map((model: string) => {
                          return <option value={model}>{model}</option>;
                        })}
                      </select>
                    </div>
                    <div className="md:col-span-5">
                      <label>Year</label>

                      <input
                        type="number"
                        {...register("year", { required: true })}
                        id="year"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        min={1900}
                        max={today.getFullYear()}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label>Current Mileage</label>
                      <input
                        type="number"
                        {...register("mileage", {
                          required: true,
                        })}
                        id="mileage"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        min="0"
                        step="10000"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label>Engine Size</label>
                      <input
                        type="number"
                        {...register("engineSize", { required: true })}
                        id="engineSize"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        min="0"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label>Fuel Type</label>
                      <select
                        {...register("fuelType", { required: true })}
                        className="w-full p-2.5 text-gray-500 bg-gray-50 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      >
                        <>
                          <option value="Petrol">Petrol</option>
                          <option value="Diesel">Diesel</option>
                          <option value="Hybrid">Hybrid</option>
                        </>
                      </select>
                    </div>
                    <div className="md:col-span-5">
                      <label>Transmission</label>
                      <select
                        {...register("transmission", { required: true })}
                        className="w-full p-2.5 text-gray-500 bg-gray-50 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      >
                        <>
                          <option value="Manual">Manual</option>
                          <option value="Automatic">Automatic</option>
                        </>
                      </select>
                    </div>
                    <div className="md:col-span-5">
                      <label>Annual Mileage?</label>
                      <input
                        type="number"
                        {...register("annualMileage", {
                          required: true,
                        })}
                        id="annualMileage"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        min="0"
                        step="2000"
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          View results
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
