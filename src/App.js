import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SoundPlayer from "./components/SoundPlayer";
import BoxMenu from "./components/BoxMenu";
import { color } from "@mui/system";
function App() {
  const [picker, setPicker] = useState("#FFFFFF");
  const [showColorpicker, setShowcolorpicker] = useState(true);
  const handleChangeComplete = (color) => {
    setPicker(color.hex);
  };
  const flexCenter = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const pickerStyle = {
    display: `${showColorpicker ? "inline" : "none"}`,
    position: "absolute",
    top: "150px",
    left: "100px",
    width:'300px'
  };
  console.log(showColorpicker);
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
          <SoundPlayer picker={picker} />
        </Grid>
        <Grid item sx={flexCenter}>
          <BoxMenu />
          {/* 
			<ButtonPlayer/> */}
        </Grid>
      </Grid>

      <div style={pickerStyle}>
        <SketchPicker color={picker} onChangeComplete={handleChangeComplete} />
      </div>
    </Box>
  );
}

export default App;
