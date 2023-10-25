import { Badge } from "@/components/ui/badge";
import React, { useRef, useState } from "react";
import { useConfiguration } from "../../app/store/useConfiguration";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { CameraIcon } from "@radix-ui/react-icons";
import EducationComponent from "./EducationComponent";
import { useResumeData } from "../../app/store/useResumeData";
import PlusIcon from "../../app/assets/temp/PlusIcon";
import CrossIcon from "../../app/assets/temp/RemoveIcon";
import IconContainer from "../../app/assets/temp/IconContainer";
import { EducationModel } from "../../app/models/EducationModel";

type Props = {};

export const ACTION_OPTIONS = {
  REMOVE: "remove",
  ASSISTANT: "assistant",
  PLUS: "plus",
  DRAG: "drag",
};

export default function SideSection({}: Props) {
  const state = useConfiguration((state: any) => state);
  const ref = useRef<HTMLInputElement>(null);
  const resume = useResumeData<any>((state: any) => state?.resume);
  const [showButton, setShowButton] = useState({education: false, skills: false});

  const {
    colleges,
    addEducation,
    removeEducation,
    setContact,
    skills,
    addSkill,
    image,
    setImage,
    removeSkill,
    setEducation,
  } = useResumeData<any>((state: any) => state);

  const clickHandler = (step: string, id: number) => {
    switch (step) {
      case ACTION_OPTIONS.PLUS:
        addEducation();
        break;
      case ACTION_OPTIONS.REMOVE:
        removeEducation(id);
        break;
      case ACTION_OPTIONS.DRAG:
        console.log("drag experience");
        break;
      default:
        console.log("NO ACTION TAKEN");
    }
  };

  const openFileExplorer = () => {
    console.log("something should be open");
    ref && ref.current && ref.current.click();
  };

  const setProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setImage(e.target.files[0]);
  };

  console.log("image", image);

  return (
    <div>
      {image ? (
        <Avatar
          className="w-[120px] h-[120px] absolute mt-[-20px] ml-[-60px] cursor-pointer"
          onClick={openFileExplorer}
          id="avatar"
        >
          <AvatarImage src={URL.createObjectURL(image)} />
        </Avatar>
      ) : (
        <>
          <div
            className="w-[120px] h-[120px] absolute mt-[-20px] ml-[-60px] rounded-[50%] bg-neutral-400 cursor-pointer grid place-content-center"
            onClick={openFileExplorer}
            id="image-select"
          >
            <div className="flex flex-col items-center">
              <CameraIcon className="w-[30px] h-[30px] align-middle stroke-gray-200" />{" "}
              <p className="text-gray-200 font-bold">Select</p>
            </div>
          </div>
        </>
      )}
      <input
        type="file"
        id="inputfoto2"
        accept="image/*"
        className="hidden"
        value={""}
        ref={ref}
        onChange={setProfilePic}
      />

      <div className="mt-[5rem] ml-[5rem]">
        <div>
          <p
            className="px-1 text-3xl font-light"
            contentEditable
            suppressContentEditableWarning={true}
            placeholder="First Name"
            onBlur={(e: any) => setContact(e.target.innerHTML, "firstName")}
          ></p>
          <p
            className="px-1 text-3xl font-bold"
            contentEditable
            suppressContentEditableWarning={true}
            placeholder="Last Name"
            onBlur={(e: any) => setContact(e.target.innerHTML, "lastName")}
          ></p>
        </div>
        <p
          contentEditable
          suppressContentEditableWarning={true}
          placeholder="Enter your profession"
          className="px-1 text-lg font-medium"
          onBlur={(e: any) => setContact(e.target.innerHTML, "profession")}
        ></p>
      </div>
      <div className="mt-20 ml-14">
        <div onMouseEnter={() => setShowButton({...showButton,education:true})} onMouseLeave={() => setShowButton({...showButton,education:false})}>
          <div className="flex gap-4 w-full items-center">
            <Badge
              className={`p-6 py-1 my-2 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
              style={{ backgroundColor: state.color }}
            >
              EDUCATION
            </Badge>
            {showButton.education && <IconContainer icon={PlusIcon} onClick={addEducation} />}
          </div>
          {colleges.map((col: EducationModel, indx: number) => (
            <EducationComponent
              key={col.id}
              education={col}
              clickHandler={clickHandler}
              onBlur={(e: React.FocusEvent<HTMLParagraphElement>) => {
                setEducation(indx, e);
                console.log(resume);
              }}
            />
          ))}
        </div>
        <div className="mt-10" onMouseEnter={() => setShowButton({...showButton,skills:true})} onMouseLeave={() => setShowButton({...showButton,skills:false})}>
          <div className="flex gap-4 w-full items-center">
            <Badge
              className={`p-6 py-1 my-2 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
              style={{ backgroundColor: state.color }}
            >
              SKILLS
            </Badge>
            <div>
              {showButton.skills && <IconContainer icon={PlusIcon} onClick={addSkill} />}
            </div>
          </div>
          <div className="mt-3 auto-rows-min">
            {skills.map((skill: any, index: number) => (
              <div key={index} className="flex">
                <p
                  contentEditable
                  suppressContentEditableWarning={true}
                  placeholder="Enter skill"
                  className="px-1 mb-1 text-zinc-600 font-medium"
                  onBlur={(e: any) => {
                    skills[index] = e.target.innerHTML;
                  }}
                >
                  {skill}
                </p>
                <div onClick={() => removeSkill(index)}>
                  <CrossIcon
                    className="cursor-pointer self-center"
                    stroke="white"
                    fill="black"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
