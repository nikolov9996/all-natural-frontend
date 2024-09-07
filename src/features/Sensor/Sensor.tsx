import React, { useState } from "react";
import useSensor from "./Sensor.logic";
import { Grid } from "@mui/material";
import {
  StyledChartBox,
  StyledInfoBox,
  StyledSensorContainer,
  StyledStaticDatePicker,
} from "./Sensor.style";
import SensorChartHumidity from "./components/SensorChartHumidity";
import SensorChartTemperature from "./components/SensorChartTemperature";
import moment, { Moment } from "moment";
import { useGetSensorRecordsPaginatedQuery } from "~/services/APISlice";
import SensorPagination from "./components/SensorPagination";

const Sensor: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString());

  const formatDate = (d: Moment | null) => {
    const dateString = moment(d).toDate().toISOString();
    setDate(dateString);
  };

  const {
    error,
    isLoading,
    sensorData,
    count,
    page,
    setCount,
    setPage,
    getDateRange,
  } = useSensor({
    date: date,
  });
  const { data, error: paginatedError } = useGetSensorRecordsPaginatedQuery({
    count,
    page,
  });

  const rangeForPaginated = getDateRange(data?.Sensor);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:{JSON.stringify(error)}</p>;
  }

  if (paginatedError) {
    return <p>Error:{JSON.stringify(paginatedError)}</p>;
  }

  return (
    <StyledSensorContainer>
      <Grid justifyContent="space-around" container>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <StyledChartBox>
            <SensorChartHumidity sensorData={sensorData} />
          </StyledChartBox>
          <StyledChartBox>
            <SensorChartTemperature sensorData={sensorData} />
          </StyledChartBox>
        </Grid>
        <Grid item md={12} lg={4}>
          <StyledStaticDatePicker
            onChange={formatDate}
            value={moment(date)}
            slots={{
              toolbar: () => null,
              actionBar: () => null,
            }}
            disableFuture
          />
        </Grid>
        <Grid mt={8} item xs={12} sm={12} md={12} lg={12}>
          <StyledInfoBox>
            <div>
              From: <b>{rangeForPaginated.fromTime}</b>
            </div>
            <div>
              To: <b>{rangeForPaginated.toTime}</b>
            </div>
          </StyledInfoBox>
          <SensorPagination
            count={count}
            page={page}
            setCount={setCount}
            setPage={setPage}
          />
          <StyledChartBox>
            <SensorChartHumidity sensorData={data?.Sensor} />
          </StyledChartBox>
          <StyledChartBox>
            <SensorChartTemperature sensorData={data?.Sensor} />
          </StyledChartBox>
        </Grid>
      </Grid>
    </StyledSensorContainer>
  );
};

export default Sensor;
