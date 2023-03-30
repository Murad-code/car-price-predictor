import React, { useState, useContext, useEffect, useRef } from "react";
import { ResponsiveLine } from "@nivo/line";
import Modal from "./modal";
import { DataContext } from "../context/dataContext";
import { IDataContextType } from "../@types/data";

function PriceChart() {
  const [colourId, setColourId] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const { chartData } = useContext(DataContext) as IDataContextType;
  const myRef = useRef<HTMLDivElement>(null); // Create a ref for the component you want to scroll to

  useEffect(() => {
    if (myRef.current !== null) {
      // Add a conditional check to make sure myRef.current is not null
      myRef.current.scrollIntoView({ behavior: "smooth" }); // Use the scrollIntoView method to scroll to the component
    }
  }, [chartData]);

  return chartData && chartData.length !== 0 ? (
    <>
      <div
        ref={myRef}
        className="p-6 bg-gray-100 flex items-center justify-center"
      >
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-2 md:p-8 mb-6">
            <div className="h-[600px] grid gap-4 gap-y-2 text-sm overflow-y-scroll">
              {/* <h1>test</h1> */}

              <ResponsiveLine
                data={chartData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: 0,
                  max: "auto",
                  stacked: false,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Year",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Price",
                  legendOffset: -50,
                  legendPosition: "middle",
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 140,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 120,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
                        },
                      },
                    ],
                    onClick: (e) => {
                      setColourId(e.color);
                      setShowModal(true);
                    },
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal colourId={colourId} closeModal={() => setShowModal(false)} />
      )}
    </>
  ) : null;
}
export default PriceChart;
