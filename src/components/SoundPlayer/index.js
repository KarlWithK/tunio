import React from "react";
import Sketch from "react-p5";

const Soundplayer = (props) => {
  const { picker } = props;
  console.log("from sound", picker);
  const circle = {
    border: `solid ${picker} 5px`,
    borderRadius: "50%",
    width: "350px",
    height: "350px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  let x = 50;
  let y = 50;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);
    p5.angleMode(DEGREES);
    p5.imageMode(CENTER);
    song.setVolume(0.5);
    fft = new p5.FFT();
  };
  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };
  return (
    <div style={circle}>
      <img src="/logo.png" width="100" />
    </div>
  );
};

export default Soundplayer;
