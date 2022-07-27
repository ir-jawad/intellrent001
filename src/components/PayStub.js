import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import { ListGroup } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";

import Intro from "../utils/Intro";
import Img from "../utils/Image";
import OutlineButton from "../utils/OutlineButton";
import Text from "../utils/Text";
import Span from "../utils/Span";
import TextField from "../utils/TextField";
import ScrollAble from "../utils/Scroll";
import MiniCard from "../utils/MinCard";
import Review from "../utils/Review";
import RadioButton from "../utils/RadioButton";
import CheckBox from "../utils/CheckBox";
import ToggleSwitch from "../utils/Switch";

import PayStubFile from "./UploadPayStub";
import { Info } from "./dummy";

import Vector33 from "../assets/images/Vector33.png";
import close from "../assets/images/close.png";
import dropDown from "../assets/images/dropDown.png";
import Group28 from "../assets/images/Group28.png";
import dog from "../assets/images/dog.png";
import cat from "../assets/images/cat.png";
import bird from "../assets/images/bird.png";
import otherBird from "../assets/images/otherBird.png";
import petPhoto from "../assets/images/petPhoto.png";
import petPass from "../assets/images/petPass.png";
import Vector41 from "../assets/images/Vector41.png";
import profilePic15 from "../assets/images/profilePic15.png";
import pen from "../assets/images/pen.png";
import House from "../assets/images/house.png";
import Bed from "../assets/images/bed.png";
import Union from "../assets/images/Union.png";
import Vector47 from "../assets/images/Vector47.png";
import user from "../assets/images/user.png";
import Vector17 from "../assets/images/Vector17.png";
import yourCar from "../assets/images/yourCar.png";
import yourPet from "../assets/images/yourPet.png";

import "../assets/css/lisence.css";

const PayStub = (props) => {
  const drop = useRef(null);

  const [payStubCheck, setPayStubCheck] = useState(false);
  const [additionalIncom, setIncom] = useState(true);
  const [rentalTerms, setTerms] = useState(false);
  const [animal, setAnimal] = useState("dog");
  const [animalPost, setAnimalPost] = useState(false);
  const [animalFile, setAnimalFile] = useState([]);
  const [checkId, setCheckId] = useState("");

  const {
    show,
    text,
    setState,
    screenSize,
    payStub,
    setPayStub,
  } = props;

  const handleChange = (e) => {
    setAnimal(e.currentTarget.value);
    setPayStub(payStub.pop());
    setState(show + 1);
    setIncom(true);
  };

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
      if (show === 35) {
        setAnimalFile(files);
        setPayStubCheck(true);
      } else {
        setPayStub(files);
        setPayStubCheck(true);
      }
    }
  };

  return (
    <React.Fragment>
      {rentalTerms ? (
        <>
          <div className="p-0 container w-100 ">
            <div className="text-wrap container d-flex  p-0 w-100 ">
              <div className="">
                <Img src={Vector41} />
              </div>
              <div className="w-100 text-center">
                <Text top={6} color="#303333" fontSize={18} fontfamily="Lora">
                  Terms of use
                </Text>
              </div>
            </div>
            <div className="container p-0 overflow-scroll mt-2 d-flex flex-column w-100  fix-read">
              <div className="p-0 mt-1 w-100 h-25 container">
                <div className="d-flex flex-column justify-content-between h-auto">
                  <Text fontSize={14} color="#000000" fontfamily="Open Sans">
                    Lorem ipsum dolor sit amet, consetetur
                  </Text>
                  <Text
                    lineheight={20}
                    fontSize={13}
                    color="#000000"
                    fontWeight={300}
                    fontfamily="none !important"
                  >
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet.
                  </Text>
                </div>
              </div>

              <div className="mt-2 p-0 w-100 container">
                <div className=" w-100 container p-0">
                  <ul className="w-100 ">
                    <li>
                      <Text
                        fontSize={13}
                        color="#000000"
                        fontWeight={300}
                        fontfamily="none !important"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </Text>
                    </li>
                    <li>
                      <Text
                        lineheight={20}
                        fontSize={13}
                        color="#000000"
                        fontWeight={300}
                        fontfamily="none !important"
                      >
                        Sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 d-flex flex-column justify-content-between ">
                  <Text fontSize={14} color="#000000" fontfamily="Open Sans">
                    At vero eos et accusam et justo
                  </Text>
                  <Text
                    lineheight={20}
                    fontSize={13}
                    color="#000000"
                    fontWeight={300}
                    fontfamily="none !important"
                  >
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. At vero eos
                    et accusam et justo Duo dolores et ea rebum. Stet clita kasd
                    gubergren No sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr Sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet.
                  </Text>
                </div>
              </div>
            </div>
            <div className="p-0 mt-5 h-auto container d-flex flex-column text-end w-100 custom-bg-bottom">
              <div className="container text-end w-75 d-flex justify-content-around">
                <div>
                  <CheckBox
                    id={checkId && checkId}
                    onChange={() => setCheckId(!checkId)}
                  />
                </div>
                {checkId ? (
                  <div>
                    <Text
                      fontSize={14}
                      color="#5E6566"
                      fontfamily="Open Sans"
                      fontWeight={400}
                    >
                      {" "}
                      I would like to receive a copy of the report(s) that
                      is/are being prepared
                    </Text>
                  </div>
                ) : (
                  <div>
                    <Text
                      fontSize={14}
                      color="#5E6566"
                      fontfamily="Open Sans"
                      fontWeight={400}
                    >
                      {" "}
                      I have read the Rental Criteria
                    </Text>
                  </div>
                )}
              </div>
              {checkId && (
                <div className="container w-75 d-flex justify-content-end">
                  <OutlineButton
                    top={10}
                    size="xl"
                    onClick={() => {
                      setState(show + 1);
                      setTerms(false);
                      setIncom(false);
                    }}
                  >
                    <Text fontSize={16} width={312} color="#1496A2">
                      Confirm & proceed to review application
                    </Text>
                  </OutlineButton>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <ScrollAble
          mobStyle={
            show === 26
              ? 190
              : show === 27
              ? 40
              : show === 28
              ? 295
              :show === 29 
              ? 350
              : show === 31
              ? 178
              : show === 32
              ? 270
              : show === 33
              ? 200
              : show === 34
              ? 90
              : show === 35
              ? 150
              : show === 36
              ? 50
              : show === 37
              ? 100
              : show === 38
              ? 250
              : show === 41
              ? 100
              : show === 42
              ? 300
              : show === 43
              ? 20
              : show === 44
              ? -12
              : show === 45
              ? 100
              : null
          }
        >
          <div
            className={`${
              show === 44 && "container w-100 p-0 overflow-scroll"
            }`}
            style={show === 44 ? { height: "36rem" } : {}}
          >
            <Intro
              onClick={() => {setState(show - 1); animalFile.length > 0 && setAnimalFile(animalFile.pop())}}
              text={text}
              show={show}
              btnTxt={
                show === 37 ||
                show === 38 ||
                show === 39 ||
                show === 40 ||
                show === 41 ||
                show === 42
                  ? "Animal image"
                  : show === 30
                  ? "Vehicle"
                  : show === 31
                  ? "Vehicle license"
                  : show === 32
                  ? "Vehicle license"
                  : show === 33
                  ? "Vehicle license"
                  : show === 34
                  ? "Animal type"
                  : show === 36
                  ? "Animal type"
                  : show === 26
                  ? "Employment proof type"
                  : "Employment proof type"
              }
              outline="primary-outline"
              size="xxl"
              screenSize={screenSize}
            />
            {payStubCheck ? (
              <PayStubFile
                screenSize={screenSize}
                payStub={payStub}
                animalPost={animalPost}
                animalFile={animalFile}
                setPayStubCheck={setPayStubCheck}
                setState={setState}
                text={text}
                show={show}
              />
            ) : (
              <>
                {additionalIncom ? (
                  <div
                    className=""
                    ref={drop}
                    onDrop={overrideEventDefaults}
                    onDragEnter={overrideEventDefaults}
                    onDragLeave={overrideEventDefaults}
                    onDragOver={overrideEventDefaults}
                  >
                    <div
                      className="mt-2 container w-100 border-1 "
                      onDrop={handleDragAndDropFiles}
                      onDragEnter={overrideEventDefaults}
                      onDragLeave={overrideEventDefaults}
                      onDragOver={overrideEventDefaults}
                    >
                      <div className="w-100 d-flex flex-column align-items-center">
                        <div className="w-100" style={{ height: "244px" }}>
                          <div className="p-0 d-flex flex-column align-items-center  w-100">
                            <Img
                              position="relative"
                              mt={screenSize.dynamicWidth <=375 ? -35 : -40}
                              src={show === 35 ? petPhoto : petPass}
                              alt="Profile"
                              loading="lazy"
                              className='img-fluid'
                            />
                          </div>
                          <div className={screenSize.dynamicWidth <= 375 ? "mt-5 container w-100 file-container":"mt-4 container w-100 file-container"}>
                            <div className="">
                              <div className="mt-2 w-100 text-center">
                                <Text
                                  className=""
                                  fontSize={14}
                                  color="#8D9899"
                                >
                                  Drop your file(s) in here or choose file to{" "}
                                  <Span color="#1496A2" fontSize={14}>upload</Span>
                                </Text>
                              </div>
                              <div className="w-100 text-center">
                                <Text
                                  className=""
                                  fontSize={10}
                                  color="#A4B1B3"
                                >
                                  Accepted formats: JPEG, PDF, PNG, JPG
                                </Text>
                              </div>
                              <Formik>
                                {(formik) => (
                                  <React.Fragment>
                                    <Form>
                                      <TextField
                                        multiple
                                        onChange={(e) =>
                                          handleFiles(e.target.files)
                                        }
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
                    {animalFile.length > 0 || payStub.length > 0 ? (
                      <>
                        <div className="p-2 mt-2 container w-100 d-flex flex-column border-1">
                          <Text fontSize={10} height={0}>
                            Uploaded file
                          </Text>
                          <div className="d-flex flex-row justify-content-start ">
                            <Img src={Vector33} height={24} />
                            <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                              <div className="p-1 w-100">
                                <Text height={0} fontSize={14} className=''>
                                  {animalFile[0]?.name || payStub[0]?.name}
                                </Text>
                              </div>
                            </div>
                            <div className="w-25 d-flex justify-content-around">
                              <Img src={close} />
                            </div>
                          </div>
                        </div>
                        <div className="container p-0 text-end mt-5">
                          {payStub.length > 0 ? (
                            <OutlineButton
                              outline="outline-secondary"
                              size="xl"
                              onClick={() => {
                                setState(show + 1);
                                setIncom(false);
                              }}
                            >
                              save and continue
                            </OutlineButton>
                          ) : (
                            <>
                              {animalFile.length > 0 && (
                                <OutlineButton
                                  outline="outline-secondary"
                                  size="xl"
                                  onClick={() => {
                                    setState(show + 1);
                                    setIncom(false);
                                  }}
                                >
                                  save and continue
                                </OutlineButton>
                              )}
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                     null
                    )}
                  </div>
                ) : show === 28 ? (
                  <>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-2 container">
                      <OutlineButton outline="outline-secondary" size="mdx">
                        Yes
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-primary"
                        size="xxl"
                        top={15}
                        onClick={
                          () => setState(show + 1)
                        }
                      >
                        No
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 29 ? (
                  <>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-2 container">
                      <OutlineButton
                        onClick={
                          () => setState(show + 1)
                        }
                        outline="outline-secondary"
                        size="mdx"
                      >
                        Yes
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-primary"
                        size="xxl"
                        top={15}
                      >
                        No
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 30 ? (
                  <MiniCard className="container h-25 mt-2 w-100 p-1 border-1">
                    <div className="w-100 d-flex">
                      <div className="w-75">
                        <Text className=''
                          fontWeight={600}
                          height={0}
                          left={6}
                          fontSize={10}
                          color="#A4B1B3"
                        >
                          License Plate
                        </Text>
                      </div>
                      <div className="w-25">
                        <Text
                          className=''
                          height={0}
                          fontSize={10}
                          color="#A4B1B3"
                        >
                          Select State
                        </Text>
                      </div>
                    </div>
                    <div className="container d-flex w-100 p-1">
                      <div className="w-100">
                        <Formik>
                          {(formik) => (
                            <React.Fragment>
                              <Form>
                                <TextField
                                  height={15}
                                  top={6}
                                  multiple
                                  onChange={(e) => handleFiles(e.target.files)}
                                  className="w-75 fix-text"
                                  name="text"
                                  type="text"
                                  placeholder="Enter here"
                                />
                              </Form>
                            </React.Fragment>
                          )}
                        </Formik>
                      </div>
                      <div className="mt-1 d-flex justify-content-around w-25 align-items-center">
                        <div className="">
                          <Text className='' fontSize={14} color="#303333">
                            AL
                          </Text>
                        </div>
                        <div
                          onClick={() => setState(show + 1)}
                          className="cursor-pointer"
                        >
                          <Img src={dropDown} left={-17} top={-15} />
                        </div>
                      </div>
                    </div>
                  </MiniCard>
                ) : show === 31 ? (
                  <>
                    <MiniCard className="container h-auto w-100 p-1 border-1">
                      <div className="p-0 h-auto container w-100">
                        <div className="d-flex">
                          <div className="">
                            <Img src={Group28} />
                          </div>
                          <div className="w-75">
                            <div className="d-flex flex-column justify-content-between">
                              <div className="w-100 d-flex flex-column">
                                <Text
                                  className="w-100"
                                  height={0}
                                  left={8}
                                  fontSize={16}
                                  color="#303333"
                                >
                                  C31576D - Washington
                                </Text>
                                <Text
                                  className=""
                                  height={5}
                                  left={8}
                                  fontSize={16}
                                  color="#8D9899"
                                >
                                  Toyota
                                </Text>
                              </div>
                              <div className="container p-2 mt-1  w-100 d-flex justify-content-around">
                                <div className="w-50">
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#303333"
                                  >
                                    Pick-up
                                  </Text>
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#8D9899"
                                  >
                                    Model
                                  </Text>
                                </div>
                                <div className="w-50">
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#303333"
                                  >
                                    1985
                                  </Text>
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#8D9899"
                                  >
                                    Model year
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MiniCard>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-2 container">
                      <OutlineButton size='md'>
                        + Add more
                      </OutlineButton>
                      <OutlineButton
                        onClick={() => setState(show + 1)}
                        outline="outline-secondary"
                        size="xl"
                        top={15}
                      >
                        Confirm and continue
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-secondary"
                        size="xxl"
                        top={30}
                      >
                        Edit & enter details manually
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 32 ? (
                  <>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-2 container">
                      <OutlineButton
                        onClick={() => setState(show + 1)}
                        outline="outline-secondary"
                        size="mdx"
                      >
                        Yes, I have a pet
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-secondary"
                        size="xl"
                        top={15}
                      >
                        Edit & enter details manually
                      </OutlineButton>
                      <OutlineButton outline="" size="xxl" top={30}>
                        No pet or service animal
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 33 ? (
                  <>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-2 container">
                      <OutlineButton
                        onClick={() => setState(show + 1)}
                        outline="outline-secondary"
                        size="mdx"
                      >
                        One
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-secondary"
                        size="xl"
                        top={15}
                      >
                        Two
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-secondary"
                        size="xl"
                        top={30}
                      >
                        Three
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-secondary"
                        size="xl"
                        top={45}
                      >
                        Four
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-secondary"
                        size="xl"
                        top={60}
                      >
                        Five
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 34 ? (
                  <>
                    <div className="p-0 container w-100 h-auto d-flex flex-row justify-content-around">
                      <MiniCard className="p-2 border-2 h-auto text-center custom-step-container">
                        <div className="d-flex flex-column justify-content-around">
                          <Img src={dog} />
                          <Text fontSize={12} lineheight={30}>
                            Dog
                          </Text>
                          <RadioButton
                            name="animals"
                            id="dog"
                            value="dog"
                            checked={animal === "dog"}
                            onChange={handleChange}
                          />
                        </div>
                      </MiniCard>
                      <MiniCard className="p-2 border-2 h-25 text-center custom-step-container">
                        <div className="d-flex flex-column justify-content-around">
                          <Img src={cat} />
                          <Text fontSize={12} lineheight={30}>
                            Cat
                          </Text>
                          <RadioButton
                            name="animals"
                            id="cat"
                            value="cat"
                            checked={animal === "cat"}
                            onChange={handleChange}
                          />
                        </div>
                      </MiniCard>
                      <MiniCard className="p-2  border-2 h-25 text-center custom-step-container">
                        <div className="d-flex flex-column justify-content-around">
                          <Img src={bird} />
                          <Text fontSize={12} lineheight={30}>
                            Bird
                          </Text>
                          <RadioButton
                            name="animals"
                            id="bird"
                            value="bird"
                            checked={animal === "bird"}
                            onChange={handleChange}
                          />
                        </div>
                      </MiniCard>
                      <MiniCard className="p-2 border-2 h-25 text-center custom-step-container">
                        <div className=" d-flex flex-column justify-content-around">
                          <Img src={otherBird} />
                          <Text fontSize={12} lineheight={30}>
                            Other
                          </Text>
                          <RadioButton
                            name="animals"
                            id="other"
                            value="other"
                            checked={animal === "other"}
                            onChange={handleChange}
                          />
                        </div>
                      </MiniCard>
                    </div>
                    <div className="p-0 w-100 container">
                      <Formik>
                        {(formik) => (
                          <React.Fragment>
                            <Form>
                              <div className="p-0 mt-3 w-100">
                                <div className=" w-100 d-flex flex-column align-content-start">
                                  <div className="w-100 d-flex flex-column input-label">
                                    <div>
                                      {" "}
                                      <TextField
                                        top={17}
                                        className="info-form border-0"
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        background="#f7fafa"
                                      />
                                    </div>
                                  </div>
                                  <div className="w-100 d-flex flex-column  input-label">
                                    <TextField
                                      top={17}
                                      className="info-form border-0"
                                      label="text"
                                      name="date"
                                      type="text"
                                      placeholder="Breed"
                                      background="#f7fafa"
                                    />
                                  </div>
                                  <div className="w-100 d-flex flex-column  input-label">
                                    <TextField
                                      top={17}
                                      className="info-form border-0"
                                      label="text"
                                      name="idType"
                                      type="text"
                                      placeholder="Weight"
                                      background="#f7fafa"
                                    />
                                  </div>
                                  <div className="w-100 d-flex flex-column  input-label">
                                    <TextField
                                      top={17}
                                      className="info-form border-0"
                                      label="text"
                                      name="idNumber"
                                      type="text"
                                      placeholder="Age"
                                      background="#f7fafa"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Form>
                          </React.Fragment>
                        )}
                      </Formik>
                    </div>
                  </>
                ) : show === 37 ? (
                  <>
                    <div className="container d-flex flex-column h-75 justify-content-between p-0 w-100 mt-3">
                      <div className="w-75">
                        <Text
                          className=""
                          fontSize={18}
                          fontfamily="Lora"
                          color="#303333"
                          fontWeight={100}
                        >
                          Have you (or any person on this application) ever
                          filed for, or currently involved in a bankruptcy, been
                          foreclosed on, or been a defendant in a civil suit?
                        </Text>
                      </div>
                      <div className="w-100 flex-column p-0 d-flex align-items-end mt-1 container">
                        <OutlineButton
                          onClick={() => setState(show + 1)}
                          outline="outline-secondary"
                          size="mdx"
                        >
                          Yes
                        </OutlineButton>
                        <OutlineButton
                          outline="outline-primary"
                          size="xxl"
                          top={15}
                        >
                          No
                        </OutlineButton>
                      </div>
                    </div>
                  </>
                ) : show === 38 ? (
                  <>
                    <div className="container mt-3 h-50 d-flex w-100 p-1 border-1">
                      <div className="w-100">
                        <Formik>
                          {(formik) => (
                            <React.Fragment>
                              <Form>
                                <TextField
                                  textarea="textarea"
                                  rows={3}
                                  height={15}
                                  top={6}
                                  multiple
                                  onChange={(e) => handleFiles(e.target.files)}
                                  className="p-3 container h-auto w-75 fix-text"
                                  name="text"
                                  type="text"
                                  placeholder="Type your response here"
                                />
                              </Form>
                            </React.Fragment>
                          )}
                        </Formik>
                      </div>
                    </div>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-3 container">
                      <OutlineButton
                        onClick={() => setState(show + 1)}
                        outline="outline-secondary"
                        size="mdx"
                      >
                        Save & continue
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 39 ? (
                  <>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-2 container">
                      <OutlineButton
                        onClick={
                          () => setState(show + 1)
                        }
                        outline="outline-primary"
                        size="xxl"
                      >
                        Yes
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-primary"
                        size="xxl"
                        top={15}
                      >
                        No
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 40 ? (
                  <>
                    <div className="container mt-3 h-50 d-flex w-100 p-1 border-1">
                      <div className="w-100">
                        <Formik>
                          {(formik) => (
                            <React.Fragment>
                              <Form>
                                <TextField
                                  textarea="textarea"
                                  rows={3}
                                  height={15}
                                  top={6}
                                  multiple
                                  onChange={(e) => handleFiles(e.target.files)}
                                  className="p-3 container h-auto w-75 fix-text"
                                  name="text"
                                  type="text"
                                  placeholder="Type your response here"
                                />
                              </Form>
                            </React.Fragment>
                          )}
                        </Formik>
                      </div>
                    </div>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-3 container">
                      <OutlineButton
                        onClick={() => setState(show + 1)}
                        outline="outline-secondary"
                        size="mdx"
                      >
                        Save & continue
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 41 ? (
                  <>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-5 container">
                      <OutlineButton
                        onClick={() => setState(show + 1)}
                        outline="outline-secondary"
                        size="mdx"
                      >
                        Yes
                      </OutlineButton>
                      <OutlineButton
                        outline="outline-primary"
                        size="xxl"
                        top={15}
                      >
                        No
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 42 ? (
                  <>
                    <div className="w-100 flex-column p-0 d-flex align-items-end mt-5 container">
                      <OutlineButton
                        onClick={() => setTerms(true)}
                        outline="outline-secondary"
                        size="mdx"
                      >
                        Read terms
                      </OutlineButton>
                    </div>
                  </>
                ) : show === 43 ? (
                  <>
                    <ListGroup
                      className="w-100 p-1 overflow-scroll"
                      style={{ height: "340px" }}
                    >
                      {Info.map((item, index) => {
                        return (
                          <ListGroup.Item
                            key={index}
                            className="mt-2 w-100 p-0 border-1 rounded"
                          >
                            <div className="w-100 p-0 d-flex ">
                              <div className="p-0 d-flex w-100 ">
                                <div className="p-2 text-center">
                                  {" "}
                                  <Img src={item.image} customwidth={16} />
                                </div>
                                <div className="w-100 d-flex justify-content-between p-1">
                                  {" "}
                                  <Text
                                    className="container p-0"
                                    top={10}
                                    fontSize={12}
                                    color="#303333"
                                  >
                                    {item.description}
                                  </Text>
                                  <ToggleSwitch />
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                    <div className="mt-5 container w-100 text-end p-0">
                      <Review
                        outline="outline-secondary"
                        size="xl"
                        onClick={() => {
                          setState(show + 1);
                        }}
                        show={show}
                        btnText="Save & continue"
                      />
                    </div>
                  </>
                ) : show === 44 ? (
                  <>
                    <div className="container h-auto p-0 w-100 mt-2">
                      <div className="container p-0 w-100 d-flex justify-content-between">
                        <div>
                          <Text>Property</Text>
                        </div>
                        <div>
                          <Img src={pen} />
                        </div>
                      </div>
                      <MiniCard className="container p-0 w-100 h-auto border-1">
                        <div className="container w-100 p-0 d-flex">
                          <div className="">
                            <Img
                              src={House}
                              alt="Profile"
                              className="img-fluid"
                              loading="lazy"
                            />
                            <div className="text-center">
                              <Text className="">$900/mth</Text>
                            </div>
                          </div>
                          <div className="">
                            <HiOutlineLocationMarker className="mx-2 icon" />
                          </div>
                          <div className="container p-0 w-50">
                            <Text
                              className=""
                              height={51}
                              fontSize={16}
                              color="#303333"
                            >
                              436 Balboa St <br></br>
                              <Span fontSize={16} color="#8D9899">
                                San Francisco, CA 94118
                              </Span>
                            </Text>
                            <div className="container p-0 d-flex ">
                              <div className="d-flex flex-column">
                                <Img
                                  src={Bed}
                                  alt="Profile"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                                <Text color="#303333">
                                  x2.0 <br></br>
                                  <Span color="#8D9899">Bed</Span>
                                </Text>
                              </div>
                              <div className="ml-1 d-flex flex-column">
                                <Img
                                  src={Union}
                                  alt="Profile"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                                <Text color="#303333">
                                  x2.0 <br></br>
                                  <Span color="#8D9899">Bath</Span>
                                </Text>
                              </div>
                            </div>
                            <OutlineButton
                              outline="outline-secondary"
                              size="mdx"
                            >
                              <Text fontSize={15} width={98} color="#1496A2">
                                View Property
                              </Text>
                            </OutlineButton>
                          </div>
                        </div>
                      </MiniCard>
                    </div>
                    
                    <div className="container h-auto p-0 w-100 ">
                      <div className="mt-2 container p-0 w-100 d-flex justify-content-between">
                        <div className="mt-1">
                          <Text>Your Name & Contact Information</Text>
                        </div>
                        <div>
                          <Img src={pen} />
                        </div>
                      </div>
                      <div className="mt-2 container h-auto p-0 w-100 border-1">
                        <div className=" w-100 d-flex p-2">
                          <Img src={profilePic15} />
                          <div className="p-0 container w-100 d-flex flex-column justify-content-around">
                            <div className="p-0">
                              <Text
                                className=""
                                fontSize={16}
                                left={10}
                                lineheight={15}
                                color="#303333"
                              >
                                Jennifer Bianca Roberts
                                <br />
                                <Span
                                  className=""
                                  fontSize={12}
                                  color="#8D9899"
                                >
                                  434 2nd Ave, San Francisco, CA 94118
                                </Span>
                              </Text>
                            </div>
                            <div className="">
                              <Text
                                className=""
                                fontSize={10}
                                left={10}
                                color="#303333"
                              >
                                12 Dec 1984 <br />
                                <Span
                                  className=""
                                  fontSize={10}
                                  color="#8D9899"
                                >
                                  Date of birth
                                </Span>
                              </Text>
                            </div>
                            <div className="w-50 d-flex flex-row justify-content-around">
                              <div className="container p-0">
                                <Text
                                  className=""
                                  fontSize={10}
                                  left={10}
                                  color="#303333"
                                >
                                  Driver’s License
                                  <br />
                                  <Span className="" color="#8D9899">
                                    ID Type
                                  </Span>
                                </Text>
                              </div>
                              <div className="container p-0">
                                <Text
                                  className=""
                                  fontSize={10}
                                  color="#303333"
                                >
                                  31405943
                                  <br />
                                  <Span className="" color="#8D9899">
                                    ID Number
                                  </Span>
                                </Text>
                              </div>
                            </div>

                            <div className="w-75 ">
                              <hr />
                            </div>
                          </div>
                        </div>

                        <div className="container p-0 ml-1">
                          <Text
                            className=""
                            fontSize={10}
                            left={50}
                            color="#303333"
                          >
                            434 2nd Ave, San Francisco, CA 94118 <br />
                            <Span className="" fontSize={10} color="#8D9899">
                              Previous Address
                            </Span>
                          </Text>
                          <div className="w-50 ml-1">
                            <hr />
                          </div>

                          <div className="w-100 d-flex flex-row justify-content-center align-items-center">
                            <div className="container p-0">
                              <Text
                                className=""
                                fontSize={10}
                                left={50}
                                color="#303333"
                              >
                                Apple Inc
                                <br />
                                <Span className="" color="#8D9899">
                                  Employed at
                                </Span>
                              </Text>
                            </div>
                            <div className="container p-0">
                              <Text className="" fontSize={10} color="#303333">
                                Sr. Product Manager
                                <br />
                                <Span className="" color="#8D9899">
                                  Position
                                </Span>
                              </Text>
                            </div>
                          </div>
                          <div className="container mt-1 p-0">
                            <Text
                              className=""
                              fontSize={10}
                              left={50}
                              color="#303333"
                            >
                              paystubs.pdf
                              <br />
                              <Span className="" color="#8D9899">
                                Employment Proof
                              </Span>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 container p-0 w-100 d-flex justify-content-between">
                      <div>
                        <Text height={0} lineheight={26}>
                          Total adult applicants
                        </Text>
                      </div>
                      <div>
                        <Img src={pen} />
                      </div>
                    </div>
                    <ListGroup className="mt-2 container w-100 p-0 ">
                      <ListGroup.Item className="d-flex  w-100 p-0 border-1 rounded">
                        <div className="p-2 text-center">
                          {" "}
                          <Img src={Vector47} customwidth={16} />
                        </div>
                        <div className="w-100 d-flex justify-content-between p-1">
                          {" "}
                          <Text
                            className="container p-0"
                            top={10}
                            fontSize={12}
                            color="#303333"
                          >
                            3 Adults
                          </Text>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <MiniCard className="mt-2 p-1 d-flex flex-row justify-content-between h-auto w-100 border-1">
                      <div className="">
                        <Img src={user} />
                      </div>
                      <div className="w-75 h-50 d-flex flex-column justify-content-around">
                        <Text
                          fontSize={16}
                          height={6}
                          lineheight={24}
                          color="#303333"
                        >
                          Jennifer Roberts
                        </Text>
                        <Text fontSize={14} height={0}>
                          jroberts@renter.com
                        </Text>
                      </div>
                      <Img src={Vector17} top={16} />
                    </MiniCard>
                    <MiniCard className="p-1 d-flex flex-row justify-content-between h-auto w-100 border-1">
                      <div className="">
                        <Img src={user} />
                      </div>
                      <div className="w-75 h-50 d-flex flex-column justify-content-around">
                        <Text
                          fontSize={16}
                          height={6}
                          lineheight={24}
                          color="#303333"
                        >
                          Jennifer Roberts
                        </Text>
                        <Text fontSize={14} height={0}>
                          jroberts@renter.com
                        </Text>
                      </div>
                      <Img src={Vector17} top={16} />
                    </MiniCard>
                    <MiniCard className="p-1 d-flex flex-row justify-content-between h-auto w-100 border-1">
                      <div className="">
                        <Img src={user} />
                      </div>
                      <div className="w-75 h-50 d-flex flex-column justify-content-around">
                        <Text
                          fontSize={16}
                          height={6}
                          lineheight={24}
                          color="#303333"
                        >
                          Jennifer Roberts
                        </Text>
                        <Text fontSize={14} height={0}>
                          jroberts@renter.com
                        </Text>
                      </div>
                      <Img src={Vector17} top={16} />
                    </MiniCard>

                    <div className="mt-1 container p-0 w-100 d-flex justify-content-between">
                      <div>
                        <Text height={0} lineheight={26}>
                          Total minors applicants
                        </Text>
                      </div>
                      <div>
                        <Img src={pen} />
                      </div>
                    </div>
                    <ListGroup className="mt-1 w-100 container p-0">
                      <ListGroup.Item className="d-flex  w-100 p-0 border-1 rounded">
                        <div className="p-2 text-center">
                          {" "}
                          <Img src={Vector47} customwidth={16} />
                        </div>
                        <div className="w-100 d-flex justify-content-between p-1">
                          {" "}
                          <Text
                            className="container p-0"
                            top={10}
                            fontSize={12}
                            color="#303333"
                          >
                            0 Minors
                          </Text>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>

                    <div className="mt-1 container p-0 w-100 d-flex justify-content-between">
                      <div>
                        <Text height={0} lineheight={26}>
                          Your vehicle information{" "}
                        </Text>
                      </div>
                      <div>
                        <Img src={pen} />
                      </div>
                    </div>
                    <MiniCard className="container h-auto w-100 p-1 border-1">
                      <div className="p-0 h-auto container w-100">
                        <div className="d-flex">
                          <div className="">
                            <Img src={yourCar} />
                          </div>
                          <div className="w-75">
                            <div className="d-flex flex-column justify-content-between">
                              <div className="w-100 d-flex flex-column">
                                <Text
                                  className="w-100"
                                  height={0}
                                  left={8}
                                  fontSize={16}
                                  color="#303333"
                                >
                                  C31576D - Washington
                                </Text>
                                <Text
                                  className=""
                                  height={5}
                                  left={8}
                                  fontSize={16}
                                  color="#8D9899"
                                >
                                  Toyota
                                </Text>
                              </div>
                              <div className="container p-2 mt-1  w-100 d-flex justify-content-around">
                                <div className="w-50">
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#303333"
                                  >
                                    Pick-up
                                  </Text>
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#8D9899"
                                  >
                                    Model
                                  </Text>
                                </div>
                                <div className="w-50">
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#303333"
                                  >
                                    1985
                                  </Text>
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#8D9899"
                                  >
                                    Model year
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MiniCard>
                    <div className="container p-0 w-100 d-flex justify-content-between">
                      <div>
                        <Text height={0} lineheight={26}>
                          Your furry friend{" "}
                        </Text>
                      </div>
                      <div>
                        <Img src={pen} />
                      </div>
                    </div>
                    <MiniCard className="container h-auto w-100 p-1 border-1">
                      <div className="p-0 h-auto container w-100">
                        <div className="d-flex">
                          <div className="">
                            <Img src={yourPet} />
                          </div>
                          <div className="w-75 ">
                            <div className="d-flex flex-column justify-content-between">
                              <div className="w-100  d-flex flex-column">
                                <Text
                                  className="w-100"
                                  height={0}
                                  left={8}
                                  fontSize={16}
                                  color="#303333"
                                >
                                  Major Lazer
                                </Text>
                                <div className="container p-2 pt-4 text-start w-100">
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#303333"
                                  >
                                    Border Collie
                                  </Text>
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#8D9899"
                                  >
                                    Breed
                                  </Text>
                                </div>
                              </div>

                              <div className="container p-2 mt-1  w-100 d-flex justify-content-around">
                                <div className="w-50">
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#303333"
                                  >
                                    40lbs
                                  </Text>
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#8D9899"
                                  >
                                    Weight
                                  </Text>
                                </div>

                                <div className="w-50">
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#303333"
                                  >
                                    4 Years
                                  </Text>
                                  <Text
                                    className=""
                                    height={0}
                                    fontSize={10}
                                    color="#8D9899"
                                  >
                                    Age
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MiniCard>
                    <div className="container w-100 d-flex justify-content-between">
                      <div>
                        <Text height={0} lineheight={26}>
                          Additional information{" "}
                        </Text>
                      </div>
                      <div>
                        <Img src={pen} />
                      </div>
                    </div>
                    <ListGroup className="w-100 p-1 ">
                      {Info.map((item, index) => {
                        return (
                          <ListGroup.Item
                            key={index}
                            className="mt-1 w-100 p-0 border-1 rounded"
                          >
                            <div className="w-100 p-0 d-flex ">
                              <div className="p-0 d-flex w-100 ">
                                <div className="p-2 text-center">
                                  {" "}
                                  <Img src={item.image} customwidth={16} />
                                </div>
                                <div className="w-100 d-flex justify-content-between p-1">
                                  {" "}
                                  <Text
                                    className="container p-0"
                                    top={10}
                                    fontSize={12}
                                    color="#303333"
                                  >
                                    {item.description}
                                  </Text>
                                  <ToggleSwitch />
                                </div>
                              </div>
                            </div>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </>
                ) : (
                  show === 45 && (
                    <>
                      <div className="container w-100 p-0">
                        <Formik>
                          {(formik) => (
                            <React.Fragment>
                              <Form>
                                <div className="w-100 d-flex flex-column justify-content-start">
                                  <div className="w-100 mt-2 d-flex flex-column input-label">
                                    <div className="">
                                      <Text
                                        height={8}
                                        lineheight={26}
                                        left={14}
                                      >
                                        Credit/ Debit Card Number
                                      </Text>
                                    </div>
                                    <div>
                                      {" "}
                                      <TextField
                                        className="info-form border-0"
                                        name="name"
                                        type="email"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        background="#f7fafa"
                                      />
                                    </div>
                                  </div>
                                  <div className="w-100 mt-2 d-flex flex-column input-label">
                                    <div className="">
                                      <Text
                                        height={8}
                                        lineheight={26}
                                        left={14}
                                      >
                                        Name on card
                                      </Text>
                                    </div>
                                    <div>
                                      {" "}
                                      <TextField
                                        className="info-form border-0"
                                        name="name"
                                        type="email"
                                        placeholder="Full Name"
                                        background="#f7fafa"
                                      />
                                    </div>
                                  </div>
                                  <div className="d-flex w-100 justify-content-between">
                                    <div className="w-50 mt-2 d-flex flex-column input-label">
                                      <div className="">
                                        <Text
                                          height={8}
                                          lineheight={26}
                                          left={14}
                                        >
                                          Valid Until
                                        </Text>
                                      </div>
                                      <div>
                                        {" "}
                                        <TextField
                                          className="info-form border-0"
                                          name="name"
                                          type="email"
                                          placeholder="MM/YY"
                                          background="#f7fafa"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="mt-2 d-flex flex-column input-label"
                                      style={{ width: "48%" }}
                                    >
                                      <div className="">
                                        <Text
                                          height={8}
                                          lineheight={26}
                                          left={14}
                                        >
                                          CVV code
                                        </Text>
                                      </div>
                                      <div>
                                        {" "}
                                        <TextField
                                          className="info-form border-0"
                                          name="name"
                                          type="email"
                                          placeholder="***"
                                          background="#f7fafa"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-100 mt-2 d-flex flex-column input-label">
                                    <div className="">
                                      <Text
                                        height={8}
                                        lineheight={26}
                                        left={14}
                                      >
                                        Coupon Code
                                      </Text>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      {" "}
                                      <TextField
                                        className="info-form border-0"
                                        name="name"
                                        type="email"
                                        placeholder="Enter the code if you have one here"
                                        background="#f7fafa"
                                      />
                                      <OutlineButton
                                        outline="outline-secondary"
                                        size="xxl"
                                        left={-6}
                                        top={-11}
                                        fontSize={12}
                                        color="#8D9899"
                                      >
                                        APPLY
                                      </OutlineButton>
                                    </div>
                                    <OutlineButton
                                      background="#17ADBC"
                                      className="mt-2 text-center border border-light"
                                    >
                                      <Text className='w-100'
                                        fontSize={15}
                                        width={409}
                                        color="#FFFFFF"
                                        top={9}
                                      >
                                        Pay $30.00
                                      </Text>
                                    </OutlineButton>
                                  </div>
                                </div>
                              </Form>
                            </React.Fragment>
                          )}
                        </Formik>
                      </div>
                    </>
                  )
                )}
              </>
            )}
          </div>
          {show === 44 && (
            <div className="d-flex justify-content-center">
              <OutlineButton
                background="#17ADBC"
                className="w-100  border border-light"
                onClick={() => setState(show + 1)}
              >
                <Text
                  className="w-100"
                  fontSize={15}
                  width={409}
                  color="#FFFFFF"
                  top={9}
                >
                  Confirm & go to payment
                </Text>
              </OutlineButton>
            </div>
          )}
        </ScrollAble>
      )}
    </React.Fragment>
  );
};

export default PayStub;
