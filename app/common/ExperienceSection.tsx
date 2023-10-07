import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useConfiguration } from "../store/useConfiguration";
import { Separator } from "@/components/ui/separator";
import ExperienceComponent from "./ExperienceComponent";
import { useResumeData } from "../store/useResumeData";
import PlusIcon from "../assets/Icons/PlusIcon";
import IconContainer from "../assets/Icons/IconContainer";

type Props = {};

function ExperienceSection({}: Props) {
  const state = useConfiguration((state: any) => state);
  const { experiences, addExperience, removeExperience, setExperience } =
    useResumeData<any>((state: any) => state);
  const resume = useResumeData<any>((state: any) => state);

  const clickHandler = (step: string, id: string) => {
    if (step === "plus") {
      addExperience();
    }
    if (step === "remove") {
      removeExperience(id);
    }
    if (step === "drag") {
      console.log("drag experience");
    }
  };

  console.log("experiences", experiences);
  console.log("resume", resume);

  return (
    <div className="mt-10 ">
      <div className="flex gap-4 w-full items-center">
        <Badge
          className={`p-6 pt-1 pb-1 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
          style={{ backgroundColor: state.color }}
        >
          EXPERIENCE
        </Badge>
        <IconContainer icon={PlusIcon} onClick={addExperience} />
      </div>
      <div>
        {experiences?.map((item: any) => (
          <ExperienceComponent
            state={state}
            experience={item}
            key={item.id}
            clickHandler={clickHandler}
            onBlur={(e: any, field: string) => {
              const index = experiences.findIndex((x: any) => x.id === item.id);
              experiences[index][field] = e.target.innerHTML;

              console.log(resume);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
