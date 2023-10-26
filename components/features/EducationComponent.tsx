import React, { useState } from "react";
import { useConfiguration } from "../../app/store/useConfiguration"; 
import ControlsIconGroup from "./ControlsIconGroup";
import { SUUID } from "short-uuid";

type Props = { 
  education: any;
  clickHandler: (step: string, id: number) => void;
  onBlur: (event: React.FocusEvent<HTMLParagraphElement>) => void;
};

function EducationComponent({ education, clickHandler, onBlur }: Props) {
  const state = useConfiguration((state: any) => state);
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      className="flex gap-2 justify-center mb-5 relative"
      key={education.id}
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
          data-name="degree"
          onBlur={onBlur}
          suppressContentEditableWarning={true}
        ></p>
        <div className="border-l-2 ml-[-15px] h-[90%]">
          <div className="ml-[15px]">
            <p
              contentEditable
              placeholder="Enter your major"
              onBlur={onBlur}
              data-name="major"
              className="px-1 mb-1 text-zinc-600 font-medium"
              suppressContentEditableWarning={true}
            ></p>
            <div className="flex gap-2 w-[320px]">
              <p
                contentEditable
                placeholder="Enter your college"
                onBlur={onBlur}
                data-name="collegeName"
                className="px-1 mb-1 font-light w-[50%]"
                suppressContentEditableWarning={true}
              ></p>
              <div className="border-2 h-[15px] self-center"></div>
              <p
                contentEditable
                suppressContentEditableWarning={true}
                placeholder="Enter the location"
                onBlur={onBlur}
                data-name="location"
                className="px-1 mb-1 font-light w-[50%]"
              ></p>
            </div>
            <p
              className="p-1 w-[150px] h-[30px]"
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={onBlur}
              data-name="duration"
              placeholder="from - until"
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationComponent;
