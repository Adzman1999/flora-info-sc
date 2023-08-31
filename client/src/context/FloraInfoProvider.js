import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const FloraInfoContext = createContext();

const FloraInfoProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfos"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <FloraInfoContext.Provider
      value={{
        user,
      }}>
      {children}
    </FloraInfoContext.Provider>
  );
};

export const FloraInfoState = () => {
  return useContext(FloraInfoContext);
};

export default FloraInfoProvider;
