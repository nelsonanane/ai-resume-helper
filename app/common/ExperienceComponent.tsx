import React from "react";
import PlusIcon from "../Assets/Icons/PlusIcon";
import CrossIcon from "../Assets/Icons/CrossIcon";
import DragIcon from "../Assets/Icons/DragIcon";

type Props = {
  color: string;
  font: string;
  fontSize: string;
  setColor: Function;
  setFont: Function;
  setFontSize: Function;
};

function ExperienceComponent({ state, experience, clickHandler }: any) {
  return (
    <div className="relative">
      <div className="absolute right-5 mt-[-15px] flex justify-center gap-2">
        <div onClick={() => clickHandler("remove", experience.id)} className="cursor-pointer">
          <CrossIcon className="" stroke="white" fill="black" />
        </div>
        <div onClick={() => clickHandler("plus", experience.id)} className="cursor-pointer">
          <PlusIcon className="" stroke="white" fill="black" />
        </div>
        <div onClick={() => clickHandler("drag", experience.id)} className="cursor-pointer">
          <DragIcon />
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <p
          className="p-1 w-[150px] h-[30px]"
          contentEditable
          placeholder={experience.jobDatePeriod}
        ></p>
        <div
          className={`w-[21px] h-[17px] bg-[${state.color}] rounded-[50%] mr-[-23px] z-10 mt-[10px]`}
          style={{ backgroundColor: state.color }}
        ></div>
        <div>
          <p
            contentEditable
            placeholder={experience.jobTitle}
            className="p-1 font-bold text-[18px] ml-[16px]"
          ></p>
          <div className={`border-l-4 px-3`}>
            <div className="flex">
              <p
                contentEditable
                placeholder={experience.company}
                className="p-1 font-semibold"
              ></p>{" "}
              <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]"></p>
              <p
                contentEditable
                placeholder={experience.location}
                className="p-1 font-semibold"
              ></p>
            </div>
            <div>
              <p
                className="p-1 w-[520px] min-h-[108px]"
                contentEditable
                placeholder={experience.description}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
