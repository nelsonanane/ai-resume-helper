import React, { useState } from "react";
import ControlsIconGroup from "./ControlsIconGroup";
import { DescriptionItem } from "../../app/models/DescriptionItem";
import JobDescParagraphItem from "./JobDescParagraphItem";
import { Button } from "@/components/ui/button";
import { useResumeData } from "../../app/store/useResumeData";
import { ExperienceModel } from "../../app/models/ExperienceModel";

type Props = { 
  state: {color:string};
  experience: ExperienceModel;
  onBlur: (e: any, step:string) => void;
  clickHandler: (step:string, id:any) => void;
  experienceIndex: number;
};

function ExperienceComponent({ state, experience, clickHandler, onBlur, experienceIndex }: Props) {
  const [showIcons, setShowIcons] = useState(false);
  const [showAddParagraph, setShowAddParagraph] = useState(false);
  const { addParagraph, removeParagraph, setExperienceDescription } = useResumeData<any>((state: any) => state);

  console.log("experience", experience);

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
          suppressContentEditableWarning={true}
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
            suppressContentEditableWarning={true}
            placeholder="Enter your job title here"
            className="p-1 font-bold text-[18px] ml-[16px]"
            onBlur={(e) => onBlur(e, "title")}
          ></p>
          <div className={`border-l-4 px-3`}>
            <div className="flex">
              <p
                contentEditable
                suppressContentEditableWarning={true}
                placeholder="Enter company name"
                className="p-1 font-semibold"
                onBlur={(e) => onBlur(e, "company")}
              ></p>{" "}
              <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]"></p>
              <p
                contentEditable
                suppressContentEditableWarning={true}
                placeholder="Enter company location"
                className="p-1 font-semibold"
                onBlur={(e) => onBlur(e, "location")}
              ></p>
            </div>
            <div
              //   contentEditable
              // suppressContentEditableWarning={true}
              placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
              className="p-1 w-[520px] relative"
              //   onBlur={(e) => onBlur(e, "description")}
              onMouseEnter={() => setShowAddParagraph(true)}
              onMouseLeave={() => setShowAddParagraph(false)}
            >
              {(experience.description || []).map((desc: DescriptionItem, index:any) => (
                <JobDescParagraphItem
                  key={desc.id}
                  onBlur={(e: any) => {
                    setExperienceDescription(experienceIndex, index, e.target)
                  }}
                  desc={desc}
                  onClick={() => removeParagraph(experienceIndex, index)}
                />
              ))}
              {showAddParagraph && (
                <Button
                  variant="outline"
                  size="icon"
                  className="w-full absolute mb-4 h-[25px]"
                  onClick={() => addParagraph(experienceIndex)}
                >
                  <p>+</p>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
