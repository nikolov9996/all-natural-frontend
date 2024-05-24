import React, { useState } from "react";
import useSensor from "./Sensor.logic";
import { Grid } from "@mui/material";
import { StyledSensorContainer, StyledStaticDatePicker } from "./Sensor.style";
import SensorChartHumidity from "./SensorChartHumidity";
import SensorChartTemperature from "./SensorChartTemperature";
import moment from "moment";

const Sensor: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString());

  const formatDate = (d: any) => {
    const dateString = moment(d).toDate().toISOString();
    setDate(dateString);
  };

  const { error, isLoading, sensorData } = useSensor({ date: date });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:{JSON.stringify(error)}</p>;
  }

  return (
    <StyledSensorContainer>
      <Grid justifyContent="space-around" container>
        <Grid item md={12} lg={8}>
          <div
            style={{
              overflow: "auto",
              minWidth: 600,
              maxWidth: "90vw",
              height: 200,
            }}
          >
            <SensorChartHumidity sensorData={sensorData} />
          </div>
          <div style={{ height: 200 }}>
            <SensorChartTemperature sensorData={sensorData} />
          </div>
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
      </Grid>
    </StyledSensorContainer>
  );
};

export default Sensor;
