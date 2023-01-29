import React from "react";
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const testData = [
  {
    id: "japan",
    color: "hsl(283, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 99,
      },
      {
        x: "helicopter",
        y: 116,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 260,
      },
      {
        x: "subway",
        y: 58,
      },
      {
        x: "bus",
        y: 77,
      },
      {
        x: "car",
        y: 79,
      },
      {
        x: "moto",
        y: 201,
      },
      {
        x: "bicycle",
        y: 35,
      },
      {
        x: "horse",
        y: 93,
      },
      {
        x: "skateboard",
        y: 157,
      },
      {
        x: "others",
        y: 144,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(126, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 201,
      },
      {
        x: "helicopter",
        y: 178,
      },
      {
        x: "boat",
        y: 77,
      },
      {
        x: "train",
        y: 117,
      },
      {
        x: "subway",
        y: 228,
      },
      {
        x: "bus",
        y: 218,
      },
      {
        x: "car",
        y: 254,
      },
      {
        x: "moto",
        y: 274,
      },
      {
        x: "bicycle",
        y: 126,
      },
      {
        x: "horse",
        y: 124,
      },
      {
        x: "skateboard",
        y: 108,
      },
      {
        x: "others",
        y: 80,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(269, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 12,
      },
      {
        x: "helicopter",
        y: 124,
      },
      {
        x: "boat",
        y: 121,
      },
      {
        x: "train",
        y: 96,
      },
      {
        x: "subway",
        y: 8,
      },
      {
        x: "bus",
        y: 294,
      },
      {
        x: "car",
        y: 238,
      },
      {
        x: "moto",
        y: 91,
      },
      {
        x: "bicycle",
        y: 199,
      },
      {
        x: "horse",
        y: 59,
      },
      {
        x: "skateboard",
        y: 290,
      },
      {
        x: "others",
        y: 158,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(358, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 88,
      },
      {
        x: "helicopter",
        y: 101,
      },
      {
        x: "boat",
        y: 220,
      },
      {
        x: "train",
        y: 272,
      },
      {
        x: "subway",
        y: 230,
      },
      {
        x: "bus",
        y: 268,
      },
      {
        x: "car",
        y: 1,
      },
      {
        x: "moto",
        y: 255,
      },
      {
        x: "bicycle",
        y: 271,
      },
      {
        x: "horse",
        y: 50,
      },
      {
        x: "skateboard",
        y: 5,
      },
      {
        x: "others",
        y: 109,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(186, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 79,
      },
      {
        x: "helicopter",
        y: 277,
      },
      {
        x: "boat",
        y: 187,
      },
      {
        x: "train",
        y: 5,
      },
      {
        x: "subway",
        y: 277,
      },
      {
        x: "bus",
        y: 117,
      },
      {
        x: "car",
        y: 179,
      },
      {
        x: "moto",
        y: 16,
      },
      {
        x: "bicycle",
        y: 121,
      },
      {
        x: "horse",
        y: 38,
      },
      {
        x: "skateboard",
        y: 197,
      },
      {
        x: "others",
        y: 100,
      },
    ],
  },
];
function Result({ data /* see data tab */ }) {
  console.log(7111, data);

  return (
    <>
      <div className="p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="h-[600px] grid gap-4 gap-y-2 text-sm">
              {/* <h1>test</h1> */}
              <ResponsiveLine
                data={testData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: true,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "transportation",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "count",
                  legendOffset: -40,
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
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
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
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Result;
