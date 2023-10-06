import React from "react";
import PlusIcon from "../assets/Icons/PlusIcon";
import CrossIcon from "../assets/Icons/CrossIcon";
import DragIcon from "../assets/Icons/DragIcon";

type Props = {
  color: string;
  font: string;
  fontSize: string;
  setColor: Function;
  setFont: Function;
  setFontSize: Function;
};

function ExperienceComponent({ state, experience, clickHandler, onBlur }: any) {
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
          placeholder="From - Until"
          onBlur={(e) => onBlur(e, 'duration')}
        ></p>
        <div
          className={`w-[21px] h-[17px] bg-[${state.color}] rounded-[50%] mr-[-23px] z-10 mt-[10px]`}
          style={{ backgroundColor: state.color }}
        ></div>
        <div>
          <p
            contentEditable
            placeholder="Enter your job title here"
            className="p-1 font-bold text-[18px] ml-[16px]"
            onBlur={(e) => onBlur(e, 'title')}
          ></p>
          <div className={`border-l-4 px-3`}>
            <div className="flex">
              <p
                contentEditable
                placeholder="Enter company name"
                className="p-1 font-semibold"
                onBlur={(e) => onBlur(e, 'company')}
              ></p>{" "}
              <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]"></p>
              <p
                contentEditable
                placeholder="Enter company location"
                className="p-1 font-semibold"
                onBlur={(e) => onBlur(e, 'location')}
              ></p>
            </div>
            <div>
              <p
                className="p-1 w-[520px] min-h-[108px]"
                contentEditable
                onBlur={(e) => onBlur(e, 'description')}
                placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
