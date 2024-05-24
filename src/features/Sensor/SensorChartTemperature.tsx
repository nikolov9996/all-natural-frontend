import { red } from "@mui/material/colors";
import { ColorPartial } from "@mui/material/styles/createPalette";
import moment from "moment";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { SensorType } from "~/static/types";

type Props = {
  sensorData?: SensorType[];
};

const SensorChartTemperature: React.FC<Props> = ({ sensorData }) => {
  const formatDate = (date: string) => moment(date).format("HH:mm");
  return (
    <ResponsiveContainer height={200}>
      <AreaChart
        data={sensorData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0 0" />
        <XAxis
          tickFormatter={(date: string) => moment(date).format("HH:mm")}
          dataKey="time"
        />
        <YAxis tickFormatter={(val) => `${val} °`} dataKey="temperature" />
        <Tooltip labelFormatter={(date) => `Time: ${formatDate(date)}`} />
        <Area
          type="monotone"
          dataKey="temperature"
          stackId="1"
          stroke={red[500]}
          fill={red[100]}
        />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SensorChartTemperature;
