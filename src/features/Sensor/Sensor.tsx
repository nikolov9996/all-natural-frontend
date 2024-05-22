import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useSensor from "./Sensor.logic";
import moment from "moment";

const testDate = new Date("2024-05-20").toISOString();

const Sensor = () => {
  const { error, isLoading, sensorData } = useSensor({ date: testDate });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:{JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <ResponsiveContainer width={"100%"} height={500}>
        <AreaChart
          data={sensorData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          width={700}
          height={500}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis
            tickFormatter={(date) => moment(date).format("HH:mm ")}
            dataKey="time"
          />
          <YAxis />
          <Tooltip labelFormatter={(date) => moment(date).format("HH:mm ")} />
          <Area
            type="monotone"
            dataKey="temperature"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="humidity"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Sensor;
