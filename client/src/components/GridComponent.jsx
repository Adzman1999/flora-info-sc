import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const GridComponent = ({ title, children, icon }) => {
  return (
    <>
      <Stack
        spacing={1}
        alignItems='center'
        direction='row'
        sx={{ mt: 4, mb: 2 }}>
        {icon}
        <Typography variant='h6'>{title}</Typography>
      </Stack>

      <Grid container spacing={2}>
        {children}
      </Grid>
    </>
  );
};

export default GridComponent;
