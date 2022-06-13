import React, { useEffect } from "react";
import { useRef } from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import Text from "../utils/Text";
import Span from "../utils/Span";

import Group25 from "../assets/images/Group25.png";

import "../assets/css/lisence.css";

const PayStub = (props) => {
  const drop = useRef(null);
  const { show, text, setFile, setState } = props;

  useEffect(() => {
    setTimeout(() => {
      setState(show + 1);
    }, 1000);
  }, []);
  function overrideEventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  function handleDragAndDropFiles(event) {
    overrideEventDefaults(event);
    if (!event.dataTransfer) return;
    handleFiles(event.dataTransfer.files);
  }
  const handleFiles = (fileList) => {
    if (fileList) {
      let files = Array.from(fileList);
      setFile(files);
      setState(show + 1);
    }
  };
  return (
    <div
      ref={drop}
      onDrop={overrideEventDefaults}
      onDragEnter={overrideEventDefaults}
      onDragLeave={overrideEventDefaults}
      onDragOver={overrideEventDefaults}
    >
      <Intro
        text={text}
        show={show}
        btnTxt="Edit ID type"
        className="custom-intro-container"
      />

      <div
        className="lisence-container"
        onDrop={handleDragAndDropFiles}
        onDragEnter={overrideEventDefaults}
        onDragLeave={overrideEventDefaults}
        onDragOver={overrideEventDefaults}
      >
        <div className="img-card">
          <Img src={Group25} style={{ position: "relative", top: "-4rem" }} />
        </div>

        <div className="file-container">
          <Text style={{ height: "0px", width: "230px" }}>
            Drop your file(s) in here or choose file to{" "}
            <Span style={{ color: "skyblue" }}>upload</Span>
          </Text>
          <Text style={{ height: "0px", width: "180px", fontSize: "9px" }}>
            Accepted formats: JPEG, PDF, PNG, JPG
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PayStub;
