import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";
import { textAlign } from "@mui/system";

const data = [
  {
    name: "11",
    매수: 29647.08,
  },
  {
    name: "12",
    매수: 27935.62,
  },
  {
    name: "1",
    매수: 29301.79,
  },
  {
    name: "2",
    매수: 27078.48,
  },
  {
    name: "3",
    매수: 26844.72,
  },
  {
    name: "4",
    매수: 27665.98,
  },
  {
    name: "5",
    매수: 26818.53,
  },
  {
    name: "6",
    매수: 27457.89,
  },
  {
    name: "7",
    매수: 25935.62,
  },
  {
    name: "8",
    매수: 27993.35,
  },
  {
    name: "9",
    매수: 27661.47,
  },
  {
    name: "10",
    매수: 26215.79,
  },
];
const cardinal = curveCardinal.tension(0.2);

const UsdkrwChart = () => {
  return (
    <div style={{ width: "22%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>니케이 225(일본)</p>
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="매수"
            stroke="#17C50B"
            fill="#00ff0000"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "end", marginRight: "21px" }}>(월) </p>
    </div>
  );
};

export default UsdkrwChart;
