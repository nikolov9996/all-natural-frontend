import { useGetSensorRecordsForDayQuery } from "~/services/sensorSlice";

type Props = {
  date: string;
};

const useSensor = ({ date }: Props) => {
  const { isLoading, data, error } = useGetSensorRecordsForDayQuery(date);
  return {
    sensorData: data?.Sensor,
    isLoading,
    error,
  };
};

export default useSensor;
