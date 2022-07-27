import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import CardContainer from "../utils/Card";
import Resize from "../utils/Resize";

import PropertyDetail from "../components/PropertyDetail";
import RentelCriteria from "../components/ViewRentelCriteria";
import ReadRentelCriteria from "../components/ReadRentellCriteria";
import SelectProperty from "../components/SelectProperty";
import Address from "../components/Address";
import Confirmation from "../components/UserConfirmation";
import Occupants from "../components/Occupants";
import Phone from "../components/PhoneNumber";
import SecurityNumber from "../components/SecurityNumber";
import CreditHistory from "../components/CreditHistory";
import AddSecurityNumber from "../components/AddSocialSecurityNumber";
import UploadId from "../components/UploadId";
import DriverLisence from "../components/DriverLIsence";
import ConfirmInfo from "../components/InformationConfirmation";
import FileUpload from "../components/FileUpload";
import EditInfo from "../components/EditInfo";
import CurrentLocation from "../components/CurrentLocation";
import ConfirmAddress from "../components/ConfirmAddressDetail";
import RentedProperty from "../components/RentedProperty";
import OwnerInfo from "../components/OwnerInfo";
import PriorProperty from "../components/PriorProperty";
import Employment from "../components/Employment";
import SocilaLink from "../components/SocialLink";
import EmploymentDetail from "../components/ConfirmEmploymentDetail";
import EmploymentProof from "../components/EmployementProof";
import PayStub from "../components/PayStub";
import BankAccount from "../components/BankAccount";
import { rentellSteps } from "../components/dummy";
import MinPropertyCard from "../components/MiniCard";

const Home = () => {
  const [showProperty, setState] = useState(0);
  const [readCriteria, setCriteria] = useState(false);
  const [select, setProperty] = useState(false);
  const [showMap, setMap] = useState(false);
  const [adult, setAdult] = useState(false);
  const [file, setFile] = useState([]);
  const [payStub, setPayStub] = useState([]);
  const [editInfo, setEdit] = useState(false);
  const [spanIndex, setIndex] = useState(0);
  const [keyPoints, setKeyPoints] = useState(false);
  const [activeBlock, setBlockActive] = useState(false);
  const [miniCheck, setMiniCheck] = useState(false);
  const [bankActive, setBankActive] = useState(false);
 
  const navigate = useNavigate();
  const { screenSize } = Resize();
  useEffect(() => {
    navigate("", { state: { data: miniCheck } });
  }, [miniCheck]);

  const handleState = (ref) => {
    if (ref === "photoId") {
      setState(showProperty + 1);
    } else if (ref === "addSsNumber") {
      setState(showProperty + 1);
    } else if (ref === "socialNext") {
      setState(showProperty + 1);
    } else if (ref === "security") {
      setState(showProperty + 1);
    } else if (ref === "adult-check") {
      setAdult(!adult);
      setState(showProperty + 1);
    } else if (ref === "ocupant") {
      setAdult(!adult);
      setState(showProperty + 1);
    } else if (ref === 3) {
      setCriteria(!readCriteria);
    } else if (readCriteria) {
      setCriteria(!readCriteria);
      setState(showProperty + 1);
    } else {
      setMap(false);
      setProperty(false);
      setState(showProperty + 1);
    }
  };

  const handleBlock = (event) => {
    event.stopPropagation();
    if (!activeBlock) {
      setBlockActive(true);
      setState(showProperty + 1);
    } else {
      setBlockActive(false);
      setState(showProperty - 1);
    }
  };
 
  return (
    <React.Fragment>
      <div className="main-container">
           {screenSize.dynamicWidth <=375 && 
        <MinPropertyCard/>
        }
     <Row>
        <Col className="d-flex justify-content-center" >
           <div className='bg-back w-100 d-flex justify-content-center align-items-center'>
           <CardContainer >
            {showMap ? (
              <Address
                text={rentellSteps[showProperty].description}
                handleState={handleState}
                screenSize={screenSize}
              />
            ) : select ? (
              <SelectProperty
                text={rentellSteps[showProperty].description}
                setMap={setMap}
                setState={setState}
                show={showProperty}
                spanIndex={spanIndex}
              />
            ) : readCriteria ? (
              <ReadRentelCriteria
                handleState={handleState}
                show={showProperty}
                screenSize={screenSize}
              />
            ) : keyPoints || showProperty === 3 ? (
              <RentelCriteria 
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setCriteria={setCriteria}
                handleState={handleState}
                setState={setState}
                setKeyPoints={setKeyPoints}
                screenSize={screenSize}
              />
            ) : showProperty === 0 ? (
              <PropertyDetail
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                setProperty={setProperty}
                spanIndex={spanIndex}
                setKeyPoints={setKeyPoints}
                setMiniCheck={setMiniCheck}
                screenSize={screenSize}
              />
            ) : adult ? (
              <Occupants
                text={rentellSteps[showProperty].description}
                show={showProperty}
                handleState={handleState}
                spanIndex={spanIndex}
                setState={setState}
                setAdult={setAdult}
                handleBlock={handleBlock}
                setBlockActive={setBlockActive}
                activeBlock={activeBlock}
                screenSize={screenSize}
              />
            ) : showProperty === 4 ? (
              <Confirmation
                text={rentellSteps[showProperty].description}
                show={showProperty}
                handleState={handleState}
                setIndex={setIndex}
                spanIndex={spanIndex}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 7 ? (
              <Phone
                text={rentellSteps[showProperty].description}
                show={showProperty}
                handleState={handleState}
                setState={setState}
                setAdult={setAdult}
                screenSize={screenSize}
              />
            ) : showProperty === 8 ? (
              <SecurityNumber
                text={rentellSteps[showProperty].description}
                handleState={handleState}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 9 ? (
              <CreditHistory
                text={rentellSteps[showProperty].description}
                handleState={handleState}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 10 ? (
              <AddSecurityNumber
                text={rentellSteps[showProperty].description}
                handleState={handleState}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 11 ? (
              <UploadId
                text={rentellSteps[showProperty].description}
                setState={setState}
                show={showProperty}
                screenSize={screenSize}
              />
            ) : showProperty === 14 || showProperty === 12 ? (
              <DriverLisence
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setFile={setFile}
                setState={setState}
                file={file}
                setIndex={setIndex}
                spanIndex={spanIndex}
                screenSize={screenSize}
              />
            ) : showProperty === 13 ? (
              <FileUpload
                text={rentellSteps[showProperty].description}
                show={showProperty}
                file={file}
                setState={setState}
                screenSize={screenSize}
              />
            ) : editInfo ? (
              <EditInfo
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                setEdit={setEdit}
                spanIndex={spanIndex}
                screenSize={screenSize}
              />
            ) : showProperty === 15 ? (
              <ConfirmInfo
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setEdit={setEdit}
                spanIndex={spanIndex}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 16 ? (
              <CurrentLocation
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                setEdit={setEdit}
                screenSize={screenSize}
              />
            ) : showProperty === 17 ? (
              <ConfirmAddress
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 18 ? (
              <RentedProperty
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                setIndex={setIndex}
                spanIndex={spanIndex}
                screenSize={screenSize}
              />
            ) : showProperty === 19 ? (
              <OwnerInfo
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                spanIndex={spanIndex}
                screenSize={screenSize}
              />
            ) : showProperty === 20 ? (
              <PriorProperty
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 21 ? (
              <Employment
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                setIndex={setIndex}
                spanIndex={spanIndex}
                screenSize={screenSize}
              />
            ) : showProperty === 22 ? (
              <SocilaLink
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                spanIndex={spanIndex}
                screenSize={screenSize}
              />
            ) : showProperty === 23 ? (
              <EmploymentDetail
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
                setBankActive={setBankActive}
              />
            ) : showProperty === 24 ? (
              <BankAccount
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
              />
            ) : showProperty === 25 ? (
              <EmploymentProof
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
                bankActive={bankActive}
              />
            ) : showProperty >= 26 ? (
              <PayStub
                text={rentellSteps[showProperty].description}
                show={showProperty}
                setState={setState}
                screenSize={screenSize}
                payStub={payStub}
                setPayStub={setPayStub}
                setIndex={setIndex}
                spanIndex={spanIndex}
              />
            ) : null}
          </CardContainer>
           </div>
        </Col>
      </Row>
     </div>
    </React.Fragment>
  );
};
export default Home;
