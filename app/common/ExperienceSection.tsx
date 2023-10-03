import React from "react";
import { Badge } from "@/components/ui/badge";
import { useConfiguration } from "../store/useConfiguration";
import { Separator } from "@/components/ui/separator";

type Props = {};

function ExperienceSection({}: Props) {
  const state = useConfiguration((state: any) => state);

  return (
    <div>
      <Badge
        className={`mt-10 p-6 pt-1 pb-1 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
      >
        EXPERIENCE
      </Badge>
      <div>
        <div className="flex gap-3 mt-5">
          <p
            className="p-1 w-[150px] h-[30px]"
            contentEditable
            placeholder="From - Until"
          ></p>
          <div
            className={`w-[21px] h-[17px] bg-[${state.color}] rounded-[50%] mr-[-23px] z-10 mt-[10px]`}
          ></div>
          <div >
            <p
              contentEditable
              placeholder="Enter your job title here"
              className="p-1 font-bold text-[18px] ml-[16px]"
            ></p>
            <div className={`border-l-4 px-3`}>
              <div className="flex">
                <p
                  contentEditable
                  placeholder="Enter company name"
                  className="p-1 font-semibold"
                ></p>{" "}
                <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]" ></p>
                <p
                  contentEditable
                  placeholder="Enter company location"
                  className="p-1 font-semibold"
                ></p>
              </div>
              <div>
                <p
                  className="p-1 w-[520px] min-h-[108px]"
                  contentEditable
                  placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3 mt-5">
          <p
            className="p-1 w-[150px] h-[30px]"
            contentEditable
            placeholder="From - Until"
          ></p>
          <div
            className={`w-[21px] h-[17px] bg-[${state.color}] rounded-[50%] mr-[-23px] z-10 mt-[10px]`}
          ></div>
          <div >
            <p
              contentEditable
              placeholder="Enter your job title here"
              className="p-1 font-bold text-[18px] ml-[16px]"
            ></p>
            <div className={`border-l-4 px-3`}>
              <div className="flex">
                <p
                  contentEditable
                  placeholder="Enter company name"
                  className="p-1 font-semibold"
                ></p>{" "}
                <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]" ></p>
                <p
                  contentEditable
                  placeholder="Enter company location"
                  className="p-1 font-semibold"
                ></p>
              </div>
              <div>
                <p
                  className="p-1 w-[520px] min-h-[108px]"
                  contentEditable
                  placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3 mt-5">
          <p
            className="p-1 w-[150px] h-[30px]"
            contentEditable
            placeholder="From - Until"
          ></p>
          <div
            className={`w-[21px] h-[17px] bg-[${state.color}] rounded-[50%] mr-[-23px] z-10 mt-[10px]`}
          ></div>
          <div >
            <p
              contentEditable
              placeholder="Enter your job title here"
              className="p-1 font-bold text-[18px] ml-[16px]"
            ></p>
            <div className={`border-l-4 px-3`}>
              <div className="flex">
                <p
                  contentEditable
                  placeholder="Enter company name"
                  className="p-1 font-semibold"
                ></p>{" "}
                <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]" ></p>
                <p
                  contentEditable
                  placeholder="Enter company location"
                  className="p-1 font-semibold"
                ></p>
              </div>
              <div>
                <p
                  className="p-1 w-[520px] min-h-[108px]"
                  contentEditable
                  placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3 mt-5">
          <p
            className="p-1 w-[150px] h-[30px]"
            contentEditable
            placeholder="From - Until"
          ></p>
          <div
            className={`w-[21px] h-[17px] bg-[${state.color}] rounded-[50%] mr-[-23px] z-10 mt-[10px]`}
          ></div>
          <div >
            <p
              contentEditable
              placeholder="Enter your job title here"
              className="p-1 font-bold text-[18px] ml-[16px]"
            ></p>
            <div className={`border-l-4 px-3`}>
              <div className="flex">
                <p
                  contentEditable
                  placeholder="Enter company name"
                  className="p-1 font-semibold"
                ></p>{" "}
                <p className="mx-2 my-1 h-[15px] border-2 border-x-neutral-700 self-center opacity-[60%]" ></p>
                <p
                  contentEditable
                  placeholder="Enter company location"
                  className="p-1 font-semibold"
                ></p>
              </div>
              <div>
                <p
                  className="p-1 w-[520px] min-h-[108px]"
                  contentEditable
                  placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant."
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
