import moment from "moment";
import { useGetSensorRecordsForDayQuery } from "~/services/sensorSlice";
import { SensorType } from "~/static/types";
import {
  selectSensorCount,
  selectSensorPage,
  setSensorCount,
  setSensorPage,
} from "./SensorSlice";
import { useAppDispatch, useAppSelector } from "~/app/hooks";

type Props = {
  date: string;
};

const useSensor = ({ date }: Props) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectSensorPage);
  const count = useAppSelector(selectSensorCount);

  const setPage = (page: number) => dispatch(setSensorPage(page));
  const setCount = (count: number) => dispatch(setSensorCount(count));

  const { isLoading, data, error } = useGetSensorRecordsForDayQuery(date);

  const getDateRange = (
    sensorData?: SensorType[]
  ): { fromTime: string; toTime: string } => {
    if (!sensorData) {
      return {
        fromTime: "",
        toTime: "",
      };
    }
    const times = sensorData.map((entry) => moment(new Date(entry.time)));

    // Find the minimum and maximum times
    const fromTime = moment(new Date(moment.min(times).toDate())).format(
      "MM-DD HH:mm"
    );
    const toTime = moment(new Date(moment.max(times).toDate())).format(
      "MM-DD HH:mm"
    );

    return {
      fromTime,
      toTime,
    };
  };
  return {
    sensorData: data?.Sensor,
    isLoading,
    error,
    page,
    count,
    getDateRange,
    setCount,
    setPage,
  };
};

export default useSensor;
