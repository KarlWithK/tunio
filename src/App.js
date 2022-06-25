import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SoundPlayer from "./components/SoundPlayer";
import BoxMenu from "./components/BoxMenu";
function App() {
  const flexCenter = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box>
      <Grid
        container
        spacing={6}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item sx={flexCenter}>
          <img src="/logo.png" width="50" />
        </Grid>
        <Grid item sx={flexCenter}>
          <SoundPlayer />
        </Grid>
        <Grid item sx={flexCenter}>
          <BoxMenu />
          {/* 
			<ButtonPlayer/> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
