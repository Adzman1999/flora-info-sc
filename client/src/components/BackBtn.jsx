import { Box, IconButton } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import React from "react";

const BackBtn = ({ handleClose }) => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 2, left: 1 }}>
          <ArrowLeft style={{ color: "#2FBC49" }} />
        </IconButton>
      </Box>
    </>
  );
};

export default BackBtn;
