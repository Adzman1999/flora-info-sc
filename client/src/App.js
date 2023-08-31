import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import MainLayout from "./scenes/layout";
import GlobalStyles from "./style/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<MainLayout />} />
      </Routes>
    </Fragment>
  );
};

export default App;
