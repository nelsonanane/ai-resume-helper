import React from "react";
import { Badge } from "@/components/ui/badge";
import { useConfiguration } from "../store/useConfiguration";
import { useResumeData } from "../store/useResumeData";

type Props = {};

function ContactInfo({}: Props) {
  const state = useConfiguration((state: any) => state);
  const resume = useResumeData<any>((state: any) => state?.resume);
  const setSummary = useResumeData<any>((state: any) => state?.setSummary);

  return (
    <div>
      <Badge
        className={`p-6 py-1 my-2 mt-10 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
        style={{ backgroundColor: state.color }}
      >
        ABOUT ME
      </Badge>
      <div>
        <p
          contentEditable
          className="p-1 w-[680px] min-h-[108px]"
          placeholder="Enter your professional summary. Provide a brief overview of your relevant skills, experience, and qualities that would make you a good candidate for the job. Make sure to keep it concise and focused. If you need help writing your professional summary, you can use the AI Writing Assistant."
          onBlur={(e: any) => setSummary(e.target.innerHTML)}
        ></p>
      </div>
    </div>
  );
}

export default ContactInfo;
