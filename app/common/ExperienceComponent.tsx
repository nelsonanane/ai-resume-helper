import React, { useState } from "react";
import PlusIcon from "../assets/Icons/PlusIcon";
import CrossIcon from "../assets/Icons/RemoveIcon";
import DragIcon from "../assets/Icons/DragIcon";
import IconContainer from "../assets/Icons/IconContainer";
import RemoveIcon from "../assets/Icons/RemoveIcon";
import ControlsIconGroup from "./ControlsIconGroup";

type Props = {
  color: string;
  font: string;
  fontSize: string;
  setColor: Function;
  setFont: Function;
  setFontSize: Function;
};

function ExperienceComponent({ state, experience, clickHandler, onBlur }: any) {
  const [showIcons, setShowIcons] = useState(false);
  const [showParagraphControls, setParagraphControls] = useState(false);

  console.log(showIcons);
  return (
    <div
      className="relative"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <ControlsIconGroup
        className={`${!showIcons && "hidden"}`}
        onClick={clickHandler}
        id={experience.id}
      />
      <div className="flex gap-3 mt-5">
        <p
          className="p-1 w-[150px] h-[30px]"
          contentEditable
          placeholder="From - Until"
          onBlur={(e) => onBlur(e, "duration")}
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
            onBlur={(e) => onBlur(e, "title")}
          ></p>
          <div className={`border-l-4 px-3`}>
            <div className="flex">
              <p
                contentEditable
                placeholder="Enter company name"
                className="p-1 font-semibold"
                onBlur={(e) => onBlur(e, "company")}
              ></p>{" "}
              <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]"></p>
              <p
                contentEditable
                placeholder="Enter company location"
                className="p-1 font-semibold"
                onBlur={(e) => onBlur(e, "location")}
              ></p>
            </div>
            <div
              contentEditable
              placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
              className="p-1 w-[520px]"
              onBlur={(e) => onBlur(e, "description")}
            >
              <div
                className="flex justify-between"
                onMouseEnter={() => setParagraphControls(true)}
                onMouseLeave={() => setParagraphControls(false)}
              >
                <p
                  contentEditable
                  onBlur={(e) => onBlur(e, "description")}
                  placeholder="Enter your work experience description here."
                ></p>
                {showParagraphControls && (
                  <div className="w-[20px] flex gap-1">
                    <IconContainer
                      icon={RemoveIcon}
                      onClick={() => console.log("remove")}
                    />
                    <IconContainer
                      icon={DragIcon}
                      onClick={() => console.log("click")}
                    />
                  </div>
                )}
              </div>
              <div
                className="flex justify-between"
                onMouseEnter={() => setParagraphControls(true)}
                onMouseLeave={() => setParagraphControls(false)}
              >
                <p
                  contentEditable
                  onBlur={(e) => onBlur(e, "description")}
                  placeholder="Provide details that showcase how you added value."
                ></p>
                {showParagraphControls && (
                  <div className="w-[20px] flex gap-1">
                    <IconContainer
                      icon={RemoveIcon}
                      onClick={() => console.log("remove")}
                    />
                    <IconContainer
                      icon={DragIcon}
                      onClick={() => console.log("click")}
                    />
                  </div>
                )}
              </div>
              <div
                className="flex justify-between"
                onMouseEnter={() => setParagraphControls(true)}
                onMouseLeave={() => setParagraphControls(false)}
              >
                <p
                  contentEditable
                  onBlur={(e) => onBlur(e, "description")}
                  placeholder="Focus on responsibilities that are relevant to the job you are applying for."
                ></p>
                {showParagraphControls && (
                  <div className="w-[20px] flex gap-1">
                    <IconContainer
                      icon={RemoveIcon}
                      onClick={() => console.log("remove")}
                    />
                    <IconContainer
                      icon={DragIcon}
                      onClick={() => console.log("click")}
                    />
                  </div>
                )}
              </div>
              <div
                className="flex justify-between"
                onMouseEnter={() => setParagraphControls(true)}
                onMouseLeave={() => setParagraphControls(false)}
              >
                <p
                  contentEditable
                  onBlur={(e) => onBlur(e, "description")}
                  placeholder="If you need help writing your work experience description, you can use the AI Writing Assistant."
                ></p>
                {showParagraphControls && (
                  <div className="w-[20px] flex gap-1">
                    <IconContainer
                      icon={RemoveIcon}
                      onClick={() => console.log("remove")}
                    />
                    <IconContainer
                      icon={DragIcon}
                      onClick={() => console.log("click")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
