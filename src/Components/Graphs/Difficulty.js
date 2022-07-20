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
        "y": 0
      },
      {
        "x": "2",
        "y": 155303
      },
      {
        "x": "3",
        "y": 286083
      },
      {
        "x": "4",
        "y": 529253
      },
      {
        "x": "5",
        "y": 979118
      },
      {
        "x": "6",
        "y": 1811368
      },
      {
        "x": "7",
        "y": 3598213
      },
      {
        "x": "8",
        "y": 6656694
      },
      {
        "x": "9",
        "y": 13288865
      },
      {
        "x": "10",
        "y": 24584400
      }
      
    ]
  }]

 
const Difficulty = ({timeStamp}) => {

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
    margin={{ top: 50, right: 110, bottom: 50, left: 70 }}
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
        legend: 'Difficulty Level',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Block creation time',
        legendOffset: -65,
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



   


export default Difficulty;