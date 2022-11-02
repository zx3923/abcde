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
    매수: 72401000,
  },
  {
    name: "12",
    매수: 70936000,
  },
  {
    name: "1",
    매수: 57915000,
  },
  {
    name: "2",
    매수: 47760000,
  },
  {
    name: "3",
    매수: 53790000,
  },
  {
    name: "4",
    매수: 56369000,
  },
  {
    name: "5",
    매수: 49383000,
  },
  {
    name: "6",
    매수: 37880000,
  },
  {
    name: "7",
    매수: 25556000,
  },
  {
    name: "8",
    매수: 30851000,
  },
  {
    name: "9",
    매수: 27636000,
  },
  {
    name: "10",
    매수: 27868000,
  },
];
const cardinal = curveCardinal.tension(0.2);

const BtiChart = () => {
  return (
    <div className="BtiChart" style={{ width: "22%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>비트코인 </p>
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
            stroke="#0602F4"
            fill="#00ff0000"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "end", marginRight: "21px" }}>(월) </p>
    </div>
  );
};

export default BtiChart;
