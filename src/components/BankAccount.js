import React, { useState } from "react";
import { Formik, Form } from "formik";

import Img from "../utils/Image";
import Intro from "../utils/Intro";
import TextField from "../utils/TextField";
import Text from "../utils/Text";

import search from "../assets/images/search.png";
import { bankData } from "./dummy";

import OutlineButton from "../utils/OutlineButton";

import Vector39 from "../assets/images/Vector39.png";
import Vector40 from "../assets/images/Vector40.png";
import Group16 from "../assets/images/Group16.png";
import openInNew from "../assets/images/openInNew.png";
import FicinityGroup from "../assets/images/FicinityGroup.png";
import MiniCard from "../utils/MinCard";
import ScrollAble from "../utils/Scroll";

const BankAccount = (props) => {
  const [activeIndex, setActive] = useState(0);
  const [selectedBank, setBank] = useState(false);
  const [bankList, setBankList] = useState(false);
 
  const { show,screenSize, setState } = props;

  const validValues = {
    name: "",
    date: "",
    idType: "",
    idNumber: "",
  };
  return (
    <React.Fragment>
     <ScrollAble mobStyle={selectedBank ? 140 : bankList ? 180 : 230}>
     {!bankList ? (
        <div>
          <Intro onClick={()=> setState(show-1)}
            text="In order to understand your financial eligibility you can easily connect your bank/s details using  Finicity."
            show={show}
            btnTxt="Edit Current address"
            outline="primary-outline"
            size="xxl"
            screenSize={screenSize}
          />
          <MiniCard className="p-0 h-auto w-100 d-flex container border-1">
            <div className="d-flex justify-content-center ">
              <div className='p-2'>
                {" "}
                <Img src={FicinityGroup} alt="Profile" loading="lazy" />
              </div>
              <div className="">
                <Text className='' fontSize={10} color="#8D9899" left={-1} top={7}>
                  Intellirent works with technology partners like Finicity to
                  provide reliable and secure access to thousands of
                  institutions.
                </Text>
              </div>
            </div>
          </MiniCard>
          <div className="container p-0 w-100 d-flex flex-column align-items-end ">
            <OutlineButton
              outline="secondary-outline"
              size="xl"
              onClick={() => setBankList(true)}
            >
              Agree and continue
            </OutlineButton>
            <OutlineButton top={14} outline="primary-outline" size="xxl">
              Skip
            </OutlineButton>
          </div>
        </div>
      ) : (
        <>
          <Intro
            onClick={
              selectedBank
                ? () => {
                    setBank(!selectedBank);
                    setActive(0);
                  }
                : () => {
                    setBankList(!bankList)
                  }
            }
            text={selectedBank ? "You will now be redirected to your bank to complete the authentication there.":"Select a bank account to connect"}
            show={show}
            btnTxt="Edit current address"
            className="custom-intro-container"
            outline="primary-outline"
            size="xxl"
            screenSize={screenSize}
          />

          {!selectedBank ? (
            <div className="container h-25 mt-1 p-0 w-100">
              <MiniCard className="container h-25 w-100 d-flex flex-row p-0 align-items-center border-1">
                <div className="">
                  <Img src={search} position="relative" left={20} />
                </div>
                <div className="w-100 ">
                  <Formik initialValues={validValues}>
                    {(formik) => (
                      <React.Fragment>
                        <Form>
                          <div>
                            <TextField
                              className="h-25 w-75 info-form border-0"
                              label="text"
                              name="name"
                              type="text"
                              placeholder="Search for your bank"
                            />
                          </div>
                        </Form>
                      </React.Fragment>
                    )}
                  </Formik>
                </div>
              </MiniCard>
              <div className={screenSize.dynamicWidth > 375 ? 'w-100 h-100':'w-100 overflow-scroll h-100'}>
                <div className="container w-100 p-0 d-flex flex-wrap">
                  {bankData?.map((image, index) => {
                    return (
                      <ul className="p-1" key={index}>
                        <li
                          onClick={(e) => {
                            setActive(index);
                            setBank(!selectedBank);
                          }}
                          className={`${
                            index == activeIndex
                              ? "active cursor-pointer"
                              : "inactive cursor-pointer"
                          }`}
                        >
                          <Img src={image} />
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <div className="mt-3 text-end p-0">
                {!selectedBank && (
                  <div className="container w-100 d-flex flex-column p-0">
                    <div>
                      <OutlineButton outline="secondary-outline" size="xl">
                        Next
                      </OutlineButton>
                    </div>
                    <div>
                      <OutlineButton
                        top={12}
                        outline="primary-outline"
                        size="xxl"
                      >
                        Skip + Can't my find bank
                      </OutlineButton>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="container w-100 mt-2 p-0 d-flex flex-column align-items-start">
              <div className="w-50 d-flex justify-content-around align-items-center">
                <Img src={Group16} />
                <div>
                  <Img src={Vector39} />
                </div>
                <Img src={bankData[activeIndex]} />
              </div>
              <div className="mt-2 w-100 d-flex flex-row align-items-start">
                <div className="">
                  <Img src={Vector40} />
                </div>
                <div className="container p-0 w-100 mt-1">
                  <Text className='' left={7} height={8}>
                    Your data is secure
                  </Text>
                 <div className='p-1 container'>
                 <Text className=''color='#5E6566' fontSize={12} left={5}>
                    Intellirent uses bank-level encryption to protect your
                    financial data and never shares your login details with your
                    agent
                  </Text>
                 </div>
                </div>
              </div>
              <div className="container w-100 mt-5 text-end p-0">
                <OutlineButton
                  onClick={() => setState(show + 1)}
                  outline="secondary-outline"
                  size="xl"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <Text fontSize={16}  color="#1496A2">
                      Continue
                    </Text>
                    <div>
                      {" "}
                      <Img src={openInNew} top={-20} left={5} />
                    </div>
                  </div>
                </OutlineButton>
              </div>
            </div>
          )}
          <div></div>
        </>
      )}
     </ScrollAble>
    </React.Fragment>
  );
};

export default BankAccount;
