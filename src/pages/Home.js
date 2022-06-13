import React, {useState} from 'react';

import Card from '../utils/Card';

import PropertyDetail from '../components/PropertyDetail';
import RentelCriteria from '../components/ViewRentelCriteria';
import ReadRentelCriteria from '../components/ReadRentellCriteria';
import SelectProperty from '../components/SelectProperty';
import Address from '../components/Address';
import Confirmation from '../components/UserConfirmation';
import Occupants from '../components/Occupants';
import Phone from '../components/PhoneNumber';
import SecurityNumber from '../components/SecurityNumber';
import CreditHistory from '../components/CreditHistory';
import AddSecurityNumber from '../components/AddSocialSecurityNumber';
import UploadId from '../components/UploadId';
import DriverLisence from '../components/DriverLIsence';
import ConfirmInfo from '../components/InformationConfirmation';
import FileUpload from '../components/FileUpload';
import EditInfo from '../components/EditInfo';
import CurrentLocation from '../components/CurrentLocation';
import ConfirmAddress from '../components/ConfirmAddressDetail';
import RentedProperty from '../components/RentedProperty';
import OwnerInfo from '../components/OwnerInfo';
import PriorProperty from '../components/PriorProperty';
import Employment from '../components/Employment';
import SocilaLink from '../components/SocialLink';
import EmploymentDetail from '../components/ConfirmEmploymentDetail';
import EmploymentProof from '../components/EmployementProof';
import PayStub from '../components/PayStub';
import BankAccount from '../components/BankAccount';

import { rentellSteps } from '../components/dummy';

import '../assets/css/home.css';

const Home = () => {

    const [showProperty, setState] = useState(0);
    const [readCriteria, setCriteria] = useState(false);
    const [select, setProperty] =  useState(false);
    const [showMap, setMap] = useState(false);
    const [adult, setAdult] = useState(false);
    const [file, setFile] = useState([]);
    const [occupant, setOccupant] = useState(0);
    const [editInfo, setEdit] = useState(false);
    console.log(showProperty)
    const handleState = (ref) => {
        
        if(ref === 'photoId'){
            setState(showProperty+1)
        }
        else if(ref === 'addSsNumber'){
            setState(showProperty+1)
        }
        else if(ref === 'socialNext'){
            setState(showProperty+1)
        }
        else if(ref === 'security'){
           setState(showProperty+1)
        }
        else if(ref === 'adult-check'){
            setAdult(!adult)
            setState(showProperty+1)
        }
        if(ref === 'addOccupant'){
            setState(showProperty+1)
            setOccupant(occupant+1)
        }
        else if(ref === 'removeOccupant'){
            setState(showProperty-1)
            setOccupant(occupant-1)
        }
        else if(ref === 'ocupant'){
          setAdult(!adult)
          setState(showProperty+1)
        }
        else if(ref === 3){
          setCriteria(!readCriteria)
        }
        else if(readCriteria){
            setCriteria(!readCriteria)
            setState(showProperty+1)
        } 
        else {
            setMap(false);
            setProperty(false);
            setState(showProperty+1);
        }
    }
    return (
        <div className='main-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 d-flex align-items-center justify-content-center'>
                        <Card>
                           {
                               showMap ? 
                               <Address
                               text = {rentellSteps[showProperty].description} 
                               handleState={handleState}
                               />:
                               select ?
                               <SelectProperty
                                text = {rentellSteps[showProperty].description} 
                                setMap={setMap}
                                setState={setState}
                                show={showProperty}
                               />:
                               showProperty === 0 ? 
                               <PropertyDetail 
                                text = {rentellSteps[showProperty].description} 
                                show={showProperty}
                                setState={setState} 
                                rentellSteps={rentellSteps}
                                setProperty={setProperty}
                               />:
                               readCriteria ? 
                               <ReadRentelCriteria
                               handleState={handleState}
                               show={showProperty}
                               />:
                               showProperty === 3 ?
                               <RentelCriteria 
                                text = {rentellSteps[showProperty].description} 
                                show={showProperty}
                                setCriteria={setCriteria}
                                handleState={handleState}
                               />:
                                adult ? 
                                <Occupants
                                text = {rentellSteps[showProperty].description} 
                                show={showProperty}
                                handleState={handleState}
                                occupant={occupant}
                                />:
                                showProperty === 4 ?
                                <Confirmation
                                text = {rentellSteps[showProperty].description} 
                                show={showProperty}
                                handleState={handleState}
                                />:
                                showProperty === 7 ? 
                                <Phone
                                text = {rentellSteps[showProperty].description} 
                                show={showProperty}
                                handleState={handleState}
                                />:
                                showProperty === 8 ?
                                <SecurityNumber
                                text = {rentellSteps[showProperty].description}
                                handleState={handleState}
                                show={showProperty}
                                />:
                                showProperty === 9 ?
                                <CreditHistory
                                text = {rentellSteps[showProperty].description}
                                handleState={handleState}
                                show={showProperty}
                                />:
                                showProperty === 10 ?
                                <AddSecurityNumber
                                text = {rentellSteps[showProperty].description}
                                handleState={handleState}
                                show={showProperty}
                                />:
                                showProperty === 11 ? 
                                <UploadId
                                text = {rentellSteps[showProperty].description}
                                setState={setState}
                                show={showProperty}
                                />:
                                showProperty === 14 || showProperty === 12 ?
                                <DriverLisence
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setFile={setFile}
                                setState={setState}
                                file={file}
                                />:
                                showProperty === 13 ?
                                <FileUpload
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                file={file}
                                setState={setState}
                                />:
                                editInfo ? 
                                <EditInfo
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                setEdit={setEdit}
                                />:
                                showProperty === 15 ?
                                <ConfirmInfo
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setEdit={setEdit}
                                />:
                                showProperty === 16 ? 
                                <CurrentLocation
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 17 ?
                                <ConfirmAddress
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 18 ?
                                <RentedProperty
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 19 ?
                                <OwnerInfo
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 20 ?
                                <PriorProperty
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 21 ?
                                <Employment
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 22 ?
                                <SocilaLink
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 23 ?
                                <EmploymentDetail
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 24 ?
                                <EmploymentProof
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 25 ?
                                <PayStub
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                showProperty === 26 ?
                                <BankAccount
                                text = {rentellSteps[showProperty].description}
                                show={showProperty}
                                setState={setState}
                                />:
                                null
                           }
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;