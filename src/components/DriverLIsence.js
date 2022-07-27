import React, { useRef } from "react";
import { Formik, Form } from "formik";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";
import Span from "../utils/Span";
import TextField from "../utils/TextField";
import ScrollAble from "../utils/Scroll";

import Group25 from "../assets/images/Group25.png";
import Vector30 from "../assets/images/Vector30.png";
import Vector31 from "../assets/images/Vector31.png";
import Vector33 from "../assets/images/Vector33.png";
import Dob from "../assets/images/Dob.png";
import close from "../assets/images/close.png";

import "../assets/css/lisence.css";

const DriverLisence = (props) => {
  const drop = useRef(null);
  const {
    show,
    text,
    setFile,
    setState,
    file,
    setIndex,
    spanIndex,
    screenSize,
  } = props;

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
    <React.Fragment>
      <ScrollAble mobStyle={50}>
        <Intro
          onClick={() => {
            setState(show - 2);
            {file.length > 0 && setFile(file.pop())}
          }}
          text={text}
          show={show}
          btnTxt="Edit ID type"
          outline="outline-primary"
          size="xxl"
          screenSize={screenSize}
        />
        <div className="mt-3 container w-100 align-items-center border-1 row-first">
          <div
            className="w-100 "
            ref={drop}
            onDrop={overrideEventDefaults}
            onDragEnter={overrideEventDefaults}
            onDragLeave={overrideEventDefaults}
            onDragOver={overrideEventDefaults}
          >
            <div
              className="w-100"
              onDrop={handleDragAndDropFiles}
              onDragEnter={overrideEventDefaults}
              onDragLeave={overrideEventDefaults}
              onDragOver={overrideEventDefaults}
            >
              <div className="w-100 h-auto d-flex flex-column align-items-center">
                <div className=" w-100 h-100">
                  <div className="p-0  d-flex flex-column align-items-center h-25 w-100">
                    <Img
                      position="relative"
                      mt={-61}
                      src={Group25}
                      alt="Profile"
                      loading="lazy"
                    />
                  </div>
                  <div className="container w-100 file-container">
                    <div className="">
                      <div className="mt-3 w-100 text-center">
                        <Text className="" fontSize={14} color="#8D9899">
                          Drop your file(s) in here or choose file to{" "}
                          <Span color="#1496A2" fontSize={14}>upload</Span>
                        </Text>
                      </div>
                      <div className="w-100 text-center">
                        <Text className="" fontSize={10} color="#A4B1B3">
                          Accepted formats: JPEG, PDF, PNG, JPG
                        </Text>
                      </div>
                      <Formik>
                        {(formik) => (
                          <React.Fragment>
                            <Form>
                              <TextField
                                multiple
                                onChange={(e) => handleFiles(e.target.files)}
                                className="w-100 custom-input"
                                name="file"
                                type="file"
                              />
                            </Form>
                          </React.Fragment>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {file?.length > 0 ? (
          <div className="p-2 mt-2 container w-100 d-flex flex-column border-1">
            <Text className='' color='#A4B1B3' fontSize={10} height={0}>
              Uploaded file
            </Text>
            <div className="d-flex flex-row justify-content-start ">
              <Img src={Vector33} height={24} />
              <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                <div className="p-1 w-100">
                  <Text className='' fontSize={14} height={0}>{file[0].name}</Text>
                </div>
              </div>
              <div className="w-25 d-flex justify-content-around">
                <Img src={close} />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 h-auto container d-flex flex-column flex-wrap align-items-start p-3 w-100 border-1">
            <div className="d-flex flex-column align-items-start w-100">
              <Text className='container w-100 p-0' height={22} fontSize={14} fontWeight={600} color="#5E6566">
                The following information will be collected:
              </Text>
            </div>
            <div className="p-0 container w-100 d-flex justify-content-start flex-wrap">
              <div className="w-50 d-flex flex-column">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <Img src={Vector30} />
                  </div>{" "}
                  <Text
                    height={0}
                    left={10}
                    top={3}
                    fontSize={12}
                    color="#5E6566"
                  >
                    Legal Name
                  </Text>
                </div>
                <div className="d-flex ">
                  <div className="d-flex align-items-center">
                    <Img src={Vector31} />
                  </div>{" "}
                  <Text
                    height={0}
                    left={10}
                    top={7}
                    fontSize={12}
                    color="#5E6566"
                  >
                    ID Number
                  </Text>
                </div>
                <div className="d-flex align-items-center">
                  <Img src={Dob} />{" "}
                  <Text
                    height={0}
                    left={10}
                    top={4}
                    fontSize={12}
                    color="#5E6566"
                  >
                    Date of Birth
                  </Text>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <Img src={Vector31} />{" "}
                  <Text
                    height={0}
                    left={10}
                    top={3}
                    fontSize={12}
                    color="#5E6566"
                  >
                    Present Address
                  </Text>
                </div>
                <div className="d-flex align-items-center">
                  <Img src={Vector31} />{" "}
                  <Text
                    fontSize={12}
                    color="#5E6566"
                    top={3}
                    height={0}
                    left={10}
                  >
                    ID TYpe
                  </Text>
                </div>
              </div>
            </div>
          </div>
        )}
        {file.length > 0 && (
          <div className="mt-5 w-100 container text-end p-0">
            <OutlineButton
              outline="outline-secondary"
              size="xl"
              onClick={() => {
                setState(show + 1);
                setIndex(spanIndex + 1);
              }}
            >
              save and continue
            </OutlineButton>
          </div>
        )}
      </ScrollAble>
    </React.Fragment>
  );
};

export default DriverLisence;
