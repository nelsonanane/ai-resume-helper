import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useConfiguration } from "../store/useConfiguration";
import { Separator } from "@/components/ui/separator";
import ExperienceComponent from "./ExperienceComponent";
import { useResumeData } from "../store/useResumeData";
import PlusIcon from "../assets/Icons/PlusIcon";
import IconContainer from "../assets/Icons/IconContainer";
import { ACTION_OPTIONS } from "./SideSection";
import { openai } from "@/lib/openaiConfig";

type Props = {};

function ExperienceSection({}: Props) {
  const state = useConfiguration((state: any) => state);
  const { experiences, addExperience, removeExperience, setExperience } =
    useResumeData<any>((state: any) => state);
  const resume = useResumeData<any>((state: any) => state);

  const clickHandler = async (step: string, id: string) => {
    switch (step) {
      case ACTION_OPTIONS.PLUS:
        addExperience();
        break;
      case ACTION_OPTIONS.REMOVE:
        removeExperience(id);
        break;
      case ACTION_OPTIONS.DRAG:
        console.log("drag experience");
        break;
      case ACTION_OPTIONS.ASSISTANT:
        // const title = experiences[0].title
        // const response = await fetch("api/openaicompletion", {
        //   method: "POST", 
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(title),
        // });
        // console.log("response", await response.json());

        break;
      default:
        console.log("NO ACTION TAKEN");
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
        {experiences?.map((item: any, index: number) => (
          <ExperienceComponent
            state={state}
            experience={item}
            key={item.id}
            clickHandler={clickHandler}
            onBlur={(e: any, field: string) => {
              const index = experiences.findIndex((x: any) => x.id === item.id);
              experiences[index][field] = e.target.innerHTML;
            }}
            experienceIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
