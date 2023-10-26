import React from "react";

interface Props {
  content: {
    heading: string;
    data: {};
    id: string;
  };
}
function Keyvalue(content: Props) {
  return (
    <div className="bg-white my-8 p-8 rounded-2xl" id={`${content.content.id}`}>
      <div className="text-[#AB5F27] text-[25px] mb-4">
        {content.content.heading}
      </div>
      <div className="text-black text-base">
        <ul>
          {Object.entries(content.content.data).map((obj) => {
            return (
              <li key={obj[0]}>
                <span>
                  <strong>{obj[0]}: </strong> <span>{String(obj[1])}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Keyvalue;
