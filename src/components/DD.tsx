import React from "react";

interface Props {
  content: {
    heading: string;
    data: {
      heading: string;
      data: string[];
    }[];
    id: string;
  };
}
function DD(content: Props) {
  return (
    <div className="bg-white my-8 p-8 rounded-2xl" id={`${content.content.id}`}>
      <div className="text-[#AB5F27] text-[25px] mb-4">
        {content.content.heading}
      </div>
      {content.content.data.map((obj, index) => {
        return (
          <div>
            <div className="text-[#AB5F27] text-[20px] mt-4">{obj.heading}</div>
            {obj.data.map((item, index) => {
              return (
                <li className="list-disc list-inside text-base">{item}</li>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DD;
