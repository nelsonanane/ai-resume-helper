import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useConfiguration } from "../store/useConfiguration";
import { Separator } from "@/components/ui/separator";
import ExperienceComponent from "./ExperienceComponent";
import short from 'short-uuid'

type Props = {};

// const experiences = [
//   {
//       id: 1,
//       jobDatePeriod: "From - Until",
//       jobTitle: "Enter your job title here",
//       company: "Enter company name",
//       location: "Enter company location",
//       description: "Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
//   },
// ]

function ExperienceSection({}: Props) {
  const [experiences, setExperiences] = useState<any>([{
    id: 1,
    jobDatePeriod: "From - Until",
    jobTitle: "Enter your job title here",
    company: "Enter company name",
    location: "Enter company location",
    description: "Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
}])
  const state = useConfiguration((state: any) => state);

  console.log(experiences)

  const clickHandler = (step: string, id: string) => { 
    if(step === "plus") {
      setExperiences([...experiences, {
        id: experiences.length + 1,
        jobDatePeriod: "From - Until",
        jobTitle: "Enter your job title here",
        company: "Enter company name",
        location: "Enter company location",
        description: "Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
    }]);
    }
    if(step === "remove") {
      console.log('id', id);
      setExperiences(experiences.filter((item:any) => item.id !== +id))
    }
    if(step === "drag") {
      console.log('drag experience')
    }
  }

  console.log('experiences', experiences)

  return (
    <div>
      <Badge
        className={`mt-10 p-6 pt-1 pb-1 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
        style={{ backgroundColor: state.color }}
      >
        EXPERIENCE
      </Badge>
      <div>
        {
          experiences.map((item:any) => (
            <ExperienceComponent state={state} experience={item} key={item.id} clickHandler={clickHandler}/> 
          ))
        }
      </div>
    </div>
  );
}

export default ExperienceSection;
