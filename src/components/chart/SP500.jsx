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
    매수: 15595.92,
  },
  {
    name: "12",
    매수: 15254.05,
  },
  {
    name: "1",
    매수: 15832.8,
  },
  {
    name: "2",
    매수: 14346.0,
  },
  {
    name: "3",
    매수: 13532.46,
  },
  {
    name: "4",
    매수: 14261.5,
  },
  {
    name: "5",
    매수: 12536.02,
  },
  {
    name: "6",
    매수: 11994.46,
  },
  {
    name: "7",
    매수: 11127.85,
  },
  {
    name: "8",
    매수: 12368.98,
  },
  {
    name: "9",
    매수: 11785.13,
  },
  {
    name: "10",
    매수: 10815.44,
  },
];
const cardinal = curveCardinal.tension(0.2);

const SP500 = () => {
  return (
    <div className="BtiChart" style={{ width: "22%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>S&P 500(미국)</p>
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
            stroke="#FB00D0"
            fill="#00ff0000"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "end", marginRight: "21px" }}>(월) </p>
    </div>
  );
};

export default SP500;
