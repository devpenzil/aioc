/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { sreelekshmi } from "../data/sreelakshmi";
import Paragraph from "../components/Paragraph";
import Keyvalue from "../components/Keyvalue";

function Profile() {
  const [mainMenu, setMainMenu] = useState(sreelekshmi.mainmenu);
  const [subMenu, setsubMenu] = useState(sreelekshmi.mainmenu[0].subMenu);

  return (
    <div className="w-full h-screen  flex">
      <div className="w-[500px] bg-[#0D4444] h-screen px-10">
        <div className="relative h-[250px]">
          <h1 className="main-heading">
            AICO™
            <span className="text-[#87C8AD] text-[25px] font-bold">
              AI-Driven <span>Career Optimizer™</span>
            </span>
          </h1>
        </div>

        {mainMenu.map((obj, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                console.log(obj);
                setsubMenu(obj.subMenu);
              }}
              className="py-4 text-base text-[#AFDAC8] cursor-pointer"
            >
              {obj.name}
            </div>
          );
        })}
      </div>
      <div className="w-[500px] bg-[#1F7C7C] h-screen px-10 overflow-scroll">
        <div className="h-[250px]"></div>
        {subMenu.map((obj, index) => {
          return (
            <a key={index} href={`#${obj.content.id}`}>
              <div className="py-4 text-base text-white cursor-pointer">
                {obj.name}
              </div>
            </a>
          );
        })}
      </div>
      <div className="w-full bg-[#c7d5cd] h-screen p-10 overflow-scroll">
        {subMenu.map((obj, index) => {
          console.log(obj.content);
          return (
            <div>
              {obj.type === "paragraph" && <Paragraph content={obj.content} />}
              {obj.type === "keyvalue" && <Keyvalue content={obj.content} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
