import React from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import UploadIcon from "@mui/icons-material/Upload";
const BoxMenu = () => {
  const flexCenter = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const flexStart={
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  }
  const flexEnd={
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  }
  const actionButton={
    backgroundColor:"#373737",
    color:'white',
    '&: hover':{
        color:'#373737',
    }
  }
  return (
    <>
      <Grid
        container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid item sx={flexStart}>
          <IconButton sx={actionButton} size="small">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item sx={flexCenter}>
          <IconButton sx={actionButton} size="large">
            <PlayArrowIcon />
          </IconButton>
        </Grid>
        <Grid item sx={flexEnd}>
          <IconButton sx={actionButton} size="small">
            <UploadIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default BoxMenu;
