import React, { useRef } from "react";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";
import Span from "../utils/Span";

import Group25 from "../assets/images/Group25.png";
import Vector30 from "../assets/images/Vector30.png";
import Vector31 from "../assets/images/Vector31.png";
import Vector33 from "../assets/images/Vector33.png";
import Dob from "../assets/images/Dob.png";
import close from "../assets/images/close.png";

import "../assets/css/lisence.css";

const DriverLisence = (props) => {
  const drop = useRef(null);
  const { show, text, setFile, setState, file } = props;

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

      {file.length > 0 ? (
        <div className="form-field">
          <Text className="uploading-text">Uploaded file</Text>
          <div className="d-flex flex-row justify-content-start align-content-start progress-sec">
            <Img src={Vector33} style={{ with: "24px", height: "24px" }} />
            <div className="d-flex flex-row justify-content-between pro-field">
              <Text className="font-fix">{file[0].name}</Text>
            </div>

            <div className="close-fix">
              <Img src={close} />
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-content-start info-container">
          <div className="d-flex flex-column align-content-start user-detail">
            <Text className="fix-sm-text">
              The following information will be collected:
            </Text>
          </div>
          <div className="d-flex flex-row align-content-start card-address">
            <div className="d-flex flex-row align-content-center child-card-text">
              <Img src={Vector30} />{" "}
              <Text className="fix-sm-text">Legal Name</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Vector31} />{" "}
              <Text className="fix-sm-text">ID Number</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Dob} />{" "}
              <Text className="fix-sm-text">Date of Birth</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Vector31} />{" "}
              <Text className="fix-sm-text">Present Address</Text>
            </div>
            <div className="d-flex flex-row align-content-center  child-card-text">
              <Img src={Vector31} />{" "}
              <Text className="fix-sm-text">ID TYpe</Text>
            </div>
          </div>
        </div>
      )}
      {file.length > 0 && (
        <OutlineButton
          onClick={() => setState(show + 1)}
          style={{ marginLeft: "17.5rem", marginTop: "1rem", width: "10rem" }}
        >
          save and continue
        </OutlineButton>
      )}
    </div>
  );
};

export default DriverLisence;
