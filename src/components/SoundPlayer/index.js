import React from "react";

import Box from "@mui/material/Box";
const Soundplayer = () => {
 
  const mainButton = {};
  const circle = {
    border: "solid #3A3A3A 5px",
    borderRadius: "50%",
    width: '350px',
    height:'350px',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={circle}>
      <img src="/logo.png" width="100" />
    </div>
  );
};

export default Soundplayer;
