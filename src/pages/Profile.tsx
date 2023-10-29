/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Paragraph from "../components/Paragraph";
import Keyvalue from "../components/Keyvalue";
import List from "../components/List";
import DD from "../components/DD";
import NestedList from "../components/NestedList";
import { useHistory } from "react-router-dom";
import { icons } from "../data/icons";
import ComplesNested from "../components/ComplesNested";

function Profile() {
  const history = useHistory();
  const [mainMenu, setMainMenu] = useState<any>();
  const [subMenu, setsubMenu] = useState<any>();
  useEffect(() => {
    const value = localStorage.getItem("data");
    if (value !== null) {
      setMainMenu(JSON.parse(value)?.mainmenu);
      setsubMenu(JSON.parse(value)?.mainmenu[0]?.subMenu);
    }
  }, []);

  const [subActive, setsubActive] = useState(0);
  const [mainActive, setmainActive] = useState(0);

  return (
    <div className="w-full h-screen  flex">
      {/* Main Menu  */}
      <div className="w-[500px] bg-gradient-to-b from-[#1F7C7C] to-[#0D4444] h-screen px-10 flex flex-col justify-between">
        <div>
          <div className="relative h-[250px] flex flex-col items-end ">
            <img
              src="https://i.ibb.co/2PMNgpC/Univer.png"
              alt=""
              className="absolute bottom-[60px]"
            />
          </div>
          <div>
            <div className="flex items-baseline">
              <div className="text-[#AFDAC8]">Menu</div>
              <div className="h-[0.5px] w-[180px] bg-[#AFDAC8] ml-2" />
            </div>
            {mainMenu?.map((obj: any, index: any) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setsubMenu(obj.subMenu);
                    setmainActive(index);
                    setsubActive(0);
                  }}
                  className={`py-4 text-base  cursor-pointer flex items-center ${
                    mainActive === index ? "text-white" : "text-[#AFDAC8]"
                  }`}
                >
                  <img src={icons[index]} alt="" className="w-6 h-6 mr-5" />
                  <div>{obj.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pb-8">
          <div className="bg-[#AFDAC8] w-[100%] text-center p-3 rounded-md text-[#115050] cursor-pointer text-lg">
            Download Pdf
          </div>
          <div
            className="bg-[#FFF9EC80] w-[100%] text-center p-3 rounded-md text-white cursor-pointer text-lg mt-4"
            onClick={() => {
              // localStorage.clear();
              history.replace("/");
            }}
          >
            Sign out
          </div>
        </div>
      </div>
      {/* Sub Menu  */}
      <div className="w-[500px] bg-gradient-to-b from-[#55B2C0] to-[#009DB6] h-screen px-10 overflow-scroll">
        <div className="h-[250px] flex justify-center items-center flex-col ">
          <img
            src="https://i.ibb.co/tYTJ0br/Group-2.png"
            alt=""
            className="-ml-[200px] z-10 absolute"
          />
        </div>
        <div className="flex items-baseline">
          <div className="text-[#184B2C]">Submenu</div>
          <div className="h-[0.5px] w-[180px] bg-[#184B2C] ml-2" />
        </div>
        {subMenu?.map((obj: any, index: any) => {
          return (
            <a key={index} href={`#${obj.content.id}`}>
              <div
                className={`py-4 text-base cursor-pointer  ${
                  subActive === index ? "text-[#115050]" : "text-white"
                } `}
                onClick={() => {
                  setsubActive(index);
                }}
              >
                {obj.name}
              </div>
            </a>
          );
        })}
      </div>
      {/* content  */}
      <div className="w-full bg-[#DEEAEF] h-screen   ">
        <div className="right-content h-screen overflow-y-scroll p-10 mr-4">
          {subMenu?.map((obj: any, index: any) => {
            return (
              <div>
                {obj.type === "paragraph" && (
                  <Paragraph content={obj.content} />
                )}
                {obj.type === "keyvalue" && <Keyvalue content={obj.content} />}
                {obj.type === "list" && <List content={obj.content} />}
                {obj.type === "dd" && <DD content={obj.content} />}
                {obj.type === "nestedlist" && (
                  <NestedList content={obj.content} />
                )}
                {obj.type === "complexNested" && (
                  <ComplesNested content={obj.content} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
