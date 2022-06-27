import { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const UploadButton = () => {
  const actionButton = {
    backgroundColor: "#373737",
    color: "white",
    "&: hover": {
      color: "#373737",
    },
  };

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [audio, setAudio] = useState();
  const hiddenInput = useRef(null);

  const handleUpload = (fileToUpload) => {
    setSelectedFile(URL.createObjectURL(fileToUpload.target.files[0]));
    setIsSelected(true);
    console.log(selectedFile);
  };

  useEffect(() => {
    console.log(selectedFile);
    setAudio(new Audio(selectedFile));
  }, [selectedFile]);

  useEffect(() => {
    console.log("Audio", audio);
    if (isSelected != false) {
      audio.play();
    }
  }, [audio]);

  const handleClick = () => hiddenInput.current.click();

  return (
    <>
      <input
        type="file"
        ref={hiddenInput}
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      <IconButton sx={actionButton} size="small" onClick={handleClick}>
        <FileUploadIcon />
      </IconButton>
    </>
  );
};

export default UploadButton;
