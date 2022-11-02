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
    매수: 4280.47,
  },
  {
    name: "12",
    매수: 4179.15,
  },
  {
    name: "1",
    매수: 4331.82,
  },
  {
    name: "2",
    매수: 4224.45,
  },
  {
    name: "3",
    매수: 3765.85,
  },
  {
    name: "4",
    매수: 3918.68,
  },
  {
    name: "5",
    매수: 3732.44,
  },
  {
    name: "6",
    매수: 3759.54,
  },
  {
    name: "7",
    매수: 3448.31,
  },
  {
    name: "8",
    매수: 3706.62,
  },
  {
    name: "9",
    매수: 3456.7,
  },
  {
    name: "10",
    매수: 3342.17,
  },
];
const cardinal = curveCardinal.tension(0.2);

const UsdkrwChart = () => {
  return (
    <div style={{ width: "22%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>
        유로스톡스 50(유럽)
      </p>
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

export default UsdkrwChart;
