import { blue } from "@mui/material/colors";
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

const SensorChartHumidity: React.FC<Props> = ({ sensorData }) => {
  const formatDate = (date: string) => moment(date).format("HH:mm");
  return (
    <ResponsiveContainer>
      <AreaChart
        data={sensorData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis tickFormatter={formatDate} dataKey="time" />
        <YAxis
          tickFormatter={(val) => `${val} %`}
          type="number"
          dataKey="humidity"
        />
        <Tooltip labelFormatter={(date) => `Time: ${formatDate(date)}`} />
        <Area
          type="monotone"
          dataKey="humidity"
          stackId="1"
          stroke={blue[500]}
          fill={blue[100]}
        />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SensorChartHumidity;
