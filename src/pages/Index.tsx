import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { sreelekshmi } from "../data/sreelakshmi";

function Index() {
  const [personID, setpersonID] = useState<string>();
  const history = useHistory();
  const gotoProfile = () => {
    // Add Id as case and out name the jsonstringify
    switch (personID) {
      case "12345":
        localStorage.setItem("data", JSON.stringify(sreelekshmi));
        history.replace("/profile");
        break;
      default:
        toast.error("Profile not found");
        break;
    }
  };
  return (
    <div className="h-screen w-full bg-[#A9DEBE]">
      <div className="h-[20%] flex justify-center items-center ">
        <div className=" w-[80%]">
          <img
            src="https://i.ibb.co/xCw0q9G/Group-4.png"
            alt=""
            className="mt-10"
          />
        </div>
      </div>
      <div className="h-[80%] bg-[#ECF0EA] flex justify-center items-center ">
        <div className="w-[80%] h-[80%] bg-[#FCF8F0] rounded-3xl p-8 flex">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://i.ibb.co/8KkQYfg/image-2.png"
              alt="index"
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 flex justify-center items-center flex-col p-10">
            <img
              src="https://i.ibb.co/TW5j6Cf/Vector.png"
              alt=""
              className="mb-8"
            />
            <div className="text-[#2C8550] text-2xl mb-8">Enter ID:</div>
            <input
              type="text"
              name=""
              id=""
              className="w-[80%] p-3 border border-[#2C855080] rounded-lg"
              value={personID}
              onChange={(e) => {
                setpersonID(e.target.value);
              }}
              onSubmit={gotoProfile}
            />
            <div
              className="w-[80%] text-center p-3 bg-[#77B891] mt-8 rounded-lg text-white text-2xl cursor-pointer"
              onClick={gotoProfile}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
