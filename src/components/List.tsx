import React from "react";

interface Props {
  content: {
    heading: string;
    data: [];
    id: string;
  };
}
function List(content: Props) {
  return (
    <div className="bg-white my-8 p-8 rounded-2xl" id={`${content.content.id}`}>
      <div className="text-[#AB5F27] text-[25px] mb-4">
        {content.content.heading}
      </div>
      <div className="text-black text-base">
        <ul>
          {content.content.data.map((obj, index) => {
            return <li className="list-disc list-inside text-base">{obj}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
