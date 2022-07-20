import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState } from 'react';
import axios from "axios";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.




let data = [

  {
    "id": "PoC",
    "color": "blue",
    "data": [
      {
        "x": "1",
        "y": 200000
      },
      {
        "x": "2",
        "y": 240000
      },
      {
        "x": "3",
        "y": 235000
      },
      {
        "x": "4",
        "y": 232000
      },
      {
        "x": "5",
        "y": 225000
      },
      {
        "x": "6",
        "y": 222000
      },
      {
        "x": "7",
        "y": 220000
      },
      {
        "x": "8",
        "y": 219000
      },
      {
        "x": "9",
        "y": 215000
      },
      {
        "x": "10",
        "y": 205000
      },
      {
        "x": "11",
        "y": 200000
      },
      {
        "x": "12",
        "y": 203000
      },
      {
        "x": "13",
        "y": 210000
      },
      {
        "x": "14",
        "y": 215000
      },
      {
        "x": "15",
        "y": 220000
      },
      {
        "x": "16",
        "y": 225000
      },
      {
        "x": "17",
        "y": 216000
      },
      {
        "x": "18",
        "y": 205000
      },
      {
        "x": "19",
        "y": 201000
      }
    ]
  },

    {
      "id": "PoW",
      "color": "hsl(34, 70%, 50%)",
      "data": [
        {
          "x": "1",
          "y": 0
        },
        {
          "x": "2",
          "y": 14672
        },
        {
          "x": "3",
          "y": 157365
        },
        {
          "x": "4",
          "y": 147365
        },
        {
          "x": "5",
          "y": 127530
        },
        {
          "x": "6",
          "y": 70867
        },
        {
          "x": "7",
          "y": 60867
        },
        {
          "x": "8",
          "y": 66282
        },
        {
          "x": "9",
          "y": 38690
        },
        {
          "x": "10",
          "y": 15691
        },
        {
          "x": "11",
          "y": 14854
        },
        {
          "x": "12",
          "y": 15400
        },
        {
          "x": "13",
          "y": 157590
        },
        {
          "x": "14",
          "y": 157507
        },
        {
          "x": "15",
          "y": 19347
        },
        {
          "x": "16",
          "y": 19122
        },
        {
          "x": "17",
          "y": 29750
        },
        {
          "x": "18",
          "y": 38546
        },
        {
          "x": "19",
          "y": 59196
        }
      ]
    }

     
   

  ]

 


  // {
  //   "id": "PoLe",
  //   "color": "hsl(59, 70%, 50%)",
  //   "data": [
  //     {
  //       "x": "1",
  //       "y": 0
  //     },
  //     {
  //       "x": "2",
  //       "y": 10000
  //     },
  //     {
  //       "x": "3",
  //       "y": 12000
  //     },
  //     {
  //       "x": "4",
  //       "y": 12500
  //     },
  //     {
  //       "x": "5",
  //       "y": 78000
  //     },
  //     {
  //       "x": "6",
  //       "y": 30000
  //     },
  //     {
  //       "x": "7",
  //       "y": 180000
  //     },
  //     {
  //       "x": "8",
  //       "y": 160000
  //     },
  //     {
  //       "x": "9",
  //       "y": 165000
  //     },
  //     {
  //       "x": "10",
  //       "y": 150000
  //     },
  //     {
  //       "x": "11",
  //       "y": 40000
  //     },
  //     {
  //       "x": "12",
  //       "y": 60000
  //     },
  //     {
  //       "x": "13",
  //       "y": 100000
  //     },
  //     {
  //       "x": "14",
  //       "y": 110000
  //     },
  //     {
  //       "x": "15",
  //       "y": 200000
  //     },
  //     {
  //       "x": "16",
  //       "y": 180000
  //     },
  //     {
  //       "x": "17",
  //       "y": 120000
  //     },
  //     {
  //       "x": "18",
  //       "y": 60000
  //     },
  //     {
  //       "x": "19",
  //       "y": 100000
  //     }
  //   ]
  // }

const Consensus = ({timeStamp}) => {

  useEffect(() => {
   console.log("Time stamp" + JSON.stringify(timeStamp))
  }, []);

  console.log("From nivo line " + JSON.stringify(timeStamp))

  // let newData = []

  // timeStamp.map((e,index) =>{
  //   newData.push({"x":e - timeStamp[index+1], "y":index })
  // })

  // console.log("New Data " + newData)



  return(
    <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Number of Blocks',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Block creation time',
        legendOffset: -55,
        legendPosition: 'middle'
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
/>
  )
}



   


export default Consensus;