import React from "react";

interface Props {
  content: {
    heading: string;
    data: {
      heading?: string;
      name: string;
      desc?: string;
      listHead?: string;
      content?: {
        name: string;
        desc?: string;
        content?: {
          name?: string;
          desc?: string;
        }[];
      }[];
    }[];
    id: string;
  };
}
function ComplesNested(content: Props) {
  return (
    <div
      className="bg-white my-8 p-8 rounded-2xl"
      id={`${content?.content?.id}`}
    >
      <div className="text-[#AB5F27] text-[25px] mb-4">
        {content?.content?.heading}
      </div>
      <div>
        {content?.content?.data?.map((obj, index) => {
          return (
            <div>
              <div className="text-[#AB5F27] text-[20px] mb-4">
                {obj?.heading}{" "}
              </div>
              <div>
                {index + 1}. {obj?.name}
              </div>
              <div>{obj?.desc}</div>
              <div>{obj?.listHead} :</div>
              {obj?.content?.map((item, index) => {
                return (
                  <>
                    <div className="ml-6 list-disc">
                      {index + 1}. {item?.name}
                    </div>
                    {item?.content?.map((tutu, index) => {
                      return <li className="ml-12 list-disc">{tutu?.name}</li>;
                    })}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComplesNested;
