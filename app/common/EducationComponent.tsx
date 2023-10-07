import React, { useState } from "react";
import { useConfiguration } from "../store/useConfiguration";
import PlusIcon from "../assets/Icons/PlusIcon";
import RemoveIcon from "../assets/Icons/RemoveIcon";
import DragIcon from "../assets/Icons/DragIcon";
import { useResumeData } from "../store/useResumeData";
import IconContainer from "../assets/Icons/IconContainer";
import ControlsIconGroup from "./ControlsIconGroup";

type Props = {
  key: number;
  education: any;
  clickHandler: (step: string, id: number) => void;
  onBlur: (event: any, field: string) => void;
};

function EducationComponent({ key, education, clickHandler, onBlur }: Props) {
  const state = useConfiguration((state: any) => state);
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      className="flex gap-2 justify-center mb-5 relative"
      key={key}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
        <ControlsIconGroup className={`${!showControls  && "hidden"}`} onClick={clickHandler} id={education.id}/>
    
      <div
        className={`w-[10px] h-[10px] bg-[${state.color}] rounded-[50%] ml-[-23px] z-10 mt-[16px]`}
        style={{ backgroundColor: state.color }}
      />
      <div className="mt-2">
        <p
          contentEditable
          placeholder="Enter your degree"
          className="px-1 mb-1 font-semibold text-lg"
          onBlur={(e) => onBlur(e, "degree")}
        ></p>
        <div className="border-l-2 ml-[-15px] h-[90%]">
          <div className="ml-[15px]">
            <p
              contentEditable
              placeholder="Enter your major"
              onBlur={(e) => onBlur(e, "major")}
              className="px-1 mb-1 text-zinc-600 font-medium"
            ></p>
            <div className="flex gap-2 w-[320px]">
              <p
                contentEditable
                placeholder="Enter your college"
                onBlur={(e) => onBlur(e, "name")}
                className="px-1 mb-1 font-light w-[50%]"
              ></p>
              <div className="border-2 h-[15px] self-center"></div>
              <p
                contentEditable
                placeholder="Enter the location"
                onBlur={(e) => onBlur(e, "location")}
                className="px-1 mb-1 font-light w-[50%]"
              ></p>
            </div>
            <p
              className="p-1 w-[150px] h-[30px]"
              contentEditable
              onBlur={(e) => onBlur(e, "duration")}
              placeholder="from - until"
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationComponent;
