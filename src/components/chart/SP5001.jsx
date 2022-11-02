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
    매수: 2978.94,
  },
  {
    name: "12",
    매수: 2899.72,
  },
  {
    name: "1",
    매수: 2988.77,
  },
  {
    name: "2",
    매수: 2707.82,
  },
  {
    name: "3",
    매수: 2703.52,
  },
  {
    name: "4",
    매수: 2739.85,
  },
  {
    name: "5",
    매수: 2687.45,
  },
  {
    name: "6",
    매수: 2658.99,
  },
  {
    name: "7",
    매수: 2305.42,
  },
  {
    name: "8",
    매수: 2452.25,
  },
  {
    name: "9",
    매수: 2415.61,
  },
  {
    name: "10",
    매수: 2198.14,
  },
];
const cardinal = curveCardinal.tension(0.2);

const SP5001 = () => {
  return (
    <div style={{ width: "22%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>
        나스닥 종합(미국)
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

      <p style={{ textAlign: "end", marginRight: "21px" }}>
        <div></div>(월){" "}
      </p>
    </div>
  );
};

export default SP5001;
