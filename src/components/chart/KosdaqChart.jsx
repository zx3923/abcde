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
    매수: 998.57,
  },
  {
    name: "12",
    매수: 977.15,
  },
  {
    name: "1",
    매수: 1037.83,
  },
  {
    name: "2",
    매수: 891.6,
  },
  {
    name: "3",
    매수: 895.45,
  },
  {
    name: "4",
    매수: 940.57,
  },
  {
    name: "5",
    매수: 901.82,
  },
  {
    name: "6",
    매수: 891.14,
  },
  {
    name: "7",
    매수: 729.48,
  },
  {
    name: "8",
    매수: 807.61,
  },
  {
    name: "9",
    매수: 788.32,
  },
  {
    name: "10",
    매수: 696.79,
  },
];
const cardinal = curveCardinal.tension(0.2);

const KosdaqChart = () => {
  return (
    <div style={{ width: "22%" }}>
      <p style={{ fontSize: "15px", marginBottom: "10px" }}>코스닥(한국)</p>
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
            stroke="#FB0202"
            fill="#00ff0000"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "end", marginRight: "21px" }}>(월) </p>
    </div>
  );
};

export default KosdaqChart;
