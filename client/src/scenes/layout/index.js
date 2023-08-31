import { Container } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import FloraInfoContent from "../content";

const MainLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Header setValue={setValue} />
      <Container>
        <FloraInfoContent value={value} />
      </Container>
    </>
  );
};

export default MainLayout;
