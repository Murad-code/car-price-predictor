import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import Modal from "./modal";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

function PriceChart({ data, chartData }) {
  const [localData, setLocalData] = useState(chartData);
  const [colourId, setColourId] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLocalData(chartData);
  }, [chartData]);

  return (
    <>
      <div className="p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="h-[600px] grid gap-4 gap-y-2 text-sm overflow-y-scroll">
              {/* <h1>test</h1> */}
              <ResponsiveLine
                data={localData}
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
                      console.log(15555, e);
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
        <Modal
          carData={data}
          colourId={colourId}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}
export default PriceChart;
