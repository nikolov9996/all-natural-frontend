import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { StaticDatePicker } from "@mui/x-date-pickers";

export const StyledSensorContainer = styled("div")({
  marginTop: 50,
});

export const StyledStaticDatePicker = styled(StaticDatePicker)({
  backgroundColor: green[300],
  width: "fit-content",
  margin: "auto",
});
