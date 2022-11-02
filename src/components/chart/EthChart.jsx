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
    매수: 5134000,
  },
  {
    name: "12",
    매수: 5692000,
  },
  {
    name: "1",
    매수: 4577000,
  },
  {
    name: "2",
    매수: 3440000,
  },
  {
    name: "3",
    매수: 3605000,
  },
  {
    name: "4",
    매수: 4205000,
  },
  {
    name: "5",
    매수: 3625000,
  },
  {
    name: "6",
    매수: 2312000,
  },
  {
    name: "7",
    매수: 1403500,
  },
  {
    name: "8",
    매수: 2167000,
  },
  {
    name: "9",
    매수: 2175000,
  },
  {
    name: "10",
    매수: 1896500,
  },
];
const cardinal = curveCardinal.tension(0.2);

const EthChart = () => {
  return (
    <div style={{ width: "22%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>이더리움 </p>
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
            stroke="#ff00d4"
            fill="#00ff0000"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "end", marginRight: "21px" }}>(월) </p>
    </div>
  );
};

export default EthChart;
