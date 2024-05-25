import React from "react";
import {
  StyledPageValueBox,
  StyledPaginationBox,
  StyledSelect,
} from "../Sensor.style";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton, MenuItem } from "@mui/material";

type Props = {
  page: number;
  count: number;
  setPage: (page: number) => void;
  setCount: (count: number) => void;
};

const SensorPagination: React.FC<Props> = ({
  count,
  page,
  setCount,
  setPage,
}) => {
  return (
    <StyledPaginationBox>
      {page} {count}
      <Paging />
      <StyledSelect
        value={count}
        onChange={({ target: { value } }) => setCount(value as number)}
        size="small"
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </StyledSelect>
    </StyledPaginationBox>
  );

  function Paging() {
    return (
      <StyledPaginationBox>
        <IconButton onClick={() => setPage(page + 1)}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <StyledPageValueBox>{page}</StyledPageValueBox>
        <IconButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </StyledPaginationBox>
    );
  }
};

export default SensorPagination;
