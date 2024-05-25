import { Select } from "@mui/material";
import { blue, green } from "@mui/material/colors";
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

export const StyledChartBox = styled("div")({
  height: 200,
});

export const StyledInfoBox = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 15,
});

export const StyledPaginationBox = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledPageValueBox = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  backgroundColor: blue[50],
  border: "1px solid ",
  borderColor: blue[400],
  borderRadius: 8,
}));

export const StyledSelect = styled(Select)({
  width: 100,
});
